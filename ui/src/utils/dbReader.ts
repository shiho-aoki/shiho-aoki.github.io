import { load } from 'js-yaml';
import fs from 'node:fs';

const dbReader = (filepath: string) =>{
    const dbfile = fs.readFileSync(filepath, {encoding: 'utf-8'});
    const yaml = load(dbfile)
    return yaml
}

export default dbReader;