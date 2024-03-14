export default defineEventHandler(async (event) => {
  return sendJsonResponse(event, 200, {
    title: "about.title",
  });
});
