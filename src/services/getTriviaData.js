const url = "https://opentdb.com/api.php?amount=5&category=9&difficulty=easy&type=multiple"

export default function getTriviaData() {
  return fetch(url)
    .then(res => res.json())
    .then(res => res.results)
}