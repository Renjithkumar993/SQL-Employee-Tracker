
const main = require("./helpers/startingstyle")

async function promptStart (){
const { getstart } =await  require("./lib/main");
await main();
await getstart();
}
promptStart();



