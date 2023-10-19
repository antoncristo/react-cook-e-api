import { app } from '../app';
import { getFirestore } from 'firebase-admin/firestore';

export const db = getFirestore(app);
