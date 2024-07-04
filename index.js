const express = require("express");
const mongoose = require("mongoose");
const authRouter = require("./authRouter");
const PORT = process.env.PORT || 5001;

const app = express();

app.use(express.json());
app.use("/auth", authRouter);

const start = async () => {
  try {
    await mongoose.connect(
      `mongodb+srv://plotkin2016:${encodeURIComponent(
        "T0uMfLVNiKCBBt0O"
      )}@cluster.js7pyzz.mongodb.net/mydatabase?retryWrites=true&w=majority&appName=Cluster`
    );
    app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
  } catch (e) {
    console.log(e);
  }
};

start();

const uri = `mongodb+srv://plotkin2016:${encodeURIComponent(
  "T0uMfLVNiKCBBt0O"
)}@cluster.js7pyzz.mongodb.net/mydatabase?appName=Cluster`;
