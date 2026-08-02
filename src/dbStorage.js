// IndexedDB Persistence Layer for Synapse To-Do List Application

const DB_NAME = 'SynapseToDoDB';
const DB_VERSION = 1;
const STORE_NAME = 'app_data';

export const openDB = () => {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open(DB_NAME, DB_VERSION);
    request.onupgradeneeded = (e) => {
      const db = e.target.result;
      if (!db.objectStoreNames.contains(STORE_NAME)) {
        db.createObjectStore(STORE_NAME);
      }
    };
    request.onsuccess = (e) => resolve(e.target.result);
    request.onerror = (e) => reject(e.target.error);
  });
};

export const saveStateItem = async (key, val) => {
  try {
    const db = await openDB();
    const tx = db.transaction(STORE_NAME, 'readwrite');
    const store = tx.objectStore(STORE_NAME);
    store.put(val, key);
  } catch (err) {
    console.error('IndexedDB Save Error:', err);
  }
};

export const getStateItem = async (key) => {
  try {
    const db = await openDB();
    const tx = db.transaction(STORE_NAME, 'readonly');
    const store = tx.objectStore(STORE_NAME);
    return new Promise((resolve) => {
      const request = store.get(key);
      request.onsuccess = () => resolve(request.result || null);
      request.onerror = () => resolve(null);
    });
  } catch (err) {
    console.error('IndexedDB Read Error:', err);
    return null;
  }
};

export const saveFullSnapshot = async ({ categories, tasks, reminders, completedLC, completedRoadmap, settings }) => {
  try {
    const db = await openDB();
    const tx = db.transaction(STORE_NAME, 'readwrite');
    const store = tx.objectStore(STORE_NAME);
    if (categories) store.put(categories, 'categories');
    if (tasks) store.put(tasks, 'tasks');
    if (reminders) store.put(reminders, 'reminders');
    if (completedLC) store.put(completedLC, 'completedLC');
    if (completedRoadmap) store.put(completedRoadmap, 'completedRoadmap');
    if (settings) store.put(settings, 'settings');
  } catch (err) {
    console.error('IndexedDB Snapshot Error:', err);
  }
};

export const getFullSnapshot = async () => {
  try {
    const categories = await getStateItem('categories');
    const tasks = await getStateItem('tasks');
    const reminders = await getStateItem('reminders');
    const completedLC = await getStateItem('completedLC');
    const completedRoadmap = await getStateItem('completedRoadmap');
    const settings = await getStateItem('settings');

    return { categories, tasks, reminders, completedLC, completedRoadmap, settings };
  } catch (err) {
    return { categories: null, tasks: null, reminders: null, completedLC: null, completedRoadmap: null, settings: null };
  }
};
