---
title: ES Next Series - 3. War - var, let, const
date: "2019-04-28T10:28:52.169Z"
tags: ["JavaScript", "JS", "ES6","ES7", "ES8", "ESNext", "Arrow Functions"]
---


Arrow functions or the **FAT** arrow functions were introduced as a part of ES6. Along with making a regular function more concise, it has more features added to it. Let's dive deep into them in this article.

# tl;dr

> Use **`const`** when you are not going to reassign the variable to another reference.
 Use **`let`**  in all other cases.
 Never use `var`. Period.

Ever since ES6 has introduced `let` and `const`, there has been a constant battle of which one to use in which case. There are different opinions on this. Putting that aside, let us explore the differences and on how to use them in different scenarios.

# var

It is being used ever since JavaScript came into existence. So, it is very much familiar to all the developers.

Here are few points about `var`:

* `var` is global/function scoped.
*  Variables declared with `var` are hoisted (Topic for another article) and can be referrenced before it's declaration.

# let

`let` is a new keyword introcuded in ES6, which is similar to `var` with some added advantages.

* `let` is block-scoped.

![image](let-globe.png)
 
If you enjoy this article, please express your LOVE by liking it and sharing it to others. That keeps me motivated and helps me in writing more such articles. Thank you!