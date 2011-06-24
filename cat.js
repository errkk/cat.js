
(function(d,t){
    var c = d.createElement(t),
	i = d.createElement(t),
	s = d.getElementsByTagName(t)[0],
	sp = 200;
	
    var up = function()
    {
	$(this).animate({
	    'marginTop' : '-=10'
	}, sp, i.down);
    }
    var down = function(){
	
	$(this).animate({
	    'marginTop' : '+=10'
	}, sp,i.up );
    }
    
    i.up = up;
    i.down = down;
    
    $(i).addClass('i').css({
	'background' : 'url(/cat.gif) 100% 0 no-repeat',
	'height' : '100%',
	'width' : '100%'
    });
	
    i.up();
	
    $(c).addClass('cat').hide().fadeIn(1000)
	.animate({
	    'left' : '+=700'
	}, 30000, 'linear')
	.css({
	    'position' : 'absolute',
	    'left' : '-200px',
	    'top' : '200px',
	    'z-index' : '100',
	    'width' : '250px',
	    'height' : '150px',
	    'position' : 'absolute'
	}).html(i);
    s.parentNode.insertBefore(c,s);
    }(document,'div'));