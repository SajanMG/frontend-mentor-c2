var subButton = document.getElementById("sub-btn");
var emailInput = document.getElementById("email");
var dissmissButton = document.getElementById("dismiss");
var errorMsg = document.getElementById("errorMsg");
var successDiv = document.getElementById("success-section");
var form = document.getElementById("subscribe-form");
var midSection = document.getElementById("mid-section");
var topSection = document.getElementById("top-section");
var displayEmail = document.getElementById("signedEmail");
var attr = document.getElementById("attr");

function success() {
  subButton.addEventListener("click", function () {
    var email = emailInput.value;
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email.trim() != "" && emailRegex.test(email)) {
      successDiv.style.display = "block";
      displayEmail.innerHTML = emailInput.value;
      form.style.display = "none";
      midSection.style.display = "none";
      topSection.style.display = "none";
      attr.style.display = "none";
    } else {
      errorMsg.style.display = "block";
      emailInput.style.borderColor = "red";
    }
  });
}
success();

function dismiss() {
  dissmissButton.addEventListener("click", function () {
    successDiv.style.display = "none";
    form.style.display = "flex";
    midSection.style.display = "block";
    topSection.style.display = "block";
    attr.style.display = "block";
    form.reset();
  });
}

dismiss();
