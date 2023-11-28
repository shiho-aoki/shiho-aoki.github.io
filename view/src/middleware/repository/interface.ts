import { model } from "../db/model"
import { DocumentData } from "@firebase/firestore";

export interface MPaper {
    getAll: () => Promise<DocumentData[] | null>
}

export interface MEdu {
    getAll: () => Promise<DocumentData[] | null>
}