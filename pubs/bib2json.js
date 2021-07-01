const bibtexParse = require('bibtex-parse');
const fs = require('fs');
const util = require('util');
const pubs = JSON.parse(fs.readFileSync('pubs.json', 'utf8'));
const labelSeeds = JSON.parse(fs.readFileSync('label-seeds.json', 'utf8'));
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




function updateLabels (labelSeeds, bibJSON) {
    function getLabelOptions(labelName, bibJSON) {
        let optionMap = {};
        for (const data of bibJSON) {
            if (labelName in data) {
                let option = data[labelName];
                if (option in optionMap) {
                    optionMap[option] += 1;
                }
                else {
                    optionMap[option] = 1;
                }
            }
        }
        let p = [];
        for (const [key, value] of Object.entries(optionMap)) {
            p.push({
                    'key': key,
                    'count': value,
                    'printed': `${key} (${value})`
                }
            );
        }
        p = p.sort((a, b) => a.count-b.count).reverse();
        return p;
    }


    let labelsFinal = [];
    for (const label of labelSeeds){
        let labelEntry = {};
        labelEntry.alias = label.alias;
        labelEntry.name = label.name;
        let options = getLabelOptions(label.alias, bibJSON);
        labelEntry.options = options;
        labelEntry.selected = options.map(x => x.key);
        labelsFinal.push(labelEntry);
    }
    return labelsFinal
}


const labelsFinal = updateLabels(labelSeeds, bibJSON);


fs.writeFileSync('../../src/components/pub_data/bib.js', 'export const bib = ' + JSON.stringify(bibJSON) , 'utf-8');
fs.writeFileSync('../../src/components/pub_data/labels.js', 'export const labels = ' + JSON.stringify(labelsFinal) , 'utf-8');
