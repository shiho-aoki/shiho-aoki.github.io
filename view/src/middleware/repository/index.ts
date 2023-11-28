import { MPaper,  MEdu} from './interface';
import { getAllPaper } from './paper';
import { getAllEdu } from './edu';

export const rpaper: MPaper = {
    getAll: getAllPaper,
}

export const redu: MEdu = {
    getAll: getAllEdu,
}
