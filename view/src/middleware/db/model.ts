interface IPaper {
    id: number;
    author: string;
    title: string;
    date: string;
    publishedBy: string;
    edition: number;
    number: number;
    doi: string;
}

interface IConference {
    id: number,
    conferencename: string,
    type: 'poster'|'oral',
    title: string,
    presenter: string,
    number: string,
    date: Date
}

interface IAchivesAcademic {
    id: number,
    type: 'adoption'|'outreach',
    name: string,
    nameJp: string,
    url: string,
    date: Date
}
interface IEducation {
    id: number,
    schoolname: string,
    course: string,
    specific: string,
    start: Date,
    end: Date,
    degree: string
}

interface IInternship {
    id: number,
    companyname: string,
    position: string,
    context: string,
    time: string,
}

interface IJob {
    id: number,
    companyname: string,
    position: string,
    context: string,
    start: Date,
    end: Date,
}

interface IAward {
    title: string,
    when: string,
    organ: string,
    number?: string,
    about?: string,
    type: 'tech'|'busi'|'acad',
}

interface ILicenses {
    title: string,
    when: string,
    organ: string,
    number?: string,
    about?: string,
    type: 'tech'|'busi'|'acad',
}

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
