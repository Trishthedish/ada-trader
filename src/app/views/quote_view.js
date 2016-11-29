// quote_view.js
// View for an individual quote.
// similar to task_view.js
var QuoteView = Backbone.View.extend({
  initialize: function(options) {
    this.quote = options.quote;
    this.template = options.template;
  },

  render: function() {
    var html = this.template(this.quote);
    this.$el.html(html);

    // Enable chained calls

    return this;
  },

  events: {
     'click .btn-buy': 'buyStock',
     'click .btn-sell': 'sellStock'
   },

   buyStock: function() {
    this.quote.price += 1.00;
    this.render();
  },

  sellStock: function() {
    this.quote.price -= 1.00;
    this.render();
  }






});


export default QuoteView;
