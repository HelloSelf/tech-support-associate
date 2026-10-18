const form = document.getElementById('registration-form');
const password = document.getElementById('password');
const confirmation = document.getElementById('confirmation');
const registerButton = document.getElementById('register');
const errorMessage = document.getElementById('mismatch-error');
const confirmationRow = document.getElementById('confirmation-row');
const result = document.getElementById('result');
let confirmationHasBeenLeft = false;

// The prototype demonstrates matching, not HelloSelf's full password policy.
function passwordsMatch() {
  return password.value.length > 0 && password.value === confirmation.value;
}

function updateFormState() {
  const showMismatch = confirmationHasBeenLeft && confirmation.value.length > 0 && !passwordsMatch();
  errorMessage.textContent = showMismatch ? "Passwords don’t match" : '';
  confirmation.setAttribute('aria-invalid', String(showMismatch));
  confirmationRow.classList.toggle('invalid', showMismatch);
  registerButton.disabled = !form.checkValidity() || !passwordsMatch();
}

function handleFormInput() {
  result.textContent = '';
  updateFormState();
}

function handleConfirmationBlur() {
  confirmationHasBeenLeft = true;
  updateFormState();
}

function handleVisibilityClick(event) {
  const button = event.currentTarget;
  const field = document.getElementById(button.dataset.field);
  const reveal = field.type === 'password';
  field.type = reveal ? 'text' : 'password';
  button.textContent = reveal ? 'Hide' : 'Show';
  const fieldName = field === password ? 'password' : 'confirmation password';
  button.setAttribute('aria-label', (reveal ? 'Hide ' : 'Show ') + fieldName);
}

function handleSubmit(event) {
  event.preventDefault();
  confirmationHasBeenLeft = true;
  updateFormState();
  if (!registerButton.disabled) {
    result.textContent = 'Demo complete. The passwords match. No account has been created.';
  }
}

function handleResetDemo() {
  form.reset();
  confirmationHasBeenLeft = false;
  result.textContent = '';
  for (const button of document.querySelectorAll('.visibility')) {
    const field = document.getElementById(button.dataset.field);
    field.type = 'password';
    button.textContent = 'Show';
    button.setAttribute('aria-label', field === password ? 'Show password' : 'Show confirmation password');
  }
  updateFormState();
}

function init() {
  form.addEventListener('input', handleFormInput);
  form.addEventListener('change', handleFormInput);
  form.addEventListener('submit', handleSubmit);
  confirmation.addEventListener('blur', handleConfirmationBlur);
  for (const button of document.querySelectorAll('.visibility')) {
    button.addEventListener('click', handleVisibilityClick);
  }
  document.getElementById('reset-demo').addEventListener('click', handleResetDemo);
  updateFormState();
}

init();