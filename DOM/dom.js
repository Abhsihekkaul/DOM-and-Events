// Loop through HTMLCollection: For getElementsByTagName and getElementsByClassName,
//  you need to loop through the collection to attach event listeners to each element.



let h1Elements = document.getElementsByTagName('h1');
for (let i = 0; i < h1Elements.length; i++) {
    h1Elements[i].addEventListener('click', () => {
        h1Elements[i].style.backgroundColor = 'red';
    });
}

let h2Elements = document.getElementsByClassName('iamClass');
for (let i = 0; i < h2Elements.length; i++) {
    h2Elements[i].addEventListener('click', () => {
        h2Elements[i].style.backgroundColor = 'red';
    });
}

let h3Element = document.getElementById('iamID');
h3Element.addEventListener('click', () => {
    h3Element.style.backgroundColor = 'red';
});




// As Seen above in order to apply events on the normal class and tag we need
//  to select each element of the element. However in order to save our time we 
// can simply use query selector for everything and later use without any loop


// IN order to select more than one element with same id or class or tagname we have queryselectorAll
let listOfPara = document.querySelectorAll('.textMatter');
listOfPara.forEach((para) => {
    para.addEventListener('click', (event) => {
        event.target.style.backgroundColor = 'yellow'
    });
});
