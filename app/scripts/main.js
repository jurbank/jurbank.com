'use strict';

// var clickSlide = function() {
// 	$(window).
// };

// var canvas = document.getElementById('canvas'),
//   ctx = canvas.getContext('2d'),
//   W = window.innerWidth,
//   H = window.innerHeight;

// canvas.width = W;
// canvas.height = H;

//helps prevent skewing and canvas resizing
// window.onresize = function(event) {
//   W = window.innerWidth,
//   H = window.innerHeight;
//   canvas.width = W;
//   canvas.height = H;
// }

$(document).ready(function() {
    var hamburger = $('#hamburger-icon');
    hamburger.click(function() {
        hamburger.toggleClass('active');
        return false;
    });
});


