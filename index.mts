import * as path from "path";
import { message } from "./common.mjs";

console.log(`${message} from main thread`);
new Worker(path.join(__dirname, "worker.mjs"));
