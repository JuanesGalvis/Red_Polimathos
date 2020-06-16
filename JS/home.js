const $modal = document.getElementById('modal');
const $overlay = document.getElementById('overlay');
const $hideModal = document.getElementById('hide-modal');



const $interestButton = document.querySelector('.main_left_interest-button')


function showModal(){
    $overlay.classList.add('active');
    $modal.style.animation= 'modalIn .8s forwards'
    
}

$interestButton.addEventListener('click', ()=>{
    showModal();
})

$hideModal.addEventListener('click', hideModal);
  
function hideModal(){
    $overlay.classList.remove('active');
    $modal.style.animation= 'modalOut .8s forwards'
}