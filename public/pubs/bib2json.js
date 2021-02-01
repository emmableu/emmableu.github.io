const bibtexParse = require('bibtex-parse');
const fs = require('fs');
const pubs = JSON.parse(fs.readFileSync('pubs.json', 'utf8'));
const files = fs.readdirSync('bibs');
let bibJSON = [];
for (let file of files){
    const bibtex = fs.readFileSync('bibs/' + file, 'utf8');
    let curJSON = bibtexParse.entries(bibtex)[0];
    for (let pub of pubs) {
        if (curJSON.key === pub.key) {
            for (let k in pub) {
                if (k === "key") {
                    continue;
                }
                curJSON[k] = pub[k];
            }
        }
    }

    bibJSON.push(curJSON);
}
console.log(bibJSON);
fs.writeFile('../../src/components/json/pub_final.json', JSON.stringify(bibJSON), function(err){
    if (err) throw err;
    console.log('saved');
});



