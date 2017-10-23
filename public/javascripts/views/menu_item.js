var MenuItemView = Backbone.View.extend({
  tagName: 'li',
  template: App.templates.menu_item,
  $el: $('#cart'),
  events: {
    "click header": "displayDetail",
    "click footer a": "addToCart"
  },
  addToCart: function(e) {
    e.preventDefault();
    App.trigger('add_to_cart', this.model);
  },
  displayDetail: function(e) {
    e.preventDefault();
    App.trigger('display_detail', this.model);
  },

  render: function() {
    this.$el.html(this.template(this.model.toJSON()));
  },

  initialize: function() {
    this.id = this.model.get("data-id");
    this.render();
  }
});
