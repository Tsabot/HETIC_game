const mongoose = require("mongoose");

const mongoConnect = () => {
    return new Promise((res, rej) => {
        mongoose.connect(process.env.MONGO_URL, {
            useNewUrlParser: true
        })
        .then( db => res(db))
        .catch( err => rej(err));
    })
}

module.exports = mongoConnect;