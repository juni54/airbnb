
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// ✅ Go UP from /utils to ROOT directory
const rootPath = path.resolve(__dirname, '..');

export default rootPath;


