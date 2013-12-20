 javascript: (function (callback) {
     // Add any libraries you need to the DOM here (jQuery is added below).
     if (typeof jQuery == "undefined") {
         var element = document.createElement("script");
         element.type = "text/javascript";
         element.src = "http://ajax.googleapis.com/ajax/libs/jquery/2.0.3/jquery.min.js";
         element.onload = callback;
         document.body.appendChild(element);
     } else {
         callback();
     }
 })(function () {
     // Add bookmarklet code here.
 });
