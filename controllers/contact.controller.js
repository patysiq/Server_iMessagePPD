const Contacts = require("../models/contact.model");

const getContact1 = async (req, res) => {
  try {
    const contacts = await Contacts.find({});
    res.status(200).json(contacts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const createContact1 = async (req, res) => {
  try {
    const contact = await Contacts.create(req.body);
    res.status(200).json(contact);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updatedContact1 = async (req, res) => {
  try {
    const { id } = req.params;

    const contact = await Contacts.findByIdAndUpdate(id, req.body);

    if (!contact) {
      return res.status(404).json({ message: "Contact not found" });
    }

    const updatedContact = await Contacts.findById(id);
    res.status(200).json(updatedContact);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteContact1 = async (req, res) => {
  try {
    const { id } = req.params;

    const contact = await Contacts.findByIdAndDelete(id);

    if (!contact) {
      return res.status(404).json({ message: "Contact not found" });
    }

    res.status(200).json({ message: "Contact deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getContact1,
  createContact1,
  updatedContact1,
  deleteContact1,
};