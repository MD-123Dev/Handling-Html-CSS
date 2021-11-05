const gap = 4;

//**get html  */
const carousel = document.getElementById("carousel"),
  content = document.getElementById("content"),
  next = document.getElementById("next"),
  prev = document.getElementById("prev");

  //**get width carousel . */
let width = carousel.offsetWidth;//**offsetWisth : The offsetWidth property returns the viewable width of an element in pixels, including padding, border and scrollbar, but not the margin. */


next.addEventListener("click", e => {
  carousel.scrollBy(width + gap, 0);
  if (carousel.scrollWidth !== 0) {//**for display icon preveux to back  */
    prev.style.display = "flex";
  }
  if (content.scrollWidth - width - gap <= carousel.scrollLeft + width) {
    next.style.display = "none";
  }
});

prev.addEventListener("click", e => {//**addEventListener : method attaches an event handler to the document. */
  carousel.scrollBy(-(width + gap), 0);//**for scroll contenus ( The scrollBy() method scrolls the document by the specified number of pixels.) */

  if (carousel.scrollLeft - width - gap <= 0) {//**for display icon preveux to back  */
    prev.style.display = "none";
  }
  if (!content.scrollWidth - width - gap <= carousel.scrollLeft + width) {
    next.style.display = "flex";
  }
});


