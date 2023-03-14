var body = document.querySelector('body')
var menuTrigger = document.querySelector('#toggle-main-menu-mobile');
var menuContainer = document.querySelector('#main-menu-mobile');

menuTrigger.onclick = function() {
    menuContainer.classList.toggle('open');
    menuTrigger.classList.toggle('is-active')
    body.classList.toggle('lock-scroll')
}
console.log('読み込まれてる？')
const faq = document.querySelector('.faq');
console.log(faq)

const questions = faq.querySelectorAll('.question');
console.log(questions)
questions.forEach(question => {
  question.addEventListener('click', () => {
    question.classList.toggle("active")
    const answer = question.nextElementSibling;
    if (answer.style.display === "block") {
      answer.style.display = "none";
    } else {
      answer.style.display = "block";
    }
  });
});