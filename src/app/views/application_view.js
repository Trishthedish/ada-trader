// application_view.js
// equivalent of task_list_view.js

import $ from 'jquery';
import Backbone from 'backbone';
import _ from 'underscore';

import QuoteView from 'app/views/quote_view';

const ApplicationView = Backbone.View.extend({
  initialize: function(options) {
    // Store a the full list of quotes
    this.quoteData = options.quoteData;

    // Compile a template to be shared between the individual quotes
    this.quoteTemplate = _.template($('#tmpl-quote-view').html());

    // Keep track of the <ul> element
    // almost got this wrong w/ using application
    this.listElement = this.$('.quotes');

    // Create a QuoteView for each task
      this.cardList = [];
      this.cardList = [];
   this.quoteData.forEach(function(quote) {
     var card = new QuoteView({
       quote: quote,
       template: this.quoteTemplate
     });
     this.cardList.push(card);
   }, this); // bind `this` so it's available inside forEach


    // this.input = {
    //   title: this.$('.new-quote input[name="title"]'),
    //   description: this.$('new-quote input[name="description"]')
    // };

  },

  render: function() {
    // we loop through the list of TaskViews, render each one and append the result to our DOM object.
    this.listElement.empty();

    // loop through the data assigned to this view.
    this.cardList.forEach(function(card){
      card.render();
      // Add that HTML to our task list
      // referencing jquery object above.
      this.listElement.append(card.$el);
    }, this);

    return this;
  },

});

export default ApplicationView;
