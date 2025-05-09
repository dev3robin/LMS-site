import { openDB } from 'idb';

const DB_NAME = 'LMS-site';

export const initDB = async () => {
  return openDB(DB_NAME, 2, {
    upgrade(db) {
      if (!db.objectStoreNames.contains('notes')) {
        const store = db.createObjectStore('notes', { keyPath: 'id' });
        store.createIndex('Title', 'Title');
        store.createIndex('Type', 'Type');
        store.createIndex('Branch', 'Branch');
        store.createIndex('Description', 'Description');
        store.createIndex('File', 'File');
        store.createIndex('Date', 'Date');


      }
    },
  });
};

// ---------- Notes functions ----------
export const saveNote = async (note) => {
  const db = await initDB();
  await db.put('notes', note);
};

export const getAllNotes = async () => {
  const db = await initDB();
  return await db.getAll('notes');
};

export const deleteNote = async (id) => {
  const db = await initDB();
  await db.delete('notes', id);
};
