const express = require("express");
const app = express();
app.use(express.json());
const icecreamshopRoutes = require("./Routes/icecreamshop");

const port = 5050;

app.use("/", express.static("./public"));
app.use("/api/icecreamshops", icecreamshopRoutes);

app.listen(port, () => {
  console.log(`Server is up on port ${port}`);
});