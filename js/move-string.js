let content =
  '<div class="move-container"><p style="margin-right: 15px" class="move-string">Курс для лікарів</p><img src="../images/move-string-plus.svg" alt="plus" height="17" width="17" /></div>';

const mySuperMarquee = new SuperMarquee(
  document.getElementById("supermarquee"),
  {
    content: content,
  }
);

console.clear();
