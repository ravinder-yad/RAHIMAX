const fs = require('fs');
const content = fs.readFileSync('old_context.js', 'utf-8');
const match = content.match(/const translations = (\{[\s\S]*?\});\s+const t =/);
if (match) {
  let jsObj = match[1];
  let obj = eval('(' + jsObj + ')');
  fs.writeFileSync('src/locales/en/translation.json', JSON.stringify(obj.EN, null, 2));
  fs.writeFileSync('src/locales/hi/translation.json', JSON.stringify(obj.HI, null, 2));
  console.log('Extraction complete!');
} else {
  console.log('Failed to match');
}
