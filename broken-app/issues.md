# Broken App Issues
* Not assigning the error with catch(err)
* The output wasn't in with the async function.
* Nothing installed
* Incorrect variable declarations:
let axios = require('axios'); -> const axios
var app = express(); -> const app
* Should use more descriptive variable names other than d and r 
* Could use the built-in .json method from express instead of JSON.stringify

```js
const express = require('express');
let axios = require('axios');
var app = express();

app.post('/', function(req, res, next) {
  try {
    let results = req.body.developers.map(async d => {
      return await axios.get(`https://api.github.com/users/${d}`);
    });
    let out = results.map(r => ({ name: r.data.name, bio: r.data.bio }));

    return res.send(JSON.stringify(out));
  } catch {
    next(err);
  }
});

app.listen(3000);
```
