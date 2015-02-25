angular.module('templates.app', ['admin/profile.tpl.html', 'admin/settings.tpl.html', 'home/home.tpl.html', 'survey/selected_survey.tpl.html', 'survey/survey_list.tpl.html']);

angular.module("admin/profile.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("admin/profile.tpl.html",
    "<div class=\"container clear_both padding_fix\">\n" +
    "        <!--\\\\\\\\\\\\\\ container  start \\\\\\\\\\\\-->\n" +
    "        <div class=\"page-content\">\n" +
    "          <div class=\"row\">\n" +
    "            <div class=\"col-md-4\">\n" +
    "              <div class=\"profile_bg\">\n" +
    "                <div class=\"user-profile-sidebar\">\n" +
    "                  <div class=\"row\">\n" +
    "                    <div class=\"col-md-4\"><img src=\"images/pro.png\"></div>\n" +
    "                    <div class=\"col-md-8\">\n" +
    "                      <div class=\"user-identity\">\n" +
    "                        <h4><strong>John Doe</strong></h4>\n" +
    "                        <p><i class=\"fa fa-map-marker\"></i> Riaxe Systems Pvt</p>\n" +
    "                      </div>\n" +
    "                    </div>\n" +
    "                  </div>\n" +
    "                </div>\n" +
    "                <div class=\"account-status-data\">\n" +
    "                  <div class=\"row\">\n" +
    "                    <div class=\"col-md-4\">\n" +
    "                      <h5><strong>2,173</strong><br>\n" +
    "                        Posts</h5>\n" +
    "                    </div>\n" +
    "                    <div class=\"col-md-4\">\n" +
    "                      <h5><strong>14</strong><br>\n" +
    "                        Following</h5>\n" +
    "                    </div>\n" +
    "                    <div class=\"col-md-4\">\n" +
    "                      <h5><strong>100</strong><br>\n" +
    "                        Followers</h5>\n" +
    "                    </div>\n" +
    "                  </div>\n" +
    "                </div>\n" +
    "                <div class=\"user-button\">\n" +
    "                  <div class=\"row\">\n" +
    "                    <div class=\"col-sm-6\">\n" +
    "                      <button class=\" btn btn-primary btn-rounded\" type=\"button\"><i class=\"fa fa-envelope\"></i> Send Message</button>\n" +
    "                    </div>\n" +
    "                    <div class=\"col-sm-6\">\n" +
    "                      <button class=\"btn btn-default btn-rounded\" type=\"button\"><i class=\"fa fa-user\"></i> Add as friend</button>\n" +
    "                    </div>\n" +
    "                  </div>\n" +
    "                </div>\n" +
    "                <div> <small class=\"\">about me</small>\n" +
    "                  <p>Artist</p>\n" +
    "                  <small class=\"\">info</small>\n" +
    "                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi id neque quam. Aliquam sollicitudin venenatis ipsum ac feugiat.</p>\n" +
    "                  <div class=\"line\"></div>\n" +
    "                  <p class=\"m-t-sm\"> </p>\n" +
    "                </div>\n" +
    "                <h6><strong>CONNECTION</strong></h6>\n" +
    "                <div class=\"\">\n" +
    "                  <ul class=\"social_icons \">\n" +
    "                    <li><a href=\"#\"><i class=\"fa fa-envelope-o\"></i></a></li>\n" +
    "                    <li><a href=\"#\"><i class=\"fa fa-twitter\"></i></a></li>\n" +
    "                    <li><a href=\"#\"><i class=\"fa fa-linkedin\"></i></a></li>\n" +
    "                    <li><a href=\"#\"><i class=\"fa fa-facebook\"></i></a></li>\n" +
    "                    <li><a href=\"#\"><i class=\"fa fa-skype\"></i></a></li>\n" +
    "                  </ul>\n" +
    "                </div>\n" +
    "              </div>\n" +
    "              <!--/block-web-->\n" +
    "              <section class=\"panel panel-default \">\n" +
    "                <form>\n" +
    "                  <textarea style=\"width:414px;\" class=\"form-control no-border profile_form\" rows=\"3\" placeholder=\"What are you doing...\"></textarea>\n" +
    "                </form>\n" +
    "                <footer class=\"profile_form\">\n" +
    "                  <button class=\"btn btn-info pull-right btn-sm\">POST</button>\n" +
    "                  <ul class=\"nav nav-pills nav-sm\">\n" +
    "                    <li><a href=\"#\"><i class=\"fa fa-camera text-muted\"></i></a></li>\n" +
    "                    <li><a href=\"#\"><i class=\"fa fa-video-camera text-muted\"></i></a></li>\n" +
    "                  </ul>\n" +
    "                </footer>\n" +
    "              </section>\n" +
    "              <section class=\"panel panel-default profile_bg\">\n" +
    "                <h4 class=\"font-thin padder\">Latest Tweets</h4>\n" +
    "                <ul class=\"profile_list\">\n" +
    "                  <li class=\"profile_list-item\">\n" +
    "                    <p>Wellcome <a href=\"#\" class=\"text-info\">@Drew Wllon</a> and play this web application template, have fun1 </p>\n" +
    "                    <small class=\"tweets\"><i class=\"fa fa-clock-o\"></i> 2 minuts ago</small> </li>\n" +
    "                  <li class=\"profile_list-item\">\n" +
    "                    <p>Morbi nec <a href=\"#\" class=\"text-info\">@Jonathan George</a> nunc condimentum ipsum dolor sit amet, consectetur</p>\n" +
    "                    <small class=\"tweets\"><i class=\"fa fa-clock-o\"></i> 1 hour ago</small> </li>\n" +
    "                  <li class=\"profile_list-item\">\n" +
    "                    <p><a href=\"#\" class=\"text-info\">@Josh Long</a> Vestibulum ullamcorper sodales nisi nec adipiscing elit. </p>\n" +
    "                    <small class=\"tweets\"><i class=\"fa fa-clock-o\"></i> 2 hours ago</small> </li>\n" +
    "                </ul>\n" +
    "              </section>\n" +
    "              <section class=\"panel \">\n" +
    "                <div class=\"panel-body\"> <a href=\"#\" class=\" pull-left m-r\"><img src=\"images/pro.png\"></a> <a href=\"#\" class=\"text-info\">@Mike Mcalidek <i class=\"fa fa-twitter\"></i></a> <br>\n" +
    "                  <small class=\"\">2,415 followers / 225 tweets</small> <br>\n" +
    "                  <a href=\"#\" class=\"btn btn-xs btn-success m-t-xs pull-right\">Follow</a> </div>\n" +
    "              </section>\n" +
    "            </div>\n" +
    "            <!--/col-md-4-->\n" +
    "            <div class=\"col-md-8\">\n" +
    "              <div class=\"block-web full\">\n" +
    "                <ul class=\"nav nav-tabs nav-justified nav_bg\">\n" +
    "                  <li class=\"\"><a data-toggle=\"tab\" href=\"#about\"><i class=\"fa fa-user\"></i> About</a></li>\n" +
    "                  <li class=\"\"><a data-toggle=\"tab\" href=\"#edit-profile\"><i class=\"fa fa-pencil\"></i> Edit</a></li>\n" +
    "                  <li class=\"\"><a data-toggle=\"tab\" href=\"#user-activities\"><i class=\"fa fa-laptop\"></i> Activities</a></li>\n" +
    "                  <li class=\"active\"><a data-toggle=\"tab\" href=\"#mymessage\"><i class=\"fa fa-envelope\"></i> Message</a></li>\n" +
    "                </ul>\n" +
    "                <div class=\"tab-content\">\n" +
    "                  <div id=\"about\" class=\"tab-pane animated fadeInRight\">\n" +
    "                    <div class=\"user-profile-content\">\n" +
    "                      <h5><strong>ABOUT</strong> ME</h5>\n" +
    "                      <p> Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. </p>\n" +
    "                      <hr>\n" +
    "                      <div class=\"row\">\n" +
    "                        <div class=\"col-sm-6\">\n" +
    "                          <h5><strong>CONTACT</strong> ME</h5>\n" +
    "                          <address>\n" +
    "                          <strong>Phone</strong><br>\n" +
    "                          <abbr title=\"Phone\">+91 354 123 4567</abbr>\n" +
    "                          </address>\n" +
    "                          <address>\n" +
    "                          <strong>Email</strong><br>\n" +
    "                          <a href=\"mailto:#\">first.last@example.com</a>\n" +
    "                          </address>\n" +
    "                          <address>\n" +
    "                          <strong>Website</strong><br>\n" +
    "                          <a href=\"http://riaxe.com\">http://riaxe.com</a>\n" +
    "                          </address>\n" +
    "                        </div>\n" +
    "                        <div class=\"col-sm-6\">\n" +
    "                          <h5><strong>MY</strong> SKILLS</h5>\n" +
    "                          <p>UI Design</p>\n" +
    "                          <p>Clean and Modern Web Design</p>\n" +
    "                          <p>PHP and MySQL Programming</p>\n" +
    "                          <p>Vector Design</p>\n" +
    "                        </div>\n" +
    "                      </div>\n" +
    "                    </div>\n" +
    "                  </div>\n" +
    "                  <div id=\"edit-profile\" class=\"tab-pane animated fadeInRight\">\n" +
    "                    <div class=\"user-profile-content\">\n" +
    "                      <form role=\"form\">\n" +
    "                        <div class=\"form-group\">\n" +
    "                          <label for=\"FullName\">Full Name</label>\n" +
    "                          <input type=\"text\" value=\"John Doe\" id=\"FullName\" class=\"form-control\">\n" +
    "                        </div>\n" +
    "                        <div class=\"form-group\">\n" +
    "                          <label for=\"Email\">Email</label>\n" +
    "                          <input type=\"email\" value=\"first.last@example.com\" id=\"Email\" class=\"form-control\">\n" +
    "                        </div>\n" +
    "                        <div class=\"form-group\">\n" +
    "                          <label for=\"Username\">Username</label>\n" +
    "                          <input type=\"text\" value=\"john\" id=\"Username\" class=\"form-control\">\n" +
    "                        </div>\n" +
    "                        <div class=\"form-group\">\n" +
    "                          <label for=\"Password\">Password</label>\n" +
    "                          <input type=\"password\" placeholder=\"6 - 15 Characters\" id=\"Password\" class=\"form-control\">\n" +
    "                        </div>\n" +
    "                        <div class=\"form-group\">\n" +
    "                          <label for=\"RePassword\">Re-Password</label>\n" +
    "                          <input type=\"password\" placeholder=\"6 - 15 Characters\" id=\"RePassword\" class=\"form-control\">\n" +
    "                        </div>\n" +
    "                        <div class=\"form-group\">\n" +
    "                          <label for=\"AboutMe\">About Me</label>\n" +
    "                          <textarea style=\"height: 125px;\" id=\"AboutMe\" class=\"form-control\">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.</textarea>\n" +
    "                        </div>\n" +
    "                        <button class=\"btn btn-primary\" type=\"submit\">Save</button>\n" +
    "                      </form>\n" +
    "                    </div>\n" +
    "                  </div>\n" +
    "                  <div id=\"user-activities\" class=\"tab-pane\">\n" +
    "                    <ul class=\"media-list\">\n" +
    "                      <li class=\"media\"> <a href=\"#\">\n" +
    "                        <p><strong>John Doe</strong> Uploaded a photo <strong>\"DSC000254.jpg\"</strong> <br>\n" +
    "                          <i>2 minutes ago</i></p>\n" +
    "                        </a> </li>\n" +
    "                      <li class=\"media\"> <a href=\"#\">\n" +
    "                        <p><strong>Imran Tahir</strong> Created an photo album <strong>\"Indonesia Tourism\"</strong> <br>\n" +
    "                          <i>8 minutes ago</i></p>\n" +
    "                        </a> </li>\n" +
    "                      <li class=\"media\"> <a href=\"#\">\n" +
    "                        <p><strong>Colin Munro</strong> Posted an article <strong>\"London never ending Asia\"</strong> <br>\n" +
    "                          <i>an hour ago</i></p>\n" +
    "                        </a> </li>\n" +
    "                      <li class=\"media\"> <a href=\"#\">\n" +
    "                        <p><strong>Corey Anderson</strong> Added 3 products <br>\n" +
    "                          <i>3 hours ago</i></p>\n" +
    "                        </a> </li>\n" +
    "                      <li class=\"media\"> <a href=\"#\">\n" +
    "                        <p><strong>Morne Morkel</strong> Send you a message <strong>\"Lorem ipsum dolor...\"</strong> <br>\n" +
    "                          <i>12 hours ago</i></p>\n" +
    "                        </a> </li>\n" +
    "                      <li class=\"media\"> <a href=\"#\">\n" +
    "                        <p><strong>Imran Tahir</strong> Updated his avatar <br>\n" +
    "                          <i>Yesterday</i></p>\n" +
    "                        </a> </li>\n" +
    "                    </ul>\n" +
    "                  </div>\n" +
    "                  <div id=\"mymessage\" class=\"tab-pane active\">\n" +
    "                    <ul class=\"media-list\">\n" +
    "                      <li class=\"media\"> <a href=\"#\" class=\"pull-left\"><img src=\"images/gg.png\"></a>\n" +
    "                        <div class=\"media-body\">\n" +
    "                          <h4 class=\"media-heading\"><a href=\"#fakelink\">John Doe</a> <small>Just now</small></h4>\n" +
    "                          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>\n" +
    "                        </div>\n" +
    "                      </li>\n" +
    "                      <li class=\"media\"> <a href=\"#\" class=\"pull-left\"><img src=\"images/gg.png\"></a>\n" +
    "                        <div class=\"media-body\">\n" +
    "                          <h4 class=\"media-heading\"><a href=\"#fakelink\">Tim Southee</a> <small>Yesterday at 04:00 AM</small></h4>\n" +
    "                          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam rhoncus</p>\n" +
    "                        </div>\n" +
    "                      </li>\n" +
    "                      <li class=\"media\"> <a href=\"#\" class=\"pull-left\"><img src=\"images/gg.png\"></a>\n" +
    "                        <div class=\"media-body\">\n" +
    "                          <h4 class=\"media-heading\"><a href=\"#fakelink\">Kane Williamson</a> <small>January 17, 2014 05:35 PM</small></h4>\n" +
    "                          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>\n" +
    "                        </div>\n" +
    "                      </li>\n" +
    "                      <li class=\"media\"> <a href=\"#\" class=\"pull-left\"><img src=\"images/gg.png\"></a>\n" +
    "                        <div class=\"media-body\">\n" +
    "                          <h4 class=\"media-heading\"><a href=\"#fakelink\">Lonwabo Tsotsobe</a> <small>January 17, 2014 05:35 PM</small></h4>\n" +
    "                          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>\n" +
    "                        </div>\n" +
    "                      </li>\n" +
    "                      <li class=\"media\"> <a href=\"#\" class=\"pull-left\"><img src=\"images/gg.png\"></a>\n" +
    "                        <div class=\"media-body\">\n" +
    "                          <h4 class=\"media-heading\"><a href=\"#fakelink\">Dale Steyn</a> <small>January 17, 2014 05:35 PM</small></h4>\n" +
    "                          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>\n" +
    "                        </div>\n" +
    "                      </li>\n" +
    "                      <li class=\"media\"> <a href=\"#\" class=\"pull-left\"><img src=\"images/gg.png\"></a>\n" +
    "                        <div class=\"media-body\">\n" +
    "                          <h4 class=\"media-heading\"><a href=\"#fakelink\">John Doe</a> <small>Just now</small></h4>\n" +
    "                          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>\n" +
    "                        </div>\n" +
    "                      </li>\n" +
    "                    </ul>\n" +
    "                  </div>\n" +
    "                </div>\n" +
    "                <!--/tab-content-->\n" +
    "              </div>\n" +
    "              <!--/block-web-->\n" +
    "            </div>\n" +
    "            <!--/col-md-8-->\n" +
    "          </div>\n" +
    "          <!--/row-->\n" +
    "        </div>\n" +
    "      </div>");
}]);

