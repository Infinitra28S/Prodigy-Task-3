const passwordInput = document.getElementById('password');
const feedback = document.getElementById('feedback');

passwordInput.addEventListener('input', () => {
  const password = passwordInput.value;
  const strength = checkPasswordStrength(password);
  feedback.textContent = strength;
});

function checkPasswordStrength(password) {
  let strength = 0;

  if (password.length >= 8) strength++;
  if (/[A-Z]/.test(password)) strength++;
  if (/[a-z]/.test(password)) strength++;
  if (/[0-9]/.test(password)) strength++;
  if (/[^A-Za-z0-9]/.test(password)) strength++;

  if (strength <= 2) return "Weak Password 😞";
  else if (strength === 3 || strength === 4) return "Moderate Password 😐";
  else return "Strong Password 💪";
}
