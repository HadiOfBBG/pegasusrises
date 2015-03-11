angular.module('templates.app', ['admin/profile.tpl.html', 'admin/settings.tpl.html', 'home/home.tpl.html', 'survey/dummy_analytics.tpl.html', 'survey/respondents.tpl.html', 'survey/selected_survey.tpl.html', 'survey/survey_list.tpl.html']);

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
    "    <div class=\"ticket_open_comment\">\n" +
    "        <div class=\"row\">\n" +
    "            <div class=\"col-sm-9\">\n" +
    "                <div class=\"btn-group\"><i class=\"fa fa-cog\"></i></div>\n" +
    "                <span>Local Storage</span>\n" +
    "\n" +
    "                <p>Reset and clear local storage to default.</p>\n" +
    "            </div>\n" +
    "            <div class=\"col-sm-3\">\n" +
    "                <button class=\"btn btn-default\" ng-click=\"clearStorage()\">Reset</button>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "\n" +
    "</div>");
}]);

angular.module("home/home.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("home/home.tpl.html",
    "<div class=\"white_bg\" ng-show=\"first_timer\">\n" +
    "    <h2 class=\"page-header text-center\">Welcome to Pegasusrises</h2>\n" +
    "    <div class=\"row\" style=\"padding-bottom: 50px\">\n" +
    "        <p class=\"h5 text-center\">Click the button below to create your first survey on Pegasusrises</p>\n" +
    "        <div class=\"text-center\" style=\"margin: 50px 0\" id=\"ngJoyRide_1_gdrive\">\n" +
    "\n" +
    "            <!--This button appears if you've not selected a file-->\n" +
    "            <button ng-hide=\"files.length\" data-effect=\"flipInX\" class=\"effect-button col-lg-offset-4 col-lg-4 btn-lg btn btn-primary\" lk-google-picker picker-files=\"files\">\n" +
    "               <i class=\"fa fa-dashboard\"></i>&nbsp;&nbsp;&nbsp;Get Started\n" +
    "            </button>\n" +
    "\n" +
    "            <!--This show when a file is selected.-->\n" +
    "            <button ng-show=\"files.length\" ng-click=\"processServer()\" data-effect=\"\"  class=\"effect-button col-lg-offset-4 col-lg-4 btn-lg btn btn-success\" >\n" +
    "               <i class=\"fa fa-upload\"></i>&nbsp;&nbsp;&nbsp;Create a server\n" +
    "            </button>\n" +
    "\n" +
    "        </div>\n" +
    "        <p ng-hide=\"files.length\" class=\"text-center col-lg-offset-4 col-lg-4 blue_text\"><em><i class=\"fa fa-warning\"></i>  This will open Google Drive</em></p>\n" +
    "        <p ng-show=\"files.length\" class=\"text-center col-lg-offset-4 col-lg-4 green_text\"><em><i class=\"fa fa-file\"></i>  Selected file : {{ files[files.length-1].name }}</em></p>\n" +
    "    </div>\n" +
    "\n" +
    "    <!--<div ng-show=\"files.length\" class=\"row\">-->\n" +
    "        <!--<p class=\"text-center col-lg-offset-4 col-lg-4 green_text\"><em><i class=\"fa fa-file\"></i>  Selected filename : {{ files[files.length-1].name }}</em></p>-->\n" +
    "        <!--<div  class=\"text-center\" style=\"padding-bottom: 30px\">-->\n" +
    "            <!--<button id=\"ngJoyRide_2_upload\" class=\"col-lg-offset-4 col-lg-4 btn-lg btn btn-warning\" ng-click=\"uploadSheet()\"><i class=\"fa fa-upload\"></i>&nbsp;&nbsp;&nbsp;Send selected file's details</button>-->\n" +
    "        <!--</div>-->\n" +
    "    <!--</div>-->\n" +
    "    <!--<div ng-show=\"files.length\" class=\"row\">-->\n" +
    "        <!--<div  class=\"text-center\" style=\"padding-bottom: 30px\">-->\n" +
    "            <!--<button class=\"col-lg-offset-4 col-lg-4 btn-lg btn btn-danger\" ng-click=\"tabletop()\"><i class=\"fa fa-upload\"></i>&nbsp;&nbsp;&nbsp;Send selected file contents as JSON</button>-->\n" +
    "        <!--</div>-->\n" +
    "    <!--</div>-->\n" +
    "</div>\n" +
    "<!--ng-hide - first_timer ||-->\n" +
    "<div class=\"container clear_both padding_fix\" ng-hide=\"true\">\n" +
    "    <!--\\\\\\\\\\\\\\ container  start \\\\\\\\\\\\-->\n" +
    "    <div class=\"row\">\n" +
    "        <div class=\"col-sm-3 col-sm-6\">\n" +
    "            <div class=\"information green_info\">\n" +
    "                <div class=\"information_inner\">\n" +
    "                    <div class=\"info green_symbols\"><i class=\"fa fa-users icon\"></i></div>\n" +
    "                    <span>TODAY SALES </span>\n" +
    "                    <h1 class=\"bolded\">12,254K</h1>\n" +
    "                    <div class=\"infoprogress_green\">\n" +
    "                        <div class=\"greenprogress\"></div>\n" +
    "                    </div>\n" +
    "                    <b class=\"\"><small>Better than yesterday ( 7,5% )</small></b>\n" +
    "                    <div id=\"work-progress1\" class=\"pull-right\"><canvas style=\"display: inline-block; vertical-align: top; width: 47px; height: 20px;\" width=\"47\" height=\"20\"></canvas></div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <div class=\"col-sm-3 col-sm-6\">\n" +
    "            <div class=\"information blue_info\">\n" +
    "                <div class=\"information_inner\">\n" +
    "                    <div class=\"info blue_symbols\"><i class=\"fa fa-shopping-cart icon\"></i></div>\n" +
    "                    <span>TODAY FEEDBACK</span>\n" +
    "                    <h1 class=\"bolded\">12,254K</h1>\n" +
    "                    <div class=\"infoprogress_blue\">\n" +
    "                        <div class=\"blueprogress\"></div>\n" +
    "                    </div>\n" +
    "                    <b class=\"\"><small>Better than yesterday ( 7,5% )</small></b>\n" +
    "                    <div id=\"work-progress2\" class=\"pull-right\"><canvas style=\"display: inline-block; vertical-align: top; width: 47px; height: 22px;\" width=\"47\" height=\"22\"></canvas></div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <div class=\"col-sm-3 col-sm-6\">\n" +
    "            <div class=\"information red_info\">\n" +
    "                <div class=\"information_inner\">\n" +
    "                    <div class=\"info red_symbols\"><i class=\"fa fa-comments icon\"></i></div>\n" +
    "                    <span>TODAY EARNINGS</span>\n" +
    "                    <h1 class=\"bolded\">12,254K</h1>\n" +
    "                    <div class=\"infoprogress_red\">\n" +
    "                        <div class=\"redprogress\"></div>\n" +
    "                    </div>\n" +
    "                    <b class=\"\"><small>Better than yesterday ( 7,5% )</small></b>\n" +
    "                    <div id=\"work-progress3\" class=\"pull-right\"><canvas style=\"display: inline-block; vertical-align: top; width: 47px; height: 22px;\" width=\"47\" height=\"22\"></canvas></div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <div class=\"col-sm-3 col-sm-6\">\n" +
    "            <div class=\"information gray_info\">\n" +
    "                <div class=\"information_inner\">\n" +
    "                    <div class=\"info gray_symbols\"><i class=\"fa fa-money icon\"></i></div>\n" +
    "                    <span>TODAY VISITS </span>\n" +
    "                    <h1 class=\"bolded\">12,254K</h1>\n" +
    "                    <div class=\"infoprogress_gray\">\n" +
    "                        <div class=\"grayprogress\"></div>\n" +
    "                    </div>\n" +
    "                    <b class=\"\"><small>Better than yesterday ( 7,5% )</small></b>\n" +
    "                    <div id=\"work-progress4\" class=\"pull-right\"><canvas style=\"display: inline-block; vertical-align: top; width: 47px; height: 22px;\" width=\"47\" height=\"22\"></canvas></div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <!--/row-->\n" +
    "\n" +
    "    <div class=\"row\">\n" +
    "        <div class=\"col-md-6\">\n" +
    "            <div class=\"block-web\">\n" +
    "                <h3 class=\"content-header\"> Quick Stats\n" +
    "                    <div data-toggle=\"buttons\" class=\"button-group pull-right\"> <a class=\"btn active border-gray right-margin\" href=\"javascript:;\"> <span class=\"button-content\">\n" +
    "\n" +
    "              Top this week </span> </a> <a class=\"btn border-gray right-margin\" href=\"javascript:;\"> <span class=\"button-content\">\n" +
    "\n" +
    "              Refering </span> </a> <a class=\"btn border-gray\" href=\"javascript:;\"> <span class=\"button-content\">\n" +
    "\n" +
    "              Others </span> </a>\n" +
    "                    </div><!--/button-group-->\n" +
    "                </h3>\n" +
    "                <div class=\"custom-bar-chart\">\n" +
    "                    <ul class=\"y-axis\">\n" +
    "                        <li><span>100</span></li>\n" +
    "                        <li><span>80</span></li>\n" +
    "                        <li><span>60</span></li>\n" +
    "                        <li><span>40</span></li>\n" +
    "                        <li><span>20</span></li>\n" +
    "                        <li><span>0</span></li>\n" +
    "                    </ul>\n" +
    "                    <div class=\"bar\">\n" +
    "                        <div data-placement=\"top\" data-toggle=\"tooltip\" data-original-title=\"30%\" class=\"value tooltips\" style=\"height: 30%;\"></div>\n" +
    "                        <div class=\"title\">Jan</div>\n" +
    "                    </div><!--/bar-->\n" +
    "                    <div class=\"bar\">\n" +
    "                        <div data-placement=\"top\" data-toggle=\"tooltip\" data-original-title=\"50%\" class=\"value tooltips bar-bg-color\" style=\"height: 50%;\"></div>\n" +
    "                        <div class=\"title\">Fab</div>\n" +
    "                    </div><!--/bar-->\n" +
    "                    <div class=\"bar \">\n" +
    "                        <div data-placement=\"top\" data-toggle=\"tooltip\" data-original-title=\"40%\" class=\"value tooltips\" style=\"height: 40%;\"></div>\n" +
    "                        <div class=\"title\">Mar</div>\n" +
    "                    </div><!--/bar-->\n" +
    "                    <div class=\"bar \">\n" +
    "                        <div data-placement=\"top\" data-toggle=\"tooltip\" data-original-title=\"80%\" class=\"value tooltips\" style=\"height: 80%;\"></div>\n" +
    "                        <div class=\"title\">Apr</div>\n" +
    "                    </div><!--/bar-->\n" +
    "                    <div class=\"bar\">\n" +
    "                        <div data-placement=\"top\" data-toggle=\"tooltip\" data-original-title=\"70%\" class=\"value tooltips bar-bg-color\" style=\"height: 70%;\"></div>\n" +
    "                        <div class=\"title\">May</div>\n" +
    "                    </div><!--/bar-->\n" +
    "                    <div class=\"bar \">\n" +
    "                        <div data-placement=\"top\" data-toggle=\"tooltip\" data-original-title=\"50%\" class=\"value tooltips\" style=\"height: 50%;\"></div>\n" +
    "                        <div class=\"title\">Jun</div>\n" +
    "                    </div><!--/bar-->\n" +
    "                    <div class=\"bar\">\n" +
    "                        <div data-placement=\"top\" data-toggle=\"tooltip\" data-original-title=\"40%\" class=\"value tooltips\" style=\"height: 40%;\"></div>\n" +
    "                        <div class=\"title\">Jul</div>\n" +
    "                    </div><!--/bar-->\n" +
    "                    <div class=\"bar\">\n" +
    "                        <div data-placement=\"top\" data-toggle=\"tooltip\" data-original-title=\"35%\" class=\"value tooltips\" style=\"height: 35%;\"></div>\n" +
    "                        <div class=\"title\">Aug</div>\n" +
    "                    </div><!--/bar-->\n" +
    "\n" +
    "                    <div class=\"bar \">\n" +
    "                        <div data-placement=\"top\" data-toggle=\"tooltip\" data-original-title=\"80%\" class=\"value tooltips\" style=\"height: 80%;\"></div>\n" +
    "                        <div class=\"title\">Sep</div>\n" +
    "                    </div><!--/bar-->\n" +
    "                    <div class=\"bar\">\n" +
    "                        <div data-placement=\"top\" data-toggle=\"tooltip\" data-original-title=\"70%\" class=\"value tooltips bar-bg-color\" style=\"height: 70%;\"></div>\n" +
    "                        <div class=\"title\">Oct</div>\n" +
    "                    </div><!--/bar-->\n" +
    "                    <div class=\"bar \">\n" +
    "                        <div data-placement=\"top\" data-toggle=\"tooltip\" data-original-title=\"50%\" class=\"value tooltips\" style=\"height: 50%;\"></div>\n" +
    "                        <div class=\"title\">Nov</div>\n" +
    "                    </div><!--/bar-->\n" +
    "                    <div class=\"bar\">\n" +
    "                        <div data-placement=\"top\" data-toggle=\"tooltip\" data-original-title=\"40%\" class=\"value tooltips\" style=\"height: 40%;\"></div>\n" +
    "                        <div class=\"title\">Dec</div>\n" +
    "                    </div><!--/bar-->\n" +
    "\n" +
    "\n" +
    "                </div>\n" +
    "                <!--/custom-bar-chart-->\n" +
    "            </div><!--/block-web-->\n" +
    "        </div><!--/col-md-6-->\n" +
    "        <div class=\"col-md-6\">\n" +
    "            <div class=\"panel panel-primary\">\n" +
    "                <div class=\"panel-heading\">\n" +
    "                    <h4>Jaguar 'E' Type vehicles in the UK</h4>\n" +
    "                </div>\n" +
    "                <div class=\"panel-body\">\n" +
    "                    <div class=\"graph\" id=\"hero-graph\" style=\"position: relative;\"><svg height=\"340\" version=\"1.1\" width=\"510\" xmlns=\"http://www.w3.org/2000/svg\" style=\"overflow: hidden; position: relative; left: -0.5px; top: -0.56665px;\"><desc>Created with Raphaël 2.0.1</desc><defs/><text style=\"text-anchor: end; font: 12px sans-serif;\" x=\"46.5\" y=\"301\" text-anchor=\"end\" font=\"10px &quot;Arial&quot;\" stroke=\"none\" fill=\"#888888\" font-size=\"12px\" font-family=\"sans-serif\" font-weight=\"normal\"><tspan dy=\"4\">0</tspan></text><path style=\"\" fill=\"none\" stroke=\"#aaaaaa\" d=\"M59,301H485\" stroke-width=\"0.5\"/><text style=\"text-anchor: end; font: 12px sans-serif;\" x=\"46.5\" y=\"232\" text-anchor=\"end\" font=\"10px &quot;Arial&quot;\" stroke=\"none\" fill=\"#888888\" font-size=\"12px\" font-family=\"sans-serif\" font-weight=\"normal\"><tspan dy=\"4\">1,000</tspan></text><path style=\"\" fill=\"none\" stroke=\"#aaaaaa\" d=\"M59,232H485\" stroke-width=\"0.5\"/><text style=\"text-anchor: end; font: 12px sans-serif;\" x=\"46.5\" y=\"163\" text-anchor=\"end\" font=\"10px &quot;Arial&quot;\" stroke=\"none\" fill=\"#888888\" font-size=\"12px\" font-family=\"sans-serif\" font-weight=\"normal\"><tspan dy=\"4\">2,000</tspan></text><path style=\"\" fill=\"none\" stroke=\"#aaaaaa\" d=\"M59,163H485\" stroke-width=\"0.5\"/><text style=\"text-anchor: end; font: 12px sans-serif;\" x=\"46.5\" y=\"93.99999999999997\" text-anchor=\"end\" font=\"10px &quot;Arial&quot;\" stroke=\"none\" fill=\"#888888\" font-size=\"12px\" font-family=\"sans-serif\" font-weight=\"normal\"><tspan dy=\"3.9999999999999716\">3,000</tspan></text><path style=\"\" fill=\"none\" stroke=\"#aaaaaa\" d=\"M59,93.99999999999997H485\" stroke-width=\"0.5\"/><text style=\"text-anchor: end; font: 12px sans-serif;\" x=\"46.5\" y=\"25\" text-anchor=\"end\" font=\"10px &quot;Arial&quot;\" stroke=\"none\" fill=\"#888888\" font-size=\"12px\" font-family=\"sans-serif\" font-weight=\"normal\"><tspan dy=\"4\">4,000</tspan></text><path style=\"\" fill=\"none\" stroke=\"#aaaaaa\" d=\"M59,25H485\" stroke-width=\"0.5\"/><text style=\"text-anchor: middle; font: 12px sans-serif;\" x=\"435.7131887537451\" y=\"313.5\" text-anchor=\"middle\" font=\"10px &quot;Arial&quot;\" stroke=\"none\" fill=\"#888888\" font-size=\"12px\" font-family=\"sans-serif\" font-weight=\"normal\" transform=\"matrix(1,0,0,1,0,7)\"><tspan dy=\"4\">2011</tspan></text><text style=\"text-anchor: middle; font: 12px sans-serif;\" x=\"361.6688624774301\" y=\"313.5\" text-anchor=\"middle\" font=\"10px &quot;Arial&quot;\" stroke=\"none\" fill=\"#888888\" font-size=\"12px\" font-family=\"sans-serif\" font-weight=\"normal\" transform=\"matrix(1,0,0,1,0,7)\"><tspan dy=\"4\">2010</tspan></text><text style=\"text-anchor: middle; font: 12px sans-serif;\" x=\"287.6245362011151\" y=\"313.5\" text-anchor=\"middle\" font=\"10px &quot;Arial&quot;\" stroke=\"none\" fill=\"#888888\" font-size=\"12px\" font-family=\"sans-serif\" font-weight=\"normal\" transform=\"matrix(1,0,0,1,0,7)\"><tspan dy=\"4\">2009</tspan></text><text style=\"text-anchor: middle; font: 12px sans-serif;\" x=\"213.37734875691976\" y=\"313.5\" text-anchor=\"middle\" font=\"10px &quot;Arial&quot;\" stroke=\"none\" fill=\"#888888\" font-size=\"12px\" font-family=\"sans-serif\" font-weight=\"normal\" transform=\"matrix(1,0,0,1,0,7)\"><tspan dy=\"4\">2008</tspan></text><text style=\"text-anchor: middle; font: 12px sans-serif;\" x=\"139.33302248060477\" y=\"313.5\" text-anchor=\"middle\" font=\"10px &quot;Arial&quot;\" stroke=\"none\" fill=\"#888888\" font-size=\"12px\" font-family=\"sans-serif\" font-weight=\"normal\" transform=\"matrix(1,0,0,1,0,7)\"><tspan dy=\"4\">2007</tspan></text><text style=\"text-anchor: middle; font: 12px sans-serif;\" x=\"65.28869620428976\" y=\"313.5\" text-anchor=\"middle\" font=\"10px &quot;Arial&quot;\" stroke=\"none\" fill=\"#888888\" font-size=\"12px\" font-family=\"sans-serif\" font-weight=\"normal\" transform=\"matrix(1,0,0,1,0,7)\"><tspan dy=\"4\">2006</tspan></text><path style=\"\" fill=\"none\" stroke=\"#f06060\" d=\"M207.08865255263,258.22C225.65044941367884,257.16775,262.7740431357765,254.4946607387141,281.3358399968253,254.011C299.84692156590404,253.52866073871408,336.8690847040616,254.18349999999998,355.38016627314033,254.356C373.89124784221906,254.5285,410.9134109803766,254.5884010989011,429.42449254945535,255.391C433.9888688267624,255.5889010989011,443.1176213813766,258.0849704602702,447.68199765868366,258.358C452.3456913827655,258.6369704602702,461.67307883092917,257.96116795016985,466.336772555011,257.599C471.00257941625824,257.2366679501699,480.33419313875277,255.99474999999998,485,255.45999999999998\" stroke-width=\"3\"/><path style=\"\" fill=\"none\" stroke=\"#8d5cbe\" d=\"M59,74.05899999999997C77.51108156907875,74.81799999999997,114.53324470723626,76.55162499999997,133.04432627631502,77.09499999999997C151.55540784539377,77.63837499999997,188.57757098355125,77.63081190150477,207.08865255263,78.40599999999998C225.65044941367884,79.18331190150477,262.7740431357765,82.8299760601915,281.3358399968253,83.30499999999998C299.84692156590404,83.7787260601915,336.8690847040616,82.985875,355.38016627314033,82.201C373.89124784221906,81.416125,410.9134109803766,78.38211538461536,429.42449254945535,77.02599999999998C433.9888688267624,76.69161538461536,443.1176213813766,76.33487817723837,447.68199765868366,75.439C452.3456913827655,74.52362817723836,461.67307883092917,70.970980407701,466.336772555011,69.78099999999998C471.00257941625824,68.590480407701,480.33419313875277,66.88299999999997,485,65.91699999999997\" stroke-width=\"3\"/><circle cx=\"207.08865255263\" cy=\"258.22\" r=\"4\" fill=\"#f06060\" stroke=\"#ffffff\" style=\"\" stroke-width=\"1\"/><circle cx=\"281.3358399968253\" cy=\"254.011\" r=\"4\" fill=\"#f06060\" stroke=\"#ffffff\" style=\"\" stroke-width=\"1\"/><circle cx=\"355.38016627314033\" cy=\"254.356\" r=\"4\" fill=\"#f06060\" stroke=\"#ffffff\" style=\"\" stroke-width=\"1\"/><circle cx=\"429.42449254945535\" cy=\"255.391\" r=\"4\" fill=\"#f06060\" stroke=\"#ffffff\" style=\"\" stroke-width=\"1\"/><circle cx=\"447.68199765868366\" cy=\"258.358\" r=\"4\" fill=\"#f06060\" stroke=\"#ffffff\" style=\"\" stroke-width=\"1\"/><circle cx=\"466.336772555011\" cy=\"257.599\" r=\"4\" fill=\"#f06060\" stroke=\"#ffffff\" style=\"\" stroke-width=\"1\"/><circle cx=\"485\" cy=\"255.45999999999998\" r=\"7\" fill=\"#f06060\" stroke=\"#ffffff\" style=\"\" stroke-width=\"1\"/><circle cx=\"59\" cy=\"74.05899999999997\" r=\"4\" fill=\"#8d5cbe\" stroke=\"#ffffff\" style=\"\" stroke-width=\"1\"/><circle cx=\"133.04432627631502\" cy=\"77.09499999999997\" r=\"4\" fill=\"#8d5cbe\" stroke=\"#ffffff\" style=\"\" stroke-width=\"1\"/><circle cx=\"207.08865255263\" cy=\"78.40599999999998\" r=\"4\" fill=\"#8d5cbe\" stroke=\"#ffffff\" style=\"\" stroke-width=\"1\"/><circle cx=\"281.3358399968253\" cy=\"83.30499999999998\" r=\"4\" fill=\"#8d5cbe\" stroke=\"#ffffff\" style=\"\" stroke-width=\"1\"/><circle cx=\"355.38016627314033\" cy=\"82.201\" r=\"4\" fill=\"#8d5cbe\" stroke=\"#ffffff\" style=\"\" stroke-width=\"1\"/><circle cx=\"429.42449254945535\" cy=\"77.02599999999998\" r=\"4\" fill=\"#8d5cbe\" stroke=\"#ffffff\" style=\"\" stroke-width=\"1\"/><circle cx=\"447.68199765868366\" cy=\"75.439\" r=\"4\" fill=\"#8d5cbe\" stroke=\"#ffffff\" style=\"\" stroke-width=\"1\"/><circle cx=\"466.336772555011\" cy=\"69.78099999999998\" r=\"4\" fill=\"#8d5cbe\" stroke=\"#ffffff\" style=\"\" stroke-width=\"1\"/><circle cx=\"485\" cy=\"65.91699999999997\" r=\"7\" fill=\"#8d5cbe\" stroke=\"#ffffff\" style=\"\" stroke-width=\"1\"/></svg><div class=\"morris-hover morris-default-style\" style=\"left: 404px; top: 75px;\"><div class=\"morris-hover-row-label\">2011 Q3</div><div style=\"color: #8d5cbe\" class=\"morris-hover-point\">\n" +
    "                        Licensed:\n" +
    "                        3,407\n" +
    "                    </div><div style=\"color: #f06060\" class=\"morris-hover-point\">\n" +
    "                        Off the road:\n" +
    "                        660\n" +
    "                    </div></div></div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "\n" +
    "\n" +
    "\n" +
    "</div>\n" +
    "\n" +
    "\n" +
    "<p ng-hide=\"first_timer\" class=\"text-center h2\" style=\"margin-top: 50px\">Click the button go to the survey list page</p>\n" +
    "<p ng-hide=\"first_timer\" class=\"text-center\" style=\"margin-top: 10px\"><span ng-click=\"$state.go('surveys')\"  class=\"btn btn-primary btn-lg\"><i class=\"fa fa-list\"></i>    Survey List </span></p>\n" +
    "\n" +
    "\n" +
    "<div class=\"btn btn-warning\" ng-show=\"files.length\" ng-click=\"getFile()\"> Get file from Google </div>\n" +
    "\n" +
    "<div class=\"btn btn-info\" ng-click=\"dataFromAggregate()\"> Test Json Data </div>\n" +
    "\n" +
    "<div><pre>{{ returnedDataSingle | json }}</pre></div>\n" +
    "\n" +
    "<div><pre>{{ returnedData | json }}</pre></div>\n" +
    "\n" +
    "<!--<div ng-joy-ride=\"startJoyRide\" config=\"configJoyRide\" on-finish=\"onFinish()\"  on-skip=\"onFinish()\"></div>-->\n" +
    "\n" +
    "");
}]);

