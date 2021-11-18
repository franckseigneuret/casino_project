const mongoose = require('mongoose');

// useNewUrlParser ;)
var options = {
  connectTimeoutMS: 5000,
  useNewUrlParser: true,
  useUnifiedTopology: true
};

const USERNAME_1 = process.env.USERNAME_1
const PASSWORD_1 = process.env.PASSWORD_1
const CLUSTER_NAME = process.env.CLUSTER_NAME
const DATABASE = process.env.DATABASE
// --------------------- BDD -----------------------------------------------------

mongoose.connect(`mongodb+srv://${USERNAME_1}:${PASSWORD_1}@${CLUSTER_NAME}.mongodb.net/${DATABASE}?retryWrites=true&w=majority`,
  options,
  function (err) {
    if (err) {
      console.log(`error, failed to connect to the database because --> ${err}`);
    } else {
      console.info(`*** Database ${DATABASE} connection : Success ***`);
    }
  }
);

module.exports = mongoose
