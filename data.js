// get JSON data
      $.getJSON("dist/home.json", function(data){
       $.each(data, function(index) {
          $('#sidebar').append("<section id='" + index + "'></section>");
          $('#' + index).append("<div class='sectionHeading'>" + index + "</div>");
          $('#' + index).append("<ul id='" + index + "Subordinates" + "'></ul>")

          $.each(data[index], function(key, value) {
            var targetList = $('#' + index + "Subordinates")
            var cleanedName = key.replace(/_/g, ' ');
            $(targetList).append("<li class='subordinate'><a href='" + "#" + value + "'>" + cleanedName.replace('.html', '') + "</a></li>");
          });
        });

       $('section ul').hide();
       vertMenuControl();
      });
      // VERTICAL MENU CONTROLS
      function vertMenuControl() {
        $('.sectionHeading').click(function() {
          $(this).siblings('section ul').toggle(100);
          $(this).parent('section').siblings('section').children('section ul').hide();
        });
      }