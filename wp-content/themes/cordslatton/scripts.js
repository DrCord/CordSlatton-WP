jQuery(function($){
	$('#form2 button#7_element_submit2').removeClass('button_submit').addClass('btn btn-primary');
	
	/* commented out because moved change to php file porfolio.php */
	/*$('.portfolio_content').each(function(){
		$portfolioContent = $(this);
		$portfolioContent.find('.item_title a').attr('href', $portfolioContent.find('.item_title + p a').attr('href')).attr('target', '_blank');
	});
	*/
		
	$('.portfolio_content').each(function(){
		$portfolioItem = $(this);
		$portfolioItem.find('.portfolio_terms').wrapInner('<p></p>').appendTo( $portfolioItem.find('.portfolio_short_content') );
	});
	
	$('.tagcloud a').addClass('btn btn-info');
	$('.tagcloud a').each(function(){
		oldSize = $(this).css('font-size').replace('px', '');
		if(oldSize > 12){
			newSize = oldSize * 0.7;
			$(this).css('font-size', newSize + 'px');
		}						
	});
	//fix ajax loader
	
	
	$form = $('form.wpcf7-form');
	$formAction = $form.find('.formAction');
	$formAction.find('.ajax-loader').remove();
	$ajaxLoader =  '<div id="floatingCirclesG" class="ajax-loader" style="visibility: hidden;">';
	$ajaxLoader += '<div class="f_circleG" id="frotateG_01"></div>';
	$ajaxLoader += '<div class="f_circleG" id="frotateG_02"></div>';
	$ajaxLoader += '<div class="f_circleG" id="frotateG_03"></div>';
	$ajaxLoader += '<div class="f_circleG" id="frotateG_04"></div>';
	$ajaxLoader += '<div class="f_circleG" id="frotateG_05"></div>';
	$ajaxLoader += '<div class="f_circleG" id="frotateG_06"></div>';
	$ajaxLoader += '<div class="f_circleG" id="frotateG_07"></div>';
	$ajaxLoader += '<div class="f_circleG" id="frotateG_08"></div>';
	$ajaxLoader += '</div>';
	$formAction.append($ajaxLoader);
	$form.submit(function(){
		$form.find('#floatingCirclesG').css('visibility', 'visible');
		fixAjaxLoader();
	});
	
	$('.pageList li').addClass('btn btn-info btn-large');

	
//resize window events	
	//store the reference outside the event handler:
    var $window = $(window);

    function checkWidth() {
        var windowSize = $window.width();
        if($('body').hasClass('page-template-templates_full_width-php') == false){
        	if (windowSize < 979) {        	
        		changeWidth('small');
	        }
	        else{
        		changeWidth('large');
	        }
        }
        
        return windowSize;
    }
    function changeWidth(size){
    	if(size == 'small'){
			$('#primary').removeClass('span8').addClass('span12');
			$('#secondary').removeClass('span4').addClass('span12');
    	}
    	else if (size == 'large'){
			$('#primary').addClass('span8').removeClass('span12');
			$('#secondary').addClass('span4').removeClass('span12');
    	}
    }
    function checkPage(pageClass){
    	if( $('body').hasClass(pageClass) )
    		return true;
		else
			return false;
    }
    
    // Execute on load
	checkWidth();
    	
    // Bind event listener
    //TODO remove console.log from production version
    $(window).resize(function(){
		console.log('checkWidth: ', checkWidth() );	
    });
    
    //active menu classes for portfolio menu link item when on interior portfolio pages
    if(checkPage('tax-portfolio_technologies'))
    	$('#menu-item-30').addClass('active');
});

function fixAjaxLoader() {
	  if (jQuery(".wpcf7-response-output").is(":visible")){
	    // It's visible
	    jQuery('form.wpcf7-form').find('#floatingCirclesG').css('visibility', 'hidden');
	  }
	  else {
	    // it's not visible
	    setTimeout( 'fixAjaxLoader()', 100 );
	  }
	}
