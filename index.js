var unirest =require("unirest");
var req = unirest("GET", "http://localhost:3004/Jobs?top=10");
const char = 'M';

req.headers({
    "cache-control": "no-cache",
});

if (req.startsWith(char){
    req.satus(200);
    }
req.end(function(res){
    if(res.error) throw new Error(res.error)
    console.log(res.body)
});
