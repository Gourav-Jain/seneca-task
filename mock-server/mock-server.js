const jsonServer = require("json-server");
const server = jsonServer.create();
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(jsonServer.bodyParser);

server.get("/questions", (req, res) => {
  setTimeout(() => {
    res.status(200).jsonp([
      {
        question: "What are the ideal conditions inside an office?",
        options: [
          ["Good pay", "Bad pay"],
          ["Less meetings", "Lot of meetings"],
          ["Free coffee", "Expensive coffee"],
          ["Bear in office", "Dog in office"],
        ],
        default: [
          "Bad pay",
          "Less meetings",
          "Expensive coffee",
          "Dog in office",
        ],
        answers: [
          "Good pay",
          "Lot of meetings",
          "Free coffee",
          "Dog in office",
        ],
        correct: false,
        background: "incorrect",
      },
      {
        question: "An animal cell contains?",
        options: [
          ["Cell wall", "Ribosome"],
          ["Cytoplasm", "Chloroplast"],
          ["Partially premeable membrane", "Impremeable membrane"],
          ["Cellulose", "Mitochondria"],
        ],
        default: [
          "Ribosome",
          "Chloroplast",
          "Impremeable membrane",
          "Mitochondria",
        ],
        answers: [
          "Ribosome",
          "Chloroplast",
          "Partially premeable membrane",
          "Mitochondria",
        ],
        correct: false,
        background: "incorrect",
      },
    ]);
  }, 900);
});

server.listen(3001, () => {
  console.log("Mock Server is running at http://localhost:3001/");
});
