var App = {
  templates: JST,
  $content: $("#content"),
  $total: $("#total"),

  createCart: function() {
    this.cart = new CartItemsCollection();

    new HeaderView({ collection: this.cart });
    new CartView  ({ collection: this.cart });
  },

  createMenu: function() {
    this.menu_items = new MenuItemsCollection(menu_items);
    this.menu = new MenuView({ collection: this.menu_items });
  },

  checkOut: function() {
    $("#cart").hide();
    this.checkout = new CheckOutView({ collection: this.cart });
  },

  renderMenu: function() {
    this.menu.render();
  },

  init: function() {
    this.createCart();
    this.createMenu();
    this.startListening();
  },

  cancelOrder: function() {
    this.cart.emptyCart();
    this.menu.remove();
    this.checkout.remove();
    this.menu = new MenuView({ collection: this.menu_items });
  },

  displayDetail: function(item) {
    this.itemDetail = new ItemDetail({model: item});
  },

  showPreviousDetail: function(id) {
    if (id === 1) { id = 20 }
    this.itemDetail.remove();
    model = this.menu_items.get(id - 1);
    this.itemDetail = new ItemDetail({model: model })
  },

  showNextDetail: function(id) {
    if (id === 19) { id = 0 }
    this.itemDetail.remove();
    model = this.menu_items.get(id + 1);
    this.itemDetail = new ItemDetail({model: model })
  },

  closeDetailView: function() {
    this.itemDetail.remove();
    this.menu = new MenuView({ collection: this.menu_items });
  },

  startListening: function() {
    _.extend(this, Backbone.Events);
    this.on('display_detail',       this.displayDetail);
    this.on('add_to_cart',          this.cart.addItem.bind(this.cart));
    this.on('check_out',            this.checkOut);
    this.on('cancel_order',         this.cancelOrder);
    this.on('show_previous_detail', this.showPreviousDetail);
    this.on('show_next_detail',     this.showNextDetail);
    this.on('close_detail_view',    this.closeDetailView);
  },

};

Handlebars.registerHelper("format_price", function(price) {
  return (+price).toFixed(2);
});

var menu_items = [{
  "data-id": 1,
  "img": "images/sashimi-salad.jpg",
  "name": "Sashimi salad",
  "price": 12,
  "desc": "Organic greens topped with fresh sashimi, wasabi soy vinaigrette."
}, {
  "data-id": 2,
  "img": "images/chirashi-sushi.jpg",
  "name": "Chirashi sushi",
  "price": 21,
  "desc": "Sushi bar variety with sushi rice."
}, {
  "data-id": 3,
  "img": "images/seaweed-salad.jpg",
  "name": "Seaweed salad",
  "price": 17,
  "desc": "A nice seaweed salad."
}, {
  "data-id": 4,
  "img": "images/edamame.jpg",
  "name": "Edamame",
  "price": 4,
  "desc": "Boiled soy beans with salt"
}, {
  "data-id": 5,
  "img": "images/miso-soup.jpg",
  "name": "Miso soup",
  "price": 4,
  "desc": "Soy bean soup with Wacame seaweed, tofu and spring onion."
}, {
  "data-id": 6,
  "img": "images/maguro.jpg",
  "name": "Maguro",
  "price": 12.50,
  "desc": "Tuna pieces"
}, {
  "data-id": 7,
  "img": "images/shake.jpg",
  "name": "Shake",
  "price": 10,
  "desc": ""
}, {
  "data-id": 8,
  "img": "images/shiromi.jpg",
  "name": "Shiromi",
  "price": 9.50,
  "desc": "White fish pieces"
}, {
  "data-id": 9,
  "img": "images/tekka-maki.jpg",
  "name": "Tekka maki",
  "price": 6,
  "desc": "tuna roll with wasabi. - 6 pieces"
}, {
  "data-id": 10,
  "img": "images/hosomaki-mix.jpg",
  "name": "Hosomaki Mix",
  "price": 17,
  "desc": "18 pieces."
}, {
  "data-id": 11,
  "img": "images/california-rolls.jpg",
  "name": "California rolls",
  "price": 7.75,
  "desc": "Crab sticks, avocado and cucumber. - 9 pieces"
}, {
  "data-id": 12,
  "img": "images/seattle-rolls.jpg",
  "name": "Seattle rolls",
  "price": 8,
  "desc": "Smoked salmon. Cucumber. Cream cheese."
}, {
  "data-id": 13,
  "img": "images/spicytuna-rolls.jpg",
  "name": "Spicy tuna rolls",
  "price": 6,
  "desc": "Spicy tuna, spring onion and avocado. - 6 pieces"
}, {
  "data-id": 14,
  "img": "images/ebi-rolls.jpg",
  "name": "Ebi rolls",
  "price": 8,
  "desc": "King prawns, avocado and asparagus. -8 pieces"
}, {
  "data-id": 15,
  "img": "images/chicken-teriyaki.jpg",
  "name": "Chicken teriyaki",
  "price": 12,
  "desc": "Sauted chicken with teiyaki sauce."
}, {
  "data-id": 16,
  "img": "images/salmon-teriyaki.jpg",
  "name": "Salmon Teriyaki",
  "price": 13.50,
  "desc": "Sauted samon with teriyaki sauce."
}, {
  "data-id": 17,
  "img": "images/gohan.jpg",
  "name": "Gohan",
  "price": 3,
  "desc": "Steamed rice"
}, {
  "data-id": 18,
  "img": "images/tori-katsu.jpg",
  "name": "Tori Katsu",
  "price": 11,
  "desc": "Pan fried chicken breast with yasai salad."
}, {
  "data-id": 19,
  "img": "images/yaki-udon.jpg",
  "name": "Yaki Udon",
  "price": 11.50,
  "desc": "Udon noddles with chicken, king pranws and vegetables."
}];
