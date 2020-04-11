const dotenv = require('dotenv');
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
import router from './routes/routes';

dotenv.config();
const port = process.env.PORT || 3000;

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
 router(app);

app.use('*', (req, res) =>
  res.send({
    message: 'The API route you requested does not exist',
  })
);
app.listen(port, () => console.log(`Habit tracker app listening on port ${port}`));
export default app;