import { IEducation } from "../db/interface";
import { model } from "../db/model"
import { DocumentData } from "@firebase/firestore";

export interface MPaper {
    getAll: () => Promise<DocumentData[] | null>
}

export interface MEdu {
    getAll: () => Promise<IEducation[] | null>
}