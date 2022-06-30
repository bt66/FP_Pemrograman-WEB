const express = require("express");
const app = express();
const port = 3000;
const customerRouter = require("./routes/products_route");
const AboutMeViewRouter = require("./routes/aboutMeViewSetting_route");
const homeViewRouter = require("./routes/homeViewSetting_route");
const contactRouter = require("./routes/contacts_route");
const mediaTransmissionRouter = require("./routes/mediaTransmission_route");
const productsRouter = require("./routes/products_route");
const taskRouter = require("./routes/tasks_route");
const teamRouter = require("./routes/team_route");

app.use(express.json());

app.use("/products", customerRouter)

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});