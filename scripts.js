// Used W3Schools to learn about this // 
      function myFunction() {
        var x = document.getElementById("myMenu");
        if (x.className === "rightmenu") {
          x.className += " responsive";
        } else {
          x.className = "rightmenu";
        }
      }
      function smoothScroll(target, duration) {
        var target = document.querySelector(target);
        console.log(target)
      }

      smoothScroll('#hero', 1000);