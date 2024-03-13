// use h3 server for crud operations for contact

// Path: server/api/contact.post.ts

import { ContactModel } from "@@/server/models/contact.model";
import { ContactCreateDto } from "@@/server/dtos/contact.dto";
import { sendJsonResponse } from "@@/server/utils/response";

export default defineEventHandler(async (event) => {
  await readValidatedBody(event, ContactCreateDto.parse)
    .catch(({ message }) => {
      return sendJsonResponse(event, 403, message);
    })
    .then(async (data) => {
      try {
        await ContactModel.create({
          ...data,
          ip: getRequestIP(event) || "ip",
        });
        return sendJsonResponse(event, 200, {
          success: true,
          message: "$t('about.title')",
        });
      } catch (e: any) {
        return sendJsonResponse(event, 400, e.message);
      }
    });
});
