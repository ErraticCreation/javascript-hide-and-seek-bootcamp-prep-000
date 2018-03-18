function getFirstSelector(selector) {
  
}

function nestedTarget() {
  return document.querySelectorAll("div#nexted div.target");
}

function increaseRankBy(n) {
  let rankedListData = document.querySelectorAll("ul.ranked-list li");
  
  for (let i = 0; i < rankedListData.length; i++) {
    rankedListData[i].innerHTML = parseInt(rankedListData[i].innerHTML) + n;
  }
}

function deepestChild() {
  
}