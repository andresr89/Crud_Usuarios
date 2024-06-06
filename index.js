
const usuario = {
    id:2,
    nombre : 'Andres',
    apellido : 'Rodriguez',
    edad: 34,
    activo : true,
    email:'andresarodriguezr89@gmail.com',

};
function inicio (){

    const elementtr = document.getElementById('tableUsers');

     elementtr.innerHTML = "<th>"+usuario.id+"</th>";

}
  

