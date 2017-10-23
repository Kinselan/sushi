var ItemDetail = Backbone.View.extend({
  template: App.templates.item_detail,
  model: MenuItem,
  id: "item_details",
  events: {
    "click footer a": "addToCart",
    "click a.close": "close",
    'click .prev': 'previous',
    'click .next': 'next'
  },
  addToCart: function(e) {
    e.preventDefault();
    console.log('item detail view registered request to add to cart');
    App.trigger('add_to_cart', this.model);
  },
  close: function(e) {
    e.preventDefault();
    console.log('item detail view registered request to close');
    App.trigger("close_detail_view");
  },
  render: function() {
    this.$el.html(this.template(this.model.toJSON()));
    App.$content.html(this.$el);
  },

  previous: function() {
    App.trigger("show_previous_detail", this.id);
  },

  next: function() {
    App.trigger("show_next_detail", this.id);
  },

  initialize: function() {
    this.id = this.model.get("data-id");
    this.render();
  },
});
