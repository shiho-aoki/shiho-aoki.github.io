export interface IApplicatInfromation {
    title: string,
    when: string,
    organ: string,
    number?: string,
    about?: string,
    attachments?: {
        filename: string,
        link: string
    }
}