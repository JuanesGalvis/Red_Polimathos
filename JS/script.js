const Follow = document.querySelector('#Follow');

Follow.addEventListener('click', () => {

    Follow.classList.toggle('Cabecera__Follow')
    Follow.classList.toggle('Cabecera__Followed')

    if(Follow.classList.contains('Cabecera__Follow'))
    {
        Follow.innerHTML = "Seguir +"
    }else
    {
        Follow.innerHTML = "Siguiendo!"
    }
})