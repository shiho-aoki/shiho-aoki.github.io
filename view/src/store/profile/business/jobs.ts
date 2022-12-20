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
            headline:"sweeden innovation days",
            article: "",
            },
            {
            headline:"CIC Tokyo",
            article: "",
            }
        ],
    }
]