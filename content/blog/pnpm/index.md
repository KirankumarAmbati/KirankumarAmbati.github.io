---
title: PNPM - The minified NPM
date: "2019-03-20T10:28:52.169Z"
tags: ["Node", "NVM", "NodeJS","Node Version Manager"]
---

In this present world of web development, almost everyone might have heard the word 

> node_modules

They are very popular. They came with lot of advantages over CDNs. They made offline development possible. They made web development much easier and faster.

But, __node_modules__ come with a con. They occupy space.. A lot of space. For e.g. `create-react-app` alone occupies __~232MB__ of disk space. They are making offline development possible and hence this overhead looks fine. I was happy with node_modules until I noticed some pattern one day. I have over 30 projects on my Laptop and node_modules alone occupied 8-10GB of my space. This made me think. Why we should have the exact copy of node_modules in every project I created. Don't we have a provision to store everything at a single location and refer them from there.So, I started exploring and that lead me to PNPM.

## pnpm

pnpm is an efficient solution to above discussed problem. It installs the required package only once in a common place and whenever we install that package in any project using `npm install package-name`, a hard link will be placed within node_modules folder of the project instead of installing package there. This way, it maintains only one version of each module and can effectively save lot of space in the long run.

## USAGE

- __installation__

    `npm install -g pnpm`

    It's as simple as that. Usage is also pretty simple. It is very easy to get switched to pnpm from npm or yarn because the commands are still gonna be the same.

    `pnpm run dev`

    `pnpm install packageName`

    `pnpm run build`

    etc..

## Added advantage

pnpm comes with an added benefit apart from saving space. It is faster than npm & yarn. See the benchmark results [here](https://github.com/pnpm/benchmarks-of-javascript-package-managers)

Overall, I'm having great experience using pnpm. Hope you guys also like using it. 

If you found the article useful, please like, share and subscribe to my newsletter. That motivates me to write more..!

[edit this page on github](https://github.com/KirankumarAmbati/KirankumarAmbati.github.io/tree/master/content/blog/pnpm/index.md)