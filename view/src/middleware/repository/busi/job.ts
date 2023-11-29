import { db } from '../../connector';
import { FirestoreService } from '../../db/service';
import { model } from '../../db/model';

import { DocumentData } from "@firebase/firestore";

export const getAllJob = async() => {
    const dpaper = new FirestoreService(db, model.busi.job.name);
    const res = await dpaper.readall();
    if(res==null) return null;

    let r = res as Array<DocumentData>;
    return r.sort(
        (firstObject: DocumentData, secondObject: DocumentData) =>
            (firstObject.id > secondObject.id) ? -1 : 1
    );
}
