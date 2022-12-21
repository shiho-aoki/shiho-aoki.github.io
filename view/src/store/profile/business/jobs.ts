import { IContentesPanel, ISetpPanel } from "../../../components/interface/panel";

export const jobs: Array<{sp: ISetpPanel, cp: Array<IContentesPanel>}> = [
    {
        sp: {
            steps: [
                {
                    step: "EAGLYS Inc.",
                    position: "Software engineer / Developer",
                    context: "",
                    time: "2020.03-present",
                },
                {
                    step: "MILIZE",
                    position: "engineer adviser (side)",
                    context: "",
                    time: "2021.03-present",
                },
                {
                    step: "IATD.Co.,Ltd.",
                    position: "CTO / Engineer",
                    context: "",
                    time: "2021.03-present",
                },
                {
                    step: "Scrumy Inc.",
                    position: "CTO / Director",
                    context: "",
                    time: "2021.09-2022.03",
                },
            ],
            end: ""
        },
        cp: [
            {
            headline:"Sweden Innovation Days (IGNITE SWEDEN)",
            article: "[speaker]",
            urls: {
                ref: "https://swedeninnovationdays.se/",
                name: "swedeninnovationdays.se"
            }
            },
            {
            headline:'"We UNITE !" Powered by T-UNITE',
            article: "[speaker] Tokyo United Network for Innovation with Technology and Entrepreneurs @CIC TOKYO",
            urls:{
                ref: "https://waseda-edge.jp/T-UNITE",
                name: "waseda-edge.jp/T-UNITE"
            }
            }
        ],
    }
]