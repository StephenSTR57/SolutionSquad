const form = document.querySelector('form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const subjectInput = document.querySelector('#subject');
const messageInput = document.querySelector('#message');
form.addEventListener('submit', (event) => {
  event.preventDefault(); // prevent form submission

  const name = nameInput.value.trim();
  const email = emailInput.value.trim();
  const subject = subjectInput.value.trim();
  const message = messageInput.value.trim();

  if (name === '' || email === '' || message === '') {
    alert('Please fill out all fields.'); // show error message if any field is empty
    return;
  }

  // send data to server using fetch API or XMLHttpRequest
  console.log('Name:', name);
  console.log('Email:', email);
  console.log('Subject:', subject);
  console.log('Message:', message);

  alert('Your message has been sent.'); // show confirmation message
  form.reset(); // clear form fields
});
