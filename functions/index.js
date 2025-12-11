const { onDocumentCreated } = require("firebase-functions/firestore")
const { onRequest } = require("firebase-functions/v1/https");

exports.newUser = onDocumentCreated(
    { document: "users/{userId}", region: "europe-west1" },
    async (event) => {
        console.log(event.data.data())
    });

exports.helloWorld = onRequest((request, response) => {
    logger.info("Hello logs!", { structuredData: true });
    response.send("Hello from Firebase!");
});