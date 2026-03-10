export function extractQuestion(data, nbQuestion) {
  const question = data[nbQuestion - 1].question;
  return question;
}

export function extractOptions(data, nbQuestion) {
  const options = data[nbQuestion - 1].options;
  return options;
}

export function extractCorrectIndex(data, nbQuestion) {
  const correctIndex = data[nbQuestion - 1].correctIndex;
  return correctIndex;
}
