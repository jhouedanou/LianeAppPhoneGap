                  $(document).ready(function () {
//google font
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
//carousel
$('.rssRow ').carousel();
                    //trouver les images
                    jQuery('html body div.row div#alaune.col-lg-12 div.rssBody ul li.rssRow div div div img').each(function(){
 jQuery(this).addClass("showtime");
                    });

                                                      //a la une
                        $('#alaune').rssfeed('http://rcliane.cerap-inades.org/rss-actus.xml', {
                                snippet: false,
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
