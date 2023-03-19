// Write the code necessary to do the following:

// 1. Select the section with an id of container without using querySelector.
document.getElementById("container")
// 2. Select the section with an id of container using querySelector.
document.querySelector("#container")
// 3. Select all of the list items with a class of “second”.
document.getElementsByClassName(".second")
// 4. Select a list item with a class of third, but only the list item inside of the ol tag.
document.querySelector("ol .third")
// 5. Give the section with an id of container the text “Hello!”.
const idOfContainer = document.querySelector("#containter");
idOfContainer.innertext = "Hello";
// 6. Add the class main to the div with a class of footer.
let foot = document.querySelector(".footer");
foot.className += "main";
// 7. Remove the class main on the div with a class of footer.
let foot2 = document.querySelector(".footer");
foot2.classList.remove("main");
// 8. Create a new li element.
let newLi = document.createElement("li");
// 9. Give the li the text “four”.
newLi.innerText = "four"
// 10. Append the li to the ul element.
let oldUl = document.querySelector("ul");
oldUl.appendChild(newLi);
// 11. Loop over all of the lis inside the ol tag and give them a background color of “green”.
let insideLi = document.querySelectorAll("ol li");
for (let x = 0; x < insideLi.length; x++) {
    insideLi[x].style.backgroundColor = "green";
}
// 12. Remove the div with a class of footer
let footerDiv = document.querySelector(".footer");
footerDiv.remove();