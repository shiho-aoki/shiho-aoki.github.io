import { load } from 'js-yaml';
import { readFileSync } from 'fs';

const dbReader = (filepath: string) =>{
    // serch path
    // fix interface
    // read yaml as interface
    const yaml = load(readFileSync(filepath, 'utf-8'))
    return yaml
}

export default dbReader;