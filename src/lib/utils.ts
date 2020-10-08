import util from 'util';
import fs from 'fs';

export const readdir = util.promisify(fs.readdir);

export const readFile = util.promisify(fs.readFile);
