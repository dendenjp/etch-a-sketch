'use strict';
/* 
const para = document.createElement('p');

const node = document.createTextNode('This is a new paragraph.');

para.appendChild(node);

const container = document.getElementById('container');
 */

/*
2. Create a webpage with a 16x16 grid of square divs.
    Create the divs using JavaScript. Don’t try making them by hand with copy and pasting in your HTML file!
    It’s best to put your grid squares inside another “container” div (which can go directly in your HTML).
    There are several different ways to make the divs appear as a grid (versus just one on each line). Feel free to use any or play with each of them:
        float/clear
        inline-block
        flexbox
        CSS Grid
    Be careful with borders and margins, as they can adjust the size of the squares!
“OMG, why isn’t my grid being created???”
Did you link your CSS stylesheet?
Open your browser’s developer tools.
Check if there are any errors in the JavaScript console.
Check your “elements” pane to see if the elements have actually shown up but are somehow hidden.
Go willy-nilly and add console.log statements in your JavaScript to see if it’s actually being loaded.

3. Set up a “hover” effect so that the grid divs change color when your mouse passes over them, leaving a (pixelated) trail through your grid like a pen would.
Hint: “Hovering” is what happens when your mouse enters a div and ends when your mouse leaves it. You can set up event listeners for either of those events as a starting point.
There are multiple ways to change the color of the divs, including:
adding a new class to the div.
changing the div’s background color using JavaScript.
*/

const container = document.getElementById('grid-container');

let myDivs;

for (let i = 0; i < 256; i++) {
    myDivs = document.createElement('div');

    myDivs.className = 'block';
    container.append(myDivs);
    myDivs.addEventListener('mouseleave', function (e) {
        e.target.style.backgroundColor = 'purple';
        console.log(e);
    });
}
/* 
myDivs.addEventListener('mouseleave', function (e) {
    e.target.style.backgroundColor = 'purple';
    console.log(e);
});
 */
