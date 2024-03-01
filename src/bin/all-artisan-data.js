const fs = require(`fs`);
const path = require(`path`);
const { writeFile } = require('fs');

let allArtisansArray = [];

const files = fs.readdirSync("./src/_data/").filter(name => path.extname(name) === ".json");

for (const file in files) {

  let filePath = "./src/_data/" + files[file];

  let fileName = path.parse(filePath).name;

  let fileContentObject = fs.readFileSync(filePath, "utf-8");

  let parsedArtisanObjects = JSON.parse(fileContentObject);

  parsedArtisanObjects.forEach(artisan => {
    artisan.artisanType = fileName;
  });

  // pushing with spread each object into the final all-inclusive array of objects
  allArtisansArray.push(...parsedArtisanObjects);

};

writeFile("./src/all-artisan-data/all-artisan-data.json", JSON.stringify(allArtisansArray, null, 2), err => {
  if (err) throw error;
  console.log("JSON Success");
});