// Used W3Schools to learn about this // 
      function myFunction() {
        var x = document.getElementById("myMenu");
        if (x.className === "rightmenu") {
          x.className += " responsive";
        } else {
          x.className = "rightmenu";
        }
      }
