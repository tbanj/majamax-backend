
const { Genre, validate } = require("../models/genre");

function getOnlineGenre() {
    console.log("how are you");
}
function storeOnlineGenre(req, res) {
    return res.status(200).send("where");
}
module.exports = {
    getOnlineGenre,
    storeOnlineGenre
}