angular.module("survey/dummy_analytics.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("survey/dummy_analytics.tpl.html",
    "<div class=\"row\">\n" +
    "\n" +
    "    <div class=\"col-lg-12 center\">\n" +
    "        <section class=\"panel default blue_title h2\">\n" +
    "            <div class=\"panel-heading border\">{{ surveyName || ' '}}</div>\n" +
    "        </section>\n" +
    "    </div>\n" +
    "    <div class=\"col-lg-12\" ng-init=\"showButtons = false\" ng-show=\"showButtons\">\n" +
    "        <div class=\"btn-group\">\n" +
    "            <button class=\"btn btn-primary\" ng-class=\"{'active' :   $scope.chartObject.type == 'BarChart' }\" ng-click=\"changeChartType('BarChart')\"> BarChart</button>\n" +
    "            <button class=\"btn btn-warning\" ng-class=\"{'active' :   $scope.chartObject.type == 'PieChart' }\" ng-click=\"changeChartType('PieChart')\">PieChart</button>\n" +
    "            <button class=\"btn btn-success\" ng-class=\"{'active' :   $scope.chartObject.type == 'ColumnChart' }\" ng-click=\"changeChartType('ColumnChart')\">ColumnChart</button>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <tabset>\n" +
    "        <tab heading=\"Google Map with Markers\" select=\"toggleButtons(false)\">\n" +
    "            <ui-gmap-google-map center='map.center' zoom='map.zoom'>\n" +
    "\n" +
    "                <ui-gmap-markers\n" +
    "                        models=\"markers\"\n" +
    "                        idkey=\"'id'\"\n" +
    "                        coords=\"'points'\">\n" +
    "                </ui-gmap-markers>\n" +
    "\n" +
    "            </ui-gmap-google-map>\n" +
    "        </tab>\n" +
    "        <!--<tab ng-repeat=\"tab in tabs\" heading=\"{{tab.title}}\" active=\"tab.active\" disabled=\"tab.disabled\">-->\n" +
    "        <!--{{tab.content}}-->\n" +
    "        <!--</tab>-->\n" +
    "        <tab select=\"toggleButtons(true)\">\n" +
    "            <tab-heading>\n" +
    "                <i class=\"glyphicon glyphicon-bell\"></i> Google Charts\n" +
    "            </tab-heading>\n" +
    "            <div google-chart chart=\"chartObject\" style=\"height:600px; width:100%;\"></div>\n" +
    "        </tab>\n" +
    "    </tabset>\n" +
    "\n" +
    "\n" +
    "</div>\n" +
    "\n" +
    "");
}]);

