const url =
  "https://opentdb.com/api.php?amount=5&category=9&difficulty=easy&type=multiple"

export default function getTriviaData() {
  return fetch(url)
    .then(res => res.json())
    .then(data => {
      const getData = data.results.map(quest => {
        const { question, correct_answer, incorrect_answers } = quest
        const answers = mixAnswers([correct_answer, ...incorrect_answers])
        return {
          question: question,
          answers: answers,
          correct_answer: correct_answer,
        }
      })
      return getData
    })
}

export function mixAnswers(arr) {
  let nums = [arr[0], arr[1], arr[2], arr[3]]
  let ranNums = []
  let i = nums.length
  let j = 0

  while (i--) {
    j = Math.floor(Math.random() * (i + 1))
    ranNums.push(nums[j])
    nums.splice(j, 1)
  }
  return ranNums
}
