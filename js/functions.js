$(document).ready(function () {
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
         $('#actus1').FeedEk({
          FeedUrl : 'http://rcliane.cerap-inades.org/rss-actus.xml',
          MaxCount : 5,
          ShowDesc : true,
          ShowPubDate:true,
          DescCharacterLimit:100,
          TitleLinkTarget:'_blank'
    });
                          //agenda - actualites des coordinations reginales
                        $('#divRss').rssfeed('http://rcliane.cerap-inades.org/rss-coord.xml', {
                            snippet: false,
                                limit:1,
                                linktarget:'_blank'
                        });
                        //annonces et opportunités
                         $('#actus2').rssfeed('http://rcliane.cerap-inades.org/offres.xml', {
                            snippet: false,
                                limit:5,
                                linktarget:'_blank'
                        });

                    });
