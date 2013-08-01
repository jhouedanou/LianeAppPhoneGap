var $container  = $( '#flip' ),
                $pages      = $container.children().hide();

            Modernizr.load({
                test: Modernizr.csstransforms3d && Modernizr.csstransitions,
                yep : ['js/jquery.tmpl.min.js','js/jquery.history.js','js/core.string.js','js/jquery.touchSwipe-1.2.5.js','js/jquery.flips.js'],
                nope: 'css/fallback.css',
                callback : function( url, result, key ) {

                    if( url === 'css/fallback.css' ) {
                        $pages.show();
                    }
                    else if( url === 'js/jquery.flips.js' ) {
                        $container.flips();
                    }

                }
            });

                  $(document).ready(function () {
$('div.content div.inner div.coverss div.rssBody ul').cycle();
WebFontConfig = {
    google: { families: [ 'Ubuntu::latin' ] }
  };
  (function() {
    var wf = document.createElement('script');
    wf.src = ('https:' == document.location.protocol ? 'https' : 'http') +
      '://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js';
    wf.type = 'text/javascript';
    wf.async = 'true';
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(wf, s);
  })();

                        $('.coverss').rssfeed('http://rcliane.cerap-inades.org/rss-actus.xml', {
                                snippet: false,
                                limit:5
                            });
                          //agenda - actualites des coordinations reginales
                        $('#agenda').rssfeed('http://rcliane.cerap-inades.org/rss-coord.xml', {
                            limit: 5
                        });
                        //annonces et opportunités
                         $('#offres').rssfeed('http://rcliane.cerap-inades.org/offres.xml', {
                            limit: 5
                        });

                    });
