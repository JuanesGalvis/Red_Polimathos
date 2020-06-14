const Container = document.querySelector('#Badges')
const AddBadge = document.querySelector('.Cabecera__Tecnologias--Add')
const BadgeContainer = document.querySelector('.Lista')
const Badges = document.querySelectorAll('.Lista img')
const Labels = document.querySelectorAll('.Lista span')
const InputBadge = document.querySelector('.Lista input')

AddBadge.addEventListener('click', ()=>{

    BadgeContainer.classList.toggle('hide')
})

InputBadge.addEventListener('keypress', (tecla)=>{
    
    if(tecla.key === 'Enter')
    {
        Container.append( Badges[parseInt(InputBadge.value - 1)])
        Labels[InputBadge.value - 1].innerHTML = ""
    }   
})