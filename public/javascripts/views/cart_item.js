var CartItemView = Backbone.View.extend({
  tagName: "li",
  template: App.templates.cart_item,

  render: function() {
    this.$el.html(this.template(this.model.toJSON()));
  },

  initialize: function() {
    this.render();
    this.listenTo(this.collection, 'cart_updated', this.render);
  }
});
