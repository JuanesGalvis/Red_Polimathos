const $modal = document.getElementById('modal');
const $overlay = document.getElementById('overlay');
const $hideModal = document.getElementById('hide-modal');
const $sendButton = document.getElementById('send');
const $interestTopicName= document.querySelector('#Interest_topic-name');
const $InterestTopicDescription= document.querySelector('#Interest_topic-description');
const $interestButton= document.querySelector('.main_left_interest-button')
const $main_left_interestBadges = document.querySelector('.main_left_interestBadges');
const $publishButton = document.querySelector('.publish_button');
const $publishInput = document.querySelector('.publish_input');
const $postSection = document.querySelector('.main_center_posts');
const $postButtons = document.querySelectorAll('.post_button');


const $userName= document.querySelector('.user_name')
const $userImage= document.querySelector('.user_image')



const colores = ["blue", "yellow" , "red", "green" ,"pink"];


function publishTemplate(){

    var fecha= new Date();
    return (
        `
        <div class="post_info">
            <div class="post_info_image">
                <img src="${$userImage.getAttribute('src')}" alt="User image ${$userName.innerText} ">
            </div>
            <div class="post_info_user">
                <div class="post_info_user-div">
                    <h5>${$userName.innerText}</h5>
                    <a href="./Perfil.html"><h5>@demo_usuario</h5></a>
                </div>
                <h6>hoy a las ${fecha.getHours()}:${fecha.getMinutes()}</h6>
            </div>
        </div>
        <div class="post_description">
            <p>${$publishInput.value}</p>
        </div>
        <div class="post_buttons">
            <button class="post_button" >De interés +</button>
            <button class="post_button" >Compartir</button>
        </div>
        `
)
}

function showModal(){
    $overlay.classList.add('active');
    $modal.style.animation= 'modalIn .8s forwards'
    
}

function hideModal(){
    $overlay.classList.remove('active');
    $modal.style.animation= 'modalOut .8s forwards'
}

$interestButton.addEventListener('click', ()=>{
    $interestTopicName.value= "";
    $InterestTopicDescription.value= "";
    showModal();
})

$sendButton.addEventListener('click', ()=>{
    hideModal();
    var boton = document.createElement('button');
    boton.classList.add('interest_button');
    boton.innerHTML= $interestTopicName.value;
    boton.classList.add(colores[parseInt(Math.random()*5)]);
    $main_left_interestBadges.prepend(boton);
})

$hideModal.addEventListener('click', hideModal);

$publishButton.addEventListener('click', ()=>{
    var post= document.createElement('div');
    post.classList.add('post');
    post.innerHTML=publishTemplate();
    $postSection.prepend(post);
});


for(let i=0; i<$postButtons.length;i+=2){
    $postButtons[i].addEventListener('click', ()=>{
        $postButtons[i].innerHTML= "De interés";
        $postButtons[i].classList.remove('post_button')
        $postButtons[i].classList.add('post_button-clicked')
    })
    
    $postButtons[i+1].addEventListener('click', ()=>{
        $postButtons[i+1].innerHTML= "Compartido";
        $postButtons[i+1].classList.remove('post_button')
        $postButtons[i+1].classList.add('post_button-clicked')
    })
}


