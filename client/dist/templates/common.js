angular.module('templates.common', ['header.tpl.html']);

angular.module("header.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("header.tpl.html",
    "<div class=\"pull-left breadcrumb_admin clear_both\" ng-controller=\"prBreadCrumbCtrl\">\n" +
    "    <div class=\"pull-left page_title blue_text\">\n" +
    "        <h1>Dashboard</h1>\n" +
    "        <h2 class=\"\">{{ subtitle }}</h2>\n" +
    "    </div>\n" +
    "    <div class=\"pull-right\">\n" +
    "        <ol class=\"breadcrumb\">\n" +
    "            <li><a href=\"#/\">Home</a></li>\n" +
    "            <li class=\"active\">Dashboard</li>\n" +
    "        </ol>\n" +
    "    </div>\n" +
    "</div>");
}]);
