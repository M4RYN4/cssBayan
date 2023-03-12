let acc = document.getElementsByClassName("accordion");
let i;

for (i = 0; i < acc.length; i++) {

    acc[0].classList.toggle("active");// to display 1st image: 1. add style "active" to .accordion[0]
    let panel = acc[0].nextElementSibling;// to display 1st image: 2. show HTML content of panel, which is img
    panel.style.maxHeight = panel.scrollHeight + "200px";// to display 1st image: 3. show 1st img as default

  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    let panel = this.nextElementSibling;
    let img = panel.getElementsByTagName('img')[0];//to set style of 1st <img>[0]

    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
      img.classList.remove("animate");//to remove style "animate" from all images
    } else {
      panel.style.maxHeight = panel.scrollHeight + "200px";
      img.classList.add("animate");//to add style "animate" to all images
    } 
  });
}