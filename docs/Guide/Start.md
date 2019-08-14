# Getting started

Hardocs is a CLI to generate open hardware documentation templates and services. I is a set of commands to easily generate and maintain hardware documentation, with a standard project structure. The current version supports at the moment documentation in markdown, and a static site generator to show the hardware project in an intuitive way.

## Prerequisites

Install `node.js`
Install `git` to use the `gitbash`

## Usage

### Generate a static website easy to maintain with markdown that can be hosted in github or gitlab

#### Step1: Install package globally

```
# Install the package globally
npm install hardocs -g

```

#### Step2: Create new documentation files within your project

```
# Generates docs template
docz-generate
```

#### Step3: Install packages and dependencies

```
npm install
```

#### Step2: Deploy locally and see your documentation on the browser

```
npm run start
```
