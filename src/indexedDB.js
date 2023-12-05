// import { openDB } from 'idb';

// const dbPromise = openDB('la-cabana', 1, {
//   upgrade(db) {
//     const store = db.createObjectStore('reseñas', { keyPath: 'id', autoIncrement: true });
//     store.createIndex('porTitulo', 'titulo');
//   },
// });

// export const addReseña = async (resenha) => {
//   const db = await dbPromise;
//   const tx = db.transaction('reseñas', 'readwrite');
//   const store = tx.objectStore('reseñas');
//   await store.add(resenha);
// };

// export const getReseñas = async () => {
//     const db = await dbPromise;
//     const tx = db.transaction(storeName, 'readonly');
//     const store = tx.objectStore(storeName);
//     const reseñas = await store.getAll();
//     return reseñas;
//   };
  
//   export const updateReseña = async (resena) => {
//     const db = await dbPromise;
//     const tx = db.transaction(storeName, 'readwrite');
//     const store = tx.objectStore(storeName);
//     await store.put(resena);
//   };
  
//   export const deleteReseña = async (id) => {
//     const db = await dbPromise;
//     const tx = db.transaction(storeName, 'readwrite');
//     const store = tx.objectStore(storeName);
//     await store.delete(id);
//   };