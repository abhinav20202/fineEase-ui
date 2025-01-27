// // Toggle between Login and Sign-Up Forms
// const loginForm = document.getElementById("loginForm");
// const signupForm = document.getElementById("signupForm");
// const showSignup = document.getElementById("showSignup");
// const showLogin = document.getElementById("showLogin");

// showSignup.addEventListener("click", (e) => {
//   e.preventDefault(); // Prevent default link behavior
//   loginForm.style.display = "none"; // Hide login form
//   signupForm.style.display = "block"; // Show signup form
// });

// showLogin.addEventListener("click", (e) => {
//   e.preventDefault(); // Prevent default link behavior
//   signupForm.style.display = "none"; // Hide signup form
//   loginForm.style.display = "block"; // Show login form
// });

// // Handle Login Form Submission
// loginForm.addEventListener("submit", (e) => {
//   e.preventDefault();
//   const username = document.getElementById("username").value;
//   const email = document.getElementById("email").value;
//   const password = document.getElementById("password").value;

//   if (username && email && password) {
//     alert("Login successful!");
//     window.location.href = "overview.html"; // Replace with the target page
//   } else {
//     alert("Please fill in all fields!");
//   }
// });

// // Handle Sign-Up Form Submission
// signupForm.addEventListener("submit", (e) => {
//   e.preventDefault();
//   const username = document.getElementById("signupUsername").value;
//   const email = document.getElementById("signupEmail").value;
//   const password = document.getElementById("signupPassword").value;
//   const confirmPassword = document.getElementById("confirmPassword").value;

//   if (username && email && password && confirmPassword) {
//     if (password === confirmPassword) {
//       alert("Sign-Up successful! Please log in.");
//       signupForm.reset(); // Reset form fields
//       showLogin.click(); // Switch to login form
//     } else {
//       alert("Passwords do not match!");
//     }
//   } else {
//     alert("Please fill in all fields!");
//   }
// });
// Handle login redirection
function redirectToPage(event) {
  event.preventDefault(); // Prevent form submission
  const username = document.getElementById("username").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  // Perform validation here if necessary
  if (username && email && password) {
    window.location.href = "../pages/overview.html"; // Replace with the target page
  } else {
    alert("Please fill all the fields!");
  }
}

// Handle signup submission
function redirectToOverview(event) {
    event.preventDefault();
    const signupUsername = document.getElementById("signupUsername").value;
    const signupEmail = document.getElementById("signupEmail").value;
    const signupPassword = document.getElementById("signupPassword").value;
    const confirmPassword = document.getElementById("confirmPassword").value;
  
    if (!signupUsername || !signupEmail || !signupPassword || !confirmPassword) {
      alert("Please fill all the fields!");
      return;
    }
    const passwordpattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

  
    if(!passwordpattern.test(signupPassword)){

    alert('Password must be at least 8 characters long, with at least one uppercase letter, one lowercase letter, one number, and one special character.');

    return;

  } 
  
    if (signupPassword !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
  
    // Perform any additional validation or API calls if necessary
    window.location.href = "../pages/overview.html"; // Redirect to overview page
  }

// Toggle between Login and Signup Forms
const loginForm = document.getElementById("loginForm");
const signupForm = document.getElementById("signupForm");
const showSignup = document.getElementById("showSignup");
const showLogin = document.getElementById("showLogin");

showSignup.addEventListener("click", (e) => {
  e.preventDefault();
  loginForm.style.display = "none";
  signupForm.style.display = "block";
});

showLogin.addEventListener("click", (e) => {
  e.preventDefault();
  signupForm.style.display = "none";
  loginForm.style.display = "block";
});
