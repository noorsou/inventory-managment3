const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const UserpRoutes = require('./routes/UserRoutes');

const app = express();
const port = 5000;

app.use(cors());
app.use(bodyParser.json());

app.use('/api', UserRoutes); 

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
