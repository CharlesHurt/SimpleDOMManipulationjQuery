'use strict'

$(document).ready(init)

function init() {
  $('#IdMainHost').css('display', 'table-cell')

  $('#IdHost1').on('click', 'div', function(e) {
    var red = getRandomColor()
    var green = getRandomColor()
    var blue = getRandomColor()
    //debugger
    e.target.style.backgroundColor = '#' + red + green + blue
    //console.log('clicked:' + e);
    var $temp = $(e.target).detach()
    $('#IdHost2').append($temp)
  })

  $('#IdHost2').on('click', 'div', function(e) {
    var red = getRandomColor()
    var green = getRandomColor()
    var blue = getRandomColor()
    //debugger
    e.target.style.backgroundColor = '#' + red + green + blue
    //console.log('clicked:' + e);
    var $temp = $(e.target).detach()
    $('#IdHost1').append($temp)
  })

  // Two options for click events
  // $().click()
  // $().on('click')
  $('#IdAddCup').click(addCup)
}

function g() {
  return document.getElementById(arguments[0])
}

function getRandomColor() {
  var temp = '000000' + Math.floor(Math.random() * 16777215).toString(16)
  //console.log('tl:' + temp.length);
  var toCut = temp.length - 6
  //temp = temp.substr(toCut)

  temp = '#' + temp.substr(toCut)
  if (temp.length !== 7) {
    alert('temp:' + temp + ' toCut:' + toCut)
  }
  return temp
}

function addCup() {
  var numOfCups = g('IdCupQty').value
  if ((numOfCups === '') || (numOfCups === 0)) {
    // The way to add single cup
    var $newElement = $('<div>')
    //console.log('rc:' + getRandomColor());
    $newElement.css('background-color', getRandomColor())
    //console.log('gc=' + $newElement.style.backgroundColor);
    //debugger

    $newElement.addClass('cCup')
    $('#IdHost1').append($newElement)
    //console.log('cup add called');
  } else {
    // The way to add multiple cups
    var $cups = []
    for (var i = 0; i < numOfCups; i++) {
      var $newElement = $('<div>').addClass('cCup')
      $newElement.css('background-color', getRandomColor())
      //console.log('gc=' + getColor());
      //debugger
      //$newElement.css('background-color', getColor())
      $cups.push($newElement)
    }
    $('#IdHost1').append($cups)
  }
}

function doClick(e) {
  var red = getRandomColor()
  var green = getRandomColor()
  var blue = getRandomColor()
  //debugger
  e.target.style.backgroundColor = '#' + red + green + blue
  //console.log('clicked:' + e);
}
