const fs = require("fs");
let text = fs.readFileSync("new.txt" , "utf-8");
text = text.replace("Utsav" , "Sunil");
console.log(text);

console.log("Creating a new file...")
fs.writeFileSync("harrrybhai.txt" , text);
