const feedbackOptions = document.querySelectorAll('.feedback-options div');
        const sendReviewButton = document.getElementById('send-review');
        const feedbackForm = document.querySelector('.feedback-form');
        const thankYouMessage = document.querySelector('.thank-you');
        const selectedFeedbackText = document.getElementById('selected-feedback');

        let selectedFeedback = '';

        feedbackOptions.forEach(option => {
            option.addEventListener('click', () => {
                feedbackOptions.forEach(opt => opt.classList.remove('selected'));
                option.classList.add('selected');
                selectedFeedback = option.getAttribute('data-feedback');
            });
        });

        sendReviewButton.addEventListener('click', () => {
            if (selectedFeedback) {
                feedbackForm.style.display = 'none';
                thankYouMessage.style.display = 'block';
                selectedFeedbackText.textContent = `Feedback: ${selectedFeedback}`;
            } else {
                alert('Please select a feedback option!');
            }
        });