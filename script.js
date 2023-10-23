document.addEventListener("DOMContentLoaded", function () {
    const passwordInput = document.getElementById("password");
    const strengthBar = document.getElementById("strength-bar");
    const strengthText = document.getElementById("strength-text");

    passwordInput.addEventListener("input", function () {
        const password = passwordInput.value;
        const strength = calculatePasswordStrength(password);
        updatePasswordStrengthIndicator(strength);
    });

    function calculatePasswordStrength(password) {
        if (password.length > 8) {
            return 2; // Strong strength
        } else if (password.length >= 6) {
            return 1; // Medium strength
        }

        return 0; // Weak strength
    }

    function updatePasswordStrengthIndicator(strength) {
        const strengthTextArray = ["Weak", "Medium", "Strong"];
        const strengthClassArray = ["", "medium", "strong"];
        strengthBar.style.width = (strength * 33.33) + "%"; // 33.33% per strength level
        strengthBar.className = strengthClassArray[strength];
        strengthText.textContent = "Password Strength: " + strengthTextArray[strength];
    }
});
