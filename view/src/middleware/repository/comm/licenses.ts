import { db } from '../../connector';
import { FirestoreService } from '../../db/service';
import { model } from '../../db/model';

import { DocumentData } from "@firebase/firestore";

export const getAllLicenses = async() => {
    const dpaper = new FirestoreService(db, model.comm.licenses.name);
    const res = await dpaper.readall();
    if(res==null) return null;

    let r = res as Array<DocumentData>;
    return r.sort(
        (firstObject: DocumentData, secondObject: DocumentData) =>
            (firstObject.id > secondObject.id) ? -1 : 1
    );
}

export const getAcadLicenses = async() => {}

export const getBusiLicenses = async() => {}

export const getTechLicenses = async() => {}