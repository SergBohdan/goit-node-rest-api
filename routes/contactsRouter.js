import express from "express";
import { contactsControllers } from "../controllers/contactsControllers.js";
import { isValidId, validateBody } from "../middlewares/index.js";
import { addSchema, updateFavoriteSchema } from "../models/Contact.js";

const router = express.Router();
const { listContacts, getContactById, addContact, updateContact, updateStatusContact, removeContact } = contactsControllers;

router.get("/", listContacts);

router.get("/:id", isValidId, getContactById);

router.post("/", validateBody(addSchema), addContact);

router.put("/:id", isValidId, updateContact);

router.patch("/:id/favorite", isValidId, validateBody(updateFavoriteSchema), updateStatusContact);

router.delete("/:id", isValidId, removeContact);

export default router;
