'use strict';

// Variables

let prev = document.getElementById('prev');
let next = document.getElementById("next");
const guestContainer = document.querySelector('#guest-container');
const guestImage = document.querySelector('#guest_image');
const guestQuote = document.querySelector('.guest-quote')
const guestName = document.querySelector('#guest-name')
const guestProfession = document.querySelector('#guest-profession');

const users = [
    {   img: 'images/image-tanya.jpg',
        name: 'Tanya Sinclair',
        profession: 'UX Engineer',
        quote: `“ I’ve been interested in coding for a while but never taken the jump, until now. 
        I couldn’t recommend this course enough. I’m now in the job of my dreams and so 
        excited about the future. ”`
    },
    {
        img: 'images/image-john.jpg',
        name:'John Takpor',
        profession:'Junior Front-end Developer',
        quote:`“ If you want to lay the best foundation possible I’d recommend taking this course. 
        The depth the instructors go into is incredible. I now feel so confident about 
        starting up as a professional developer. ”`
    }
]

// Event listeners

prev.addEventListener('click', changeGuest);
next.addEventListener('click', changeGuest);


// Functions

function changeGuest(){
    let currentGuest = document.querySelector('.guest-sign span')
    if(currentGuest.innerText === users[0].name){
        guestImage.setAttribute('src', users[1].img); 
        guestQuote.innerText = users[1].quote;
        guestName.innerText = users[1].name;
        guestProfession.innerText = users[1].profession;
    }else {
        guestImage.setAttribute('src', users[0].img); 
        guestQuote.innerText = users[0].quote;
        guestName.innerText = users[0].name;
        guestProfession.innerText = users[0].profession;
    }
}

