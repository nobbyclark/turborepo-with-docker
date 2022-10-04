import { createServer } from "./server";
import { log } from "logger";

const port = process.env.PORT || 3001;
const server = createServer();
const myVar = process.env.MY_VAR;

server.listen(port, () => {
  log(`api running on ${port}`);
  log(`myVar = ${myVar}`);
});
