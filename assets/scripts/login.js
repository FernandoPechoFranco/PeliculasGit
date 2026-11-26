const passwordInput = document.getElementById('password');
        const togglePassword = document.getElementById('togglePassword');
        const formMessage = document.getElementById('formMessage');

        togglePassword.addEventListener('click', () => {
            const isVisible = passwordInput.type === 'text';
            passwordInput.type = isVisible ? 'password' : 'text';
            togglePassword.textContent = isVisible ? 'Mostrar' : 'Ocultar';
            togglePassword.setAttribute('aria-label', isVisible ? 'Mostrar contraseña' : 'Ocultar contraseña');
            togglePassword.setAttribute('aria-pressed', String(!isVisible));
        });

        document.getElementById('loginForm').addEventListener('submit', (event) => {
            event.preventDefault();
            const username = document.getElementById('username').value.trim();
            if (username !== 'admin' || passwordInput.value !== 'admin') {
                formMessage.textContent = 'Usuario o contraseña incorrectos.';
                return;
            }

            window.location.href = `dasboard.html?usuario=${encodeURIComponent(username)}`;
        });