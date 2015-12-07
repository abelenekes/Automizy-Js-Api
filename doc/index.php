<html>
    <head>
        <title>AutomizyJs Api Docs</title>
        <meta charset="UTF-8">
        <link rel="stylesheet" href="css/automizyjsapi.css"/>
        <link rel="stylesheet" href="css/automizy.min.css"/>
        <link rel="stylesheet" href="css/tomorrow.css"/>
        <link rel="shortcut icon" type="image/png" href="images/Automizy_favicon.png"/>
        <script src="js/jquery-2.1.3.min.js"></script>
        <script src="js/jquery-ui.min.js"></script>
        <script src="js/prettify.js"></script>
        <script src="js/automizy.min.js"></script>
        <script src="js/gfranko-jquery.tocify.js-c179865/src/javascripts/jquery.tocify.min.js"></script>
        <script>
            var setContentWidth = function(){
                $('#content').css({'margin-left':$('#menu-container').width()+30});
                $('#menu-container').css({'width':$('#content').css('margin-left')});
            };
            $(function() {
                //Calls the tocify method on your HTML div.
                $("#menu").tocify({highlightOnScroll:true, extendPage:true, selectors:'h2,h3', context:'#content', scrollTo:120, highlightOffset: 100});

                //Setting menu and content width
                $("body").on('scroll',setContentWidth());

                //code formatting
                $('.prettyprint').each(function () {
                    var $t = $(this);
                    var tt = $t.text();
                    $t.data('content', tt);
                    if (tt.lastIndexOf("\n") > 0) {
                        $t.text(tt.substring(0, tt.lastIndexOf("\n")));
                    }
                });
                prettyPrint();

                //Setting request on function examples active
                $('#content .function-example .example-tab[data-name="request"]').addClass('active-tab');
                $('#content .function-example .prettyprint[data-name="response"]').addClass('inactive');

                //--Click listeners--\\

                //Click on basic functions link
                $('.basicFunctionsLink').click(function () {
                    $('#menu li[data-unique="BasicFunctions"] a').trigger('click');
                });

                //Click on function example tabs
                $('#content .function-example .example-tab').click(function(){
                    //alert('asd');
                    
                    $(this).siblings().removeClass('active-tab');
                    $(this).addClass('active-tab');
                    var dataName = $(this).attr('data-name');
                    $(this).parent().find('.prettyprint[data-name="'+dataName+'"]').removeClass('inactive');
                    $(this).parent().find('.prettyprint[data-name="'+dataName+'"]').siblings().addClass('inactive');
                    
                });      
                
                /*Creating download dialog*/
                var downloadDialog = $A.newDialog({
                    title:"Download Automizy JS Api",
                    content:$('<a href="http://developers.automizy.com/automizyjsapi/downloads/automizy.api.js" target="_blank">Download the uncompressed, development JavaScript file for AutomizyJS API.</a></br>\n\
                        <a href="http://developers.automizy.com/automizyjsapi/downloads/automizy.api.min.js" target="_blank">Download the compressed, production JavaScript file for AutomizyJS API.</a></br>\n\
                        <a href="http://developers.automizy.com/automizyjsapi/downloads/automizy.api.min.map" target="_blank">Download the map file for AutomizyJS API.</a></br>\n\
                        <a href="http://developers.automizy.com/automizyjsapi/downloads/automizyjsapi.zip" target="_blank">Download the all in one ZIP file for AutomizyJS API.</a></br>\n\
                        ')
                });
                $('.downloads').click(function(){
                    downloadDialog.open();
                });
                
                $('body').scroll();
              });
        </script>
    </head>
    <body>
        <header>
            <h1>AutomizyJs API Docs</h1>
            <div class="header-buttons">
                <a title="Automizy Developers" alt="Automizy Developers"  href="http://developers.automizy.com" class="header-button">Developers Page</a>
                <a title="AutomizyJs API on GitHub" alt="AutomizyJs API on GitHub"  href="https://github.com/Automizy/Automizy-Js-Api" target="_blank" class="header-button">GitHub</a>
                <a title="AutomizyJs API Downloads" alt="AutomizyJs API Downloads" class="downloads header-button">Downloads</a>
            </div>
        </header>
        <div id='container'>
            <div id="menu-container">
                <div id='menu'></div>
            </div>
            
            <div id='content'>
                <?php
                
                
                $config = [
                    'urls' => [
                        'restApiDoc' => 'http://developers.automizy.com/automizyrestapi/',
                        'automizyJsApi' => ''
                    ]
                ];
                //$config['urls']['restApiDoc']                             
                    require ('pages/introduction.php');
                    require ('pages/token.php');
                    require ('pages/basic-functions.php');
                    require ('pages/campaigns.php');
                    require ('pages/contacts.php');
                    require ('pages/customFields.php');
                    require ('pages/jobs.php');
                    require ('pages/newsletters.php');
                    require ('pages/segments.php');
                    require ('pages/splitTests.php');
                    require ('pages/templates.php');
                    require ('pages/users.php');
                    require ('pages/webhooks.php');
                ?>
            </div>
        </div>
        <footer>
            <div id="docs-footer">
                <div class='footer-cell'>
                    <h2>Follow us</h2>
                    <div>Don't miss our news, debates, and inspiring stories. Find us on social networks!</div>
                    <div class='socials'>
                       <a title="Automizy Facebook Page" alt="Automizy Facebook Page"  href="https://www.facebook.com/automizy" target="_blank"><img src="images/socials/facebook.png" /></a>
                        <a title="Automizy Twitter Page" alt="Automizy Twitter Page"  href="https://twitter.com/automizy" target="_blank"><img src="images/socials/twitter.png" /></a>
                        <a title="Automizy Google Plus Page" alt="Automizy Google Plus Page"  href="https://plus.google.com/+Automizyinc/about" target="_blank"><img src="images/socials/gplus.png" /></a>
                        <a title="Automizy LinkedIn Profile" alt="Automizy LinkedIn Profile"  href="https://www.linkedin.com/company/automizy-inc-" target="_blank"><img src="images/socials/linkedin.png" /></a>
                    </div>
                </div>
                <div class='footer-cell'>
                    <h2>Contact us</h2>
                    <div>Email: <a href="mailto:help@automizy.com">help@automizy.com</a></div>
                </div>
                <div class='footer-cell'>
                    <h2>Locations</h2>
                    <div class='hq-info'>
                        USA HQ
                        <div class='location'>
                            Automizy Inc.<br>
                            19 W 34th St., Ste. 1018<br>
                            New York, NY 10001
                        </div>
                    </div>
                    <div class='hq-info'>
                        Europe HQ
                        <div class='location'>
                            Protopmail Zrt.<br>
                            Könyves K. krt 12-14.<br>
                            H-1097 Budapest, Hungary
                        </div>
                    </div>
                </div>
                <div class="copyright">© 2014 Automizy Inc.</div>
            </div>            
        </footer>
    </body>
</html>


            <?php
            /* 
            define("EGY", 1);

            $alma = 12345;
            echo $alma * 3;
            echo "<br>";
            $korte = "korte";
            echo EGY;
            echo "gyumolcs " . $korte;
            
            require("pages/newhtml.html");
            ?>

*/