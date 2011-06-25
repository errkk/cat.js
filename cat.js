var scbf = function(d,t){
    var c = d.createElement(t),
	i = d.createElement(t),
	s = d.getElementsByTagName(t)[0],
	sf = 200;
	st = 10000;
	
    var up = function()
    {
		$(this).animate({
		    'marginTop' : '-=10'
		}, sf, i.down);
    }
    var down = function()
	{
		$(this).animate({
		    'marginTop' : '+=10'
		}, sf,i.up );
    }
    
    i.up = up;
    i.down = down;
    
    $(i).addClass('i')
		.css({
		'background' : 'grey url(/cat.gif) 100% 0 no-repeat',
		'height' : '100%',
		'width' : '490px', 
		'position' : 'absolute',
		'right' : '0'
    	});
	
    i.up();
	
    $(c).addClass('c')
		.hide()
		.fadeIn(1000)
		.animate({
		    'width' : '+=120%'
		}, st, 'linear', function(){
			$(this).fadeOut(function(){
				$(this).remove();
			});
		})
		.css({
		    'position' : 'absolute',
		    'left' : '-200px',
		    'top' : '200px',
		    'z-index' : '100',
		    'width' : '350px',
		    'height' : '350px',
		    'position' : 'absolute',
			'background' : 'blue url(/trail.gif) 100% 0 repeat-x',
		})
		.html(i);
    s.parentNode.insertBefore(c,s);

};

var k = [], ko = "38,38,40,40,37,39,37,39,66,65";;
jQuery(document).keydown(function(e) {
  k.push( e.keyCode );
  if ( k.toString().indexOf( ko ) >= 0 ){
		scbf(document,'div');	
		k = [];
  }
});
