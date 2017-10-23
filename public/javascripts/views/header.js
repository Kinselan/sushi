var HeaderView = Backbone.View.extend({
  template: App.templates.header,
  el: $('header'),
  render: function() {

    total = this.collection.length;
    this.$el.html(this.template({ totalQuantity: total }));

  },
  initialize: function() {
    this.render();
    this.listenTo(this.collection, 'cart_updated reset', this.render);
  }
});
