import { db } from '../../connector';
import { FirestoreService } from '../../db/service';
import { model } from '../../db/model';

import { DocumentData } from "@firebase/firestore";

export const getAllEdu = async() => {
    const dpaper = new FirestoreService(db, model.acad.education.name);
    const res = await dpaper.readall();
    if(res==null) return null;

    let r = res as Array<DocumentData>;
    return r.sort((a, b) => a.id - b.id);
}
