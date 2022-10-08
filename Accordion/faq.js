const faqData = [
    {
        id: 1,
        question: 'Who are we?',
        answer: 'We enable upscaling careers through flexible, interactive and collaborative learning. We believe in building learning communities by bringing together mentors, young minds, and creators.',
    },
    {
        id: 2,
        question: 'What do we do?',
        answer: 'Building learning communities with Our Affordable & Competent Courses',
    },
    {
        id: 3,
        question: 'Are the community classes boring?',
        answer: 'No, not at all!!!',
    },
];

const accordianBody = document.querySelector('.accordian_body');

const faqs = faqData.map((faq) => createFaq(faq.question, faq.answer));

function showFaq() {
    faqs.forEach((faq) => accordianBody.appendChild(faq));
}
showFaq();

function createFaq(question, answer) {
    const faqContainer = document.createElement('div');
    const faqHeader = document.createElement('div');
    const heading = document.createElement('h3');
    const showBtn = document.createElement('span');
    const faqContent = document.createElement('p');

    faqContainer.classList.add('faq');
    faqHeader.classList.add('faq_header');
    faqContent.textContent = answer;
    faqContent.classList.add('hidden');
    heading.textContent = question;
    showBtn.classList.add('show_btn');
    showBtn.textContent = '+';

    faqHeader.appendChild(heading);
    faqHeader.appendChild(showBtn);

    faqContainer.appendChild(faqHeader);
    faqContainer.appendChild(faqContent);

    return faqContainer;
}

function btnStatusUpdate() {
    showBtn.addEventListener('click', function (e) {
        showBtn.textContent = e.target;
    });
}
