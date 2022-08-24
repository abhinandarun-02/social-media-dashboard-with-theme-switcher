const html = document.querySelector('html');
const checkbox = document.querySelector('.toggle-control input')
checkbox.checked = false;
html.dataset.theme = `theme-dark`;

function switchTheme() {
    if (!checkbox.checked) {
        html.dataset.theme = 'theme-dark';
    }
    else {
        html.dataset.theme = 'theme-light';
    }
}

