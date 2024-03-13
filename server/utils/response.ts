import { type H3Event, setResponseStatus, send } from "h3";

export const sendJsonResponse = (event: H3Event, status: number, body: any) => {
  let response = body;

  if (typeof body === "object") {
    response = JSON.stringify(body);
  } else if (typeof body !== "string") {
    response = body.toString();
  }

  setResponseStatus(event, status);
  return send(event, response, "application/json");
};
