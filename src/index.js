const express = require("express");
const app = express();
app.use(express.json());
const icecreamshopRoutes = require("./Routes/icecreamshop");
const icecreamshopmenuRoutes = require("./Routes/icecreamshopsmenu");

const port = 5050;

app.use("/", express.static("./public"));
app.use("/api/icecreamshops", icecreamshopRoutes);
app.use("/api/icecreamshopsmenu", icecreamshopmenuRoutes);

app.listen(port, () => {
  console.log(`Server is up on port ${port}`);
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
