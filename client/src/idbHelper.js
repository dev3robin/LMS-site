import { openDB } from 'idb';

const DB_NAME = 'LMS-site';   // one DB for both notes and assessments
const DB_VERSION =5 ;       

export const initDB = async () => {
  return openDB(DB_NAME, DB_VERSION, {
    upgrade(db) {
      if (!db.objectStoreNames.contains('notes')) {
        const notesStore = db.createObjectStore('notes', { keyPath: 'id' });
        notesStore.createIndex('Title', 'Title');
        notesStore.createIndex('Type', 'Type');
        notesStore.createIndex('Branch', 'Branch');
        notesStore.createIndex('Description', 'Description');
        notesStore.createIndex('File', 'File');
        notesStore.createIndex('Date', 'Date');
      }
      if (!db.objectStoreNames.contains('assessments')) {
        db.createObjectStore('assessments', { keyPath: "AssesmentId" });
      }
      if (!db.objectStoreNames.contains('users')) {
        db.createObjectStore('users', { keyPath: "id",autoIncrement:true });
      }
      if (!db.objectStoreNames.contains('submissions')) {
        db.createObjectStore('submissions', { keyPath:"SubmissionId" });
      }
      if (!db.objectStoreNames.contains('authors')) {
        db.createObjectStore('authors', { keyPath:"AuthorId" });
      }
      if (!db.objectStoreNames.contains('teachers')) {
        db.createObjectStore('teachers', { keyPath:"TeacherId" });
      }
      if (!db.objectStoreNames.contains('authrequest')) {
        db.createObjectStore('authrequest', { keyPath:"id",autoIncrement:true });
      }

    },
  });
};


export const updateAssessmentStatus = async (id, newStatus) => {
  const db = await initDB();
  const assessment = await db.get('assessments', id);

  if (assessment) {
    assessment.Status = newStatus;
    await db.put('assessments', assessment);
  }
};

// General PUT (add/update) function
export const saveToStore = async (storeName, data) => {
  const db = await initDB();
  await db.put(storeName, data);
};

// General GET ALL
export const getAllFromStore = async (storeName) => {
  const db = await initDB();
  return await db.getAll(storeName);
};

// General DELETE
export const deleteFromStore = async (storeName, key) => {
  const db = await initDB();
  await db.delete(storeName, key);
};

// General GET ONE by key
export const getOneFromStore = async (storeName, key) => {
  const db = await initDB();
  return await db.get(storeName, key);
};
