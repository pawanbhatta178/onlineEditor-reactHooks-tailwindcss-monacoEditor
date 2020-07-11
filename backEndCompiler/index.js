var express = require("express");
const { c, cpp, node, python, java } = require("compile-run");
const bodyParser = require("body-parser");
const cors = require("cors");

var app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors({ origin: true }));

const compile = async ({ code, langType }) => {
  switch (langType) {
    case "node":
      return node.runSource(code);
      break;
    case "python":
      return python.runSource(code);
      break;
    case "java":
      return java.runSource(code);
      break;
    case "cpp":
      return cpp.runSource(code);
      break;
    case "c":
      return cpp.runSource(code);
  }
};

app.post("/", function ({ body }, res) {
  compile(body)
    .then((result) => {
      res.send(result); //result object
    })
    .catch((err) => {
      res.send(err);
    });
});

app.listen(9000, function () {
  console.log("Example app listening on port 9000!");
});
