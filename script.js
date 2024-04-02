"use strict";

// ABOUT SECTION EMAIL INPUT FUNCTIONALITY
const validateEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

const emailForm = document.getElementById("emailForm");
const userEmailInput = document.getElementById("userEmail");
const invalidEmail = document.querySelector(".invalid");
const showInfo = document.querySelector(".show-info");

emailForm.addEventListener("submit", (event) => {
  event.preventDefault(); // Prevent form submission => prevent reload the page

  const userEmail = userEmailInput.value;
  if (validateEmail(userEmail) && userEmail === "linhpnqfx34112@funix.edu.vn") {
    // // Email is valid, proceed with submission
    // console.log("Valid email:", userEmail);
    showInfo.classList.remove("hidden");
    emailForm.classList.add("hidden");
    // // You can submit the form here
  } else {
    // Invalid email, show an error message
    console.log("Email không hợp lệ !", userEmail);
    invalidEmail.classList.remove("hidden");
  }
});
// POPUP EMAIL
const popup = document.querySelector(".popup");
const popupEmail = document.getElementById("myPopup");
popup.addEventListener("mouseover", function () {
  popupEmail.classList.toggle("show");
});

// JOB SECTION VIEW MORE/LESS FUNCTIONALITY
const changeIcon = document.querySelectorAll(".change-icon");
const jobSection = document.querySelectorAll(".job-section");
const viewOption = document.querySelectorAll(".view-option");
const viewMore = document.querySelectorAll(".view-more");
const jobBoxContent = document.querySelectorAll(".box-content");

for (let i = 0; i < jobSection.length; i++) {
  jobSection[i].addEventListener("mouseover", function () {
    viewOption[i].classList.remove("hidden");
  });
  jobSection[i].addEventListener("mouseout", function () {
    if (viewMore[i].textContent === "View More") {
      viewOption[i].classList.add("hidden");
    }
  });
}
for (let i = 0; i < viewMore.length; i++) {
  viewMore[i].addEventListener("click", function () {
    if (viewMore[i].textContent === "View More") {
      jobBoxContent[i].classList.remove("hidden");
      viewMore[i].textContent = "View Less";
      changeIcon[i].classList.remove("fa-caret-down");
      changeIcon[i].classList.add("fa-caret-up");
    } else {
      jobBoxContent[i].classList.add("hidden");
      viewMore[i].textContent = "View More";
      changeIcon[i].classList.remove("fa-caret-up");
      changeIcon[i].classList.add("fa-caret-down");
    }
  });
}
