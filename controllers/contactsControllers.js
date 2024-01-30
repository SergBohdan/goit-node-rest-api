import contactsService from '../services/contactsServices.js';
import { createContactSchema, updateContactSchema } from '../schemas/contactsSchemas.js';
import validateBody from '../helpers/validateBody.js';

export const getAllContacts = (_, res) => {
  const allContacts = contactsService.listContacts();
  res.json(allContacts);
};

export const getOneContact = (req, res) => {
  const { id } = req.params;
  const contact = contactsService.getContactById(id);
  if (contact) {
    res.json(contact);
  } else {
    res.status(404).json({ message: 'Not found' });
  }
};

export const deleteContact = (req, res) => {
  const { id } = req.params;
  const removedContact = contactsService.removeContact(id);
  if (removedContact) {
    res.json(removedContact);
  } else {
    res.status(404).json({ message: 'Not found' });
  }
};

export const createContact = [
  validateBody(createContactSchema),
  (req, res) => {
    const newContact = contactsService.addContact(req.body);
    res.status(201).json(newContact);
  },
];

export const updateContact = [
  validateBody(updateContactSchema),
  (req, res) => {
    const { id } = req.params;
    const updatedContact = contactsService.updateContact(id, req.body);
    if (updatedContact) {
      res.json(updatedContact);
    } else {
      res.status(404).json({ message: 'Not found' });
    }
  },
];
