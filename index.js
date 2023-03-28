const  $tiempo = document.querySelector('.tiempo');
       $fecha = document.querySelector('.fecha');


function digitalClock() {
    let f = new Date();
    dia = f.getDate();
    mes = f.getMonth() + 1;
    anio = f.getFullYear();
    _diaSemana = f.getDay();

    dia = ('0' + dia).slice(-2);
    mes = ('0' + mes).slice(-2);

    let semana = ['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado', 'Domingo'];
    let ShowSemena = (semana[_diaSemana])

    $fecha.innerHTML =` ${ShowSemena} ${dia}/${mes}/${anio}`;

    let timeString = f.toLocaleTimeString('es-Es');
    $tiempo.innerHTML = timeString;
};      


setInterval(() => {
    digitalClock();
}, 1000);