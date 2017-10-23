var MenuItemsCollection = Backbone.Collection.extend({
  model: MenuItem,
  emptyCart: function() {
    console.log('collection has registered request to empty teh cart');
  },
  initialize: function() {
    this.each(function(item) {
      item.quantity = 0;
    });
    this.on('empty_cart', this.emptyCart);
  }
});
