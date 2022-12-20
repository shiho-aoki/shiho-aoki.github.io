import { IContentesPanel, ISetpPanel } from "../../../components/interface/panel";

interface Ipaper {
    number: number,
    auther: string,
    title: string,
    date: string,
    publicedBy: string,
    doi: string,
}

export const paper: Array<Ipaper> = [
    {
        number: 1,
        auther: "WataruOnodera, NobuyukiHarab, ShihoAoki, ToruAsahia, NaoyaSawamura",
        title: "Phylogenetic tree reconstruction via graph cut presented using a quantum-inspired computer",
        date: "2023",
        publicedBy: "Molecular Phylogenetics and Evolution",
        doi: "https://doi.org/10.1016/j.ympev.2022.107636",
    },
]

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
            headline: "zaikenn",
            article: "",
            urls: {
                ref: "",
                name: "",
            },
            },
            {
            headline: "",
            article: "",
            urls: {
                ref: "",
                name: "",
            },
            }
        ],
    }
]