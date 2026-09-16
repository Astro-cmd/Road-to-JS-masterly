// DOM Manioulation
// event propagation
// window.addEventListener('click',function () {
//     console.log('Window')
// },false)

// document.addEventListener('click', () => {
//     console.log('Document');
// },false)

// document.querySelector('.div2').addEventListener('click',function(e){
//     // e.stopPropagation();
//     console.log('div2');
// },{once: true})

// document.querySelector('.div1').addEventListener('click',function(){
//     console.log('DIV 1')
// },false)

// document.querySelector('.button').addEventListener('click', function(e) {
//     e.preventDefault()
//     console.log(e.target.innerText = 'clicked!')
// },false);

// Event delegation

// it allows users to append a SINGLE event listener to a parent element that 
// adds it to all of its present and future descendats that a selector

document.querySelector('#sports').addEventListener('click', (e) => {
    console.log(e.target.getAttribute('id') + ' is clicked')

    const target = e.target;
    if (target.matches('li')){
        target.style.backgroundColor = 'lightgrey'; 
    }
})
const sports = document.querySelector('#sports');
const newSport = document.createElement('li')
newSport.innerText ='rugby';
newSport.setAttribute('id', 'rugby');

sports.append(newSport)

const secondSport = document.createElement('li')
secondSport.innerText = 'swimming'
secondSport.setAttribute('id', 'swimming')
sports.append(secondSport)
secondSport.remove()