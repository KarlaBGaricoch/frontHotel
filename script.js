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

// Obtener el botón del menú y el panel lateral
const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');
const cerrarSesionBtn = document.querySelector('.menu-items button:last-child');

// Mostrar el menú cuando el botón de menú es clickeado
menuBtn.addEventListener('click', () => {
  menu.style.left = '0'; // Muestra el menú
  document.body.style.marginLeft = '320px'; // Desplaza el contenido para dar espacio al menú
});

// Función para ocultar el menú
function cerrarMenu() {
  menu.style.left = '-320px'; // Esconde el menú
  document.body.style.marginLeft = '0'; // Vuelve el contenido a su posición inicial
}

// Agregar funcionalidad al botón de Cerrar Sesión
cerrarSesionBtn.addEventListener('click', () => {
  // Aquí puedes agregar la lógica para cerrar sesión, por ejemplo:
  alert('Has cerrado sesión');
  // Luego, puedes redirigir al usuario a otra página o hacer otra acción.
});

// Opcional: Ocultar el menú al hacer clic fuera de él (esto cierra el menú si se hace clic fuera de él)
document.addEventListener('click', (event) => {
  if (!menu.contains(event.target) && event.target !== menuBtn) {
    cerrarMenu(); // Cierra el menú si se hace clic fuera de él
  }
});

// Función para obtener y mostrar la hora actual
function mostrarFechaHora() {
  const fecha = new Date();
  const opciones = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' };
  document.getElementById('fecha-hora').textContent = fecha.toLocaleDateString('es-ES', opciones);
}

// Función para obtener y mostrar el clima actual
async function obtenerClima() {
  const apiKey = '056aeaf85fadd82f8edc062c6ac78557'; // Reemplaza con tu API key real
  const ciudad = 'Formosa'; // Cambia por tu ciudad si querés
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${apiKey}&lang=es&units=metric`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    const ciudadNombre = data.name;
    const temperatura = data.main.temp;
    const descripcion = data.weather[0].description;
    const icono = data.weather[0].icon;
    const iconUrl = `https://openweathermap.org/img/wn/${icono}@2x.png`;

    document.getElementById('clima').innerHTML = `
      <h2>Clima en ${ciudadNombre}</h2>
      <img src="${iconUrl}" alt="Icono del clima">
      <p>${temperatura}°C - ${descripcion}</p>
    `;
  } catch (error) {
    console.error('Error al obtener el clima:', error);
    document.getElementById('clima').textContent = 'No se pudo obtener el clima';
  }
}

// Llamar a las funciones para mostrar la fecha/hora y clima al cargar la página
mostrarFechaHora();
obtenerClima();

document.getElementById("formHabitacion").addEventListener("submit", function (e) {
  e.preventDefault();

  const datos = {
    nombreHotel: this.nombreHotel.value,
    ciudad: this.ciudad.value,
    tipo: this.tipo.value,
    descripcion: this.descripcion.value,
    servicios: this.servicios.value.split(',').map(s => s.trim()),
    fotos: this.fotos.value.split(',').map(url => url.trim()),
    precio: parseFloat(this.precio.value),
  };

  console.log("Habitación cargada:", datos);
  alert("Habitación guardada correctamente ✅");

  this.reset();
});


//Habitaciones

