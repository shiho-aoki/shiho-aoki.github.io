import { IContentesPanel, ISetpPanel } from "../../../components/interface/panel";

export const internships: Array<{sp: ISetpPanel, cp: Array<IContentesPanel>}> = [
    {
        sp: {
            steps: [
                {
                step: "MAISON MARC inc.",
                position: "AI Engineer",
                context: "",
                time: "2019.11-2020.03",
                },
                {
                step: "Orario",
                position: "Marketing",
                context: "",
                time: "2020.03-2020.09",
                },
                {
                step: "VOYAGE GROUP (current: CARTA HOLDINGS)",
                position: "tresure(Internship)",
                context: "",
                time: "2021.08",
                },
                {
                step: "TOMONOKAI Co.,Ltd.",
                position: "Web Marketing/Engineer",
                context: "",
                time: "2019.06-present",
                },
                {
                step: "AVILEN",
                position: "course maneger",
                context: "",
                time: "2020.02-present",
                }
            ],
            end: ""
        },
        cp: [
            {
            headline: "Treasure: Award of CI/CD",
            article: "Aug 2021, VOYAGE GROUP (at that time, now: CARTA HOLDINGS)",
            },
            {
            headline: "Innovation Award",
            article: "Dec 2020, Tomonokai Co.,Ltd.",
            },
            {
            headline: "Winner of company-wide training session",
            article: "Dec 2019, Tomonokai Co.,Ltd."
            },
            {
                headline: "Rookie of the Year Award",
                article: "Dec 2019, Tomonokai Co.,Ltd."
            }
        ],
    }
]