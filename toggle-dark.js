const prefersDark = window.matchMedia("(prefers-color-scheme: dark)")
const body = document.body
const savedTheme = localStorage.getItem('theme') ? localStorage.getItem('theme') : null
const btn = document.querySelector("#toggle-dark")

// Check for previously indicated dark/light preference

if (savedTheme) {
    document.documentElement.setAttribute('data-theme', savedTheme)
    btn.innerHTML = savedTheme
} else {
    // Check for system preference and save for future
    // ...currently somewhat of a workaround to avoid flash of unstyled content on page load for dark users
    window.onload = setDataTheme = () => {
        if (prefersDark.matches) {
            document.documentElement.setAttribute('data-theme', 'dark')
            localStorage.setItem('theme', 'dark')
            console.log("Contrast mode " + document.documentElement.getAttribute('data-theme'))
            btn.innerHTML = "dark"
        } else {
            document.documentElement.setAttribute('data-theme', 'light')
            localStorage.setItem('theme', 'light')
            console.log("Contrast mode set to " + document.documentElement.getAttribute('data-theme'))
            btn.innerHTML = "light"
        }
    }
}




// Handle toggle via click
btn.addEventListener("click", () => {
    if (document.documentElement.getAttribute('data-theme') === 'dark') {
        // body.classList.toggle("light-mode")
        document.documentElement.setAttribute('data-theme', 'light')
        localStorage.setItem('theme', 'light')
        console.log("Contrast mode set to " + document.documentElement.getAttribute('data-theme'))
        btn.innerHTML = "dark"
    } else {
        // body.classList.toggle("dark-mode")
        document.documentElement.setAttribute('data-theme', 'dark')
        localStorage.setItem('theme', 'dark')
        console.log("Contrast mode set to " + document.documentElement.getAttribute('data-theme'))
        btn.innerHTML = "light"
    }
})