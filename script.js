 //Menu open
        function myHamburger(x) {
            x.classList.toggle("change");
            document.getElementsByClassName("navMenu")[0].classList.toggle('navOpen');
        }
        //Top button:
        // 1. lets first listen for the scroll event
        $(window).scroll(function () {
            // top value in this case 0
            var windowScroll = $(this).scrollTop();
            // determine when to show button
            var showScrollBtn = 120;
            // fadein / fadeout back to  top button
            if (windowScroll > showScrollBtn) {
                $('#topBtn').fadeIn();
            }
            else {
                $('#topBtn').fadeOut();
            }
        });
        // on click:
        $('#topBtn').click(function () {
            $('body,html').animate({
                // position you want  scroll to
                scrollTop: 0
            }, 500);
        });
        // scroll to function
        jQuery(function($){
            //scroll reset
            $.scrollTo(0);
            $('#link1').click(function(){
                $.scrollTo($("#js").offset().top -30,500);   
            });
        });
        jQuery(function($){
            //scroll reset
            $.scrollTo(0);
            $('#link2').click(function(){
                $.scrollTo($("#css").offset().top -30,600);   
            });
        });
        jQuery(function($){
            //scroll reset
            $.scrollTo(0);
            $('#link3').click(function(){
                $.scrollTo($("#html").offset().top -30,700);   
            });
        });
        jQuery(function($){
            //scroll reset
            $.scrollTo(0);
            $('#link4').click(function(){
                $.scrollTo($("#tech").offset().top -30,800);  
            });
        });