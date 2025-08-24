function processPayment() {
    let cardNumber = document.getElementById('cardNumber').value.trim();
    let cardName = document.getElementById('cardName').value.trim();
    let expiry = document.getElementById('expiry').value.trim();
    let cvv = document.getElementById('cvv').value.trim();

    if (!cardNumber || !cardName || !expiry || !cvv) {
        alert('Please fill in all fields');
        return;
    }

    alert('Payment processed successfully!');
}

// Auto-format card number with spaces
document.getElementById('cardNumber').addEventListener('input', function(e) {
    e.target.value = e.target.value.replace(/\D/g, '').replace(/(.{4})/g, '$1 ').trim();
});
const toggle = document.getElementById("toggleCard");
const cardInput = document.getElementById("cardNumber");

toggle.addEventListener("click", () => {
  if (cardInput.type === "password") {
    cardInput.type = "text";
    toggle.classList.remove("fa-eye");
    toggle.classList.add("fa-eye-slash");
  } else {
    cardInput.type = "password";
    toggle.classList.remove("fa-eye-slash");
    toggle.classList.add("fa-eye");
  }
});
document.getElementById("notificationBtn").addEventListener("click", () => {
  alert("You clicked the notification bell! 🔔");
  // You can open a dropdown or redirect to notifications page here
});
const welcomeMessage = document.getElementById("welcomeMessage");

// Check if user name is already saved in browser
let savedName = localStorage.getItem("username");

if (savedName) {
  welcomeMessage.textContent = `Welcome, ${savedName}`;
}

// Example: Update dynamically when user logs in or enters name
function setUserName(name) {
  localStorage.setItem("username", name);  // save permanently
  welcomeMessage.textContent = `Welcome, ${name}`;
}

// Example usage (you can hook this into your login or form)
setUserName("Ada"); // 👈 instead of hardcoding, pass the real username
const uploadInput = document.getElementById("uploadUser");
const userImage = document.getElementById("userImage");

uploadInput.addEventListener("change", function() {
  const file = this.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function(e) {
      userImage.src = e.target.result; // show uploaded image
    };
    reader.readAsDataURL(file);
  }
});

// Function to redirect to history page when pay button is clicked
function goToHistoryPage() {
    window.location.href = 'history.html';
}

// Add event listener to the pay button
document.addEventListener('DOMContentLoaded', function() {
    const payBtn = document.getElementById('pay-btn');
    if (payBtn) {
        payBtn.addEventListener('click', function(event) {
            event.preventDefault(); // Prevent form submission if inside a form
            processPayment(); // Call your payment processing function
            goToHistoryPage(); // Redirect to history page
        });
    }
});