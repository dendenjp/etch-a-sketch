'use strict';

const defaultMode = 'black';
const defaultGrid = 16;
const defaultColor = 'black';

let currentMode = defaultMode;
let currentGrid = defaultGrid;
let currentColor = defaultColor;

const gridContainer = document.getElementById('grid-container');
let myDivs;

const btnBlack = document.querySelector('.btn-black');
const btnRandom = document.querySelector('.btn-random');
const btnGray = document.querySelector('.btn-gray');
const btnEraser = document.querySelector('.btn-eraser');
const btnColorPick = document.querySelector('.btn-colorpick');

const gridSlider = document.querySelector('.grid-slider');
const gridSliderText = document.querySelector('.grid-slider-text');

btnBlack.addEventListener('click', blackButton);
btnRandom.addEventListener('click', rainbowButton);
btnGray.addEventListener('click', grayButton);
btnEraser.addEventListener('click', eraserButton);

function gridCreate(num) {
    gridContainer.style.gridTemplateColumns = `repeat(${num}, 1fr)`;
    gridContainer.style.gridTemplateRows = `repeat(${num}, 1fr)`;

    for (let i = 0; i < num ** 2; i++) {
        myDivs = document.createElement('div');
        myDivs.className = 'block';
        gridContainer.appendChild(myDivs);
    }
}
gridCreate(defaultGrid);
gridSlider.oninput = function (e) {
    let sliderText = e.target.value;
    gridContainer.innerHTML = '';
    gridCreate(e.target.value);
    gridSliderText.textContent = `${sliderText} x ${sliderText}`;
};

function rainbowButton(e) {
    const blocks = document.getElementsByClassName('block');
    const arrBlocks = [].slice.call(blocks);
    console.log(e.target);
    arrBlocks.forEach((arrBlock) => {
        arrBlock.addEventListener('mouseenter', function () {
            arrBlock.style.backgroundColor = randomRGB();
        });
    });
}

function blackButton() {
    const blocks = document.getElementsByClassName('block');
    const arrBlocks = [].slice.call(blocks);
    arrBlocks.forEach((arrBlock) => {
        arrBlock.addEventListener('mouseenter', function () {
            arrBlock.style.backgroundColor = 'black';
        });
    });
}
function grayButton() {
    const blocks = document.getElementsByClassName('block');
    const arrBlocks = [].slice.call(blocks);
    arrBlocks.forEach((arrBlock) => {
        arrBlock.addEventListener('mouseenter', function () {
            arrBlock.style.backgroundColor = '#808080';
        });
    });
}

function eraserButton() {
    const blocks = document.getElementsByClassName('block');
    const arrBlocks = [].slice.call(blocks);
    arrBlocks.forEach((arrBlock) => {
        arrBlock.addEventListener('mouseenter', function () {
            arrBlock.style.backgroundColor = 'white';
        });
    });
}

function randomRGB() {
    let red = Math.floor(Math.random() * 255);
    let green = Math.floor(Math.random() * 255);
    let blue = Math.floor(Math.random() * 255);
    return `rgb(${red}, ${green}, ${blue})`;
}
