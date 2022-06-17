export interface Ih1 {
    name: string,
    itemurl: string,
    subitems: Array<subitems>
}
export interface subitems {
    name: string,
    itemurl: string
}

export interface INoteMetaData { 
    h1: Array<Ih1>,
    subs: Array<subitems>,
 }
