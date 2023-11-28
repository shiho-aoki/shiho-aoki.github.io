import { doc, updateDoc, deleteDoc, getDoc, collection, addDoc, getDocs } from '@firebase/firestore';
import { Firestore, DocumentData } from "@firebase/firestore";


export class FirestoreService {
    private db: Firestore;
    private dbname: string;

    constructor(db: Firestore, dbname: string) {
        this.db = db;
        this.dbname = dbname;
    }

    async add(dataset: DocumentData): Promise<void> {
        const docRef = await addDoc(collection(this.db, this.dbname), dataset);
        console.debug(`@${this.dbname} Document written with ID: ${docRef.id}`);
    }

    async read(docId: string): Promise<DocumentData | null> {
        const docRef = doc(this.db, this.dbname, docId);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
            return docSnap.data();
        } else {
            console.debug(`@${this.dbname} No such document!`);
            return null;
        }
    }

    async readall(): Promise<DocumentData | null>{
        let rdata: Array<DocumentData | null> = [];
        const querySnapshot = await getDocs(collection(this.db, this.dbname));
        querySnapshot.forEach((doc) => {
            rdata.push(doc.data());
        });
        return rdata;
    }

    async update(docId: string, newData: DocumentData): Promise<void> {
        const docRef = doc(this.db, this.dbname, docId);
        await updateDoc(docRef, newData);
        console.debug(`@${this.dbname} Document with ID: ${docId} updated`);
    }

    async delete(docId: string): Promise<void> {
        const docRef = doc(this.db, this.dbname, docId);
        await deleteDoc(docRef);
        console.debug(`@${this.dbname} Document with ID: ${docId} deleted`);
    }
}
