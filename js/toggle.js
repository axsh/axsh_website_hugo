const faq = document.querySelector('.faq');
const questions = faq.querySelectorAll('.question');
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