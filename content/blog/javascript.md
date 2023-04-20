---
date: 2023-04-19
title: Javascript
description: javascript
---

## arrow function

* not have self `this`, `arguments`, `super`, is suitable for annoumous function

```javascript
var elements = [1, 2, 3]

// general function
elements.map(function(element) {
        return element.length
    })

// arrow function
elements.map((element) => {
        return element.length
    })

// or shorter arrow function
element.map(element => element.length)
```

### why arrow function

* shortable and less function and not have `this`

```javascript
() => { statements }
(params, ) => { statements } // if just have one params, this first brackets is optional, but if no params, should add empty double brackets
```

## Prototype

### Code

```javascript
// Person.js
export default class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

// main.js
import Person from "./Person.js";
Person.prototype.nickname = null;

const father = new Person("Tom", 99, "tom");
const mother = new Person("Jim", 100, "jim");

console.log(father.name, father.age, father.nickname);
console.log(mother.name, mother.age, mother.nickname);

// output
Tom 99 null
Jim 100 null
```

## Summary

> 原型对象的作用，就是定义所有实例对象共享的属性和方法( Java's 类静态变量)

## Reference

* https://javascript.ruanyifeng.com/oop/prototype.html
* https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Functions/Arrow_functions
