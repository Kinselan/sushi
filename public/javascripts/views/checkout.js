var CheckOutView = Backbone.View.extend({
  template: App.templates.checkout,
  id: "checkout",
  events: {
    'click #cancel': 'cancelOrder',
    'submit': 'placeOrder',
    'click i': 'changeQuantity'
  },

  cancelOrder: function(e) {
    e.preventDefault();
    App.trigger('cancel_order');
  },

  placeOrder: function(e) {
    e.preventDefault();
    console.log("Whoops! You've reached the end of the front-end course.");
  },

  changeQuantity: function(e) {
    var item = this.collection.get($(e.currentTarget).closest('tr').data('id'));
    var quantity;

    if ($(e.currentTarget).hasClass('fa-minus')) {
      quantity = item.get('quantity') - 1;
      if (quantity < 0) { quantity = 0; }
    } else {
      quantity = item.get('quantity') + 1;
    }

    item.set("quantity", quantity);
    this.render();
  },

  render: function() {
    this.$el.html(this.template( {items: this.collection.toJSON(), total: this.collection.getTotal() }));
    App.$content.html(this.$el);
  },

  initialize: function() {
    console.log('hey checkout douche, waht is your collection?' + this.collection.toJSON());
    this.render();
  }
});
