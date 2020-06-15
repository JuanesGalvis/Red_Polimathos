// ÁREAS
const FormRuta = document.getElementById('Ruta');

// BOTONES
const GitHub = document.getElementById('btn-GitHub');
const GitLab = document.getElementById('btn-GitLab');
const Archivos = document.getElementById('btn-Archivo');
const Dropbox = document.getElementById('btn-Dropbox');
const Google = document.getElementById('btn-Google');

GitHub.addEventListener('click', () => {
    if(FormRuta.classList.contains('hide'))
    {
        FormRuta.classList.remove('hide');
    }else{
        FormRuta.classList.add('hide');
    }

    let FotoRuta = document.querySelector('.form-group > img')
    FotoRuta.setAttribute('src','https://www.pngitem.com/pimgs/m/128-1280162_github-logo-png-cat-transparent-png.png')
    
    let LabelRuta = document.querySelector('.form-group label')
    LabelRuta.innerHTML = "Repositorio"

    let SrcDeRuta = document.querySelector('#SrcRuta')
    SrcDeRuta.setAttribute('placeholder','github.com/user/Repositorio')
    SrcDeRuta.setAttribute('name','GitHub')

})

GitLab.addEventListener('click', () => {
    if(FormRuta.classList.contains('hide'))
    {
        FormRuta.classList.remove('hide');
    }else{
        FormRuta.classList.add('hide');
    }

    let FotoRuta = document.querySelector('.form-group > img')
    FotoRuta.setAttribute('src','https://upload.wikimedia.org/wikipedia/commons/1/18/GitLab_Logo.svg')
    
    let LabelRuta = document.querySelector('.form-group label')
    LabelRuta.innerHTML = "Repositorio"

    let SrcDeRuta = document.querySelector('#SrcRuta')
    SrcDeRuta.setAttribute('placeholder','gitlab.com/user/Repositorio')
    SrcDeRuta.setAttribute('name','GitLab')

})

Archivos.addEventListener('click', () => {
    if(FormRuta.classList.contains('hide'))
    {
        FormRuta.classList.remove('hide');
    }else{
        FormRuta.classList.add('hide');
    }

    let FotoRuta = document.querySelector('.form-group > img')
    FotoRuta.setAttribute('src','https://www.terrasat.com.mx/wp-content/uploads/2017/04/dot-expediente.png')
    
    let LabelRuta = document.querySelector('.form-group label')
    LabelRuta.innerHTML = "Archivo"

    let SrcDeRuta = document.querySelector('#SrcRuta')
    SrcDeRuta.removeAttribute('placeholder')
    SrcDeRuta.setAttribute('type','file')
    SrcDeRuta.setAttribute('name','GitLab')

})

Dropbox.addEventListener('click', () => {
    if(FormRuta.classList.contains('hide'))
    {
        FormRuta.classList.remove('hide');
    }else{
        FormRuta.classList.add('hide');
    }

    let FotoRuta = document.querySelector('.form-group > img')
    FotoRuta.setAttribute('src','https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Dropbox_Logo_02.svg/1200px-Dropbox_Logo_02.svg.png')
    
    let LabelRuta = document.querySelector('.form-group label')
    LabelRuta.innerHTML = "URL Archivo"

    let SrcDeRuta = document.querySelector('#SrcRuta')
    SrcDeRuta.setAttribute('placeholder', 'Ruta archivo Compartido')
    SrcDeRuta.setAttribute('type','text')
    SrcDeRuta.setAttribute('name','Dropbox')

})

Google.addEventListener('click', () => {
    if(FormRuta.classList.contains('hide'))
    {
        FormRuta.classList.remove('hide');
    }else{
        FormRuta.classList.add('hide');
    }

    let FotoRuta = document.querySelector('.form-group > img')
    FotoRuta.setAttribute('src','https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Google_Drive_logo.svg/1200px-Google_Drive_logo.svg.png')
    
    let LabelRuta = document.querySelector('.form-group label')
    LabelRuta.innerHTML = "URL Archivo"

    let SrcDeRuta = document.querySelector('#SrcRuta')
    SrcDeRuta.setAttribute('placeholder', 'Ruta archivo Compartido')
    SrcDeRuta.setAttribute('type','text')
    SrcDeRuta.setAttribute('name','Google Drive')

})