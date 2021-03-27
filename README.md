# 1. START PROJECT
    `npm install` or `yarn install`
    `yarn dev -- -p ${PORT}` or `npm run dev -- -p ${PORT}`
# 2.Generator locales multiple language
## Set up your google sheet

1. Each one sheet in parent sheet is a model language [common, footer, layout...v]
2. In one sheet the first row is [key | language 1 | language 2 ...] maybe more language if you want add
    * Ex: key | vn | en *
3. Next, start form the second row -> is [key | text_language_1 | text_language_2 ....]
    * Ex: txt_greet | Xin chao | Hello *
4. After you change file sheet. cd to /tools and install node module `npm i`. You must to change config in source tool. Open **'tools/localization/LocalizationGenerator.js'**
 `const OUTPUT_FOLDER = '../public/static/locales';` => *this is directory output*
 `const LIST_LANGUAGE = ['vn','en'];` => *this is likely language you write in file sheet*
5. The makefile you can see: change SPREADSHEET_ID likely your SPREADSHEET_ID. After run command line just above
 `generator-localization-sainbolt-app` or change it if you want
6. ==Result==
### 