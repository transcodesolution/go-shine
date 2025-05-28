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