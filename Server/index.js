import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import router from "./routers/posts.js";

const app = express();

const PORT = process.env.PORT || 5000;

app.use('/posts',router)

app.use(bodyParser.json({ limit: '30mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }))
app.use(cors());

const connection_url = "mongodb://localhost:27017/datadeos";

mongoose
  .connect(connection_url, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Connected");
  })
  .catch(() => {
    console.log("No Connection");
  });

// mongoose.set("useFindAndModify", false);

app.listen(PORT, () => console.log(`server listening on localhost:${PORT}`));
