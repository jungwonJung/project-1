const express = require("express");
const app = express();
const cors = require("cors");
const http = require("http");
const db = require("./db.js");
const https = require("https");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const swaggerJsdoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

db();
app.use(express.json());

app.use(cors());

app.use("/api", require("./routes/admin.route"));
// app.use("/api", require("./routes/stuff.route"));

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "jungwon swggaer API",
      version: "0.0.1",
      description: "반려동물 사이즈 체크 swagger 입니다",

      contact: {
        name: "정정원",
        email: "wjdwjd1501@gmail.com",
      },
    },
  },
  apis: ["./swagger/index.js"],
};

const specs = swaggerJsdoc(options);
app.use("/api", swaggerUi.serve, swaggerUi.setup(specs));
app.listen(3030, () => {
  console.log("Express App on port 3030!");
});

module.exports = app;
