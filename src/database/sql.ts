import initSqlJs, { Database } from "sql.js";

let db: Database;

async function initializeDatabase() {
  const SQL = await initSqlJs();
  db = new SQL.Database(); // Banco de dados em memória
  
  // Criação das tabelas
  db.run(`
    CREATE TABLE musics (
      _id TEXT PRIMARY KEY,
      name TEXT NOT NULL
    );
    CREATE TABLE verses (
      id TEXT PRIMARY KEY,
      name TEXT NOT NULL,
      music_id TEXT,
      FOREIGN KEY(music_id) REFERENCES musics(_id)
    );
    CREATE TABLE sheets (
      note TEXT NOT NULL,
      intervals TEXT,
      verse_id TEXT,
      FOREIGN KEY(verse_id) REFERENCES verses(id)
    );
  `);
}

// Inicializa o banco de dados
initializeDatabase();
