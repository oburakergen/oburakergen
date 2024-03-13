import { defineMongooseModel } from "#nuxt/mongoose";
import { Document } from "mongoose";
import { type IContact, Status } from "../interfaces/contact.interface";

interface Contact extends IContact, Document {}

export const ContactModel = defineMongooseModel<Contact>("Contact", {
  name: {
    type: String,
    required: true,
    length: 150,
  },
  email: {
    type: String,
    required: true,
    length: 150,
  },
  message: {
    type: String,
    required: true,
  },
  ip: {
    type: String,
  },
  active: {
    type: String,
    enum: Object.values(Status),
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});
