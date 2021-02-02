const bibtexParse = require('bibtex-parse');
const fs = require('fs');
const pubs = JSON.parse(fs.readFileSync('pubs.json', 'utf8'));
const files = fs.readdirSync('bibs');

function parsedAuthors (authorList) {
    let parsedAuthors = [];
    for (let author of authorList.split(" and ")) {
        let lastName = author.split(", ")[0];
        let firstName = author.split(", ")[1];
        parsedAuthors.push(firstName + " " + lastName);
    }
    return parsedAuthors;
}
function GetSortOrder() {
    return function(a, b) {
        let year = parseFloat(a.YEAR) - parseFloat(b.YEAR);
        if (year !== 0) {
            return year;
        }
        let month = parseFloat(a.month) - parseFloat(b.month);
        if (month !== 0) {
            return month;
        }
    }
}



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
    curJSON["AUTHOR"] = parsedAuthors(curJSON["AUTHOR"]);
    bibJSON.push(curJSON);
}

bibJSON.sort(GetSortOrder()).reverse();

console.log(bibJSON);
fs.writeFile('../../src/components/json/pub_final.json', JSON.stringify(bibJSON), function(err){
    if (err) throw err;
    console.log('saved');
});