angular.module("survey/respondents.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("survey/respondents.tpl.html",
    "<div class=\"col-sm-12\">\n" +
    "    <div class=\"block-web\">\n" +
    "        <div class=\"header\">\n" +
    "            <div class=\"actions hidden\">\n" +
    "                <a href=\"#\" class=\"minimize\"><i class=\"fa fa-chevron-down\"></i></a>\n" +
    "                <a href=\"#\" class=\"close-down\"><i class=\"fa fa-times\"></i></a> </div>\n" +
    "            <h3 class=\"content-header\">Survey Respondents</h3>\n" +
    "        </div>\n" +
    "        <div class=\"porlets-content\">\n" +
    "            <form role=\"form\" class=\"form-horizontal\" ng-submit=\"sendEmail()\">\n" +
    "                <div class=\"form-group\">\n" +
    "                    <label class=\"col-sm-2 control-label \" for=\"from\">From</label>\n" +
    "                    <div class=\"col-sm-9\">\n" +
    "                        <input type=\"email\" ng-disabled=\"true\" ng-model=\"respondent_form.from\" id=\"from\" class=\" form-control\" >\n" +
    "                    </div>\n" +
    "                </div><!--/form-group-->\n" +
    "                <div class=\"form-group\">\n" +
    "                    <label class=\"col-sm-2 control-label\">Survey</label>\n" +
    "                    <div class=\"col-sm-9\">\n" +
    "                        <select id=\"source\" data-ng-model=\"respondent_form.survey\" class=\" form-control\">\n" +
    "                                <option value=\"\">Select a survey</option>\n" +
    "                                <option value=\"{{ surveyName}}\">{{surveyName}}</option>\n" +
    "                        </select>\n" +
    "                    </div><!--/col-sm-9-->\n" +
    "                </div><!--/form-group-->\n" +
    "                <div class=\"form-group\">\n" +
    "                    <label class=\"col-sm-2 control-label\" for=\"emails\">Recipients</label>\n" +
    "                    <div class=\"col-sm-9\">\n" +
    "                        <tags-input\n" +
    "                                ng-model=\"respondent_form.emails\"\n" +
    "                                displayProperty=\"email\"\n" +
    "                                type=\"email\"\n" +
    "                                placeholder=\"Add recipient email\"\n" +
    "                                add-on-enter=\"true\"\n" +
    "                                add-on-space=\"true\"\n" +
    "                                add-on-comma=\"true\"\n" +
    "                                add-on-blur=\"true\"\n" +
    "                                add-on-paste=\"true\"\n" +
    "                                allowed-tags-pattern=\"^([\\w\\-\\.]+)@((\\[([0-9]{1,3}\\.){3}[0-9]{1,3}\\])|(([\\w\\-]+\\.)+)([a-zA-Z]{2,4}))$\"\n" +
    "                                id=\"emails\" class=\"\"></tags-input>\n" +
    "                    </div>\n" +
    "                </div><!--/form-group-->\n" +
    "\n" +
    "\n" +
    "                <div class=\"form-group\">\n" +
    "                    <div class=\"col-sm-offset-2 col-sm-10\">\n" +
    "                        <button class=\"btn btn-primary\" type=\"submit\">Send</button>\n" +
    "                        <button class=\"btn btn-default\" type=\"reset\">Cancel</button>\n" +
    "                    </div>\n" +
    "                </div><!--/form-group-->\n" +
    "            </form>\n" +
    "        </div><!--/porlets-content-->\n" +
    "    </div><!--/block-web-->\n" +
    "</div>");
}]);

