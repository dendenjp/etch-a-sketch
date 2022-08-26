'use strict';

const defaultMode = 'black';
const defaultGrid = 16;
const defaultColor = 'black';

const gridContainer = document.getElementById('grid-container');
let myDivs;

const btnBlack = document.querySelector('.btn-black');
const btnRandom = document.querySelector('.btn-random');
const btnGray = document.querySelector('.btn-gray');
const btnEraser = document.querySelector('.btn-eraser');
const colorInput = document.querySelector('.color-picker');

const gridSlider = document.querySelector('.grid-slider');
const gridSliderText = document.querySelector('.grid-slider-text');

btnBlack.addEventListener('click', blackButton);
btnRandom.addEventListener('click', rainbowButton);
btnGray.addEventListener('click', grayButton);
btnEraser.addEventListener('click', eraserButton);

let currentColor = defaultColor;
colorInput.addEventListener('input', function (e) {
    const blocks = document.getElementsByClassName('block');
    const arrBlocks = [].slice.call(blocks);
    currentColor = e.target.value;
    arrBlocks.forEach((arrBlock) => {
        arrBlock.addEventListener('mouseenter', function () {
            arrBlock.style.backgroundColor = currentColor;
        });
    });
});

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

function blackButton(e) {
    const blocks = document.getElementsByClassName('block');
    const arrBlocks = [].slice.call(blocks);
    arrBlocks.forEach((arrBlock) => {
        arrBlock.addEventListener('mouseenter', function () {
            console.log(e.target.value);
            arrBlock.style.backgroundColor = 'black';
        });
    });
}
function grayButton(e) {
    const blocks = document.getElementsByClassName('block');
    const arrBlocks = [].slice.call(blocks);
    arrBlocks.forEach((arrBlock) => {
        arrBlock.addEventListener('mouseenter', function () {
            console.log(e.target.value);
            arrBlock.style.backgroundColor = '#808080';
        });
    });
}

function eraserButton(e) {
    const blocks = document.getElementsByClassName('block');
    const arrBlocks = [].slice.call(blocks);
    arrBlocks.forEach((arrBlock) => {
        arrBlock.addEventListener('mouseenter', function () {
            console.log(e.target.value);
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
