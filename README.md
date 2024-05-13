# FiveM NUI Utils

## Alpine JS

-   [AlpineJS](https://alpinejs.dev/) & [TailwindCSS](https://tailwindcss.com/) (optional)
-   Recommended for small projects
-   Contains util class which helps with lua connection
-   Components support

### Reusable Components

To create reusable components, create new html file in `components` folder. Name of that file will be a name of custom component. In that file you can write HTML and CSS code. **You can't use `<script>` tag**

After creating component, you need to register it in `index.html` using `registerComponent(COMPONENT_NAME)`.

**Don't put `.html` into COMPONENT_NAME**

After that you can use you component in html with `fivem-` prefix.

```html
<fivem-COMPONENT_NAME />
```

You can also define simple props for component and use it using `{{PROP_NAME}}`

```html
<fivem-COMPONENT_NAME example="World" />
```

Component:

```html
<p>Hello {{example}}!</p>
```

Output: `Hello World!`

## React JS (Simple version without building)

-   [ReactJS](https://react.dev/) & [TailwindCSS](https://tailwindcss.com/) (optional)
-   Recommended for medium-size projects
-   Contains util class which helps with lua connection
-   Components support
-   **Styles must be linked using HTML formula `<link rel="stylesheet" href="FILE_PATH">`**
-   **Don't use import statement**
-   **Add name of component into `loadComponents` function in `index.html`**

## Util class which hels with lua connection

### LUA

To send NUI messages use

```lua
  SendNUIMessage({
    action = 'ACTION_NAME',
    data = DATA_OBJ
  })
```

### NUI

-   Receiving messages from lua

```js
useNui("ACTION_NAME", (data) => {
	// ... (data == DATA_OBJ)
})
```

-   Sending callbacks to lua

```js
callNui("CALLBACK_NAME", REQ_DATA, (res) => {
	// ... (res == data from lua's response)
})
```

## Usage

- Download template which you want to use `[AlpineJS]` or `[Simple ReactJS]`
- Rename downloaded folder to `nui`
- Put that folder into your script
- Add this into your `fxmanifest.lua`

	```lua
	ui_page 'nui/index.html'
	
	files {
	    'nui/index.html',
	    'nui/**.*'
	}
	```
