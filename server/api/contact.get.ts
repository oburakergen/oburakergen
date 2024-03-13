import { ContactModel } from "~~/server/models/contact.model";

export default defineEventHandler(async (event) => {
  const contacts = await ContactModel.find();

  return send(event, contacts, "application/json");
});
