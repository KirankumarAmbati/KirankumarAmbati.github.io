---
title: ES Next Series - 2. The FAT Arrow 
date: "2019-04-09T10:28:52.169Z"
tags: ["JavaScript", "JS", "ES6","ES7", "ES8", "ESNext", "Arrow Functions"]
---


Arrow functions or the **FAT** arrow functions were introduced as a part of ES6. Along with making a regular function more concise, it has more features added to it. Let's dive deep into them in this article.

# tl;dr

Functions are mainly used in 3 ways:

1. Object methods
2. Non-methods
3. Constructors

> Use regular functions for methods and constructors. Use arrow functions for non-methods. In other words, arrow functions are to be used when we need lexical **`this`** and regular functions are to be used when we need dynamic `this`

Lets get into details

Syntax
-----

Arrow functions have a concise syntax and make the function more easy to read.

Eg:

```js
users.map(function(user){
    console.log(user.name)
})
```
vs

```js
users.map(user => console.log(user.name))
```

### Usage of arrow function with parameters:

**No param:**

`() => {} // paranthesis are mandatory`

**One param:**

`(param) => {}`   

*OR* 

`param => {} // paranthesis are optional here`

**More than one param:**

`(param1, param2) => {} // paranthesis are mandatory`

### Implicit VS Explicit return:

Using arrow functions, we can return the required value from a function in two different ways: implicit and explicit.


1. Implicit return: 

`var x = () => 2 // Value 2 is returned from function implicitly when invoked without us writing a return statement`

2. Explicit return:

```js
var x = () => {
    return 2; // explicitly returning 2.
}
```

Apart from having the concise method syntax, an arrow function do NOT have access to `this`, `arguments`, `super` and `new.target` inside it. No need of binding `this` to a method while invoking it is a boon as well as a bane depending on the place where an arrow function is used.

### Advantages

1. No need to bind `this`
2. Methods are concise and easier to understand

#### Pitfalls:

1. We can **NOT** return a JS object implicitly. 

ie. `() => {} // This fails since this signature is same as the empty function with explicit return.`

To make it work as expected, the returning object has to be wrapped within paranthesis. The function signature look like:

`() => ({}) // this works as expected`

2. Arrows functions can **NOT** be used as object methods.

```js
var character1 = {
    lives: 10,
    hitObject: function(){
        this.lives--
    }
}

character1.hitObject();
console.log(character1) // {lives: 9, hitObject: f}


var character2 = {
    lives: 10,
    hitObject: () => this.lives--
}

character2.hitObject()
console.log(character2) // {lives: 10, hitObject: f}
```

The logged output in the second case is different from expected. This happens because `this` binding in arrow function happens differently than in the regular functions.

In regular function, `this` is determined by the context of the function call. ie. `this` inside hitObject method points to `character1` object when invoked as `character1.hitObject()`. But in the second case, `this` is not pointed `character2`, instead it points to `Window` object. `this`, in case of arrow function, is determined by the lexical scope where the object is declared ie. global `Window`

3. Arrow functions can **NOT** be used as constructors.

```js
function PersonNormal(){}

new PersonNormal() // returns an empty object {}

```

The above lines works perfectly well. But the below code doesn't.

```js
var PersonArrow = () => {}
new PersonArrow() // Uncaught TypeError: PersonArrow is not a constructor
```

The `new` keyword failed because arrow functions do **NOT** have __ __proto__ __ and hence they don't support inheritance. To verify this fact, `console.log(PersonArrow.prototype)` and verify. The output will be `undefined`.

4. `yield` can **NOT** be used within an arrow function and hence arrow functions can **NOT** be used as `generators`


5. 
```js
var fun = (a, b, c)
            => 7
```

The above code fails. Instead, the splitting can be done as:

```js
var fun = (
    a,
    b,
    c
) => 7
```

**Note:** This is done by keeping the future improvements in mind. It is expected that 'headless' arrow functions may be introduced in the later versions of JavaScript. ie. We may have arrow functions that look like 

` => 2 // No params`

If that is the case, the above example 

```js
var fun = (a, b, c)
            => 7
```

will be interpreted differently and the code becomes buggy. Hence, the restriction.


6. The arrow function has an 'arrow'. Hence, it has to be used with some extra caution when used with other operators.

```js
typeof () => {} // Uncaught SyntaxError: Malformed arrow function parameter list

typeof (() => {}) // function
```

In case 1, typeof has higher precedence than = and hence execution happens differently than expected. To avoid that, we have to wrap the arrow function in paranthesis, as in case 2.

7. Arrow functions are **anonymous**. Hence, they are:

a. Harder debugging.

b. No-self referencing.

Thank you for making till the end of this lengthy article.

If you enjoy this article, please express your LOVE by liking it and sharing it to others. That keeps me motivated and helps me in writing more such articles. Thank you!
