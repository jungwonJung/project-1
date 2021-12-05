const express = require("express");
const app = express();
const mongoose = require("mongoose");
const swaggerJsdoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");
const bodyParser = require("body-parser");
const db = require("./db.js");
const http = require("http");
const https = require("https");
const cors = require("cors");

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
    servers: [
      {
        url: "http://localhost:3030/api",
      },
    ],
  },
  apis: ["./swagger/index.js"],
};

const specs = swaggerJsdoc(options);
app.use("/api", swaggerUi.serve, swaggerUi.setup(specs));
app.listen(3030, () => {
  console.log("Express App on port 3030!");
});
