const express = require("express");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

const mainRouter = require("./routes/index");


app.use("/api/v1", mainRouter);

app.use("/api/v2", V2Router);

// /api/v1/user/signup
// /api/v1/user/signup
// /api/v1/user/changePassword

// /api/v1/account/transferMoney
// /api/v1/account/balance

// ! so we will create two more router

app.listen(3000);