angular.module("admin/settings.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("admin/settings.tpl.html",
    "<div class=\"ticket_open\">\n" +
    "    <div class=\"ticket_open_heading\">\n" +
    "        <h3 class=\"pull-left\"><span class=\"semi-bold\"><label for=\"settings\">Settings</label> </span></h3>\n" +
    "        <div class=\"ticket_open_search hidden\">\n" +
    "            <div class=\"input-group\">\n" +
    "                <input id=\"settings\" type=\"text\" class=\"form-control\" placeholder=\"Search settings\">\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <div class=\"clearfix\"></div>\n" +
    "    <div class=\"ticket_open_comment\">\n" +
    "        <div class=\"row\">\n" +
    "            <div class=\"col-sm-9\">\n" +
    "                <div class=\"btn-group\"><i class=\"fa fa-cog\"></i></div>\n" +
    "                <span>Theme</span>\n" +
    "\n" +
    "                <p>Change the theme of the dashboard. <b>This will be saved to this browser ONLY</b></p>\n" +
    "            </div>\n" +
    "            <div class=\"col-sm-3\">\n" +
    "                 <span class=\"dropdown\" dropdown on-toggle=\"toggled(open)\">\n" +
    "      <a href class=\"dropdown-toggle\" dropdown-toggle>\n" +
    "          {{ themeChoice.name }}\n" +
    "      </a>\n" +
    "      <ul class=\"dropdown-menu\">\n" +
    "          <li ng-repeat=\"choice in themes\">\n" +
    "              <a class=\"pointer\" ng-click=\"changeTheme(choice)\">{{ choice.name }}</a>\n" +
    "          </li>\n" +
    "      </ul>\n" +
    "    </span>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "\n" +
    "\n" +
    "    <div class=\"ticket_open_comment\">\n" +
    "        <div class=\"row\">\n" +
    "            <div class=\"col-sm-9\">\n" +
    "                <div class=\"btn-group\"><i class=\"fa fa-cog\"></i></div>\n" +
    "                <span>Header</span>\n" +
    "\n" +
    "                <p>{{ headerChoice.description }} <b>  This will be saved to this browser ONLY</b></p>\n" +
    "            </div>\n" +
    "            <div class=\"col-sm-3\">\n" +
    "                 <span class=\"dropdown\" dropdown on-toggle=\"toggled(open)\">\n" +
    "      <a href class=\"dropdown-toggle\" dropdown-toggle>\n" +
    "          {{ headerChoice.name }}\n" +
    "      </a>\n" +
    "      <ul class=\"dropdown-menu\">\n" +
    "          <li ng-repeat=\"choice in headerOptions\">\n" +
    "              <a class=\"pointer\" ng-click=\"changeHeaderType(choice)\">{{ choice.name }}</a>\n" +
    "          </li>\n" +
    "      </ul>\n" +
    "    </span>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "\n" +
    "    <div class=\"ticket_open_comment\">\n" +
    "        <div class=\"row\">\n" +
    "            <div class=\"col-sm-9\">\n" +
    "                <div class=\"btn-group\"><i class=\"fa fa-cog\"></i></div>\n" +
    "                <span>Navigation</span>\n" +
    "\n" +
    "                <p>{{ navChoice.description }}<b>  This will be saved to this browser ONLY</b></p>\n" +
    "            </div>\n" +
    "            <div class=\"col-sm-3\">\n" +
    "                 <span class=\"dropdown\" dropdown on-toggle=\"toggled(open)\">\n" +
    "      <a href class=\"dropdown-toggle\" dropdown-toggle>\n" +
    "          {{ navChoice.name }}\n" +
    "      </a>\n" +
    "      <ul class=\"dropdown-menu\">\n" +
    "          <li ng-repeat=\"choice in navOptions\">\n" +
    "              <a class=\"pointer\" ng-click=\"changeNavType(choice)\">{{ choice.name }}</a>\n" +
    "          </li>\n" +
    "      </ul>\n" +
    "    </span>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "\n" +
    "</div>");
}]);

