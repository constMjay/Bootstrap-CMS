window.addEventListener('DOMContentLoaded', () => {
    // Navbar
    const navbarToggler = document.querySelector('.navbar-toggler');
    navbarToggler.addEventListener('click', () => {
        const navBarNav = document.querySelector('#navbarNav');
        const navBarNavLineIcon = document.querySelectorAll('.line')
        NavbarIconStyle(navBarNav, navBarNavLineIcon)
    })

})

/* Navbar Icon Style */
function NavbarIconStyle(navbarNav, navbarNavLine) {
    !navbarNav.classList.contains("show") ? navbarNavLine.forEach(line => line.classList.add("active")) : navbarNavLine.forEach(line => line.classList.remove("active"))
}