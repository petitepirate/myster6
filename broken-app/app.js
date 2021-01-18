const express = require('express');
let axios = require('axios');
var app = express();

app.use(express.json())

app.post('/', async function(req, res) {
  const devInfo = req.body.developers.map(async (dev) => {
    try {
      const resp = await axios.get(`https://api.github.com/users/${dev}`);
      if (resp.status !== 404) {
        return {
          bio: resp.data.bio,
          name: resp.data.name,
        };
      }
      
    } catch {
      return {message: "Username not found"};
    }
  });
  Promise.all(devInfo).then((data) => {
    return res.status(200).json(data);
  })
});

app.listen(3000);
