let accordions = document.getElementsByClassName("accordion");

for (let i = 0; i < accordions.length; i++) {
  accordions[i].onclick = function () {
    this.classList.toggle('isOpen');
    let content = this.nextElementSibling;

    if (content.style.maxHeight) {
      // accordion is open, we need to close it
      content.style.maxHeight = null;
    } else {
      // accordion is closed
      content.style.maxHeight = content.scrollHeight + "px";
    }
  };
}
