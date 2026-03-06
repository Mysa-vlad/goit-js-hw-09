const STORAGE_KEY = 'feedback-form-state';

const formData = {
  email: '',
  message: '',
};

const feedbackForm = document.querySelector('.feedback-form');

function initializeForm() {
  const savedData = localStorage.getItem(STORAGE_KEY);
  if (savedData) {
    const parsedData = JSON.parse(savedData);
    formData.email = parsedData.email || '';
    formData.message = parsedData.message || '';
    

    feedbackForm.elements.email.value = formData.email;
    feedbackForm.elements.message.value = formData.message;
  }
}


feedbackForm.addEventListener('input', (event) => {
  const { name, value } = event.target;
  if (name in formData) {
    formData[name] = value;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
  }
});

feedbackForm.addEventListener('submit', (event) => {
  event.preventDefault();
  

  if (!formData.email.trim() || !formData.message.trim()) {
    alert('Please fill in all fields');
    return;
  }
  

  console.log(formData);
  

  localStorage.removeItem(STORAGE_KEY);
  

  feedbackForm.reset();
  formData.email = '';
  formData.message = '';
});


initializeForm();