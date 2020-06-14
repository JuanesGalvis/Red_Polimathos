const AreaProyectos = document.querySelector('#Proyectos');

// CREAR PROYECTO CON LO RECIBIDO EN NewProject
const DatosGet = location.search;

(function PrimeraVez()
{

    if( DatosGet == "" )
    {
        alert("Bienvenido!")
        Vacio()
    }else{
        const DatosSeparados = DatosGet.split('&')
        alert("Proyecto Guardado con exito!")
        DatosEnviados(DatosSeparados);
        Vacio()
    }

})();

function DatosEnviados( Datos )
{

  let NameProyect = Datos[0].substr(8, Datos[0].length)
  for(let i = 0; i < NameProyect.length; i++)
  {
      NameProyect = NameProyect.replace('+',' ')
  }

  let DescProyect = Datos[1].substr(12, Datos[1].length)
  for(let i = 0; i < DescProyect.length; i++)
  {
      DescProyect = DescProyect.replace('+',' ')
  }

  let RutaProyect = Datos[2].substr(7, Datos[2].length)
  for(let i = 0; i < RutaProyect.length; i++)
  {
     RutaProyect = RutaProyect.replace('%2F', "/")
  }

  let Imagen = Datos[3].substr(7, Datos[3].length)
  Imagen = Imagen.replace('%3A', ":")
  
  for(let i = 0; i < Imagen.length; i++)
  {
    Imagen = Imagen.replace('%2F', "/")
  }

  console.log(Imagen)

  let ListTecnologias = Datos[4].substr(17, Datos[3].length)
  for(let i = 0; i < ListTecnologias.length; i++)
  {
    ListTecnologias = ListTecnologias.replace('+%3Cli%3E+', "")
    ListTecnologias = ListTecnologias.replace('+%3C%2Fli%3E+', "")
    ListTecnologias = ListTecnologias.replace('%3Cli%3E', "")
    ListTecnologias = ListTecnologias.replace('%3C%2Fli%3E', "")
  }
  const SpanTecnologias = ListTecnologias.split('+')
  SpanTecnologias.pop()

  RenderProject(NameProyect, DescProyect, RutaProyect, Imagen ,SpanTecnologias)
 
}

function RenderProject(Titulo, Descripcion, Ruta, IMG, Tecnologias)
{
    const $HTML = document.createElement('div')
    $HTML.setAttribute('class','Proyecto__Card')

    const DivDecoracion = document.createElement('div')
    DivDecoracion.setAttribute('class','Decoracion1')
    $HTML.append(DivDecoracion)

    const $Imagen = document.createElement('img')
    $Imagen.setAttribute('src',IMG)
    $HTML.append($Imagen)

    const Tecnolist = document.createElement('div')
    Tecnolist.setAttribute('class','Proyecto__Usado')

    for(let i = 0; i < Tecnologias.length; i++)
    {
        let Item = document.createElement('span')
        Item.innerHTML = Tecnologias[i]
        Tecnolist.append(Item)
    }

    $HTML.append(Tecnolist)

    const $Titulo = document.createElement('h3')
    $Titulo.innerHTML = Titulo;

    $HTML.append($Titulo)

    const $Descripcion = document.createElement('p')
    $Descripcion.innerHTML = Descripcion;
    $HTML.append($Descripcion)

    const Enlace = document.createElement('a')
    Enlace.setAttribute('href',`https://${Ruta}`)
    Enlace.setAttribute('target','_blank')
    
    const Boton = document.createElement('button')
    Boton.innerHTML = "Ver más!"
    Enlace.append(Boton)
    $HTML.append(Enlace)

    AreaProyectos.append($HTML)
}

function Vacio()
{

    if( AreaProyectos.querySelectorAll('div').length == 0 )
    {
        const $Mensaje = document.createElement('div')
        $Mensaje.setAttribute('class','Vacio')
        
        const MensajeTexto = document.createElement('p');
        MensajeTexto.innerHTML = "No tienes Proyectos, Sube uno!!"    
        
        const MensajeFoto =  document.createElement('img')
        MensajeFoto.setAttribute('src','https://images.vexels.com/media/users/3/152639/isolated/preview/506b575739e90613428cdb399175e2c8-dibujos-animados-de-astronauta-espacial-by-vexels.png')
        
        $Mensaje.append(MensajeTexto)
        $Mensaje.append(MensajeFoto)
     
        AreaProyectos.append($Mensaje)        
    }
}