angular.module("home/home.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("home/home.tpl.html",
    "<div class=\"white_bg\">\n" +
    "    <h2 class=\"page-header text-center\">Welcome to Pegasusrises</h2>\n" +
    "    <div class=\"row\" style=\"padding-bottom: 50px\">\n" +
    "        <p class=\"h5 text-center\">To create a server, click the button below to create your first server on Pegasusrises</p>\n" +
    "        <div class=\"text-center\" style=\"margin: 50px 0\">\n" +
    "            <button  id=\"ngJoyRide_1_gdrive\"  data-effect=\"flipInX\" class=\"effect-button col-lg-offset-4 col-lg-4 btn-lg btn btn-primary\" lk-google-picker picker-files=\"files\"><i class=\"fa fa-dashboard\"></i>&nbsp;&nbsp;&nbsp;Create a server</button>\n" +
    "        </div>\n" +
    "        <p  class=\"text-center col-lg-offset-4 col-lg-4 blue_text\"><em><i class=\"fa fa-warning\"></i>  This will open Google Drive</em></p>\n" +
    "    </div>\n" +
    "\n" +
    "    <div ng-show=\"files.length\" class=\"row\">\n" +
    "        <p class=\"text-center col-lg-offset-4 col-lg-4 green_text\"><em><i class=\"fa fa-file\"></i>  Selected filename : {{ files[files.length-1].name }}</em></p>\n" +
    "        <div  class=\"text-center\" style=\"padding-bottom: 30px\">\n" +
    "            <button id=\"ngJoyRide_2_upload\" class=\"col-lg-offset-4 col-lg-4 btn-lg btn btn-warning\" ng-click=\"uploadSheet()\"><i class=\"fa fa-upload\"></i>&nbsp;&nbsp;&nbsp;Send selected file's details</button>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <div ng-show=\"files.length\" class=\"row\">\n" +
    "        <div  class=\"text-center\" style=\"padding-bottom: 30px\">\n" +
    "            <button class=\"col-lg-offset-4 col-lg-4 btn-lg btn btn-danger\" ng-click=\"tabletop()\"><i class=\"fa fa-upload\"></i>&nbsp;&nbsp;&nbsp;Send selected file contents as JSON</button>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "\n" +
    "\n" +
    "<div class=\"btn btn-warning\" ng-show=\"files.length\" ng-click=\"getFile()\"> Get file from Google </div>\n" +
    "\n" +
    "<div class=\"btn btn-danger\" ng-show=\"files.length\" ng-click=\"sendFileToOdk()\">Send File To XIframe</div>\n" +
    "\n" +
    "\n" +
    "<div class=\"btn btn-primary\" ng-click=\"startLoadingBar()\">Start Loader</div>\n" +
    "\n" +
    "<div ng-joy-ride=\"startJoyRide\" config=\"configJoyRide\" on-finish=\"onFinish()\"  on-skip=\"onFinish()\"></div>\n" +
    "\n" +
    "");
}]);

