var popUpWindow = document.querySelector(".contacts-popup");
var linkPopUpWindowOpen = document.querySelector(".write-us");
var linkPopUpWindowClose = document.querySelector(".contacts-popup-close");

var formWriteUs = popUpWindow.querySelector("form");
var userName = popUpWindow.querySelector("[name=name]");
var userEmail = popUpWindow.querySelector("[name=email]");
var formMessage = popUpWindow.querySelector("[name=message]");
var storageUserName = localStorage.getItem("name"); 
var storageUserEmail = localStorage.getItem("email"); 

// Открыть окно
linkPopUpWindowOpen.addEventListener("click", function(event) {

	event.preventDefault();
	popUpWindow.classList.add("contacts-popup-show");

	if (storageUserName && storageUserEmail) {

		userName.value = storageUserName;
		userEmail.value = storageUserEmail;
		formMessage.focus();

	} else if (storageUserName) {

		userName.value = storageUserName;
		userEmail.focus();

	} else if (storageUserEmail) {

		userEmail.value = storageUserEmail;
		userName.focus();

	} else {

		userName.focus();
	}
	
});

// Закрыть окно
linkPopUpWindowClose.addEventListener("click", function(event) {

	event.preventDefault();
	closePopUpWindow();
});

// Закрыть окно по ESC
window.addEventListener("keydown", function(event) {

	if (event.keyCode === 27) {

		if (popUpWindow.classList.contains("contacts-popup-show")) {

			closePopUpWindow();
		}
	}
});

// Форма для отправки
formWriteUs.addEventListener("submit", function(event) {

	event.preventDefault();

	if (!userName.value || !userEmail.value || !formMessage.value) {
		
		popUpWindow.classList.remove("contacts-popup-error");
        popUpWindow.offsetWidth = popUpWindow.offsetWidth;
		popUpWindow.classList.add("contacts-popup-error");
		checkValidForm();
		
	} else {

		localStorage.setItem("name", userName.value);
		localStorage.setItem("email", userEmail.value);
		closePopUpWindow();
	}
});

// Закрыть окно
function closePopUpWindow() {

	popUpWindow.classList.remove("contacts-popup-show");
	popUpWindow.classList.remove("contacts-popup-error");
	resetValidForm();
}

// Валидация формы
function checkValidForm() {

	if (!userName.value) {
		userName.classList.add("input-invalid");
	}

	if (!userEmail.value) {
		userEmail.classList.add("input-invalid");;
	}

	if (!formMessage.value) {
		formMessage.classList.add("input-invalid");;
	}
}

// Сброс валидации формы
function resetValidForm() {

	if (!userName.value) {
		userName.classList.remove("input-invalid");
	}

	if (!userEmail.value) {
		userEmail.classList.remove("input-invalid");
	}

	if (!formMessage.value) {
		formMessage.classList.remove("input-invalid");
	}
}