const faq = document.querySelector('.faq');
const questions = faq.querySelectorAll('.question');

questions.forEach(question => {
  question.addEventListener('click', () => {
    const answer = question.nextElementSibling;
    answer.classList.toggle('show');
  });
});
