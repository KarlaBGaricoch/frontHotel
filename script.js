document.addEventListener('DOMContentLoaded', () => {
    const formBtn = document.querySelector('#login-btn');
    const loginForm = document.querySelector('.login-form-container');
    const formClose = document.querySelector('#form-close');
    const loginFormElement = document.querySelector('#login-form');

    // Mostrar formulario
    formBtn.addEventListener('click', (e) => {
        e.preventDefault(); // Previene redirección si es un <a>
        loginForm.classList.add('active');
    });

    // Cerrar formulario
    formClose.addEventListener('click', () => {
        loginForm.classList.remove('active');
    });

    // Manejar envío de formulario
    loginFormElement.addEventListener('submit', (e) => {
        e.preventDefault(); // Prevenir envío real

        const email = loginFormElement.email.value;
        const password = loginFormElement.password.value;

        console.log("Email:", email);
        console.log("Password:", password);

        // Aquí podrías hacer un fetch al servidor, por ejemplo:
        /*
        fetch('/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password })
        })
        .then(res => res.json())
        .then(data => {
            if (data.success) {
                window.location.href = '/dashboard';
            } else {
                alert('Login incorrecto');
            }
        });
        */
    });
});

function mostrarRegistro() {
    document.getElementById('loginBox').style.display = 'none';
    document.getElementById('registerBox').style.display = 'block';
}

function mostrarLogin() {
    document.getElementById('registerBox').style.display = 'none';
    document.getElementById('loginBox').style.display = 'block';
}

function iniciarSesion() {
    const usuario = document.getElementById('loginUsuario').value.trim();
    const password = document.getElementById('loginPassword').value;

    if (!usuario || !password) {
        alert('Por favor, ingresá tu usuario y contraseña.');
        return;
    }

    // Simulación de login
    console.log('Intentando iniciar sesión con:', { usuario, password });
    alert(`¡Bienvenido, ${usuario}!`);
    // Aquí podés redirigir o cargar otra parte del sitio si querés
}


function registrarse() {
    const hotel = document.getElementById('hotelNombre').value.trim();
    const usuario = document.getElementById('usuarioNombre').value.trim();
    const password = document.getElementById('usuarioPassword').value;

    if (!hotel || !usuario || !password) {
        alert('Por favor, completá todos los campos.');
        return;
    }

    // Simulamos guardar los datos
    console.log('Registro:', {
        hotel,
        usuario,
        password
    });

    alert(`¡Registro exitoso para el hotel "${hotel}"! Ahora podés iniciar sesión.`);
    mostrarLogin();
}


//Panel admin

