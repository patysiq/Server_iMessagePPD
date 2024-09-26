const mongoose = require("mongoose");
const { type } = require("os");

const ContactSchema = mongoose.Schema(
    {
      "contacts": [{
        name: {
          type: String,
          required: [true, "Please enter name"],
        },
        phone: {
          type: String,
          required: true
        }
      }]         
    }, {
      versionKey: false
  });


const Contact3 = mongoose.model("agenda3", ContactSchema);

module.exports = Contact3;