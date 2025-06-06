document.addEventListener('DOMContentLoaded', function () {
    const passwordInput = document.getElementById('passwordInput');
    const togglePassword = document.getElementById('togglePassword');
    const eyeIcon = document.getElementById('eyeIcon');
    const eyeOffIcon = document.getElementById('eyeOffIcon');

    if (togglePassword && passwordInput && eyeIcon && eyeOffIcon) {
        togglePassword.addEventListener('click', function () {
            const isPassword = passwordInput.type === 'password';
            passwordInput.type = isPassword ? 'text' : 'password';
            eyeIcon.style.display = isPassword ? 'block' : 'none';
            eyeOffIcon.style.display = isPassword ? 'none' : 'block';
        });
    }
});

document.addEventListener('DOMContentLoaded', function () {
    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');

    tabButtons.forEach(btn => {
        btn.addEventListener('click', function () {
            this.scrollIntoView({ behavior: 'smooth', inline: 'center' });

            tabButtons.forEach(b => {
                b.classList.remove('bg-pink-50');
            });
            this.classList.add('bg-pink-50');

            const tab = this.getAttribute('data-tab');
            tabContents.forEach(content => {
                content.classList.add('hidden');
            });
            document.getElementById('tab-' + tab).classList.remove('hidden');
        });
    });
});

//dropdown

document.addEventListener("DOMContentLoaded", function () {
    const button = document.querySelector("#dropdownButton");
    const menu = document.getElementById("dropdownMenu");
    const valueSpan = document.getElementById("dropdownValue");

    button.addEventListener("click", () => {
        menu.classList.toggle("hidden");
    });

    window.setValue = function (val) {
        valueSpan.textContent = val;
        menu.classList.add("hidden");
    };

    // Close dropdown when clicking outside
    window.addEventListener("click", function (e) {
        if (!button.contains(e.target)) {
            menu.classList.add("hidden");
        }
    });
});


// Basic validators
const isText = (val) => /^[A-Za-zÀ-ÿ\s'-]+$/.test(val);
const isNumber = (val) => /^\d+$/.test(val);
const isPhoneNumber = (val) => /^(\+)?[0-9\s-]+$/.test(val);
const isEmail = (val) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val);

// Field-level validators
const validators = {
    firstName: (val) => {
        if (!val) return "Voornaam is verplicht.";
        if (val.length < 2) return "Minstens 2 karakters.";
        if (!isText(val)) return "Alleen letters toegestaan.";
        return "";
    },
    middleName: (val) => val && !isText(val) ? "Alleen letters toegestaan." : "",
    lastName: (val) => {
        if (!val) return "Achternaam is verplicht.";
        if (!isText(val)) return "Alleen letters toegestaan.";
        return "";
    },
    postcode: (val) => {
        if (!val) return "Postcode is verplicht.";
        if (!isNumber(val)) return "Alleen cijfers toegestaan.";
        return "";
    },
    houseNumber: (val) => {
        if (!val) return "Huisnummer is verplicht.";
        if (!isNumber(val)) return "Alleen cijfers toegestaan.";
        return "";
    },
    phoneNumber: (val) => {
        if (!val) return "Telefoonnummer is verplicht.";
        if (!isPhoneNumber(val)) return "Ongeldig telefoonnummer.";
        return "";
    },
    partnerNumber: (val) => {
        if (!val) return "Partnernummer is verplicht.";
        if (!isPhoneNumber(val)) return "Ongeldig telefoonnummer.";
        return "";
    },
    "email-addreess": (val) => {
        if (!val) return "E-mail is verplicht.";
        if (!isEmail(val)) return "Ongeldig e-mailadres.";
        return "";
    },
    "partner-email-addreess": (val) => {
        if (!val) return "E-mail is verplicht.";
        if (!isEmail(val)) return "Ongeldig e-mailadres.";
        return "";
    }
};

// Shared UI handler
function updateFieldUI({ id, message }) {
    const input = document.getElementById(id);
    const wrapper = input?.closest(".relative");
    const errorText = wrapper?.parentElement.querySelector(".error-text");
    const checkIcon = wrapper?.querySelector(".check-icon");
    const errorIcon = wrapper?.querySelector(".error-icon");

    if (message) {
        input.classList.add("border-l-4", "border-l-red-500", "focus:border-red-500");
        errorText?.classList.remove("hidden");
        if (errorText) errorText.textContent = message;
        checkIcon?.classList.add("hidden");
        errorIcon?.classList.remove("hidden");
    } else {
        input.classList.remove("border-l-4", "border-l-red-500", "focus:border-red-500");
        errorText?.classList.add("hidden");
        checkIcon?.classList.remove("hidden");
        errorIcon?.classList.add("hidden");
    }
}

// Single validator handler
function handleValidation(id) {
    const input = document.getElementById(id);
    if (!input || !validators[id]) return;
    const value = input.value.trim();
    const message = validators[id](value);
    updateFieldUI({ id, message });
}

// Init on DOM load
document.addEventListener("DOMContentLoaded", () => {
    Object.keys(validators).forEach((id) => {
        const input = document.getElementById(id);
        if (!input) return;
        input.addEventListener("blur", () => handleValidation(id));
        input.addEventListener("input", () => handleValidation(id));
    });
});


document.addEventListener("DOMContentLoaded", () => {
    const commentInput = document.getElementById("comment");
    const wrapper = commentInput.closest("#comment-wrapper");
    const checkIcon = wrapper.querySelector(".check-icon");

    commentInput.addEventListener("input", () => {
        if (commentInput.value.trim().length > 0) {
            checkIcon.classList.remove("hidden");
        } else {
            checkIcon.classList.add("hidden");
        }
    });
});