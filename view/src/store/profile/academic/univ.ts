import { IContentesPanel, ISetpPanel } from "../../../components/interface/panel";

interface Ipaper {
    id: number,
    auther: string,
    title: string,
    date: string,
    publicedBy: string,
    edition: number,
    number: number,
    doi: string,
}

export const paper: Array<Ipaper> = [
    {
        id: 1,
        auther: "Wataru Onodera, Nobuyuki Harab, Shiho Aoki, Toru Asahia, Naoya Sawamura",
        title: "Phylogenetic tree reconstruction via graph cut presented using a quantum-inspired computer",
        date: "2023",
        publicedBy: "Molecular Phylogenetics and Evolution",
        edition: 107636,
        number: 178,
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
            headline: "WASEDA-EDGE Human Resource Development Programs",
            article: "",
            // 2019年4月13日～2019年7月13日　ブロックチェーン教育研究講座（早稲田大学グローバル科学知融合研究所主催、WASEDA-EDGE人材育成プログラム協賛）\
            // 2019年6月8~9日　人工知能セミナー入門編ブートキャンプ\
            // 2019年12月14~15日　人工知能セミナー実践編ブートキャンプ\
            // 2021年11月14日　起業のファイナンス基礎講座\
            // 2021年11月21日　グローバルスタートアップのための英語基礎セミナー\
            // 2021年11月27日　ファイナンスセミナー実践編：スタートアップに必要な金融・資本戦略\
            // 2021年12月05日　ビジネスモデル構築セミナー\
            // 2022年01月7~9日　Boot Camp for Mastering Dabate and Negotiation in English\
            // 2022年02月22日~3月12日　Micro MBA",
            urls: {
                ref: "https://waseda-edge.jp/",
                name: "waseda-edge.jp/",
            },
            },
            {
            headline: "Ministry of Education, Culture, Sports, Science and Technology (MEXT) Entrepreneurship Development Overseas Samurai Training Program",
            article: "",
            urls: {
                ref: "https://waseda-edge.jp/event_detail_2020?id=mushashugyo",
                name: "waseda-edge.jp",
            },
            }
        ],
    }
]