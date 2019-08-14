# Hardocs 
## An open source tool for hardware documentation powered by vuepress, git and a simple CLI
<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Contents** _generated with [DocToc](https://github.com/thlorenz/doctoc)_


- [Building locally](#building-locally)
- [GitLab CI](#gitlab-ci)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->
## A template to easily generate hardware documentation
### The problem
Documenting, maintaining and publishing hardware design can be challenging. Furthermore managing consistently the various digital objects used in hardware projects like CAD, CAM, BOM and part data lacks of structure and standards, which makes difficult to share, collaborate and publish the designs.  
## What is hardocs?
It is a package that facilitates the publishing and organization of hardware documentation using simple folder structuring, as well as command lines that automate repetitive tasks like naming parts,generating the web docuentation , creating tables, publishing content, among others. 
- The template uses [hardocs package](https://www.npmjs.com/package/hardocs) and extends [vuepress](https://vuepress.vuejs.org/). It also builds on git workflows to make this possible.
- The usage of this package generates a `project.json` file that generates metadata about your project and allows to easily automate tasks like generating a markdown table from a `csv` file, or creating a `bom.csv` file based on the CAD files you already have inside the project.   

# Usage
## Building locally

This project uses [yarn](https://yarnpkg.com), you'll need to install this globally before you can get started.

```
npm install -g yarn
```

Then you need to install the project dependencies:

```
yarn install
```

Now you're ready to go.
To run the local dev server just use the following command:

```
yarn start
```

Your website should be available at [http://localhost:8080/]

_Read more at VuePress' [documentation][]._

## GitLab CI

This project's static Pages are built by [GitLab CI][ci], following the steps
defined in [`.gitlab-ci.yml`](.gitlab-ci.yml):

```
image: node:9.11.1

pages:
  cache:
    paths:
    - node_modules/

  script:
  - yarn install
  - yarn build

  artifacts:
    paths:
    - public

  only:
  - gl-pages

```

This sets up a `node9.11.1` environment, then uses `yarn install` to install dependencies and `yarn build` to build out the website to the `./public` directory.
It also caches the `node_modules` directory to speed up sebsequent builds.


[project]: https://vuepress.vuejs.org/
[documentation]: https://vuepress.vuejs.org/guide/
[gocommons]: https://go_commons.gitlab.io/home/
[ci]: https://about.gitlab.com/gitlab-ci/
