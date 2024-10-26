import Dexie, { Table } from 'dexie';
import { PostDataProps, Music } from '../types';

class MusicDatabase extends Dexie {
  musics!: Table<Music, string>;
  sheets!: Table<{ music_id: string; verse_id: string; note: string; intervals: string }, string>;
  verses!: Table<{ id: string; name: string; music_id: string }, string>;

  constructor() {
    super('MusicDatabase');
    this.version(1).stores({
      musics: '_id, name',
      sheets: '++id, music_id, verse_id, note, intervals',
      verses: 'id, name, music_id'
    });
  }
}

const db = new MusicDatabase();

export async function fetchMusicsApi(): Promise<Music[]> {
  const musics = await db.musics.toArray();
  return Promise.all(
    musics.map(async music => ({
      ...music,
      sheets: await fetchSheetsByMusicId(music._id)
    }))
  );
}

export async function deleteMusicApi(musicId: string): Promise<{ message: string }> {
  await db.transaction('rw', db.musics, db.sheets, db.verses, async () => {
    await db.musics.delete(musicId);
    await db.sheets.where({ music_id: musicId }).delete();
    await db.verses.where({ music_id: musicId }).delete();
  });
  return { message: "Música deletada com sucesso" };
}

export async function getMusicById(id: string): Promise<Music | undefined> {
  const music = await db.musics.get(id);
  if (music) {
    return { ...music, sheets: await fetchSheetsByMusicId(music._id) };
  }
  return undefined;
}

export async function postMusicApi(postData: PostDataProps): Promise<Music> {
  const newId = Date.now().toString();
  await db.transaction('rw', db.musics, db.sheets, db.verses, async () => {
    await db.musics.add({ _id: newId, name: postData.name });
    for (const verse of postData.sheets) {
      await db.verses.add({ id: verse.id, name: verse.name, music_id: newId });
      for (const chord of verse.chords) {
        await db.sheets.add({
          music_id: newId,
          verse_id: verse.id,
          note: chord.note,
          intervals: chord.intervals.join(',')
        });
      }
    }
  });

  return { _id: newId, name: postData.name, sheets: await fetchSheetsByMusicId(newId) };
}

async function fetchSheetsByMusicId(musicId: string) {
  const verses = await db.verses.where({ music_id: musicId }).toArray();
  return Promise.all(
    verses.map(async (verse) => {
      const chords = await db.sheets.where({ verse_id: verse.id }).toArray();
      return {
        id: verse.id,
        name: verse.name,
        chords: chords.map(chord => ({
          note: chord.note,
          intervals: chord.intervals.split(',')
        }))
      };
    })
  );
}
