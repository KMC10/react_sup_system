import express from "express";
import log_router from "./login_route.js";
import router from "./check_route.js"
import cors from "cors";
import dotenv from "dotenv";

const app = express();
const port = 5000;
app.use(cors());
app.use(express.json());

app.use("/api/auth", log_router);
app.use("/attendance", router);

app.listen(port, ()=>{
    console.log(`The server is running at port ${port}`);
})