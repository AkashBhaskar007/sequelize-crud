const express = require("express");
const app = express();
const db = require("./models");
const PORT = process.env.PORT || 3000;


app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const api = require("./routes/api");
app.use("/api", api);


db.sequelize.sync().then(() => {
    app.listen(PORT, () => {
        console.log("PORT IS RUNNING AT : ", PORT);
    })
})