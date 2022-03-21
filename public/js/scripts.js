function showsubmenu(){
    const buttons = document.querySelectorAll('[data-submenu]');

    buttons.forEach(button => {
        button.addEventListener('click', e => {
            const getSubmenuNumber = e.currentTarget.hasAttribute('data-submenu') ? e.currentTarget.getAttribute('data-submenu') : '';
            const numbers = document.querySelectorAll(`[data-submenu-element="${getSubmenuNumber}"]`);

            numbers.forEach(number => {
                number.classList.toggle('active');
            })
        })
    })
}

function start() {
    showsubmenu();
}




