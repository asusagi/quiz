function checkOneAnswer(id, correctAnswer) {
  const input = document.getElementById(id).value.trim().toLowerCase();
  const resultId = "result_" + id;

  if (input === correctAnswer) {
    localStorage.setItem(id, "ok");
    document.getElementById(resultId).innerText = "🎉 正解！";
  } else {
    localStorage.removeItem(id);
    document.getElementById(resultId).innerText = "❌ 不正解だよ。もう一度探してみよう！";
  }

  setTimeout(checkAllCorrect, 100); 
}

function checkAllCorrect() {
  const questions = ["q1", "q2", "q3"]; // ← Q4〜あとで追加やる
  const allCorrect = questions.every(q => localStorage.getItem(q) === "ok");

  if (allCorrect && !localStorage.getItem("quiz_complete")) {
    localStorage.setItem("quiz_complete", "yes");
    document.getElementById("completionMsg").innerHTML =
      "🎊 全問クリア！<br><a href='complete.html'>→ 特典を受け取る</a>";
  }
}

function resetQuiz() {
  const keys = ["q1", "q2", "q3", "quiz_complete"];
  keys.forEach(key => localStorage.removeItem(key));
  location.reload(); // ページをリロードして見た目も初期状態にあとで消す
}

