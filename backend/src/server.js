const express = require('express');
const cors = require("cors");
const userRoutes = require("./routes/userRoutes");
const userMatchRoutes = require("./routes/userMatchRoutes");
const bodyParser = require('body-parser');

const app = express();
 
app.use(cors());
app.use(bodyParser.json());

app.use("/users", userRoutes);
app.use("/matches", userMatchRoutes);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});