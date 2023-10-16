let content =
  '<div class="move-container"><p style="margin-right: 5px" class="move-string">Курс для лікарів</p><img src="./images/move-string-plus.svg" alt="plus" height="17" width="17" /></div>';

const mySuperMarquee = new SuperMarquee(
  document.getElementById("supermarquee"),
  {
    content: content,
    speed: "slow",
  }
);

console.clear();
