const nav = document.getElementById('navigation');

function toggleNavigation(menuButton) {
    if (!nav) {
        console.error('Couldn\'t find the navbar in the DOM. Menu cannot be toggled.');
        return;
    }

    if (nav.classList.contains('expanded')) {
        nav.classList.remove('expanded');
    } else {
        nav.classList.add('expanded');
    }
}