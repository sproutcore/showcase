// ==========================================================================
// Project:   Showcase
// Copyright: ©2012 7x7 Software, Inc.
// License:   Licensed under MIT license
// ==========================================================================
/*globals Showcase */
sc_require('system/views_item_content.js');
sc_require('views/views_list_view.js');


/**
  This pre-configured view demonstrates SC.StackedView.
*/
Showcase.stackedViews = SC.ScrollView.design({
  contentView: Showcase.ViewsListView.design({
    content: [
      Showcase.ViewsItemContent.create({
        title: 'Regular',
        example: "SC.ScrollView.extend({  classNames: ['my-scroll-view'],  layout: { left: 20, right: 20, top: 20, bottom: 20 },  contentView:  SC.StackedView.extend({  classNames: ['my-stacked-view'],  content: ['These rows have statically laid out content with random heights.  Selecting a row causes the row to re-render and change its height.',1,2,3,4,5,6],  exampleView: SC.View.extend({  displayProperties: ['isSelected'],  useStaticLayout: true,  render: function(context) {  context.setClass('sel', this.get('isSelected'));  context.push('<div style=\"height: ' + (20 + Math.round((Math.random() * 100))) + 'px;\">' + this.get('content') + '</div>');  }  }),  selectionDidChange: function() {  this.updateHeight(false);  }.observes('selection')  })  })"
      })
    ],
    exampleHeight: 420
  })
});
