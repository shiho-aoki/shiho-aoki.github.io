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

export interface IEventSetpPanel {
    steps: Array<{
        step: string,
        position: string,
        context: string,
        info: {
            url: string,
            alt: string,
        },
        time: string,
    }>,
    end: string
}