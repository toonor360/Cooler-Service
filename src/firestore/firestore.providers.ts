import { FountainDocument } from 'src/fountains/entities/fountain.document';
import { UserDocument } from 'src/users/entities/users.document';

export const FirestoreDatabaseProvider = 'firestoredb';
export const FirestoreOptionsProvider = 'firestoreOptions';
export const FirestoreCollectionProviders: string[] = [
  UserDocument.collectionName,
  FountainDocument.collectionName,
];

const firebaseConfig = {
  apiKey: 'AIzaSyADIdYYh9dq_AdOAv5gtTxTKgx9s5BDEu4',
  authDomain: 'cooler-20740.firebaseapp.com',
  databaseURL:
    'https://cooler-20740-default-rtdb.europe-west1.firebasedatabase.app',
  projectId: 'cooler-20740',
  storageBucket: 'cooler-20740.appspot.com',
  messagingSenderId: '524494232176',
  appId: '1:524494232176:web:6e65cd20254b83a34772b5',
};
