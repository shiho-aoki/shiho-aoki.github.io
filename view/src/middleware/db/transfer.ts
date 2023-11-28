import { db } from '../connector';
import { doc, setDoc } from '@firebase/firestore';
import { collection, addDoc, getDocs, QuerySnapshot, DocumentData, Timestamp } from "@firebase/firestore";

export const transferNewDataSets = async() => {
    await setDoc(doc(db, "cities", "LA"), {
        name: "Los Angeles",
        state: "CA",
        country: "USA"
      });
      
}