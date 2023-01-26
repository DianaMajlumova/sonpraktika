const mongoose = require("mongoose");
const cors = require("cors");
const express = require("express");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");

dotenv.config();
const app = express();
app.use(cors());
app.use(bodyParser.json());

const { Schema } = mongoose;
const cardSchema = new Schema(
  {
    image:{type:String},
    categories: { type: String },
    name: { type: String },
    price: { type: String },
  },
  { timestamps: true }
);
const cards = mongoose.model("cards", cardSchema);

const PORT = process.env.PORT;
const url = process.env.CONNECTION_URL.replace(
  "<password>",
  process.env.PASSWORD
);

//GetAllCard

app.get("/cards", (req, res) => {
  cards.find({}, (err, docs) => {
    if (!err) {
      res.send(docs);
    } else {
      res.send(404).json({ message: err });
    }
  });
});

//GetUserById
app.get("/cards/:id", (req, res) => {
  const { id } = req.params;
  cards.findById(id, (err, doc) => {
    if (!err) {
      res.send(doc);
    } else {
      res.send(404).json({ message: err });
    }
  });
});

//Detele
app.delete("/cards/:id", (req, res) => {
  const { id } = req.params;
  cards.findByIdAndDelete(id, (err, doc) => {
    if (!err) {
      res.send("Deleted");
    } else {
      res.send(404).json({ message: err });
    }
  });
});

//Update

app.put("/cards/:id", (req, res) => {
  const { id } = req.params;
  let card = {
    image:req.body.image,
    categories: req.body.categories,
    name: req.body.name,
    price: req.body.price,
  };
  cards.findByIdAndUpdate(id,card, (err, doc) => {
    if (!err) {
      res.json(doc);
    } else {
      res.send(404).json({ message: err });
    }
  });
});

//POST
app.post("/cards", (req, res) => {
  let card = new cards({
    image:req.body.image,
    categories: req.body.categories,
    name: req.body.name,
    price: req.body.price,
  });
  card.save();
  res.send(card);
});

app.get("/", (req, res) => {
  res.send("Hello World!");
});
mongoose.set("strictQuery", true);
mongoose.connect(url).then(() => console.log("Connected"));
app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
