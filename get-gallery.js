const path = require("path");
const fs = require("fs");

const gallery = {};

const directoryPath = path.join(__dirname, "public/images/gallery");
const folders = fs
  .readdirSync(directoryPath)
  .filter((dir) => !dir.includes("."));

for (const folder of folders) {
  const folderPath = path.join(directoryPath, folder);

  const files = fs.readdirSync(folderPath);

  if (files.length === 0) continue;

  const relativeFolderPath = path.join("images/gallery/", folder);

  gallery[folder] = files.map((file) => {
    const src = path.join(relativeFolderPath, file);

    return { src, thumbnail: src };
  });
}

const dataPath = path.join(__dirname, "src/gallery.json");

fs.writeFileSync(dataPath, JSON.stringify(gallery, null, 2), "utf8");
