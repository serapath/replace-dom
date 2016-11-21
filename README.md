# replace-dom
replace a node in the DOM with a given node

# usage
`npm install replace-dom`

```js
// prepare example
var foo = document.createElement('h1')
foo.innerHTML = 'hello foo'
var bar = document.createElement('h1')
bar.innerHTML = 'hello bar'
var element = foo
document.body.appendChild(element)

// use
var replace = require('replace-dom')
console.log(element === foo)
element = replace(element, bar)
console.log(element === bar)
```
