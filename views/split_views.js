// ==========================================================================
// Project:   Showcase
// Copyright: ©2012 7x7 Software, Inc.
// License:   Licensed under MIT license
// ==========================================================================
/*globals Showcase */
sc_require('system/views_item_content.js');
sc_require('views/views_list_view.js');


/**
  This pre-configured view demonstrates SC.SplitView.
*/
Showcase.splitViews = SC.ScrollView.design({
  contentView: Showcase.ViewsListView.design({
    content: [
      Showcase.ViewsItemContent.create({
        title: 'Regular',
        example: "SC.SplitView.extend({  layout: { top: 20, bottom: 20, left: 20, right: 20 },  topLeftView: SC.LabelView.design({  value: 'Left View'  }),  bottomRightView: SC.LabelView.design({  value: 'Right View'  })  })"
      })
    ]
  })
});
