//cacheDOM - Nav
const 
toggleBtn = document.querySelector(".navbar-toggle"),
navbar = document.querySelector(".header-section"),
topBar = document.querySelector(".header-brand"),
logo = document.querySelector(".header-brand__logo"),
showLinks = document.querySelector(".navbar");

//cacheDOM - Tabs
const
tabButton = document.querySelectorAll(".tabButton__button"),
tabContent = document.querySelectorAll(".tab");

//cacheDOM - Accordion
const acdnHead = document.querySelectorAll(".accordion__question-title");

//cacheDOM - Form
const
form = document.querySelector(".contact-form"),
formInput = form.querySelector(".contact-form__input"),
formSubmit = form.querySelector(".contact-form__submit"),
errorMsg = form.querySelector(".contact-form__warning-text"),
warnIcon = form.querySelector(".contact-form__warning-icon");

const scrolledNavbar = () => {
	if (
		(document.body.scrollTop > 105 ||
			document.documentElement.scrollTop > 105) &&
		!navbar.classList.contains("header-section--overlay")
	) {
		navbar.classList.add("header-section--active");
	} else {
		navbar.classList.remove("header-section--active");
	}
};

const mobileToggle = () => {
	for (let i = 0; i < 3; i++) {
		toggleBtn.children[i].classList.toggle("navbar-toggle__bar--close");
	}
	logo.classList.toggle("logo--mobile");
	navbar.classList.toggle("header-section--overlay");
	showLinks.classList.toggle("navbar--active");
	scrolledNavbar();
};

const closeOverlay = () => {
	for (let i = 0; i < 3; i++) {
		toggleBtn.children[i].classList.remove("navbar-toggle__bar--close");
	}
	logo.classList.remove("logo--mobile");
	navbar.classList.remove("header-section--overlay");
	showLinks.classList.remove("navbar--active");
	scrolledNavbar();
};

//Features
let tabMenuToggle = e => {
	let tabButtonActive = document.getElementsByClassName(
		"button-active"
	);
	let tabContentActive = document.querySelector(" .tab--active");

	tabButtonActive[0].classList.remove("button-active");
	e.target.classList.toggle("button-active");

	let id = e.target.id;
	tabContentActive.classList.remove("tab--active");
	for (let i = 0; i < tabContent.length; i++) {
		if (tabContent[i].id == `tab-${id}`) {
			tabContent[i].classList.add("tab--active");
		}
	}
};

//Accordion
let acdnToggle = e => {
	let panel = e.target.nextElementSibling;
	let acdnHeadActive = document.querySelector(".accordion__question-title--active");
	let panelActive = document.querySelector(".accordion__answer--active");
	if (acdnHeadActive !== null && acdnHeadActive !== e.target) {
		acdnHeadActive.classList.remove("accordion__question-title--active");
		panelActive.classList.remove("accordion__answer--active");
		panelActive.style.maxHeight = null;
	}

	e.target.classList.toggle("accordion__question-title--active");

	if (panel.classList.contains("accordion__answer--active")) {
		panel.classList.remove("accordion__answer--active");
		panel.style.maxHeight = null;
	} else {
		panel.classList.add("accordion__answer--active");
		//panel.style.maxHeight = panel.scrollHeight + 20 + "px";
	}
};

//Form
const validateEmail = e => {
	const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
	e.preventDefault();
	if (formInput.value.match(mailformat)) {
		errorMsg.classList.remove("contact-form__warning-text--active");
		formInput.classList.remove("contact-form__input--warning-input");
		warnIcon.classList.remove("contact-form__warning-icon--error");
		formInput.value = "";
		return true;
	} else {
		e.preventDefault();
		errorMsg.classList.add("contact-form__warning-text--active");
		formInput.classList.add("contact-form__input--warning-input");
		warnIcon.classList.add("contact-form__warning-icon--error");
		formInput.focus();
		return false;
	}
};


//Event Listeners
window.onscroll = function() {
	scrolledNavbar();
};

toggleBtn.addEventListener("click", mobileToggle);

formSubmit.addEventListener("click", validateEmail);

for (let i = 0; i < tabButton.length; i++) {
	tabButton[i].addEventListener("click", tabMenuToggle);
}

for (let i = 0; i < acdnHead.length; i++) {
	acdnHead[i].addEventListener("click", acdnToggle);
}


