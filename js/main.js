$(document).ready(function () {

    var $mainnav = $('.main-nav'),
		$subnav = $('.dropdown01 ul, .dropdown02 ul'),
		$dropdown01 = $('.dropdown01'),
        $paragraph = $('article p.truncate');

    //main nav hover
    $mainnav.children('li').hover(function () {
        $(this).not('.active').addClass('color-fff');
        $(this).children('span').addClass('arrow-down-hover');
    }, function () {
        $(this).removeClass('color-fff');
        $(this).children('span').removeClass('arrow-down-hover');
    });


    //sub nav 
    $(document, $subnav).bind('click', function () {
        $subnav.addClass('hidden');
        $dropdown01.removeClass('bg-color02 color-000');
        $dropdown01.children('span').removeClass('arrow-down-active');
    });

    $subnav.addClass('hidden');

    $dropdown01.bind('click', function (event) {
        event.stopPropagation();
        $(this).find('ul').removeClass('hidden');
        $(this).addClass('bg-color02 color-000').removeClass('color-fff').unbind('mouseenter');
        $(this).children('span').removeClass('arrow-down-hover').addClass('arrow-down-active');
    })

    //text truncate
   // function truncateParagraph(element, textLength) {

   //     element.each(function () {

   //         if (element.text().length > textLength) {

   //             var short_text = $(this).text().substring(0, textLength),
   //             short_text = short_text.substring(0, Math.min(short_text.length, short_text.lastIndexOf(" "))),
   //             long_text = $(this).text().substring(short_text.length);
   //                           
			//	function replaceLinkString(replaceStr){							
			//		return long_text = long_text.replace(replaceStr,'<a href="http://' + replaceStr +'">' + replaceStr + '</a>'); 
			//	}
			//	
			//	replaceLinkString('magazine.motilo.com');
			//	replaceLinkString('www.egpr.com.au');
			//	replaceLinkString('www.idc-ei.com')

   //             element.html(short_text +
   //                                     "<a href='#' class='more'> [ ... ]</a>" +
   //                                     "<span class='long-text hidden'>" + long_text + "</span>");
   //         }
   //     });

   //     $('.more').click(function (event) {
   //         event.preventDefault();
   //         $(this).addClass('hidden').next().removeClass('hidden');
			//$(this).parent().parent().css({'min-height':'210px'});
   //     });
   // }

    //$('.intro').each(function () {
    //    truncateParagraph($(this), 146);
    //});

    //$paragraph.each(function () {
    //    truncateParagraph($(this), 66);
    //});
        

});
