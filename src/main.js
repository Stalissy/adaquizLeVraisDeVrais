import "./style.css";
import { extractQuestion, extractOptions } from "./readJson.js";

fetch("/quiz.json")
  .then((response) => response.json())
  .then((data) => {
    console.log(extractQuestion(data.questions, 4));
  })
  .catch((error) => console.error("Erreur:", error));
