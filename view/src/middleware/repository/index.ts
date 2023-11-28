import { MPaper,  MEdu} from './interface';
import { getAllPaper } from './paper';
import { getAllEdu } from './edu';

export const rpaper: MPaper = {
    getAll: getAllPaper,
}

export const rconference = {}

export const rachives_academic = {}

export const redu: MEdu = {
    getAll: getAllEdu,
}

export const rinternship = {}

export const rjob = {}

export const raward = {}

export const rlicenses = {}