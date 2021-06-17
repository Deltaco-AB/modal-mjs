# Modal.mjs
Modal.mjs is a simple, lightweight and easy to use module for creating modals with JavaScript.

![Screenshot](https://storage.googleapis.com/public.victorwesterlund.com/github/Deltaco-AB/modal-mjs/Capture.png)

See Modal.mjs in action:
- [Become a customer form](https://www.deltaco.se/bli-kund) on deltaco.se
- [DELTACO OFFICE Configurator](https://github.com/Deltaco-AB/office-configurator) with a custom theme

It also has dark theme support - enabled with a [CSS Media feature](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-color-scheme).

## Import

**Method 1:**
1. Clone this repo into a lib folder
2. Import the stylesheet `modal-mjs/modal.css` (CSS [`@import`](https://developer.mozilla.org/en-US/docs/Web/CSS/@import), HTML `<link>` etc.)
```css
@import url("../lib/modal-mjs/modal.css");
```
3. Import the module `modal-mjs/Modal.mjs` where you need it
```js
import { Modal } from "./lib/modal-mjs/Modal.mjs";
```

**Method 2:**
1. Clone this repo or download it as a zip
2. Copy the `modal.css` stylesheet into your css folder
3. Import the stylesheet with CSS [`@import`](https://developer.mozilla.org/en-US/docs/Web/CSS/@import), HTML `<link>` etc.
```css
@import url("modal.css");
```

3. Copy the `Modal.mjs` module into your JS `modules/`
4. Import the module from your JavaScript where you need it
```js
import { Modal } from "./modules/Modal.mjs";
```

## Create a modal
Modals build their own element tree when opened. You don't need to add anything to your DOM.

This is the simplest and fastest way to create a modal:
```js
const modal = new Modal("Header text");
modal.open("<p>Content text</p>");
```
See the [Methods](#methods) section for a more detailed explanation.

### With more content
You can append HTML to a modal with the [`append()`](#append) method before the modal has been openend with [`open()`](#open).
This can be useful if your program doesn't have all the UI components to show in a modal at the time of construction.

```js
const modal = new Modal("Product summary");
products.forEach(product => modal.append(`<li>${product}</li>`));
modal.open();
```

## Methods

The `Modal` class takes a single, optional argument which when defined; will open the modal with a heading and close button.

```js
const modal = new Modal();
```

Omitting this argument will open the modal without a header, heading and close button. This "slim mode" is great for loading spinners and CTA.
A modal opened without a header has to be closed by calling [`close()`](#close).

![Slim mode](https://storage.googleapis.com/public.victorwesterlund.com/github/Deltaco-AB/modal-mjs/slim.PNG)

### open(html)
Calling this method will insert the modal element tree into the DOM and open it with a transition. 
Calling `append()` will no longer have an effect.
```js
modal.open();
```

You can pass an HTML string to this method as an optional argument and the modal will open immediately with that content.
```js
modal.open("<p>Hello world</p>");
```

### close()
Close the modal with a transition and remove it from the DOM.

```js
modal.close();
```

This method can also be called from the prototype of a modal element.
```html
<div id="myModal" class="modal"></div>
```
```js
document.getElementById("myModal").close();
```

### append(html)
Append HTML to the modal body. Call [`open()`](#open) when you've appended all HTML to show the modal.
```js
modal.append("<p>lorem ipsum</p>");
modal.append("<p>dolor sit amet</p>");
//...
modal.open();
```

## Properties

The modal HTMLElements can be accessed and modified before and after a modal has been opened with [`open()`](#open).

```js
console.log(modal.wrapper); // HTMLElement of the modal parent
console.log(modal.inner); // HTMLElement of the inner container
```

This also means you can read, modify and set properties just like you would on any other element.

```js
modal.inner.style.setProperty("background-color","red");
```
