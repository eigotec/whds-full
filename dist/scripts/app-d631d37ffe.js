!function(){"use strict";angular.module("windsorHouseDentalSurgery",["ngStamplay","ngAnimate","ngCookies","ngTouch","ngSanitize","ngMessages","ngAria","ngResource","ngRoute","toastr","ngMap"])}(),function(){"use strict";function e(){function e(){return t}var t=[{title:"AngularJS",url:"https://angularjs.org/",description:"HTML enhanced for web apps!",logo:"angular.png"},{title:"BrowserSync",url:"http://browsersync.io/",description:"Time-saving synchronised browser testing.",logo:"browsersync.png"},{title:"GulpJS",url:"http://gulpjs.com/",description:"The streaming build system.",logo:"gulp.png"},{title:"Jasmine",url:"http://jasmine.github.io/",description:"Behavior-Driven JavaScript.",logo:"jasmine.png"},{title:"Karma",url:"http://karma-runner.github.io/",description:"Spectacular Test Runner for JavaScript.",logo:"karma.png"},{title:"Protractor",url:"https://github.com/angular/protractor",description:"End to end test framework for AngularJS applications built on top of WebDriverJS.",logo:"protractor.png"},{title:"Bootstrap",url:"http://getbootstrap.com/",description:"Bootstrap is the most popular HTML, CSS, and JS framework for developing responsive, mobile first projects on the web.",logo:"bootstrap.png"},{title:"Sass (Node)",url:"https://github.com/sass/node-sass",description:"Node.js binding to libsass, the C version of the popular stylesheet preprocessor, Sass.",logo:"node-sass.png"}];this.getTec=e}angular.module("windsorHouseDentalSurgery").service("webDevTec",e)}(),function(){"use strict";function e(){function e(e,t,a,r){e.day=t("date")(new Date,"EEEE"),e.time=t("date")(new Date,"HH:mm"),e.date=t("date")(new Date,"dd"),e.month=t("date")(new Date,"MMMM"),"Monday"==e.day&&e.time<"08:00"||"Monday"==e.day&&e.time>"17:00"?e.status="closed":"Tuesday"==e.day&&e.time<"08:00"||"Tuesday"==e.day&&e.time>"19:00"?e.status="closed":"Wednesday"==e.day&&e.time<"08:00"||"Wednesday"==e.day&&e.time>"17:00"?e.status="closed":"Thursday"==e.day&&e.time<"08:00"||"Thursday"==e.day&&e.time>"17:00"?e.status="closed":"Friday"==e.day&&e.time<"08:00"||"Friday"==e.day&&e.time>"13:00"?e.status="closed":"Saturday"==e.day?e.status="closed":"Sunday"==e.day?e.status="closed":"December"==e.month&&"25"==e.day?e.status="closed":"December"==e.month&&"26"==e.day?e.status="closed":"January"==e.month&&"1"==e.day?e.status="closed":e.status="open",r.getMap().then(function(t){e.center=t.getCenter(),e.markers=t.markers,e.shapes=t.shapes})}e.$inject=["$rootScope","$filter","$log","NgMap"];var t={restrict:"E",templateUrl:"app/components/rightcol/rightcol.html",controller:e,controllerAs:"rightcol",bindToController:!0};return t}angular.module("windsorHouseDentalSurgery").directive("rightcol",e)}(),function(){"use strict";function e(){function e(e,t){e.isActive=function(e){return e===t.path()}}e.$inject=["$rootScope","$location"];var t={restrict:"E",templateUrl:"app/components/header/header.html",controller:e,controllerAs:"vm",bindToController:!0};return t}angular.module("windsorHouseDentalSurgery").directive("header",e)}(),function(){"use strict";function e(e){function t(t,a,r,n){var o,s=e(a[0],{typeSpeed:40,deleteSpeed:40,pauseDelay:800,loop:!0,postfix:" "});a.addClass("acme-malarkey"),angular.forEach(t.extraValues,function(e){s.type(e).pause()["delete"]()}),o=t.$watch("vm.contributors",function(){angular.forEach(n.contributors,function(e){s.type(e.login).pause()["delete"]()})}),t.$on("$destroy",function(){o()})}function a(e,t){function a(){return r().then(function(){e.info("Activated Contributors View")})}function r(){return t.getContributors(10).then(function(e){return n.contributors=e,n.contributors})}var n=this;n.contributors=[],a()}a.$inject=["$log","githubContributor"];var r={restrict:"E",scope:{extraValues:"="},template:"&nbsp;",link:t,controller:a,controllerAs:"vm"};return r}e.$inject=["malarkey"],angular.module("windsorHouseDentalSurgery").directive("acmeMalarkey",e)}(),function(){"use strict";function e(){function e(){}var t={restrict:"E",templateUrl:"app/components/headbar/headbar.html",controller:e,controllerAs:"vm",bindToController:!0};return t}angular.module("windsorHouseDentalSurgery").directive("headbar",e)}(),function(){"use strict";function e(){function e(){}var t={restrict:"E",templateUrl:"app/components/footer/footer.html",controller:e,controllerAs:"vm",bindToController:!0};return t}angular.module("windsorHouseDentalSurgery").directive("footer",e)}(),function(){"use strict";function e(){function e(){}var t={restrict:"E",templateUrl:"app/components/banners/banners.html",controller:e,controllerAs:"vm",bindToController:!0};return t}angular.module("windsorHouseDentalSurgery").directive("banners",e)}(),function(){"use strict";function e(){function e(e){e.adverts1=[{name:"New Patients",description:"Examination for only",colour:"alert alert-info",icon:"glyphicon glyphicon-star",price:"£ 37"},{name:"Keep your teeth white",description:"Scale and Polish from",colour:"alert alert-success",icon:"glyphicon glyphicon-refresh",price:"£ 28"},{name:"Amalgam Fillings",description:"Silver from",colour:"alert alert-danger",icon:"glyphicon glyphicon-zoom-in",price:"£ 55"},{name:"Play Sport?",description:"Sports guards from",colour:"alert alert-info",icon:"fa fa-futbol-o",price:"£ 55"}],e.randomize1=function(){return.5-Math.random()}}e.$inject=["$rootScope"];var t={restrict:"E",templateUrl:"app/components/adverts1/adverts1.html",controller:e,controllerAs:"vm",bindToController:!0};return t}angular.module("windsorHouseDentalSurgery").directive("adverts1",e)}(),function(){"use strict";function e(){function e(e){e.adverts2=[{name:"New Patients",description:"Examination for only",colour:"alert alert-info",icon:"glyphicon glyphicon-star",price:"£ 37"},{name:"Keep your teeth white",description:"Scale and Polish from",colour:"alert alert-success",icon:"glyphicon glyphicon-refresh",price:"£ 28"},{name:"Amalgam Fillings",description:"Silver from",colour:"alert alert-danger",icon:"glyphicon glyphicon-zoom-in",price:"£ 55"},{name:"Play Sport?",description:"Sports guards from",colour:"alert alert-info",icon:"fa fa-futbol-o",price:"£ 55"}],e.randomize2=function(){return.5-Math.random()}}e.$inject=["$rootScope"];var t={restrict:"E",templateUrl:"app/components/adverts2/adverts2.html",controller:e,controllerAs:"vm",bindToController:!0};return t}angular.module("windsorHouseDentalSurgery").directive("adverts2",e)}(),function(){"use strict";function e(e,t){e.Page=t,t.setTitle("WHDS | Home"),t.setDescription("Windsor House Dental Surgery Hersham")}e.$inject=["$rootScope","Page"],angular.module("windsorHouseDentalSurgery").factory("Page",function(){var e="default",t="default";return{title:function(){return e},description:function(){return t},setTitle:function(t){e=t},setDescription:function(e){t=e}}}).controller("MainController",e)}(),function(){"use strict";function e(e,t){t.setTitle("WHDS | Services"),t.setDescription("Information about the products and services we offer"),e.Page=t,angular.element(".panel-body").addClass("ng-hide"),e.clickMe=function(t,a){e.clickEvent=t.currentTarget.id,e.slide=angular.element(".panel-body").hasClass(t),angular.element(a).removeClass("ng-hide"),angular.element(a).addClass("ng-show")}}e.$inject=["$rootScope","Page"],angular.module("windsorHouseDentalSurgery").controller("ServicesController",e)}(),function(){"use strict";function e(e,t){e.Page=t,t.setTitle("WHDS | Pricing"),t.setDescription("Pricing for all our products and services")}e.$inject=["$rootScope","Page"],angular.module("windsorHouseDentalSurgery").controller("PricingController",e)}(),function(){"use strict";function e(e,t,a,r,n){var o=this;o.data={},o.submit=function(){alert("BOO!"),e.Object("contact").save(o.data).then(s,i)};var s=function(){r.success("Your message has been delivered!")},i=function(){r.error("Seems to be a problem")};t.Page=a,a.setTitle("WHDS | Contact"),a.setDescription("How to contact us here at the surgery"),n.info(t)}e.$inject=["$stamplay","$rootScope","Page","toastr","$log"],angular.module("windsorHouseDentalSurgery").controller("ContactController",e)}(),function(){"use strict";function e(e,t){e.Page=t,t.setTitle("WHDS | About"),t.setDescription("Information about the practice staff")}e.$inject=["$rootScope","Page"],angular.module("windsorHouseDentalSurgery").controller("AboutController",e)}(),function(){"use strict";angular.module("windsorHouseDentalSurgery").run()}(),function(){"use strict";function e(e,t){t.html5Mode(!0),e.when("/",{templateUrl:"app/main/main.html",controller:"MainController",controllerAs:"main"}).when("/about",{templateUrl:"app/about/about.html",controller:"AboutController",controllerAs:"about"}).when("/services",{templateUrl:"app/services/services.html",controller:"ServicesController",controllerAs:"service"}).when("/pricing",{templateUrl:"app/pricing/pricing.html",controller:"PricingController",controllerAs:"pricing"}).when("/contact",{templateUrl:"app/contact/contact.html",controller:"ContactController",controllerAs:"vm"}).otherwise({redirectTo:"/"})}e.$inject=["$routeProvider","$locationProvider"],angular.module("windsorHouseDentalSurgery").config(e)}(),function(){"use strict";angular.module("windsorHouseDentalSurgery").constant("malarkey",malarkey).constant("moment",moment)}(),function(){"use strict";function e(e,t){e.debugEnabled(!0),t.allowHtml=!0,t.timeOut=3e3,t.positionClass="toast-top-right",t.preventDuplicates=!0,t.progressBar=!0}e.$inject=["$logProvider","toastrConfig"],angular.module("windsorHouseDentalSurgery").config(e)}(),angular.module("windsorHouseDentalSurgery").run(["$templateCache",function(e){e.put("app/about/about.html",'<header></header><div class="container contentWrapper"><headbar></headbar><banners></banners><div class=row><div class="col-lg-4 rightBlue"><h1 class=title>The Team</h1><hr><div class=dentists><h4>Dentists</h4><p><strong>Vanessa Moon</strong> - GDC N<sup>&deg;</sup> 64015</p><p>Qualified from the Royal London Hospital Dental School in 1988. Has owned the practice since 1992.</p><p><strong>Cathrine Monday</strong> - GDC N<sup>&deg;</sup> 69359</p><p>Qualified from Newcastle Dental School 1993. Has worked at the practice since 2012.</p><p>Our experienced dentists will put you at your ease and discuss any proposed treatment with you fully. Both dentists are commited to post graduate education regularly attending courses.</p></div><hr><div class=hygienists><h4>Hygienists</h4><p><strong>Dawn Preston</strong> - GDC N<sup>&deg;</sup> 2136</p><p><strong>Anna Xanthos</strong> - GDC N<sup>&deg;</sup> 5923</p><p>Visiting the hygienist regularly is vital to maintaining good oral health. Both our hygienists are very experienced having worked for many years in private practices.</p></div></div><div class="col-lg-4 rightBlue"><h4>Practice Manager</h4><p><strong>Franasca Gomez</strong> - GDC N<sup>&deg;</sup> 136668</p><p>With over 30 years experience at the dental practice, Frankie is extremely extremely efficient and will always go out of her way to assist patients.</p><hr><h4>Dental Nurses</h4><p><strong>Karren Laurence</strong> - GDC N<sup>&deg;</sup> 152366</p><p><strong>Sharon Baldwin</strong> - GDC N<sup>&deg;</sup> 117718</p><p>Karen and Sharon are both very experienced and efficient dental nurses, helping to put patients at their ease whilst in the surgery.</p><hr class=blueStripe><adverts1></adverts1></div><rightcol></rightcol></div><hr><footer></footer></div>'),e.put("app/contact/contact.html",'<header></header><div class="container contentWrapper"><headbar></headbar><banners></banners><div class=row><div class="col-lg-8 rightBlue"><h1 class=title>Contact</h1><p>The Windsor House Dental Surgery is best contacted by phone on 01932 829500 or 01932 229977. You can also use the form below to contact us for non-emergency cases. Please allow 48 hours for a response.</p><hr><div class=well><form name=contactForm ng-submit="contactForm.$valid && vm.submit()" novalidate><div class=form-group><div class="col-lg-6 col-md-6 col-sm-6 col-xs-12"><input type=text placeholder="Full name" name=name ng-minlength=1 max=20 ng-model=vm.data.name id=name class=form-control required></div><div class="col-lg-6 col-md-6 col-sm-6 col-xs-12"><input type=email ng-minlength=1 placeholder="Email address" name=contactemail ng-model=vm.data.contactemail class=form-control required></div></div><div class=form-group><div class="col-lg-12 col-md-12 col-sm-12 col-xs-12"><input type=text ng-model=vm.data.subject name=subject ng-minlength=1 placeholder=Subject class=form-control required></div></div><div class=form-group><div class="col-lg-12 col-md-12 col-sm-12 col-xs-12"><textarea class=form-control ng-model=vm.data.message name=message ng-minlength=1 placeholder="Your message"></textarea></div></div><div class=form-group><div class="col-lg-12 col-md-12 col-sm-12 col-xs-12"><button type=submit class="btn btn-primary">Submit</button></div></div></form></div><div class=row><div class=col-lg-6><adverts1></adverts1></div><div class=col-lg-6><adverts2></adverts2></div></div></div><rightcol></rightcol></div><hr><footer></footer></div>'),e.put("app/pricing/pricing.html",'<header></header><div class="container contentWrapper"><headbar></headbar><banners></banners><div class=row><div class="col-lg-4 rightBlue"><h1 class=title>Prices</h1><p>Our pricing for products and services is listed out below. For more informatation please see our <a href=/services>services</a> page or phone us on 01932 829500 or 01932 229977</p><hr class=blueStripe><table class="table table-striped table-bordered"><tr><th>Item</th><th>Price</th></tr><tr><td>New Patient Examination</td><td>£37.00</td></tr><tr><td>Routine Dental Examination</td><td>£22.00</td></tr><tr><td>X-rays</td><td>£8.00</td></tr></table><table class="table table-striped table-bordered"><tr><td colspan=2>Preventative Treatment</td></tr><tr><td>Routine Scale and Polish from</td><td>£28.00</td></tr><tr><td>Hygienist Treatment</td><td>£53.00</td></tr><tr><td>Sports guards from</td><td>£55.00</td></tr></table><table class="table table-striped table-bordered"><tr><td colspan=2>Filling</td></tr><tr><td>Amalgam (silver fillings) from</td><td>£55.00</td></tr><tr><td>Composite (white fillings) from</td><td>£45.00</td></tr></table><table class="table table-striped table-bordered"><tr><td colspan=2>Root Fillings</td></tr><tr><td>Root fillings from</td><td>£300.00</td></tr></table></div><div class="col-lg-4 rightBlue"><table class="table table-striped table-bordered"><tr><td colspan=2>Crowns and Bridges</td></tr><tr><td>Porcelain fused to metal</td><td>£540.00</td></tr><tr><td>Full gold crown</td><td>£620.00</td></tr><tr><td>Advanced cosmetic crown from</td><td>£650.00</td></tr><tr><td>Bridges per unit</td><td>£550.00</td></tr></table><table class="table table-striped table-bordered"><tr><td colspan=2>Cosmetic Treatments</td></tr><tr><td>Whitening (both arches)</td><td>£320.00</td></tr><tr><td>Porcelain Veneers from</td><td>£500.00</td></tr></table><table class="table table-striped table-bordered"><tr><td colspan=2>Extractions</td></tr><tr><td>Extractions from</td><td>£60.00 - £115.00</td></tr></table><table class="table table-striped table-bordered"><tr><td colspan=2>Dentures</td></tr><tr><td>Acrylic Partial from</td><td>£380.00</td></tr><tr><td>Complete upper and lower</td><td>£1300.00</td></tr><tr><td>Cobalt Chromium</td><td>£850.00</td></tr></table></div><rightcol></rightcol></div><hr><footer></footer></div>'),e.put("app/main/main.html",'<header></header><div class="container contentWrapper"><headbar></headbar><banners></banners><div class=row><div class="col-lg-4 col-sm-6 col-xs-12 rightBlue"><h1 class=title>Windsor House Dental Surgery, Hersham</h1><p>Welcome to Windsor House Dental Surgery, we are a well established local practice, close to the centre of Hersham. The practice has been in the present since February 2011, having been previously based in Weybridge for many years.</p><p>We are a caring practice for the whole family, offering a wide range of treatments. We aim to provide an excellent service based on preventative dentistry, using the latest techniques and materials at an affordable cost.</p><hr><adverts1></adverts1><hr><h3>Parking</h3><p>We have two parking spaces available outside the surgery for those who require on site parking.</p><p>The <a href=http://www.elmbridge.gov.uk/environment/parking/table.htm>New Berry Lane</a> car park is the closest public car park to the surgery. With 32 spaces, and only a 4 minute walk away, the car park offers the best accessibility for those visiting by car.</p><p>Set your Satnav to <strong>KT12 4HQ</strong> for directions.</p></div><div class="col-sm-6 col-lg-4 col-xs-12 rightBlue"><img src=../assets/images/surgery.jpg class="img-responsive surgery img-rounded" alt="Windsor House Dental Surgery in Hersham high street"></div><rightcol></rightcol></div><hr><footer></footer></div>'),e.put("app/services/services.html",'<header></header><div class="container contentWrapper"><headbar></headbar><banners></banners><div class=row><div class="col-lg-4 rightBlue"><h1 class=title>Services</h1><p class=introText>To find out more about our products and services please click the <span class="glyphicon glyphicon-info-sign"></span> icon for more information</p><hr><div class="panel panel-default"><div class=panel-heading>Dental Treatments<label for=check1 class="glyphicon glyphicon-info-sign"></label><input type=checkbox id=check1 ng-click=clickMe($event)></div><div class="panel-body check1" ng-show="clickEvent == \'check1\'"><p>We offer a whole range of dental treatments. We always discuss any proposed treatment with you and provide a written estimate.</p></div></div><div class="panel panel-default"><div class=panel-heading>Prevention<label for=check2 class="glyphicon glyphicon-info-sign"></label><input type=checkbox ng-click=clickMe($event) id=check2></div><div class="panel-body check2" ng-show="clickEvent == \'check2\'"><p>We aim to focus on preventative treatments so that our patients have healthy mouths, and ultimately less treatment. Regular visits to the hygienists are vital in maintain good oral health.</p><p>We recommend regular check-up\'s and advice for children which is provided for free under the NHS.</p></div></div><div class="panel panel-default"><div class=panel-heading>Emergency Treatment<label for=check3 class="glyphicon glyphicon-info-sign"></label><input type=checkbox ng-click=clickMe($event) id=check3></div><div class="panel-body check3" ng-show="clickEvent == \'check3\'"><p>For our registered patients we provide out of hours service at the weekend. Please phone the emergency telephone number above for details</p><p>For emergency appointments during surgery time please phone <strong>01932 829500</strong></p></div></div><div class="panel panel-default"><div class=panel-heading>Tooth Whitening<label for=check5 class="glyphicon glyphicon-info-sign"></label><input type=checkbox ng-click=clickMe($event) id=check5></div><div class="panel-body check5" ng-show="clickEvent == \'check5\'"><p>This is a simple, affective and painless way of improving your smile. We take impressions to provide you with custom made trays. The trays are used at home with a whitening compound.</p></div></div><div class="panel panel-default"><div class=panel-heading>Porcelain Veneers<label for=check6 class="glyphicon glyphicon-info-sign"></label><input type=checkbox ng-click=clickMe($event) id=check6></div><div class="panel-body check6" ng-show="clickEvent == \'check6\'"><p>Porcelain Veneers are thin layers of porcelain which are bent over the front of natural teeth. They have a very natural appearance and can be used to alter the shape and colour of your teeth.</p></div></div><div class="panel panel-default"><div class=panel-heading>Crowns and Bridges<label for=check7 class="glyphicon glyphicon-info-sign"></label><input type=checkbox ng-click=clickMe($event) id=check7></div><div class="panel-body check7" ng-show="clickEvent == \'check7\'"><p>Crowns can help improve the appearance of a discoloured or poorly shaped tooth. Crowns are often the best way of protecting leanly filled teeth from fracturing as they cover the tooth. The crown is carefully matched to the colour of the existing teeth.</p><p>A bridge replaces a missing tooth or teeth using the teeth on either side of the gap. In some instances an adhesive bridge can be provided which requires minimal tooth preparation.</p></div></div><div class="panel panel-default"><div class=panel-heading>Dentures<label for=check8 class="glyphicon glyphicon-info-sign"></label><input type=checkbox id=check8 ng-click=clickMe($event)></div><div class="panel-body check8" ng-show="clickEvent == \'check8\'"><p>We can provide very natural looking dentures to replace missing teeth.</p></div></div></div><div class="col-lg-4 rightBlue"><div class="panel panel-default"><div class=panel-heading>Tooth Coloured Fillings<label for=check9 class="glyphicon glyphicon-info-sign"></label><input type=checkbox ng-click=clickMe($event) id=check9></div><div class="panel-body check9" ng-show="clickEvent == \'check9\'"><p>Old amalgam fillings can be replaced with tooth coloured filling materials.</p><p>We can also offer composite reneers which require little or no tooth preperation, to help enhance</p></div></div><div class="panel panel-default"><div class=panel-heading>Children<label for=check10 class="glyphicon glyphicon-info-sign"></label><input type=checkbox ng-click=clickMe($event) id=check10></div><div class="panel-body check10" ng-show="clickEvent == \'check10\'"><p>We aim to offer children using the practice a positive experience. We encourage regular visits and are happy to offer advice on your childs oral health.</p></div></div><div class="panel panel-default"><div class=panel-heading>Healthy Gums<label for=check11 class="glyphicon glyphicon-info-sign"></label><input type=checkbox ng-click=clickMe($event) class=checkBox id=check11></div><div class="panel-body check11" ng-show="clickEvent == \'check11\'"><p>The dental hygienists work closely together to help care for your teeth and gums. It is important to treat gum disease to prevent tooth loss.</p><p>The early stages of gum disease are often easy to treat, by affective and thorough cleaning of your teeth. We can help you achieve this.</p></div></div><div class="panel panel-default"><div class=panel-heading>Oral Cancer Check<label for=check12 class="glyphicon glyphicon-info-sign"></label><input type=checkbox ng-click=clickMe($event) id=check12></div><div class="panel-body check12" ng-show="clickEvent == \'check12\'"><p>A routine dental examination plays an important part in the early detection of oral cancer. Mouth cancer is curable, small cancers are more easily treated.</p><p>Oral cancer represents 1% of all cancers in the UK and with around 4000 new cases reported each year in the UK the numbers are increasing.</p><p>The dentist will examine your whole mouth, checking your lips, cheeks, tongue, palate and throat to make sure that there are no changes in the tissue that which could indicate the onset of oral cancer.</p></div></div><div class="panel panel-default"><div class=panel-heading>Root Canal Treatment<label for=check13 class="glyphicon glyphicon-info-sign"></label><input type=checkbox ng-click=clickMe($event) id=check13></div><div class="panel-body check13 bounceInDown" ng-show="clickEvent == \'check13\'"><p>Root canal treatment is a dental procedure used to treat infected nerve tissue within the tooth. It is carried out out under local anesthetic.</p></div></div><div class="panel panel-default"><div class=panel-heading>Nervous Patients<label for=check14 class="glyphicon glyphicon-info-sign"></label><input type=checkbox ng-click=clickMe($event) id=check14></div><div class="panel-body check14" ng-show="clickEvent == \'check14\'"><p>We aim to make your appointments as plesant as possible for you by being kind and understanding. If you are particularly anxious please mention this to the dentist.</p></div></div><div class="panel panel-default"><div class=panel-heading>Special Needs<label for=check15 class="glyphicon glyphicon-info-sign"></label><input type=checkbox ng-click=clickMe($event) id=check15></div><div class="panel-body check15" ng-show="clickEvent == \'check15\'"><p>We have a permanent ramp at the front entrance to our building and a ground floor surgery with easy wheelchair access.</p></div></div></div><rightcol></rightcol></div><hr><footer></footer></div>'),e.put("app/components/banners/banners.html",'<div class=row><div class=col-lg-12 ng-switch=status><div ng-switch-when=closed><div class="alert alert-danger">The surgery is now closed. If you\'re a patient and require emergency care at the weekend or on bank holidays please call <strong>01932 829500</strong> or <strong>01932 229977</strong></div></div><div ng-switch-default><div class="alert alert-success">Some positive message</div></div></div></div>'),e.put("app/components/adverts1/adverts1.html",'<div ng-repeat="adverts in adverts1=(adverts1|orderBy:randomize1|limitTo:1)"><div class=advert ng-class=adverts.colour><span class="{{ adverts.icon }} icon"></span><h3>{{adverts.name}}</h3><div class=clear></div><p class=description>{{ adverts.description }}</p><p class=price><strong>{{ adverts.price }}</strong></p></div></div>'),e.put("app/components/header/header.html",'<nav class="navbar navbar-fixed-top navbar-inverse"><div class=container><div class=navbar-header><button type=button class="navbar-toggle collapsed" data-toggle=collapse data-target=#navbar aria-expanded=false aria-controls=navbar><span class=sr-only>Toggle navigation</span> <span class=icon-bar></span> <span class=icon-bar></span> <span class=icon-bar></span></button></div><div id=navbar class="collapse navbar-collapse"><ul class="nav navbar-nav"><li ng-class="{ active: isActive(\'/\')}"><a href=/ >Home</a></li><li ng-class="{ active: isActive(\'/about\')}"><a href=/#about>About</a></li><li ng-class="{ active: isActive(\'/services\')}"><a href=/#services>Services</a></li><li ng-class="{ active: isActive(\'/pricing\')}"><a href=/#pricing>Pricing</a></li><li ng-class="{ active: isActive(\'/contact\')}"><a href=/#contact>Contact</a></li></ul></div><!-- /.nav-collapse --></div><!-- /.container --></nav>'),e.put("app/components/headbar/headbar.html",'<div class="row header"><div class="col-lg-8 col-xs-12"><img src=../assets/images/logo.jpg alt="Windsor House Dental Surgery" class=img-responsive><hr class="blueStripe headStripe"></div><div class="col-lg-4 col-xs-12"><table class="table contactTable"><tr><td><strong>Telephone:</strong></td><td>01932 829500</td></tr><tr><td><strong>Emergency</strong></td><td>01932 829500 / 01932 229977</td></tr><tr><td><strong>Address:</strong></td><td>Windsor House, 20 Queens Road, Hersham, KT12 5LR</td></tr></table></div></div><hr>'),e.put("app/components/adverts2/adverts2.html",'<div ng-repeat="adverts in adverts2=(adverts2|orderBy:randomize2|limitTo:1)"><div class=advert ng-class=adverts.colour><span class="{{ adverts.icon }} icon"></span><h3>{{adverts.name}}</h3><div class=clear></div><p class=description>{{ adverts.description }}</p><p class=price><strong>{{ adverts.price }}</strong></p></div></div>'),e.put("app/components/footer/footer.html",'<div class=clear></div><div class=container><div class="col-lg-12 footer">&copy; Windsor House Dental Surgery<br>Built by <a href=http://eigotec.com>eigotec</a></div></div>'),e.put("app/components/rightcol/rightcol.html",'<div class="col-lg-4 totalHeight"><hr class="blueStripe tableStripe"><table class="table table-bordered table-striped"><tr><th colspan=2>Opening times</th></tr><tr ng-switch on=status><td colspan=2 ng-switch-when=open><span>Currently:</span> <button class="bg-success btn btn-sm">OPEN</button></td><td colspan=2 ng-switch-default><span>Currently:</span> <button class="bg-danger btn btn-sm">CLOSED</button></td></tr><tr><td>Monday</td><td>08:00 - 17:00</td></tr><tr><td>Tuesday</td><td>08:00 - 19:00</td></tr><tr><td>Wednesday</td><td>08:00 - 17:00</td></tr><tr><td>Thursday</td><td>08:00 - 17:00</td></tr><td>Friday</td><td>08:00 - 13:00</td><tr><td>Saturday</td><td>Closed<sup>*</sup></td></tr><tr><td>Sunday</td><td>Closed<sup>*</sup></td></tr></table><hr class=blueStripe><div class=map map-lazy-load="https://maps.google.com/maps/api/js?key=AIzaSyCGnf1-MVdCmzS092JML0XLwxN-WaYEuaw"><ng-map center="20 Queens Rd, Hersham, Walton-on-Thames KT12 5LR" zoom=18><marker position="20 Queens Rd, Hersham, Walton-on-Thames KT12 5LR" animation=Animation.DROP centered=true></marker></ng-map><div id=mapsApps><h3>Open in Maps app</h3><hr class=blueStripe><a href="https://maps.apple.com/maps?address=Walton-on-Thames,%20KT12%205LR,%20England&ll=51.366537,-0.403507&q=Walton-on-Thames,%20KT12%205LR,%20England"><button class="btn btn-default">Open in Apple Maps</button></a> <a href="https://www.google.co.uk/maps/place/Queens+Rd,+Hersham,+Walton-on-Thames,+Surrey+KT12+5LR/@51.3665373,-0.4035806,17z/data=!4m2!3m1!1s0x4876756b5b1a4b1d:0xd3d0f4adf5c833df"><button class="btn btn-default">Open in Google Maps</button></a></div></div></div>')}]);
//# sourceMappingURL=../maps/scripts/app-d631d37ffe.js.map