angular.module("survey/selected_survey.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("survey/selected_survey.tpl.html",
    "<div class=\"row center\">\n" +
    "    <div class=\"col-lg-12 \">\n" +
    "        <section class=\"panel default blue_title h2\">\n" +
    "            <div class=\"panel-heading border\">Citizen Journalism Survey</div>\n" +
    "        </section>\n" +
    "    </div>\n" +
    "</div>\n" +
    "\n" +
    "<!--<ui-gmap-google-map center='map.center' zoom='map.zoom'>-->\n" +
    "\n" +
    "    <!--<ui-gmap-markers-->\n" +
    "            <!--models=\"markers\"-->\n" +
    "            <!--idkey=\"'id'\"-->\n" +
    "            <!--coords=\"'points'\">-->\n" +
    "    <!--</ui-gmap-markers>-->\n" +
    "\n" +
    "<!--</ui-gmap-google-map>-->\n" +
    "\n" +
    "<div google-chart chart=\"chartObject\" style=\"height:600px; width:100%;\"></div>");
}]);

angular.module("survey/survey_list.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("survey/survey_list.tpl.html",
    "<div class=\"container clear_both padding_fix\" ui-view=\"\">\n" +
    "    <!--\\\\\\\\\\\\\\ container  start \\\\\\\\\\\\-->\n" +
    "    <div class=\"task_bar clearfix\">\n" +
    "        <div class=\"task_bar_left\">\n" +
    "            <label>Search survey:</label>\n" +
    "            <input type=\"text\" class=\"task_form\" placeholder=\" Survey title...\" name=\"\">\n" +
    "            <button type=\"button\" class=\"btn btn-primary btn-icon\"><i class=\"fa fa-search\"></i> </button>\n" +
    "        </div>\n" +
    "        <div class=\"task_bar_right\">\n" +
    "            <label>Sorting:</label>\n" +
    "            <input type=\"text\" class=\"task_form\" placeholder=\"SORT BY DATE\" name=\"\">\n" +
    "            <button type=\"button\" class=\"btn btn-primary btn-icon\"><i class=\"fa fa-arrows-v\"></i></button>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <div class=\"row\">\n" +
    "        <!--\\\\\\\\\\\\\\ row  start \\\\\\\\\\\\-->\n" +
    "        <div class=\"col-md-12\">\n" +
    "            <!--red_border-->\n" +
    "            <!--green_border-->\n" +
    "            <!--orange_border-->\n" +
    "            <!--blue_border-->\n" +
    "            <section class=\"panel default blue_border vertical_border h1\">\n" +
    "                <div class=\"task-header blue_task\"><a ui-sref=\"surveys.selected_survey\">Citizen Journalism Survey</a><span><i class=\"fa fa-clock-o\"></i>7 hours ago</span> </div>\n" +
    "                <div class=\"row task_inner inner_padding\">\n" +
    "                    <div class=\"col-sm-9\">\n" +
    "                        <p><em>Description : &nbsp;</em>A Short survey to gather journalist feedback</p>\n" +
    "                        <p><em>Questions : &nbsp;</em>8 questions</p>\n" +
    "                        <p><em>Total Responses : &nbsp;</em>37 submissions</p>\n" +
    "                    </div>\n" +
    "                    <div class=\"col-sm-3\">\n" +
    "                        <!--<div class=\"pull-right\"><span>August  15, 2014</span></div>-->\n" +
    "                        <!--<div class=\"clearfix\"></div>-->\n" +
    "                        <!--<div class=\"pull-right\"><span>August  17, 2014</span></div>-->\n" +
    "                        <!--<div class=\"clearfix\"></div>-->\n" +
    "                        <!--<div class=\"pull-right\"><span>August  19, 2014</span></div>-->\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "                <div class=\"task-footer\">\n" +
    "                    <label class=\"pull-left\">\n" +
    "                        <div class=\"progress\">\n" +
    "                            <div class=\"progress-bar progress-bar-info\" role=\"progressbar\" aria-valuenow=\"40\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width: 60%;\">\n" +
    "                                <span class=\"sr-only\">40% Complete</span> </div>\n" +
    "                        </div>\n" +
    "                    </label>\n" +
    "                    <span class=\"label btn-primary\">40%</span>\n" +
    "                    <div class=\"pull-right\">\n" +
    "                        <ul class=\"footer-icons-group\">\n" +
    "                            <li><a href=\"\"><i class=\"fa fa-pencil\"></i></a></li>\n" +
    "                            <li><a href=\"\"><i class=\"fa fa-trash-o\"></i></a></li>\n" +
    "                            <li class=\"dropup\"><a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\"><i class=\"fa fa-wrench\"></i></a></li>\n" +
    "                        </ul>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </section>\n" +
    "            <section class=\"panel default blue_border vertical_border h1\">\n" +
    "                <div class=\"task-header blue_task\">Short Story Journalism<span><i class=\"fa fa-clock-o\"></i>4 hours ago</span> </div>\n" +
    "                <div class=\"row task_inner inner_padding\">\n" +
    "                    <div class=\"col-sm-9\">\n" +
    "                        <p><em>Description : &nbsp;</em>A survey on how journalist do their work</p>\n" +
    "                        <p><em>Questions : &nbsp;</em>5 questions</p>\n" +
    "                        <p><em>Total Responses : &nbsp;</em>17 submissions</p>\n" +
    "                    </div>\n" +
    "                    <div class=\"col-sm-3\">\n" +
    "                        <!--<div class=\"pull-right\"><span>August  15, 2014</span></div>-->\n" +
    "                        <!--<div class=\"clearfix\"></div>-->\n" +
    "                        <!--<div class=\"pull-right\"><span>August  17, 2014</span></div>-->\n" +
    "                        <!--<div class=\"clearfix\"></div>-->\n" +
    "                        <!--<div class=\"pull-right\"><span>August  19, 2014</span></div>-->\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "                <div class=\"task-footer\">\n" +
    "                    <label class=\"pull-left\">\n" +
    "                        <div class=\"progress\">\n" +
    "                            <div class=\"progress-bar progress-bar-success\" role=\"progressbar\" aria-valuenow=\"70\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width: 60%;\">\n" +
    "                                <span class=\"sr-only\">70% Complete</span> </div>\n" +
    "                        </div>\n" +
    "                    </label>\n" +
    "                    <span class=\"label btn-success\">70%</span>\n" +
    "                    <div class=\"pull-right\">\n" +
    "                        <ul class=\"footer-icons-group\">\n" +
    "                            <li><a href=\"\"><i class=\"fa fa-pencil\"></i></a></li>\n" +
    "                            <li><a href=\"\"><i class=\"fa fa-trash-o\"></i></a></li>\n" +
    "                            <li class=\"dropup\"><a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\"><i class=\"fa fa-wrench\"></i></a></li>\n" +
    "                        </ul>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </section>\n" +
    "            <div class=\"bs-callout bs-callout-warning \">\n" +
    "                <h4><i class=\"fa fa-warning\"></i>No Survey!</h4>\n" +
    "                <p>You currently do not have a survey on the system. <button class=\"btn btn-success\">Click to create a server</button> and start surveying.</p>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "    </div>\n" +
    "    <!--\\\\\\\\\\\\\\ row  end \\\\\\\\\\\\-->\n" +
    "</div>");
}]);
