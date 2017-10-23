var MenuView = Backbone.View.extend({
  tagName: "ul",
  id: "items",
  render: function() {
    console.log('about to render menu');

    var self = this;
    this.collection.each(function(model) {
      var item = new MenuItemView({ model: model });
      self.$el.append(item.el);
    });

    App.$content.html(this.$el);
  },
  initialize: function() {
    this.render();
  }
});
