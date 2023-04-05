# JS Extension

JavaScript(JS) Extension Function Library

## Array or Object (shallow) copy

```js
let source = {
  "name": "Cheol-soo",
  "fruit": [
    {
      "name": "apple",
      "price": 10.00,
    },
    {
      "name": "banana",
      "price": 20.00,
    },
    {
      "name": "mango",
      "price": 35.00,
    }
  ],
}
let copy = source.copy()

source.name = "Cheol-soo"
console.log(JSON.stringify(source)) // {"name":"Cheol-soo","fruit":[{"name":"apple","price":10},{"name":"banana","price":20},{"name":"mango","price":35}]}
console.log(JSON.stringify(copy))   // {"name":"Cheol-soo","fruit":[{"name":"apple","price":10},{"name":"banana","price":20},{"name":"mango","price":35}]}

copy.name = "Young-hee"
console.log(JSON.stringify(source)) // {"name":"Cheol-soo","fruit":[{"name":"apple","price":10},{"name":"banana","price":20},{"name":"mango","price":35}]}
console.log(JSON.stringify(copy))   // {"name":"Young-hee","fruit":[{"name":"apple","price":10},{"name":"banana","price":20},{"name":"mango","price":35}]}

copy.fruit[2].price = 30
console.log(JSON.stringify(source)) // {"name":"Cheol-soo","fruit":[{"name":"apple","price":10},{"name":"banana","price":20},{"name":"mango","price":30}]}
console.log(JSON.stringify(copy))   // {"name":"Young-hee","fruit":[{"name":"apple","price":10},{"name":"banana","price":20},{"name":"mango","price":30}]}
```

## Array or Object deep copy

You can copy all items of an Object.

```js
let source = {
  "ham": {
    "name": "spam",
    "price": 30.00,
  },
  "fruit": [
    {
      "name": "apple",
      "price": 10.00,
    },
    {
      "name": "banana",
      "price": 20.00,
    },
    {
      "name": "mango",
      "price": 35.00,
    }
  ],
  "toString": () => 'Cheol-soo Market price list'
}
let copy = source.deepcopy()
copy.ham.price = 50.00
copy.fruit[2].price = 40.00
copy.toString = () => 'Young-hee Market price list'
console.log(source.toString())      // Cheol-soo Market price list
console.log(JSON.stringify(source)) // {"ham":{"name":"spam","price":30},"fruit":[{"name":"apple","price":10},{"name":"banana","price":20},{"name":"mango","price":35}]}
console.log(copy.toString())        // Young-hee Market price list
console.log(JSON.stringify(copy))   // {"ham":{"name":"spam","price":50},"fruit":[{"name":"apple","price":10},{"name":"banana","price":20},{"name":"mango","price":40}]}
```

## INSTALL

```html
<html lang="en">
  <head>
    ...
    <script src="https://github.com/scorpion1201/JSExtension/blob/master/Object.ext.js"></script>
    ...
  </head>
  ...
</html>
```
