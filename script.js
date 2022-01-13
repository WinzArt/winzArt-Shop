/* Togle Menu */
// function fMenuTogle() {
//     const x = document.querySelector('.menu-toggle')
//     x.classList.toggle("change");

//     const nav = document.querySelector('nav ul')
//     nav.classList.toggle("slide");
// }

document.querySelector('.menu-toggle').addEventListener("click", fMenuToggle);

function fMenuToggle() {
    const x = document.querySelector('.menu-toggle')
    x.classList.toggle("change");

    const nav = document.querySelector('nav ul')
    nav.classList.toggle("slide");

    // const body = document.querySelector('body')
    // body.classList.toggle("fix");
}

document.querySelector('.menu-list').addEventListener("click", fMenuToggle);

function fMenuToggle() {
    const x = document.querySelector('.menu-toggle')
    x.classList.toggle("change");

    const nav = document.querySelector('nav ul')
    nav.classList.toggle("slide");

}