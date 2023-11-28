import { model } from "../db/model"

export interface MPaper {
    getAll: () => Array<typeof model.acad.paper.i> | void
}