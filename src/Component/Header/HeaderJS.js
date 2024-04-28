// HeaderJS.js
import $ from 'jquery';

export function myFunction(event) {
    event.preventDefault();
    $('nav a').removeClass('Active');
    $(event.target).addClass('Active');
    setTimeout(() => {
        $('header').removeClass('MobileShowOff');
    }, 250);
}


export function NavToggle(){
    $('header').toggleClass('MobileShowOff');
}