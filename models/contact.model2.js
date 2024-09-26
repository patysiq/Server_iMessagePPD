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

const Contact2 = mongoose.model("agenda2", ContactSchema);

module.exports = Contact2;