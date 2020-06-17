const InputEnVivo = document.querySelector('#MensajeEnVivo')
const Estado = document.querySelector('#EnVivo')
const Mensajes = document.querySelector('#ContainerChat')
const btnSend = document.querySelector('#Send')

InputEnVivo.addEventListener('keypress', (evento) => {

    Estado.innerHTML = "Escribiendo....."

    if( evento.key === 'Enter' )
    {
        const Mensaje = document.createElement('p')
        Mensaje.innerHTML = InputEnVivo.value;

        Mensajes.append(Mensaje)
        InputEnVivo.innerHTML = ""
    }
})

btnSend.addEventListener('click', ()=>{

    const Mensaje = document.createElement('p')
    Mensaje.innerHTML = InputEnVivo.value;

    Mensajes.append(Mensaje)
    InputEnVivo.innerHTML = ""
})

InputEnVivo.addEventListener('blur', ()=>{

    Estado.innerHTML = ""
})

