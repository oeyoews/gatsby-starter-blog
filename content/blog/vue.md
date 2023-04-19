---
date: 2023-04-19
title: Vue
description: vue
---

* insert

```vue
<h1> {{msg}} </h1>
```

* command

```vue
<!-- single data bind v-bind -->
<a <v-bind>:href="url"> xxx </a>
<!-- v-model double data bind -->
v-model just use form data(input element, such as form, select, textarea)
v-model="xxx" === v-model:value="xxx"
```

* vue manage es5 funciton, not es6 arrow function
