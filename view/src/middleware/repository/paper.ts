import { db } from '../connector';
import { FirestoreService } from '../db/service';
import { model } from '../db/model';

import { Firestore, DocumentData } from "@firebase/firestore";

export const getAll = () => {
    const dpaper = new FirestoreService(db, model.acad.paper.name);
    dpaper.readall().then(
        (res)=>{
            return res;
        }
    ).catch(
        (error) => {
            console.debug(error);
        }
    );
}
