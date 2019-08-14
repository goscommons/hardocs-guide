//to use .env
require('dotenv').config();

//create sidebar
const fs = require('fs');
const path = require('path');


const dirpath = "./docs";
//list to directories for subtree
const dirs = fs.readdirSync(dirpath).filter((f) => {
    //ignore directory start with .
    if (f.charAt(0) === "." || f === "images") return false;

    return fs.existsSync(dirpath + "/" + f) && fs.statSync(dirpath + "/" + f).isDirectory();
});
//list to under the docs files
const files = fs.readdirSync(dirpath).filter((f) => {
    //README.md and index.md skip
    if (f === "README.md" || f === "index.md") return false;
    //ignore not .md and .html files
    if (!(f.endsWith(".md") || f.endsWith(".html"))) return false;
    return fs.existsSync(dirpath + "/" + f) && fs.statSync(dirpath + "/" + f).isFile();
});

//create sidebar array from dirs and files
const sidebarArray = ["/"].concat(dirs.map((dir) => {
    return {
        title: dir,
        collapsable: true,
        children: fs.readdirSync(dirpath + "/" + dir).map((childDir) => {
            return "/" + dir + "/" + childDir
        })
    }
})).concat(files.map((file) => {
    return file;
})).sort((a, b) => {
    let aName = typeof a === "string" ? a : a.title;
    let bName = typeof b === "string" ? b : b.title;
    return aName > bName ? 1 : -1;
});

// configure these modules if you
module.exports = {
    title: "Hardocs guide",
    head: [
        ['link', {
            rel: 'icon',
            href: '/favicon.ico'
        }]
    ],
    //description : "use for meta descriptitrueon",
    base: "/" + process.env.REPOSITORY + "/",
    config: (md) => {
        md.options.linkify = sidebarArray;
    },
    themeConfig: {
        logo: '/logo.png',
        nav: [{
            text: 'Community Chat',
            link: 'https://t.me/hardocs19'
        }],
        sidebar: sidebarArray,

        // Assumes GitHub. Can also be a full GitLab url.
        repo: 'https://gitlab.com/go-commons/hardocs',
        // Customising the header label
        // Defaults to "GitHub"/"GitLab"/"Bitbucket" depending on `themeConfig.repo`
        repoLabel: 'Repository',

        // Optional options for generating "Edit this page" link

        // if your docs are in a different repo from your main project:
        docsRepo: 'https://github.com/goscommons/hardocs-guide/',
        // if your docs are not at the root of the repo:
        docsDir: 'docs',
        // if your docs are in a specific branch (defaults to 'master'):
        docsBranch: 'master',
        // defaults to false, set to true to enable
        editLinks: true,
        // custom text for edit link. Defaults to "Edit this page"
        editLinkText: 'Help us improve this page!'
    },
}

//check for sidebar