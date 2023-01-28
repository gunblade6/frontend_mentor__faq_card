# Frontend Mentor - FAQ accordion card solution

This is a solution to the [FAQ accordion card challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/faq-accordion-card-XlyjD0Oam).

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the component depending on their device's screen size
- See hover states for all interactive elements on the page
- Hide/Show the answer to a question when the question is clicked

### Screenshot

![](./design/desktop-preview.jpg)

### Links

- Solution URL: [Solution](https://your-solution-url.com)
- Live Site URL: [Live](https://frontendmentor-faq.netlify.app)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Vanilla JS

### What I learned

In this challenge the main thing I learned was the ability to make the dropdown quistion, as I thought It's hard and I wont be able to do it.
but as I'm coding step by step I finally managed to make it :)


```js
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
```

## Author

- Website - [Add your name here](https://www.mohamed-dev.netlify.app)
- Frontend Mentor - [@midoashraf010](https://www.frontendmentor.io/profile/midoashraf010)

## Acknowledgments

when solving this challenge, actually when solving any challenge, dont look at it as one big problem.
divide it into small problem and solve each problem on its self!