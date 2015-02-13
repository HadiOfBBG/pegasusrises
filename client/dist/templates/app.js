angular.module('templates.app', ['home/home.tpl.html']);

angular.module("home/home.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("home/home.tpl.html",
    "<div class=\"white_bg\">\n" +
    "    <h2 class=\"page-header text-center\">Welcome to Pegasusrises</h2>\n" +
    "    <div class=\"row\" style=\"padding-bottom: 50px\">\n" +
    "        <p class=\"h5 text-center\">To create a server, click the button below to create your first server on Pegasusrises</p>\n" +
    "        <div class=\"text-center\" style=\"margin: 50px 0\">\n" +
    "            <button class=\"col-lg-offset-4 col-lg-4 btn-lg btn btn-success\" lk-google-picker picker-files=\"files\"><i class=\"fa fa-dashboard\"></i>&nbsp;&nbsp;&nbsp;Create a server</button>\n" +
    "        </div>\n" +
    "        <p class=\"text-center col-lg-offset-4 col-lg-4 yellow_text\"><em><i class=\"fa fa-warning\"></i>This will open Google Drive</em></p>\n" +
    "    </div>\n" +
    "</div>");
}]);
