// ==========================================================================
// Project:   Showcase
// Copyright: @2012 Tyler Keating
// ==========================================================================
/*globals Showcase */
sc_require('system/views_item_content.js');
sc_require('views/views_list_view.js');


/**
  This pre-configured view demonstrates SC.ToolbarView.
*/
Showcase.toolbarViews = SC.ScrollView.design({
  contentView: Showcase.ViewsListView.design({
    content: [
      Showcase.ViewsItemContent.create({
        title: 'Regular',
        example: "SC.View.extend({  childViews: ['toolbar1', 'toolbar2'],  classNames: ['my-view'],  layout: { left: 20, right: 20, top: 20, bottom: 20 },  toolbar1: SC.ToolbarView.extend({  childViews: ['title'],  layout: { height: 44 },  title: SC.LabelView.extend({  classNames: ['my-title-label'],  controlSize: SC.LARGE_CONTROL_SIZE,  layout: { width: 220, height: 24, centerX: 0, centerY: 0 },  value: 'Heading'  })  }),  toolbar2: SC.ToolbarView.extend({  anchorLocation:  SC.ANCHOR_BOTTOM,  childViews: ['title'],  layout: { height: 44 },  title: SC.LabelView.extend({  classNames: ['my-title-label'],  controlSize: SC.LARGE_CONTROL_SIZE,  layout: { width: 220, height: 24, centerX: 0, centerY: 0 },  value: 'Footing'  })  })  })"
      })
    ],
    exampleHeight: 500
  })
});
