import { IContentesPanel, ISetpPanel } from "../../../components/interface/panel";

export const jobs: Array<{sp: ISetpPanel, cp: Array<IContentesPanel>}> = [
    {
        sp: {
            steps: [
                {
                    step: "EAGLYS Inc.",
                    position: "Software engineer/Developer・Permanent",
                    context: "Skills: Software Development · Go (Programming Language) · React.js · Keras · TensorFlow · Amazon Web Services (AWS) · Microsoft Azure · Programming · Python (Programming Language) · C++",
                    time: "2019.03-present",
                },
                {
                    step: "Waseda University",
                    position: "Research Assistant・Part-time",
                    context: "Skills: Software Project Management · Analytical Skills",
                    time: "2022.04-present",
                },
                {
                    step: "Institute for Advanced Technology & Development Co., Ltd. ",
                    position: "CTO / Engineer",
                    context: "Skills: Software Development · Linux · Go (Programming Language) · Programming · Google Cloud Platform (GCP) · C++ · TypeScript",
                    time: "2021.03-present",
                },
                {
                    step: "MILIZE",
                    position: "Programmer/Engineer adviser・side",
                    context: "Skills: Menter · Amazon Web Services (AWS) · Programming · Ruby on Rails · TypeScript",
                    time: "2021.03-present",
                },
                {
                    step: "Scrumy Inc.",
                    position: "CTO / Director",
                    context: "",
                    time: "2021.09-2022.03 (7 mos)",
                },
            ],
            end: "Currentry working as systems Engineer, product Manager and Chief Technology Officer"
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