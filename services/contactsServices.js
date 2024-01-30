import { v4 as uuidv4 } from 'uuid';
import contacts from '../db/contacts.json' assert { type: 'json' };

const listContacts = () => {
  return contacts;
};

const getContactById = id => {
  return contacts.find(contact => contact.id === id);
};

const removeContact = id => {
  const index = contacts.findIndex(contact => contact.id === id);
  if (index !== -1) {
    const removedContact = contacts.splice(index, 1);
    return removedContact[0];
  }
  return null;
};

const addContact = ({ name, email, phone }) => {
  const newContact = {
    id: uuidv4(),
    name,
    email,
    phone,
  };
  contacts.push(newContact);
  return newContact;
};

const updateContact = (id, { name, email, phone }) => {
  const index = contacts.findIndex(contact => contact.id === id);
  if (index !== -1) {
    contacts[index] = {
      ...contacts[index],
      name: name || contacts[index].name,
      email: email || contacts[index].email,
      phone: phone || contacts[index].phone,
    };
    return contacts[index];
  }
  return null;
};

export default {
  listContacts,
  getContactById,
  removeContact,
  addContact,
  updateContact,
};
