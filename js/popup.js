'use strict'

var sliderButton1 = document.querySelector('.slider-button-item:first-child .slider-button');
var sliderButton2 = document.querySelector('.slider-button-item:nth-child(2) .slider-button');
var sliderButton3 = document.querySelector('.slider-button-item:last-child .slider-button');
var sliderItem1 = document.querySelector('.slider-item:first-child');
var sliderItem2 = document.querySelector('.slider-item:nth-child(2)');
var sliderItem3 = document.querySelector('.slider-item:last-child');
var body = document.querySelector('body');
var modalMailButton = document.querySelector('.modal-mail-button');
var modalMail = document.querySelector('.modal-mail');
var modalClose = modalMail.querySelector('.modal-close');
var overlay = document.querySelector('.overlay');

sliderButton1.addEventListener('click', function() {
  sliderItem1.classList.add('slider-item-show');
  sliderItem2.classList.remove('slider-item-show');
  sliderItem3.classList.remove('slider-item-show');
  sliderButton1.classList.add('slider-button-current');
  sliderButton2.classList.remove('slider-button-current');
  sliderButton3.classList.remove('slider-button-current');
  body.classList.add('background-slide1');
  body.classList.remove('background-slide2');
  body.classList.remove('background-slide3');
})

sliderButton2.addEventListener('click', function() {
  sliderItem2.classList.add('slider-item-show');
  sliderItem1.classList.remove('slider-item-show');
  sliderItem3.classList.remove('slider-item-show');
  sliderButton2.classList.add('slider-button-current');
  sliderButton1.classList.remove('slider-button-current');
  sliderButton3.classList.remove('slider-button-current');
  body.classList.add('background-slide2');
  body.classList.remove('background-slide1');
  body.classList.remove('background-slide3');
})

sliderButton3.addEventListener('click', function() {
  sliderItem3.classList.add('slider-item-show');
  sliderItem2.classList.remove('slider-item-show');
  sliderItem1.classList.remove('slider-item-show');
  sliderButton3.classList.add('slider-button-current');
  sliderButton2.classList.remove('slider-button-current');
  sliderButton1.classList.remove('slider-button-current');
  body.classList.add('background-slide3');
  body.classList.remove('background-slide2');
  body.classList.remove('background-slide1');
})

modalMailButton.addEventListener('click', function(evt) {
  evt.preventDefault();
  modalMail.classList.add('modal-show');
  overlay.classList.add('overlay-show');
  document.querySelector('#name').focus();
})

modalClose.addEventListener('click', function(evt) {
  evt.preventDefault();
  modalMail.classList.remove('modal-show');
  overlay.classList.remove('overlay-show');
  modalMailButton.focus();
})

overlay.addEventListener('click', function() {
  modalMail.classList.remove('modal-show');
  overlay.classList.remove('overlay-show');
  modalMailButton.focus();
})