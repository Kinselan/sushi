var CartItemsCollection = Backbone.Collection.extend({
  model: MenuItem,
  total: 0,
  $empty: $('#empty'),

  getTotal: function() {
    total = 0;

    this.each(function(item) {
      total = total + (item.get('price') * item.get('quantity'));
    });

    return total;
  },

  addItem: function(item) {
    var existing = this.get(item.get("data-id"));

    if (existing) {
      existing.set("quantity", existing.get("quantity") + 1);
    }
    else {
      existing = item.clone();
      existing.set("quantity", 1);
      this.add(existing);
    }

    this.trigger("cart_updated");
    App.$total.html("$" + this.total.toFixed(2));
  },

  emptyCart: function() {
    this.reset();
    this.trigger("cart_updated");
  },

  initialize: function() {
    this.on('empty_cart', this.emptyCart);
  }
});
