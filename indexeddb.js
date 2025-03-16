import { openDB } from 'idb';

const dbPromise = openDB('user-actions-db', 1, {
    upgrade(db) {
        db.createObjectStore('actions', { keyPath: 'id', autoIncrement: true });
    }
});

export async function saveUserAction(action) {
    const db = await dbPromise;
    await db.add('actions', action);
}

export async function getUserActionsFromDB() {
    const db = await dbPromise;
    return await db.getAll('actions');
}

export async function clearUserActionsFromDB() {
    const db = await dbPromise;
    await db.clear('actions');
}