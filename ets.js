function setDarkMode(isDark) {
        var darkBtn = document.getElementById('darkBtn')
        var lightBtn = document.getElementById('lightBtn')

        if(isDark) {
            lightBtn.style.display = "block"
            darkBtn.style.display = "none"
        } else {
            lightBtn.style.display = "none"
            darkBtn.style.display = "block"
        }

        document.body.classList.toggle("darkmode");
    }
function setDarkMode(isDark) {
    var darkBtn = document.getElementById('darkBtn')
    var lightBtn = document.getElementById('lightBtn')

    if(isDark) {
        lightBtn.style.display = "block"
        darkBtn.style.display = "none" 
    //tambahan localstorage
        localStorage.setItem('preferredTheme', 'dark');
    } else {
        lightBtn.style.display = "none"
        darkBtn.style.display = "block"
     //tambahan localstorage
        localStorage.removeItem('preferredTheme');
    }

    document.body.classList.toggle("darkmode");
}
