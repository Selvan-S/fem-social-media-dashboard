const darkButton = document.getElementById('dark');
const lightButton = document.getElementById('light');
const radioButtons = document.querySelectorAll('.toggle__wrapper input');
const setDarkMode = () => document.querySelector("body").classList = 'dark';
const setLightMode = () => document.querySelector("body").classList = 'light';
// If the radio button is checked either dark or light as preset ,or reload the page, below code will work!.
if(document.getElementById("dark").checked){
    setDarkMode();
}
else{
    setLightMode();
}

// When the inputs are clicked, check which button is clicked and change the mode accordingly ! 
radioButtons.forEach(button => {
    button.addEventListener('click', (event) => {
        if(document.getElementById("dark").checked){
            setDarkMode();
        }
        else{
            setLightMode();
        } 
    });
});

// when the prefers-color-scheme changes, this event will be happen
// event reflects the media query, if it matches, the new color is dark, else it is light
window.matchMedia('(prefers-color-scheme: dark)')
      .addEventListener('change', (event) => {
        event.matches ? darkButton.click() : lightButton.click();
      });