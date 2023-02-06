import { IContentesPanel, IEventSetpPanel } from "../../components/interface/panel";

export const events: Array<{sp: IEventSetpPanel, cp: Array<IContentesPanel>}> = [
    {
        sp: {
            steps: [
                {
                step: "HAIT LAB / Tokyo 3rd",
                position: "joined: primary course",
                context: "",
                info: {
                    url: "https://hait-lab.com/",
                    alt: "hait-lab homepage",
                },
                time: "2020.03-2020.05",
                },
                {
                step: "SPACE MEDICINE WEBINAR WEEKENDS 2021SPRING",
                position: "Marketing",
                context: "",
                info: {
                    url: "https://note.com/spacemedicine/n/n62e50f64a404",
                    alt: "宇宙環境と再生医療講演を聞いて",
                },
                time: "2021.05.15",
                },
            ],
            end: ""
        },
        cp: [
            {
                headline: "AWS re:Invent",
                article: "2022-01-27 ~ 28 [audience]",
                urls: {
                    ref: "https://note.as-pml.com/AWS-Game-Technology-c0ae013643754db1804176018dbf2a7d",
                    name: "AWS Came Technology",
                },
            },
            {
                headline: "AWS Cloud Session",
                article: "2022-03-08 ~ 10",
            },
        ],
    }
]