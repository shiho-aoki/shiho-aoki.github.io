import { MPaper,  MEdu} from './interface';
import * as allp from './acad/paper';
import * as allc from './acad/conf';
import * as allaa from './acad/achives_acad';
import * as alle from './acad/edu';
import * as alli from './busi/internship';
import * as allj from './busi/job';
import * as alla from './comm/award';
import * as alll from './comm/licenses';


export const rpaper: MPaper = {
    getAll: allp.getAllPaper,
}

export const rconference = {
    getAll: allc.getAllConf,
}

export const rachives_academic = {
    getAll: allaa.getAllAchivesAca,
}

export const redu: MEdu = {
    getAll: alle.getAllEdu,
}

export const rinternship = {
    getAll: alli.getAllIntern,
}

export const rjob = {
    getAll: allj.getAllJob,
}

export const raward = {
    getAll: alla.getAllaward,
    get: {
        acad: alla.getAcadAward,
        busi: alla.getBusiAward,
        tech: alla.getTechAward
    }
}

export const rlicenses = {
    getAll: alll.getAllLicenses,
    get: {
        acad: alll.getAcadLicenses,
        busi: alll.getBusiLicenses,
        tech: alll.getTechLicenses,
    }
}