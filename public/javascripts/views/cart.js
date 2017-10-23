var CartView = Backbone.View.extend({
  el: "#cart",
  template: App.templates.cart,
  events: {
    "click #empty": "emptyCart",
    "click #checkout": "checkOut"
  },
  emptyCart: function(e) {
    e.preventDefault();
    this.collection.trigger('empty_cart');
  },

  checkOut: function(e) {
    console.log('cart has registered click to checkout');
    e.preventDefault();

    App.trigger('check_out');
  },

  setupVariables: function() {
    this.$cart = $("#cart");
  },

  render: function() {
    if (this.collection.length < 1) {
      $("#cart").slideUp();
    } else {
      $("#cart").slideDown();
    };
    this.$cart.html(this.template({ items: this.collection.toJSON(), total: this.collection.getTotal(), }));

  },

  initialize: function() {
    this.setupVariables();
    this.render();
    this.listenTo(this.collection, 'cart_updated', this.render); // can i just listen for changes?
  }
});
