var highScores = JSON.parse(localStorage.getItem('High Score Info'));
var deleteData = document.getElementById("erase-btn")

function sortScores() {
    highScores.sort(function(a,b) {
    return b.score-a.score
 })
 highScores.forEach(scoreObj => {
    var tr = document.createElement('tr')
    tr.setAttribute("class", "row")
    var td1 = document.createElement('td')
    td1.setAttribute("class", "col")
    td1.setAttribute("id", "displayed-in")
    td1.textContent = scoreObj.innitials

    var td2 = document.createElement('td')
    td2.setAttribute("class", "col")
    td2.setAttribute("id", "displayed-score")
    td2.textContent = scoreObj.score
    tr.append(td1, td2)
    document.getElementById("scoreboard-rows").append(tr)
 });
}
sortScores();
 console.log(highScores);

 function clearScore() {
    localStorage.clear();
    location.reload();
  }
  
  deleteData.addEventListener("click", clearScore);