'use strict'

$(document).ready(init)

function init() {
  $('#IdHost').on('click', 'div', function(e) {
    var red = getRandomColor()
    var green = getRandomColor()
    var blue = getRandomColor()
    //debugger
    e.target.style.backgroundColor = '#' + red + green + blue
    //console.log('clicked:' + e);
  })
  // Two options for click events
  // $().click()
  // $().on('click')
  $('#IdAddCup').click(addCup)
}

function getRandomColor() {
  return Math.floor(Math.random() * 255).toString(16)
}

function addCup() {
  var $newElement = $('<div>')
  $newElement.addClass('cCup')
  $('#IdHost').append($newElement)
  console.log('cup add called');
}

function doClick(e) {
  var red = getRandomColor()
  var green = getRandomColor()
  var blue = getRandomColor()
  //debugger
  e.target.style.backgroundColor = '#' + red + green + blue
  //console.log('clicked:' + e);

}
