import {IPaper, IConference, IAchivesAcademic, IEducation, IInternship, IJob, IAward, ILicenses} from './interface';

export const model = {
    acad: {
        paper: {
            name: 'paper',
            i : {} as IPaper
        },
        conference: {
            name: 'conference',
            i: {} as IConference
        },
        achives_academic: {
            name: 'achives_academic',
            i : {} as IAchivesAcademic
        },
        education:{
            name: 'education',
            i : {} as IEducation
        }
    },
    busi: {
        internship:{
            name: 'exprience_inter',
            i : {} as IInternship
        },
        job:{
            name: 'experience_jobs',
            i : {} as IJob
        }
    },
    tech: {},
    comm: {
        award: 
        {
            name: 'award',
            i: {} as IAward
        },
        licenses: 
        {
            name: 'licenses',
            i: {} as ILicenses
        }
    }
}
