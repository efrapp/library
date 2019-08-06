/* eslint-disable */
(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['book'] = template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "  <div class=\"col s12 m3\">\n    <div class=\"card\">\n      <div class=\"card-image\">\n        <img class=\"book-cover\" src=\""
    + alias4(((helper = (helper = helpers.cover || (depth0 != null ? depth0.cover : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cover","hash":{},"data":data}) : helper)))
    + "\">\n        <div class=\"book-menu-container\">\n          <div class=\"fixed-action-btn book-menu-btn horizontal direction-top\">\n              <a class=\"btn-floating btn-large red\">\n                <i class=\"large material-icons\">menu</i>\n              </a>\n              <ul>\n                <li>\n                  <a class=\"btn-floating red remove-book\">\n                    <i class=\"material-icons\" value=\""
    + alias4(((helper = (helper = helpers.index || (data && data.index)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"index","hash":{},"data":data}) : helper)))
    + "\">delete</i>\n                  </a>\n                </li>\n                <li>\n                    <a class=\"btn-floating blue tooltipped update-read\" data-position=\"top\" data-tooltip=\"Read?\">\n                      <i class=\"material-icons\" value=\""
    + alias4(((helper = (helper = helpers.index || (data && data.index)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"index","hash":{},"data":data}) : helper)))
    + "\">\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.read : depth0),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.program(4, data, 0),"data":data})) != null ? stack1 : "")
    + "                      </i>\n                    </a>\n                  </li>\n              </ul>\n          </div> \n        </div>                 \n      </div>\n      <div class=\"card-content\">\n        <span class=\"card-title activator grey-text text-darken-4\">"
    + alias4((helpers.truncate || (depth0 && depth0.truncate) || alias2).call(alias1,(depth0 != null ? depth0.title : depth0),10,{"name":"truncate","hash":{},"data":data}))
    + "<i class=\"material-icons right\">more_vert</i></span>\n      </div>\n      <div class=\"card-reveal\">\n          <span class=\"card-title grey-text text-darken-4\">"
    + alias4(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data}) : helper)))
    + "<i class=\"material-icons right\">close</i></span>\n          <p><b> Author </b></p>\n          <p>"
    + alias4(((helper = (helper = helpers.author || (depth0 != null ? depth0.author : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"author","hash":{},"data":data}) : helper)))
    + "</p>\n          <p><b> Pages </b></p>\n          <p>"
    + alias4(((helper = (helper = helpers.pages || (depth0 != null ? depth0.pages : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"pages","hash":{},"data":data}) : helper)))
    + "</p>\n          <p><b> Read? </b></p>\n          <p>\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.read : depth0),{"name":"if","hash":{},"fn":container.program(6, data, 0),"inverse":container.program(8, data, 0),"data":data})) != null ? stack1 : "")
    + "          </p>\n      </div>\n    </div>\n  </div>\n";
},"2":function(container,depth0,helpers,partials,data) {
    return "                          check_box\n";
},"4":function(container,depth0,helpers,partials,data) {
    return "                          check_box_outline_blank\n";
},"6":function(container,depth0,helpers,partials,data) {
    return "              Yes\n";
},"8":function(container,depth0,helpers,partials,data) {
    return "              No\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.books : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"useData":true});
})();