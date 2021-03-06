function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.querySelector("#nested .target");
}

function increaseRankBy(n) {
  let rankedListData = document.querySelectorAll("ul.ranked-list li");
  
  for (let i = 0; i < rankedListData.length; i++) {
    rankedListData[i].innerHTML = parseInt(rankedListData[i].innerHTML) + n;
  }
}

function deepestChild() {
  let currentNode = "#grand-node div";
    
  while(document.querySelector(currentNode).childElementCount) {
    currentNode = `${currentNode} div`;
  }
  
  return document.querySelector(currentNode);
}
