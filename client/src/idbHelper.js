import { openDB } from 'idb';

const DB_NAME = 'LMS-site';   // one DB for both notes and assessments
const DB_VERSION =3 ;         // bump version if you already have a DB

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

    },
  });
};

// Notes CarD
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

// Assessments Card
export const addAssessment = async (assessment) => {
  const db = await initDB();
  await db.put('assessments', assessment);
};

export const getAllAssessments = async () => {
  const db = await initDB();
  return await db.getAll('assessments');
};
export const updateAssessmentStatus = async (id, newStatus) => {
  const db = await initDB();
  const assessment = await db.get('assessments', id);

  if (assessment) {
    assessment.Status = newStatus;
    await db.put('assessments', assessment);
  }
};

//userData 
export const addUser= async (user)=>{
  const db= await initDB();
  await db.put('users',user)
}
export const getAllUsers = async () => {
  const db = await initDB();
  return await db.getAll('users');
};