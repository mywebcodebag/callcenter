var SCROLLING_SPEED = 700;
var fromIndex = 1;
// fullpage customization
$('#fullpage').fullpage({
    sectionsColor: [],
    sectionSelector: '.vertical-scrolling',
    slideSelector: '.horizontal-scrolling',
    navigation: true,
  	responsiveWidth: 991,
    slidesNavigation: true,
    controlArrows: false,
    slidesNavPosition: 'bottom',

    anchors: ['welcome','one_stop_service','how_it_works',
    'benefits','key_differentiators','success_stories','testimonials','happy_workplace','global_presence']
    , //add section id's

navigationTooltips: ['Welcome','One Stop Service','How it Works',
'Benefits','Key Differentiators','Success Stories','Testimonials','Happy Workplace','Global Presence'],
    
    menu: '#menu',
    scrollingSpeed: SCROLLING_SPEED,
    fitToSection: true,
    verticalCentered: false,
    lazyLoading: true,
  
    afterLoad: function(anchorLink, index) {},
  
    onLeave: function(index, nextIndex, direction) {},

    afterSlideLoad: function( anchorLink, index, slideAnchor, slideIndex) {
      if(!fromIndex){
        $('.fp-section').find('.fp-slidesContainer').fadeIn(0);
        $.fn.fullpage.setScrollingSpeed(SCROLLING_SPEED);
      }
    },
  
    onSlideLeave: function( anchorLink, index, slideIndex, direction) {
      fromIndex = slideIndex;
      if(!slideIndex){
          $.fn.fullpage.setScrollingSpeed(0);
          $('.fp-section').find('.fp-slidesContainer').hide();
        }
    },

  }); 

