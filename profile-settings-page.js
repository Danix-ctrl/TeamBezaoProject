// Form validation
document.getElementById('profileForm').addEventListener('submit', function(e) {
  e.preventDefault();

  const name = document.getElementById('name').value.trim();
  const gender = document.getElementById('gender').value.trim();
  const password = document.getElementById('password').value;
  const confirmPassword = document.getElementById('confirmPassword').value;
  const phone = document.getElementById('phone').value.trim();

  if (!name || !gender || !password || !confirmPassword || !phone) {
    alert('Please fill in all fields.');
    return;
  }

  if (password !== confirmPassword) {
    alert('Passwords do not match!');
    return;
  }

  alert('Profile updated successfully!');
});
document.querySelector('.back-arrow').addEventListener('click', function() { s
 window.history.back();
});

document.addEventListener('DOMContentLoaded', function() {
  const backArrow = document.querySelector('.back-arrow');
  if (backArrow) {
    backArrow.addEventListener('click', function() {
      window.location.href = 'dashboard.html';
    });
  }
});