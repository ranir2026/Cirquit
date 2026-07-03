const rt = $(':root')[0];

const changeTheme = $('.change-theme-wrapper')[0];
const csRedBtn = $('.csred')[0];
const csOrangeBtn = $('.csorange')[0];
const csBlueBtn = $('.csblue')[0];
const csPurpleBtn = $('.cspurple')[0];

const themeColors = {
    'red': '#ff3939',
    'red-accent': '#fde9e9',
    'orange': '#ff8839',
    'orange-accent': '#fdf0e8',
    'blue': '#3860ff',
    'blue-accent': '#e8e8fd',
    'purple': '#ca38ff',
    'purple-accent': '#f7e8fd'
}

function change_theme(color) {
    rt.style.setProperty('--main-color', themeColors[color])
    rt.style.setProperty('--main-accent-color', themeColors[`${color}-accent`])    
}

changeTheme.children[0].onmouseenter = function() {
    changeTheme.children[2].classList.add('active');
}

changeTheme.onmouseleave = function() {
    changeTheme.children[2].classList.remove('active');
}

csRedBtn.onmousedown = function() { change_theme('red'); }
csOrangeBtn.onmousedown = function() { change_theme('orange'); }
csBlueBtn.onmousedown = function() { change_theme('blue'); }
csPurpleBtn.onmousedown = function() { change_theme('purple'); }