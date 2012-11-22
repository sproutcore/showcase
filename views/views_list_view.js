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

    customRowHeightIndexes: function() {
      var content = this.get('content'),
          customRowHeightIndexes = SC.IndexSet.create();

      for (var i = content.get('length') - 1; i >= 0; i--) {
        if (content.objectAt(i).get('isShowingSnippet')) {
          customRowHeightIndexes.add(i, 1);
        }
      }

      return customRowHeightIndexes;
    }.property().idempotent(),

    exampleHeight: 120,

    exampleView: Showcase.ViewsItemView,

    itemHeight: function() {
      var exampleHeight = this.get('exampleHeight');

      return exampleHeight + 120;
    }.property('exampleHeight').cacheable(),

    rowSpacing: 2,

    snippetHeight: 180,

    contentIndexesInRect: function(rect) {
      return null; // select all
    },

    contentIndexRowHeight: function(view, content, contentIndex) {
      return this.get('rowHeight') + 180;
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
        content.objectAt(i).addObserver('isShowingSnippet', this, this._sclv_customRowHeightIndexesDidChange);
      }
    }

});
