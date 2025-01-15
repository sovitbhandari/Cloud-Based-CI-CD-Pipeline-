const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello World! Deployed via CI/CD pipeline');
});

const port = 80; // Change this to port 80
app.listen(port, () => {
  console.log(`App is running on port ${port}`);
});
