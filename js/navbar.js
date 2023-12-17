let btnNavbar = document.getElementById('btnLinks')
let navLinks = document.getElementById('navLinks')
btnNavbar.addEventListener('click', () => {
    if (navLinks.style.display === 'none' || navLinks.style.display === '') {
        navLinks.style.display = 'grid'
        navLinks.style.opacity = '100%'

    } else {
        navLinks.style.display = 'none'

    }
})

addEventListener('resize', () => {
    if (window.innerWidth < 768) {
        navLinks.style.display = 'none'

    } else {
        navLinks.style.display = 'grid'
        navLinks.style.columnGap = '3rem'
    }
})