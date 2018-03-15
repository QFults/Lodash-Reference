# Lodash Reference

### This Console Application Will Display The Code For Any Function Called By Lodash

## Installation
1. Clone Repo To Your Device : `git clone [link]`
2. Install Dependencies : `npm install`
3. Start Application : `node app.js`

#### User Input : 
```
minBy
```

#### Result : 
```javascript
function minBy(array, iteratee) {
      return (array && array.length)
        ? baseExtremum(array, getIteratee(iteratee, 2), baseLt)
        : undefined;
    }
```
