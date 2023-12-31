export interface IPaper {
    id: number;
    author: string;
    title: string;
    date: string;
    publishedBy: string;
    edition: number;
    number: number;
    doi: string;
}

export interface IConference {
    id: number,
    conferencename: string,
    type: 'poster'|'oral',
    title: string,
    presenter: string,
    number: string,
    date: Date
}

export interface IAchivesAcademic {
    id: number,
    type: 'adoption'|'outreach',
    name: string,
    nameJp: string,
    url: string,
    date: Date
}
export interface IEducation {
    id: number,
    schoolname: string,
    course: string,
    specific: string,
    start: Date,
    end: Date,
    degree: string
}

export interface IInternship {
    id: number,
    companyname: string,
    position: string,
    context: string,
    time: string,
}

export interface IJob {
    id: number,
    companyname: string,
    position: string,
    context: string,
    start: Date,
    end: Date,
}

export interface IAward {
    title: string,
    when: string,
    organ: string,
    number?: string,
    about?: string,
    type: 'tech'|'busi'|'acad',
}

export interface ILicenses {
    title: string,
    when: string,
    organ: string,
    number?: string,
    about?: string,
    type: 'tech'|'busi'|'acad',
}