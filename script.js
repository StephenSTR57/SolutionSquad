const form = document.querySelector('form');

form.addEventListener('submit', (event) => {
  event.preventDefault(); // prevent form submission

  const name = form.elements['name'].value;
  const email = form.elements['email'].value;
  const address = form.elements['address'].value;
  const product = form.elements['product'].value;
  const quantity = form.elements['quantity'].value;

  // send data to server using fetch API or XMLHttpRequest
  console.log('Name:', name);
  console.log('Email:', email);
  console.log('Address:', address);
  console.log('Product:', product);
  console.log('Quantity:', quantity);

  alert('Order placed successfully!'); // show confirmation message
  form.reset(); // clear form fields
});
