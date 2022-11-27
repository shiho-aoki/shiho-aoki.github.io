export interface  IContentesPanel {
    headline: string,
    article: string,
}

export interface ISetpPanel {
    steps: Array<{
        step: string,
        position: string,
        context: string,
        time: string,
    }>,
    end: string
}