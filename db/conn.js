const mongoose = require("mongoose");



mongoose
  .connect("mongodb+srv://abhishek:devil@cluster0.pm0inlu.mongodb.net/?retryWrites=true&w=majority", { useNewUrlParser: true })
  .then(() => {
    console.log(`connection sucessful`);
  })
  .catch((err) => console.log(err));
