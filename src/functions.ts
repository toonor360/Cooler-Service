import { DocumentReference } from '@google-cloud/firestore';

export const getDataWithId = async <T extends object>(
  doc: DocumentReference<T>,
): Promise<T & { id: string }> => ({ id: doc.id, ...(await doc.get()).data() });
