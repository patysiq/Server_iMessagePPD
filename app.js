const express = require("express");
const mongoose = require("mongoose");
const Contact = require("./models/contact.model.js");
const Contact2 = require("./models/contact.model2.js");
const Contact3 = require("./models/contact.model3.js");
const app = express();

// middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}));


app.get("/", (req, res) => {
  res.send("Hello from Node API Server Updated");
});

app.get("/agenda1", async (req, res) => {
  try {
    const contact = await Contact.find({});
    res.status(200).json(contact);
  } catch (error) {
    res.status(500).json({message: error.message});
  }
});

app.get("/agenda2", async (req, res) => {
  try {
    const contact = await Contact2.find({});
    res.status(200).json(contact);
  } catch (error) {
    res.status(500).json({message: error.message});
  }
});

app.get("/agenda3", async (req, res) => {
  try {
    const contact = await Contact3.find({});
    res.status(200).json(contact);
  } catch (error) {
    res.status(500).json({message: error.message});
  }
});

app.post("/agenda1", async (req, res) => {
  try {
    const contact = await Contact.create(req.body);
    const contact2 = await Contact2.create(req.body);
    const contact3 = await Contact3.create(req.body);
    res.status(200).json(contact);
  } catch (error) {
    res.status(500).json({message: error.message});
  }
});

app.post("/agenda2", async (req, res) => {
  try {
    const contact = await Contact.create(req.body);
    const contact2 = await Contact2.create(req.body);
    const contact3 = await Contact3.create(req.body);
    res.status(200).json(contact);
  } catch (error) {
    res.status(500).json({message: error.message});
  }
});

app.post("/agenda3", async (req, res) => {
  try {
    const contact = await Contact.create(req.body);
    const contact2 = await Contact2.create(req.body);
    const contact3 = await Contact3.create(req.body);
    res.status(200).json(contact);
  } catch (error) {
    res.status(500).json({message: error.message});
  }
});

app.put("/agenda1/:id", async (req,res) => {
  try {
    const { id } = req.params;

    const contact = await Contact.findByIdAndUpdate(id, req.body);
    const contact2 = await Contact2.findByIdAndUpdate(id, req.body);
    const contact3 = await Contact3.findByIdAndUpdate(id, req.body);

    if (!contact) {
      return res.status(404).json({ message: "Contact not found" });
    }

    const updatedContact = await Contact.findById(id);
    res.status(200).json(updatedContact);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.put("/agenda2/:id", async (req,res) => {
  try {
    const { id } = req.params;

    const contact = await Contact.findByIdAndUpdate(id, req.body);
    const contact2 = await Contact2.findByIdAndUpdate(id, req.body);
    const contact3 = await Contact3.findByIdAndUpdate(id, req.body);

    if (!contact) {
      return res.status(404).json({ message: "Contact not found" });
    }

    const updatedContact = await Contact.findById(id);
    res.status(200).json(updatedContact);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.put("/agenda3/:id", async (req,res) => {
  try {
    const { id } = req.params;

    const contact = await Contact.findByIdAndUpdate(id, req.body);
    const contact2 = await Contact2.findByIdAndUpdate(id, req.body);
    const contact3 = await Contact3.findByIdAndUpdate(id, req.body);

    if (!contact) {
      return res.status(404).json({ message: "Contact not found" });
    }

    const updatedContact = await Contact.findById(id);
    res.status(200).json(updatedContact);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.delete("/agenda1/:id", async (req,res) => {
  try {
    const { id } = req.params;

    const contact = await Contact.findByIdAndDelete(id);
    const contact2 = await Contact2.findByIdAndDelete(id);
    const contact3 = await Contact3.findByIdAndDelete(id);

    if (!contact) {
      return res.status(404).json({ message: "Contact not found" });
    }

    res.status(200).json({ message: "Contact deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
})

mongoose.connect('mongodb+srv://patysiq1001:Vr6ds0QVgDo7RaZf@crud-contact.fwxpx.mongodb.net/data?retryWrites=true&w=majority&appName=crud-contact')
.then(() => {
    console.log('Connected database');
    app.listen(3000, () => {
        console.log("Server Listening on PORT: 3000");
    });
}).catch(() => {
    console.log('Connection failed!');
});