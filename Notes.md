## focus event in JS

The `focus` event occurs when the input element gains focus, typically when a user clicks inside the input field.

```JavaScript
document.querySelector('input').addEventListener('focus', () => {
    alert("Focus")
})
```


## blur event in JS

The `blur` event occurs when the input element loses focus, usually when a user clicks outside the input field or tabs away from it.

```JavaScript
document.querySelector('input').addEventListener('blur', () => {
    alert("Unfocused")
})
```


## input event in JS

The "input" event occurs whenever the value of the input field changes. This can happen as the user types, pastes, or deletes characters in the input field.

```JavaScript
document.querySelector('input').addEventListener("input", function(){
    // Code to execute when the "input" event occurs
})
```

