
/* 
####################################################################################

                888                                                            
                888                                                            
                888                                                            
 .d88b.  .d8888b888888 .d88b. 88888b. 888  888.d8888b  .d88b.  .d88b. 88888b.  
d88""88bd88P"   888   d88""88b888 "88b888  88888K     d88P"88bd8P  Y8b888 "88b 
888  888888     888   888  888888  888888  888"Y8888b.888  88888888888888  888 
Y88..88PY88b.   Y88b. Y88..88P888 d88PY88b 888     X88Y88b 888Y8b.    888  888 
 "Y88P"  "Y8888P "Y888 "Y88P" 88888P"  "Y88888 88888P' "Y88888 "Y8888 888  888 
                              888                          888                 
                              888                     Y8b d88P                 
                              888                      "Y88P"                 

          ,'""`.        Código escrito por el equipo de @octopusgen - versión 0.1
         / _  _ \       Proyecto -> ttps://github.com/octopusgen/my-apps
         |(@)(@)|       Fecha de creación -> 13-feb-2017
         )  __  (
        /,'))((`.\
       (( ((  )) ))      
        `\ `)(' /'                         
###################################################################################
*/

// Initialize your app
var myApp = new Framework7();

// Export selectors engine
var $$ = Dom7;

// Add view
var mainView = myApp.addView('.view-main', {
    // Because we use fixed-through navbar we can enable dynamic navbar
    dynamicNavbar: true
});

// Callbacks to run specific code for specific pages, for example for About page:
myApp.onPageInit('about', function (page) {
    // run createContentPage func after link was clicked
    $$('.create-page').on('click', function () {
        createContentPage();
    });
});

// Generate dynamic page
var dynamicPageIndex = 0;
function createContentPage() {
	mainView.router.loadContent(
        '<!-- Top Navbar-->' +
        '<div class="navbar">' +
        '  <div class="navbar-inner">' +
        '    <div class="left"><a href="#" class="back link"><i class="icon icon-back"></i><span>Back</span></a></div>' +
        '    <div class="center sliding">Dynamic Page ' + (++dynamicPageIndex) + '</div>' +
        '  </div>' +
        '</div>' +
        '<div class="pages">' +
        '  <!-- Page, data-page contains page name-->' +
        '  <div data-page="dynamic-pages" class="page">' +
        '    <!-- Scrollable page content-->' +
        '    <div class="page-content">' +
        '      <div class="content-block">' +
        '        <div class="content-block-inner">' +
        '          <p>Here is a dynamic page created on ' + new Date() + ' !</p>' +
        '          <p>Go <a href="#" class="back">back</a> or go to <a href="services.html">Services</a>.</p>' +
        '        </div>' +
        '      </div>' +
        '    </div>' +
        '  </div>' +
        '</div>'
    );
	return;
}