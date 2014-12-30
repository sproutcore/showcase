// ==========================================================================
// Project:   Showcase
// Copyright: ©2012 7x7 Software, Inc.
// License:   Licensed under MIT license
// ==========================================================================
/*globals Showcase */
sc_require('views/views_item_view.js');


/**
  This list view is for Views & Controls examples.
*/
Showcase.ViewsListView = SC.ListView.extend({

    classNames: ['views-list-view'],

    customRowSizeIndexes: function() {
      var content = this.get('content'),
          customRowSizeIndexes = SC.IndexSet.create();

      for (var i = content.get('length') - 1; i >= 0; i--) {
        if (content.objectAt(i).get('isShowingSnippet')) {
          customRowSizeIndexes.add(i, 1);
        }
      }

      return customRowSizeIndexes;
    }.property(),

    exampleHeight: 120,

    exampleView: Showcase.ViewsItemView,

    rowSize: function() {
      var exampleHeight = this.get('exampleHeight');

      return exampleHeight + 120;
    }.property('exampleHeight').cacheable(),

    rowSpacing: 2,

    snippetHeight: 180,

    contentIndexesInRect: function(rect) {
      return null; // select all
    },

    contentIndexRowSize: function(view, content, contentIndex) {
      return this.get('rowSize') + 180;
    },

    createItemView: function(exampleClass, idx, attrs) {
      var length = this.get('length');
      attrs.isLastItem = idx + 1 == length;

      return exampleClass.create(attrs);
    },

    init: function() {
      sc_super();

      var content = this.content;
      for (var i = content.get('length') - 1; i >= 0; i--) {
        content.objectAt(i).addObserver('isShowingSnippet', this, this._sc_customRowSizeIndexesContentDidChange);
      }
    }

});
