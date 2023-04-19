---
date: 2023-04-19
title: Javascript
description: javascript
---

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

https://javascript.ruanyifeng.com/oop/prototype.html
