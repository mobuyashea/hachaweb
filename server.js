const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const HachaFood = require("./models/hachafood");
const dotenv = require("dotenv");
dotenv.config();
const port = process.env.PORT || 8080;

mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("連結到mongoDB...");
  })
  .catch((e) => {
    console.log(e);
  });

//middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

//get
app.get("/hachawebapi/hachafoods", async (req, res) => {
  try {
    let hachatData = await HachaFood.find({}).exec();
    return res.send(hachatData);
  } catch (e) {
    return res.status(500).send("尋找資料時發生錯誤。。。");
  }
});

//getone
app.get("/hachawebapi/hachafoods/:_id", async (req, res) => {
  try {
    let { _id } = req.params;
    let foundHacha = await HachaFood.findOne({ _id }).exec();
    return res.send(foundHacha);
  } catch (e) {
    return res.status(500).send("尋找資料時發生錯誤。。。");
  }
});

//post
app.post("/hachawebapi/hachafoods", async (req, res) => {
  try {
    let { name, priceA, priceB, type } = req.body;
    let newHachaFood = new HachaFood({
      name,
      priceA,
      priceB,
      type,
    });
    let savedHachaFood = await newHachaFood.save();
    return res.send({
      msg: "資料儲存成功",
      savedObject: savedHachaFood,
    });
  } catch (e) {
    return res.status(500).send("儲存資料時發生錯誤。。。");
  }
});

app.put("/hachawebapi/hachafoods/:_id", async (req, res) => {
  try {
    let { _id } = req.params;
    let { name, priceA, priceB, type } = req.body;
    let newHachaFood = await HachaFood.findOneAndUpdate(
      { _id },
      { name, priceA, priceB, type },
      {
        new: true,
        runValidators: true,
        overwrite: true,
        //因為http put request要求客戶端提供所有數據
        //所以我們需要根據客戶端提供的數據來更新資料庫
      }
    ).exec();
    return res.send({ msg: "成功更新品項資料", newHachaFood });
  } catch (e) {
    return res.status(400).send(e);
  }
});

app.delete("/hachawebapi/hachafoods/:_id", async (req, res) => {
  try {
    let { _id } = req.params;
    let deleteResult = await HachaFood.deleteOne({ _id }).exec();
    return res.send(deleteResult);
  } catch (e) {
    console.log(e);
    return res.status(500).send("無法刪除品項。。。");
  }
});

//不要用到port3000,要跟react錯開
app.listen(port, () => {
  console.log("後端伺服器聆聽在port8080...");
});
