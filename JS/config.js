const btnPassword = document.querySelector('#Password');
const btnMostrar = document.querySelector('#Mostrar')

let inputs = document.querySelectorAll('.Config__Opciones--inputs input')
btnMostrar.addEventListener('click', ()=>{
    for(let i = 0; i < 3; i++)
    {
        inputs[i].setAttribute('type','text')
    }
})

btnPassword.addEventListener('click', ()=>{
    
    if(inputs[0].value != "" && inputs[1].value === inputs[2].value)
    {
        alert('Contraseña modificada con exito')
    
    }else if(inputs[0].value == "" && inputs[1].value === inputs[2].value)
    {
        alert("La contraseña actual es obligatoria")
    
    }else
    {
        alert("Contraseñas diferentes")
    }
    
    
})

const btnExit = document.querySelector('#Exit')

btnExit.addEventListener('click', ()=>{
    alert("Esperamos volverte a ver pronto")
    window.location="./index.html";
})

const btnFormulario = document.querySelector('#Enviar')

btnFormulario.addEventListener('click',()=>{
    alert("Buscaremos darte una respuesta en 24 horas")
})