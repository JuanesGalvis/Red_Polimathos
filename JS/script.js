// BOTÓN DE SEGUIR EN LOS PERFILES

// NUEVO PROYECTO
const input = document.getElementById('input-tecnologias');
const lista = document.getElementById('list-tecnologias');
const InputGet = document.querySelector('#ListaTecnologias')

//const Vector = [];
var Texto = "";

input.addEventListener('keypress', (tecla) => {

    if(tecla.key === 'Enter')
    {
        //Vector.push(input.value);
        Texto += ` <li> ${input.value} </li>`
        lista.innerHTML = Texto;
        input.value = ""
        InputGet.value = Texto
    }   
})

const redireccionar = () => {

    window.location="./programador.html";
}

const Salir = document.getElementById('exit');
Salir.addEventListener('click', () => {

    if(confirm("Estas seguro?"))
    {   
        redireccionar()
    }
    
})

const Tecnologias = document.querySelector('#ListaTecnologias')

const Publicar = document.getElementById('subir');
Publicar.addEventListener('click', () => {

    /* ENVIO DE DATOS AL PERFIL */
    const Formulario = document.querySelector('#form')

    Formulario.append( document.querySelector('#NameProject'))
    Formulario.append( document.querySelector('#Description'))
    Formulario.append( document.querySelector('#SrcRuta'))
    Formulario.append( document.querySelector('#imagen') )
    Formulario.append( InputGet )

    Formulario.submit();
})

