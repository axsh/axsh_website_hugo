console.log('読み込まれてる？')
const faq = document.querySelector('.faq');
console.log(faq)
const questions = faq.querySelectorAll('.question');
console.log(questions)
questions.forEach(question => {
  question.addEventListener('click', () => {
    this.classList.toggle("active")
    const answer = question.nextElementSibling;
    if (answer.style.display === "block") {
      answer.style.display = "none";
    } else {
      answer.style.display = "block";
    }
  });
});