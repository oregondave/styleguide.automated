// get JSON data
$.getJSON("dist/home.json", function(data){
 $.each(data, function(index) {
    $('#sidebar').append("<section id='" + index + "'></section>");
    $('#' + index).append("<div class='sectionHeading'>" + index + "</div>");
    $('#' + index).append("<ul id='" + index + "Subordinates" + "'></ul>")
    console.log(index)

    // $.each(data[index], function(key, value) {
    //   var targetList = $('#' + index + "Subordinates")
    //   var cleanedName = key.replace(/_/g, ' ');
    //   $(targetList).append("<li class='subordinate'><a href='" + "#" + value + "'>" + cleanedName.replace('.html', '') + "</a></li>");
    // });
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

  // HASHCHANGE
  $(function(){
    // Bind an event to window.onhashchange that, when the hash changes, gets the
    // hash and adds the class "selected" to any matching nav link.
    $(window).hashchange( function(){
      var hash = location.hash;
      if(hash == ''){
          hash = '#home/welcome.html';
      }

      // Set the page title based on the hash.
      var stripHash = hash.replace( /^#/, '' );
      var stripExt = stripHash.replace( '.html', '');

      // actions on load (partial)
      function onPartialLoad() {
        // scroll to top
          window.scrollTo(0,0);
        // insert data-xrayhtml attribute
        // Iterate over all nav links, setting the "selected" class as-appropriate.
          $('.markup').each(function(){
            $(this).attr('data-xrayhtml', '');
            $(this).addClass('prism');
          });

        // fire X-rayHTML
         xray();

        // initialize code toggle button(s)

           var codeToggleMarkup = "<div class='row'><button class='secondary codeToggle tiny icon right'><span class='brackets-icon'></span></button></div>"
          $('.source-panel').before(codeToggleMarkup);

          $('.codeToggle').click(function() {
            /* Act on the event */
            $(this).parent().next('.source-panel').toggle();
            codeToggleLabel();
          });
          codeToggleLabel();

        // Iterate over all nav links, setting the "selected" class as-appropriate.
          $('.subordinate a').each(function(){
            var that = $(this);
            that[ that.attr( 'href' ) === hash ? 'addClass' : 'removeClass' ]( 'selected' );
          });

        // set page title
          var selected = $('.subordinate a.selected').text();
          document.title = selected;


          $('#title').text(selected);
          var targetX = $('.subordinate a.selected').parent().parent();
          // console.log(targetX);
          targetX.show();

          horizontalSubNav3();
          reflow();

      };

      // establish links for partials
      var link = hash.replace( /^#/, '' ) || 'blank'
      var path = 'partials/' + link;



      $('#partial').load(path, function(){ onPartialLoad() });
      prism();


    })

    // trigger hashchange
    $(window).hashchange();

  });

// PRISM
function prism() {
$( window ).bind( "create.xrayhtml", function( e ) {
  var prism = !!~e.target.getAttribute( "class" ).indexOf( "prism" );

  if( prism && "Prism" in window ) {
    $( ".prism" ).find( "code" ).addClass( "language-markup" );
    Prism.highlightAll();
  }
});
}

// CLICK CONTROLS
$( '#menuToggle').click(function() {
  if($('section').children('ul:visible').length == 0 ) {
    $('section ul').show();
  } else {
    $('section ul').hide();
  }
});
$( '#codeToggle').click(function() {
  if($('.markup').children('.source-panel:visible').length == 0 ) {
    $('.source-panel').show();
  } else {
    $('.source-panel').hide();
  };
  codeToggleLabel();
});

function codeToggleLabel() {
$('.source-panel').each(function() {
  if ($(this).is(':visible')) {
    $(this).prev('.row').children('.codeToggle').addClass('visible');
  } else {
    $(this).prev('.row').children('.codeToggle').removeClass('visible');
  }
});
};