const registerComponent = (name) => {
	getComponentHTML(name).then((html) => {
		customElements.define(
			`fivem-${name}`,
			class extends HTMLElement {
				constructor() {
					super()
				}

				connectedCallback() {
					this.render()
					const observer = new MutationObserver((mutationRecords) => {
						mutationRecords.forEach((record) => {
							this.render()
						})
					}).observe(this, {attributes: true})
				}

				render() {
					let finalHTML = html
					this.getAttributeNames().forEach((attr) => {
						finalHTML = finalHTML.replace(
							`{{${attr}}}`,
							this.getAttribute(attr)
						)
					})
					this.innerHTML = finalHTML
				}
			}
		)
	})
}

const getComponentHTML = async (name) => {
	const res = await fetch(`./components/${name}.html`)
	const text = await res.text()
	return text
}
