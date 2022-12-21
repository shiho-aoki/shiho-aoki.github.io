import { ITimeline } from "../../components/interface/timeline";
import { noteUrls } from "../urls";

export const timeline: Array<ITimeline> = [
    {
        title: "ESCR C++",
        type: "Note / C++",
        typeUrl: noteUrls.lang.cpp,
        where: "note.as-pml.com",
        when: "2022.12.02",
        url: "https://note.as-pml.com/ESCR-C-d02c0ea8862041a18598d3c17ea68fd4",
        published: false
    },
    {
        title: "SetUp files公開",
        type: "Note",
        typeUrl: noteUrls.top,
        where: "note.as-pml.com",
        when: "2022.12.18",
        url: noteUrls.setupMakefiles,
        published: true
    },
    {
        title: "Rustのメモリ管理方法",
        type: "Note / Rust",
        typeUrl: noteUrls.lang.rust,
        where: "qiita",
        when: "2020.12.09",
        url: "https://qiita.com/as_pml/items/8a44b6e70cd76d63952a",
        published: true
    },
]