const allQuistions = document.querySelectorAll(`.card .quistion`);

allQuistions.forEach((q) => {
  q.addEventListener(`click`, () => {
    if (q.classList.contains(`active`)) {
      allQuistions.forEach((q) => {
        q.classList.remove(`active`);
      });
    } else {
      allQuistions.forEach((q) => {
        q.classList.remove(`active`);
      });
      q.classList.add(`active`);
    }
  });
});
