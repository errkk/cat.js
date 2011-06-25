
(function(d,t){
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
		'background' : 'url(/cat.gif) 100% 0 no-repeat',
		'height' : '100%',
		'width' : '100%'
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
		    'width' : '250px',
		    'height' : '150px',
		    'position' : 'absolute',
			'background' : 'url(/trail.gif) 100% 0 repeat-x',
		})
		.html(i);
    s.parentNode.insertBefore(c,s);

}(document,'div'));