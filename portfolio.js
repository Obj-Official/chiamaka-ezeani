function showModalA(){
    var modalA = document.getElementById('modal-a');
    modalA.style.display = "block";
}
function showModalB(){
    var modalB = document.getElementById('modal-b');
    modalB.style.display = "block";
}
function showModalC(){
    var modalB = document.getElementById('modal-c');
    modalB.style.display = "block";
}

function closeA(){
    var modal = document.getElementById('modal-a');
    modal.style.display = "none";
}
function closeB(){
    var modal = document.getElementById('modal-b');
    modal.style.display = "none";
}
function closeC(){
    var modal = document.getElementById('modal-c');
    modal.style.display = "none";
}

window.addEventListener('click', function(event) {
    var modal = document.getElementById('modal-a');
    if (event.target === modal)
        modal.style.display = "none";
});
window.addEventListener('click', function(event) {
    var modal = document.getElementById('modal-b');
    if (event.target === modal)
        modal.style.display = "none";
});
window.addEventListener('click', function(event) {
    var modal = document.getElementById('modal-c');
    if (event.target === modal)
        modal.style.display = "none";
});

document.addEventListener("DOMContentLoaded", () => {
    const elements = document.querySelectorAll(".slide-in");
  
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    }, { threshold: 0.1 });
  
    elements.forEach((el) => observer.observe(el));
  });
  document.addEventListener("DOMContentLoaded", () => {
    const elements = document.querySelectorAll(".slide-in-up");
  
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    }, { threshold: 0.1 });
  
    elements.forEach((el) => observer.observe(el));
  });