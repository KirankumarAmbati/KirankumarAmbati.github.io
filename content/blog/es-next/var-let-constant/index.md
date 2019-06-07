---
title: ES Next Series - 3. var, let or const ?
date: "2019-05-09T10:28:52.169Z"
tags: ["JavaScript", "JS", "ES6","ES7", "ES8", "ESNext", "var", "let", "const", "Usage of var, let and const", "Latest feature of JavaScript", "Latest feature of ECMAScript"]
---


Ever since ES6 has introduced `let` and `const`, there has been a constant battle of which one to use in which case. There are different opinions on this. Putting that aside, let us explore the differences and on how to use them in different scenarios.

# tl;dr

> Use **`const`** when you are not going to reassign the variable to another reference.
 Use **`let`**  in all other cases.
 Never use `var`. Period.

# var

It is being used ever since JavaScript came into existence. So, it is very much familiar to all the developers.

Here are few points about `var`:

* `var` is global/function scoped.
*  Variables declared with `var` are hoisted (Topic for another article) and can be referrenced before it's declaration.

# let

`let` is a new keyword introduced in ES6, which is similar to `var` with some added advantages.

* `let` is block-scoped.

![image](https://github.com/KirankumarAmbati/KirankumarAmbati.github.io/blob/master/content/blog/es-next/var-let-constant/images/let_block_scope.png?raw=true)

* `let` Variable declared outside of any function will be treated as global variable, same as `var` with a difference. Variable declared as `let` will not be added to Window object.

![image](https://github.com/KirankumarAmbati/KirankumarAmbati.github.io/blob/master/content/blog/es-next/var-let-constant/images/let_globe.png?raw=true)

* Variable declared as `let` can NOT be redeclared.

![image](https://github.com/KirankumarAmbati/KirankumarAmbati.github.io/blob/master/content/blog/es-next/var-let-constant/images/let_hoisting.png?raw=true)

* Variable declared as `let` will NOT be hoisted. The region from the start of the block, till the declaration of variable is called **Temporal Dead Zone**. The variable can not be accessed in this temporal dead zone. It can only be used once it is declared.

![image](https://github.com/KirankumarAmbati/KirankumarAmbati.github.io/blob/master/content/blog/es-next/var-let-constant/images/let_hoisting.png?raw=true)

# const

* `const` has to be initialized when it is declared.

![image](https://github.com/KirankumarAmbati/KirankumarAmbati.github.io/blob/master/content/blog/es-next/var-let-constant/images/const_no_init.png?raw=true)

* `const` makes a variable reference immutable. ie. you can NOT reassign a const with another reference.

![image](https://github.com/KirankumarAmbati/KirankumarAmbati.github.io/blob/master/content/blog/es-next/var-let-constant/images/const_reassign.png?raw=true)

### Pitfall:

`const` makes variable reference immutable but not it's value. ie. properties of an object declared using `const` can be modified.

![image](https://github.com/KirankumarAmbati/KirankumarAmbati.github.io/blob/master/content/blog/es-next/var-let-constant/images/const_prop_change.png?raw=true)



# Closures

![image](https://github.com/KirankumarAmbati/KirankumarAmbati.github.io/blob/master/content/blog/es-next/var-let-constant/images/let_closures.png?raw=true)

**Explanation:** `var` makes the variable `i` closed over the loop whereas `let` makes the variable block-scoped.

Hope you liked this article. If I miss any important point, please drop a comment so that the users won't miss that. :)

If you enjoy this article, please express your LOVE by liking it and sharing it to others. That keeps me motivated and helps me in writing more such articles. Thank you!