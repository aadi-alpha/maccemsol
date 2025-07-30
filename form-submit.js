const popup = document.getElementById('popup');
const formCard = document.getElementById('formCard');




function openForm() {
  popup.classList.add('show');
  formCard.classList.remove('zoom-out');
  formCard.classList.add('zoom-in');
}

function closeForm() {
  formCard.classList.remove('zoom-in');
  formCard.classList.add('zoom-out');
  setTimeout(() => {
    popup.classList.remove('show');
  }, 400);
}

function submitForm() {
  const name = document.querySelector('input[placeholder="Your Name"]').value;
  const phone = document.querySelector('input[placeholder="Phone Number"]').value;
  const pin = document.querySelector('input[placeholder="Pin Code"]').value;
  const city = document.getElementById('city-select-form').value;

  // Validate empty fields
  if (!name || !phone || !pin || city === "select-area") {
    alert("Please fill all fields properly.");
    return;
  }

  // Phone validation: 10 digits starting with 6–9
  const isValidPhone = /^[6-9]\d{9}$/.test(phone);
  if (!isValidPhone) {
    alert("Please enter a valid 10-digit Indian phone number starting with 6-9.");
    return;
  }

  // PIN validation: 6 digits, not starting with 0
  const isValidPin = /^[1-9]\d{5}$/.test(pin);
  if (!isValidPin) {
    alert("Please enter a valid 6-digit Indian PIN code (cannot start with 0).");
    return;
  }

}