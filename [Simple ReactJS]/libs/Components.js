const loadComponents = (components) => {
    components.forEach((comp) => {
        const el = document.createElement('script')
        el.src = `./components/${comp}.jsx`
        el.type = "text/babel"
        document.head.appendChild(el)
    })
}