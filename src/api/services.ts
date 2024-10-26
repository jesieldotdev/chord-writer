import Dexie, { Table } from 'dexie';
import { PostDataProps, Music } from '../types';
import { v4 as uuidv4 } from 'uuid';

class MusicDatabase extends Dexie {
  musics!: Table<Music, string>;
  sheets!: Table<{ music_id: string; verse_id: string; note: string; intervals: string }, string>;
  verses!: Table<{ id: string; name: string; music_id: string }, string>;

  constructor() {
    super('MusicDatabase');
    this.version(1).stores({
      musics: '_id, name', // Chave primária
      sheets: '++id, music_id, verse_id, note, intervals', // Chave primária com auto incremento
      verses: 'id, name, music_id' // Chave primária
    });
  }
}

const db = new MusicDatabase();

// Função para buscar todas as músicas
export async function fetchMusicsApi(): Promise<Music[]> {
  const musics = await db.musics.toArray();
  return Promise.all(
    musics.map(async music => ({
      ...music,
      sheets: await fetchSheetsByMusicId(music._id) // Obter sheets relacionadas
    }))
  );
}

// Função para deletar uma música
export async function deleteMusicApi(musicId: string): Promise<{ message: string }> {
  await db.transaction('rw', db.musics, db.sheets, db.verses, async () => {
    await db.musics.delete(musicId);
    await db.sheets.where({ music_id: musicId }).delete();
    await db.verses.where({ music_id: musicId }).delete();
  });
  return { message: "Música deletada com sucesso" };
}

// Função para buscar uma música por ID
export async function getMusicById(id: string): Promise<Music | undefined> {
  const music = await db.musics.get(id);
  if (music) {
    return { ...music, sheets: await fetchSheetsByMusicId(music._id) };
  }
  return undefined;
}

// Função para adicionar uma nova música
// export async function postMusicApi(postData: PostDataProps): Promise<Music> {
//   const newId = uuidv4(); // Gerar um novo ID único
//   await db.transaction('rw', db.musics, db.sheets, db.verses, async () => {
//     await db.musics.add({ _id: newId, name: postData.name });
//     for (const verse of postData.sheets) {
//       await db.verses.add({ id: verse.name, name: verse.name, music_id: newId }); // Usar verse.name como ID
//       for (const chord of verse.chords) {
//         await db.sheets.add({
//           music_id: newId,
//           verse_id: verse.name, // Usar verse.name como ID
//           note: chord.note,
//           intervals: chord.intervals.join(',')
//         });
//       }
//     }
//   });

//   return { _id: newId, name: postData.name, sheets: await fetchSheetsByMusicId(newId) };
// }

export async function postMusicApi(postData: PostDataProps): Promise<Music> {
  const newId = uuidv4(); // Gerar um novo ID único

  await db.transaction('rw', db.musics, db.sheets, db.verses, async () => {
    // Adiciona a música
    try {
      await db.musics.add({ _id: newId, name: postData.name });
    } catch (error) {
      console.error('Erro ao adicionar música:', error);
      // Trate o erro, como enviar uma notificação ao usuário ou retornar um erro específico
    }

    for (const verse of postData.sheets) {
      try {
        // Verifica se a parte já existe
        await db.verses.add({ id: verse.name, name: verse.name, music_id: newId });
      } catch (error) {
        if (error.name === 'ConstraintError') {
          console.warn(`A parte '${verse.name}' já existe. Não será adicionada novamente.`);
        } else {
          console.error('Erro ao adicionar parte:', error);
        }
      }

      for (const chord of verse.chords) {
        try {
          await db.sheets.add({
            music_id: newId,
            verse_id: verse.name, // Usar verse.name como ID
            note: chord.note,
            intervals: chord.intervals.join(',')
          });
        } catch (error) {
          if (error.name === 'ConstraintError') {
            console.warn(`O acorde '${chord.note}' já existe para a parte '${verse.name}'. Não será adicionado novamente.`);
          } else {
            console.error('Erro ao adicionar acorde:', error);
          }
        }
      }
    }
  });

  return { _id: newId, name: postData.name, sheets: await fetchSheetsByMusicId(newId) };
}


// Função para buscar sheets relacionadas a uma música
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

