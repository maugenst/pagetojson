# pagetojson
Convert HTML page parts provided in an Object Array into JSON objects:

## Installation

```bash
npm install pagetojson
```

## Usage

```javascript
const pagetojson = require('../lib/pagetojson');

const converted = pagetojson.convert('HTML-STRING', {
    tags: ['table', 'ol', 'ul']
})

console.log(converted)

// Result:
{
    table: [
        0: [...]
        1: [...]
        2: [...]
    ],
     ol: [
        0: [...]
        1: [...]
        2: [...]
    ],
    ul: [
         0: [...]
         1: [...]
         2: [...]
    ]
}

```

# Abstraction

Providing an Abstraction layer for implementing own "toJson"-conversions. Once 
a reference to pagetojson is defined a package can extend `AbstractToJson` and must implement
the two methods `convert` and `convertUrl`.

