import { DocumentData } from "@firebase/firestore";

interface IfirebaseService {
    IgetAll : () => Promise<DocumentData[] | null>
}

export interface MPaper {
    getAll: IfirebaseService['IgetAll']
}

export interface MEdu {
    getAll: IfirebaseService['IgetAll']
}