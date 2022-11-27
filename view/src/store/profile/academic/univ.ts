import { IContentesPanel, ISetpPanel } from "../../../components/interface/panel";

export const schools: Array<{sp: ISetpPanel, cp: Array<IContentesPanel>}> = [
    {
        sp: {
            steps: [
                {
                step: "Waseda University Honjo Senior High School",
                position: "general cource",
                context: "",
                time: "2016.04-2019.03",
                },
                {
                step: "Waseda University",
                position: "Advanced Science and Engineering",
                context: "Department of Biomedical Sciences, Asahi Lab",
                time: "2019.04-2023.03",
                },
                {
                step: "Waseda University",
                position: "full-term doctoral program",
                context: "School of Advanced Science and Engineering",
                time: "2023.03-",
                },
            ],
            end: ""
        },
        cp: [
            {
            headline: "string",
            article: "string",
            },
            {
            headline: "string",
            article: "string",
            }
        ],
    }
]