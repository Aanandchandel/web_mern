const cors = require("cors");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Product = require("./models/product.js");
const User = require("./models/user.js");
const Url = process.env.URL;
// const urlocal=process.env.urlocal
// const urlocal="mongodb://localhost:27017/admin"
const PORT = process.env.PORT;

app.use(express.json());
app.use(cors());

app.post("/reg", async (req, resp) => {
  const data1 = req.body;
  const data = new User(data1);
  console.log("done", data1);
  data
    .save()
    .then(() => {
      resp.status(200).send({ message: "done" });
    })
    .catch((e) => {
      resp.status(500);
    });
  // .json({message:await User.find()})
  // resp.status(200).send({message:"done"})
});

app.post("/Login", async (req, resp) => {
  let data = req.body;
  // try{}catch(err){
  console.log("done");
  // }
  if (req.body.password && req.body.email) {
    let result = await User.findOne(data).select("-password");
    result
      ? resp.status(200).json({ message: "success", ...result })
      : resp.status(202).json({ message: "not found" });
  } else {
    resp.status(404).json({ message: "wrong email or password" });
  }
  // .select("-password");
  // user?resp.status(202).json({message:"not found"}):
  // resp.send(user);
});

app.post("/product/add", async (req, res) => {
  let data = req.body;
  Product.create(data)
    .then(() => {
      res.status(200).json({ message: "success" });
    })
    .catch((e) => {
      res.status(500).json({ message: "faild" });
    });
  console.log("done");
});

app.get("/product",async(req,resp)=>{
  let data= await Product.find()
  resp.status(200).json(data)
  console.log("get")
})

mongoose.connect(Url).then(() => {
  console.log("connected to db");
});

app.listen(PORT, () => {
  console.log("port running on 3001");
});
