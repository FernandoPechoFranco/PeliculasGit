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
            formMessage.textContent = 'El acceso con cuenta aún no está conectado. Puedes explorar el catálogo mientras tanto.';
        });

        document.getElementById('forgotPassword').addEventListener('click', (event) => {
            event.preventDefault();
            formMessage.textContent = 'La recuperación de contraseña estará disponible cuando se conecte el servicio de cuentas.';
        });

        document.getElementById('signupLink').addEventListener('click', (event) => {
            event.preventDefault();
            formMessage.textContent = 'La creación de cuentas estará disponible cuando se conecte el servicio de autenticación.';
        });