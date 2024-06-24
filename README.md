# react-confirm-prompt
 [![Static Badge](https://img.shields.io/badge/npm-v1.1.1-blue)](https://www.npmjs.com/package/react-confirm-prompt)  <br>
 ReactConfirmBox is a versatile and user-friendly React component designed to create confirm dialogs with ease. It is fully responsive, highly customizable, and simple to integrate into your React applications. Whether you need to confirm user actions, prompt for decisions, or display alerts, ReactConfirmBox provides a seamless solution to enhance user interactions. <br>
[Demo project](https://react-confirm-prompt.netlify.app/)
 
  ![Screenshot 2024-06-19 224124](https://github.com/nipun-dezoysa/react-confirm-prompt/assets/127383230/988542c4-631e-4c93-9627-4cb0637674c6)

## Getting started

### Installation
```
npm i react-confirm-prompt
```
### Basic function
This is similar to native javascript confirm alert API
```javascript
import { showConfirm } from "react-confirm-prompt";
function App() {
  function handleShowConfirm() {
    showConfirm("Are you sure?").then((answer) => {
      if(answer) {
        alert("You clicked Confirm");
      } else {
        alert("You clicked Cancel");
      }
    });
  }

  return (
    <>
      <button onClick={() => handleShowConfirm()}>Show Confirm</button>
    </>
  );
}
export default App;
```
### Function with options
```javascript
function handleShowConfirm() {
    showConfirm("Are you sure?", {
      description:
        "This action cannot be undone. All values associated with this field will be lost.",
      type: "warning",
    }).then((answer) => {
      if (answer) {
        alert("You clicked yes");
      } else {
        alert("You clicked no");
      }
    });
  }
```
<mark>Options</mark>
| option   | description | type(s) |
| ------------- | ------------- | ------------- |
| description | description for conirmation | string |
| type | pre-defined types of confirmation box. 'info' is the defualt value  | string ("info", "warning", "success", "question") |
| animation | confirm box animations. 'scale' is the defualt value  | string ("none", "scale", "fade",  "blur", "slide-up", "slide-down", "slide-right", "slide-left") |
| confirmLabel | custom text that should display in confirm button | string |
| confirmColor | confirm button color | string (hex or rgb color codes)|
| confirmTextColor | confirm button text color | string (hex or rgb color codes)|
| cancelLabel | custom text that should display in cancel button | string |
| cancelColor | cancel button color | string (hex or rgb color codes)|
| cancelTextColor | cancel button text color | string (hex or rgb color codes)|
| hideCancel | hiding cancel button | boolean |
| disableBlur | disabling background click cancellation | boolean |
| color | define color for both icon & confirm button | string (hex or rgb color codes) |
| hoverColor | define button hover color | string (hex or rgb color codes) |
| hoverTextColor | define button's hover text color | string (hex or rgb color codes) |
| icon | define custom icon | JSX.Element |
| iconColor | define icon color | string (hex or rgb color codes) |
| hideBackground | hiding dark background | boolean |
| hideShadow | hiding confirm box shadow | boolean |

### Custom icon example
you can use [react-icons](https://react-icons.github.io/react-icons/) for custom icons. search and import your icon to the project.

```javascript
import { TiInfoOutline } from "react-icons/ti";
...
showConfirm("Are you sure?", {
      icon: <TiInfoOutline />,
      color: "rgb(96 165 250)",
    }).then((answer) => {
      if (answer) {
        alert("You clicked yes");
      } else {
        alert("You clicked no");
      }
    });
```
