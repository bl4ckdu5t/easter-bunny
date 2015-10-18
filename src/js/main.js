function ready(cb) {
	/in/.test(document.readyState) // in = loadINg
		? setTimeout(ready.bind(null, cb), 9)
		: cb();
}
ready(function(){
	/*======= Waypoints http://imakewebthings.com/waypoints/ ============= */
  var widthLimit = 1023;//1240
  if(window.innerWidth > widthLimit){
    var waypoint = new Waypoint({
      element: document.querySelector('.waypoint'),
      handler: function() {
        var navbar = document.querySelector('.header__nav'),
            logo   = document.querySelector('.header__logo');
        navbar.classList.toggle('fixed');
        if($('.header__nav').hasClass('fixed')){
          logo.src = 'dist/images/opidy.png';
        }else{
          logo.src = 'dist/images/logo.png';
        }
      },
      offset: '70%'
    });
  }
  document.getElementById('toggleMenu').addEventListener('click', function(){
    var el = document.documentElement;
    el.classList.toggle('openNav');
  });
  $('.header__list a').click(function(){
    if($('html').hasClass('openNav')){
      $('html').removeClass('openNav');
    }
  });
});

/* Scroll to Hashbanged links */
(function(){
var speed = 500;
var moving_frequency = 15; // Affects performance !
var links = document.getElementsByTagName('a');
var href;
for(var i=0; i<links.length; i++){
	href = (links[i].getAttributeNode('href') === undefined) ? null : links[i].getAttribute('href');
	if(href !== null && href.length > 1 && href.substr(0, 1) == '#'){
	  links[i].onclick = function(){
	    var element;
	    var href = this.getAttribute('href');
	    if(element = document.getElementById(href.substr(1))){
        var hop_count = speed/moving_frequency
        var getScrollTopDocumentAtBegin = getScrollTopDocument();
        var gap = (getScrollTopElement(element) - getScrollTopDocumentAtBegin) / hop_count;
        for(var i = 1; i <= hop_count; i++){
          (function(){
	          var hop_top_position = gap*i;
	          setTimeout(function(){  window.scrollTo(0, hop_top_position + getScrollTopDocumentAtBegin); }, moving_frequency*i);
          })();
        }
	    }
	    return false;
    };
	}
}

var getScrollTopElement =  function (e){
  var top = 0;
  while (e.offsetParent != undefined && e.offsetParent != null){
    top += e.offsetTop + (e.clientTop != null ? e.clientTop : 0);
    e = e.offsetParent;
  }
  return top;
};

var getScrollTopDocument = function(){
  return document.documentElement.scrollTop + document.body.scrollTop;
};
})();