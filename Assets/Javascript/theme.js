function getTheme() {
    var body = document.body;
    
    if (body.classList.contains("dark")) {
        return true
    }

    return false
}

function themeChange() {
    var body = document.body;
    let status = getTheme()

    console.log(status)
    body.classList.toggle("dark");
}

function onLoad() {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        let status = getTheme()
        console.log(status)

        if (status != true) {themeChange()} 
    }
}