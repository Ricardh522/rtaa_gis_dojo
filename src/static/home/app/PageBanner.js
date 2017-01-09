define([
  "dojo/_base/declare",
  "dojo/_base/lang",
  "dojo/dom-construct",
  "dojo/dom-style",
  "dojo/_base/array",
  "dijit/_WidgetBase",
  "dijit/_OnDijitClickMixin",
  "dijit/_TemplatedMixin",
  "dojo/text!./templates/PageBanner_template.html"
], function(
  declare,
  lang,
  domConstruct,
  domStyle,
  Array,
  _WidgetBase,
  _OnDijitClickMixin,
  _TemplatedMixin,
  template
) {
  return declare([_WidgetBase, _OnDijitClickMixin, _TemplatedMixin], {
    templateString: template,
    options: {
      title: null,
      routes: []
    },
    constructor: function(options) {
      this.inherited(arguments);
      declare.safeMixin(this.options, options);
      this.set("title", this.options.title);
      this.set("subtitle", this.options.subtitle);
      this.set("routes", this.options.routes);
    },
    postCreate: function() {
      var routes = this.routes;
      var targetNode = this.routeNode;
      if (routes.length >= 1) {
        Array.forEach(routes, function(e) {
          var string = "<a class='sub-nav-link' href="+e.href+">"+e.title+"</a>";
          domConstruct.place(string, targetNode, 'last');
        });
      }
    }
  });
});
