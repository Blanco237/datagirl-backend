const express = require("express");
const dotenv = require('dotenv');
const cors = require('cors');

const { sendWelcomeMail } = require("./services/mailer");

const verificationMiddleware = require("./middlewares/verification");

const usersRouter = require("./routes/usersRouter");
const mathRouter = require("./routes/mathRouter");
const caseRouter = require("./routes/caseRouter");
const doctorRouter = require('./routes/doctorRouter')
const patientRouter = require('./routes/patientRouter');
const authRouter = require('./routes/authRouter')

dotenv.config();

const db = require("./models");

const PORT = 5500;

const app = express();

app.use(cors());

app.use(express.json());

app.use('/auth', authRouter)

app.use(verificationMiddleware);

app.use("/users", usersRouter);
app.use("/math", mathRouter);
app.use("/case", caseRouter);
app.use('/doctor', doctorRouter);
app.use('/patient', patientRouter);

db.sequelize.sync().then(() => {
  console.log("Database Connected");
  app.listen(PORT, () => {
    console.log(`Server running ${PORT}`);
    sendWelcomeMail('asongrandy9@gmail.com')
  });
});
