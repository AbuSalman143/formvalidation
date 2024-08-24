const emailInput = document.getElementById('email');
        const passwordInput = document.getElementById('password');
        const emailError = document.getElementById('emailError');
        const passwordError = document.getElementById('passwordError');
        const successMessage = document.getElementById('successMessage');

        function validateEmail() {
            const email = emailInput.value;
            if (email.length > 3 && email.includes('@') && email.includes('.')) {
                emailError.textContent = '';
                return true;
            } else {
                emailError.textContent = 'Make sure email is more than 3 characters and has @ and .';
                return false;
            }
        }

        function validatePassword() {
            const password = passwordInput.value;
            if (password.length > 8) {
                passwordError.textContent = '';
                return true;
            } else {
                passwordError.textContent = 'Make sure password is more than 8 characters.';
                return false;
            }
        }

        emailInput.addEventListener('input', () => {
            const isEmailValid = validateEmail();
            const isPasswordValid = validatePassword();
            if (isEmailValid && isPasswordValid) {
                successMessage.textContent = 'All good to go!';
            } else {
                successMessage.textContent = '';
            }
        });

        passwordInput.addEventListener('input', () => {
            const isEmailValid = validateEmail();
            const isPasswordValid = validatePassword();
            if (isEmailValid && isPasswordValid) {
                successMessage.textContent = 'All good to go!';
            } else {
                successMessage.textContent = '';
            }
        });

        function handleSubmit() {
            const isEmailValid = validateEmail();
            const isPasswordValid = validatePassword();

            if (isEmailValid && isPasswordValid) {
                const confirmation = confirm("Are you sure you want to submit?");
                if (confirmation) {
                    alert("Successful signup!");
                    // Clear the form fields
                    emailInput.value = '';
                    passwordInput.value = '';
                    successMessage.textContent = '';
                } else {
                    // Redirect to the same page
                    window.location.reload();
                }
            }
        }