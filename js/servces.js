const faqList = document.querySelector('.faq-list');

faqList.addEventListener('click', event => {
  const question = event.target.closest('.question');
  if (question) {
    const answer = question.nextElementSibling;
    answer.classList.toggle('visible');
  }
});