import { existsSync } from 'node:fs';
import { join } from 'node:path';
/** True when a file exists in /public at build time. */
export const hasPublic = (path: string) => existsSync(join(process.cwd(), 'public', path));