angular.module("survey/selected_survey.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("survey/selected_survey.tpl.html",
    "<div class=\"row\">\n" +
    "\n" +
    "    <div class=\"col-lg-12 center\">\n" +
    "        <section class=\"panel default blue_title h2\">\n" +
    "            <div class=\"panel-heading border\">{{ surveyName || ' '}}</div>\n" +
    "        </section>\n" +
    "    </div>\n" +
    "\n" +
    "    <div class=\"col-md-6\">\n" +
    "        <div class=\"widget_inbox\">\n" +
    "            <ul>\n" +
    "                <li>\n" +
    "                    <a class=\"inbox_blue text-white-important widget_inbox_heading_left\" href=\"\">Survey Questions <span class=\"small\">&nbsp;&nbsp;(<em> {{surveyData.questions_details.length  }} </em>)</span>\n" +
    "                        <span class=\"pull-right\" ng-click=\"$state.go('surveys.analytics')\"><i class=\"fa fa-cog\"></i></span>\n" +
    "                    </a>\n" +
    "                </li>\n" +
    "                <li ng-repeat=\"question_item in surveyData.questions_details\"> <a href=\"\" ng-class=\"{'active' : question_item.question_field == selected_question.question_field}\" ng-click=\"selectQuestion(question_item)\">\n" +
    "                    <div class=\"widget_inbox_header\">\n" +
    "                        <span class=\"pull-left widget_inbox_time\"><b>{{ $index + 1 }}</b></span>\n" +
    "                        <span class=\"pull-right widget_inbox_time\" open-closed=\"\" type=\"{{ question_item.question_type }}\"></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Question\n" +
    "                    </div>\n" +
    "                    {{ question_item.question }}</a></li>\n" +
    "\n" +
    "            </ul>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "\n" +
    "    <div class=\"col-md-6\">\n" +
    "        <div class=\"widget_inbox\">\n" +
    "            <pre>{{ surveyData | json }}</pre>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "\n" +
    "</div>\n" +
    "\n" +
    "");
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
    "            <section class=\"panel default blue_border vertical_border h1\" ng-show=\"surveyData.questions_details.length\">\n" +
    "                <div class=\"task-header blue_task\"><a ui-sref=\"surveys.selected_survey\">{{ surveyName }}</a><span><i class=\"fa fa-clock-o\"></i>7 hours ago</span> </div>\n" +
    "                <div class=\"row task_inner inner_padding\">\n" +
    "                    <div class=\"col-sm-9\">\n" +
    "                        <p><em>Description : &nbsp;</em>A Short survey to gather journalist feedback</p>\n" +
    "                        <p><em>Questions : &nbsp;</em>{{ surveyData.questions_details.length}} questions</p>\n" +
    "                        <p><em>Total Responses : &nbsp;</em>{{ surveyData.survey_submissions.length }} submissions</p>\n" +
    "                    </div>\n" +
    "                    <div class=\"col-sm-3\">\n" +
    "                        <!--<div class=\"pull-right\"><span>August  15, 2014</span></div>-->\n" +
    "                        <!--<div class=\"clearfix\"></div>-->\n" +
    "                        <!--<div class=\"pull-right\"><span>August  17, 2014</span></div>-->\n" +
    "                        <!--<div class=\"clearfix\"></div>-->\n" +
    "                        <!--<div class=\"pull-right\"><span>August  19, 2014</span></div>-->\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "                <div class=\"task-footer hidden\">\n" +
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
    "            <div class=\"bs-callout bs-callout-warning\" ng-hide=\"surveyData.questions_details.length\">\n" +
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
