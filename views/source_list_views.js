// ==========================================================================
// Project:   Showcase
// Copyright: ©2012 7x7 Software, Inc.
// License:   Licensed under MIT license
// ==========================================================================
/*globals Showcase */
sc_require('system/views_item_content.js');
sc_require('views/views_list_view.js');


/**
  This pre-configured view demonstrates SC.SourceListView.
*/
Showcase.sourceListViews = SC.ScrollView.design({
  contentView: Showcase.ViewsListView.design({
    content: [
      Showcase.ViewsItemContent.create({
        title: 'Regular',
        example: "SC.SourceListView.extend({  classNames: ['my-source-list-view'],  layout: { bottom: 20, left: 20, right: 20, top: 20 },  contentBinding: SC.Binding.oneWay('Showcase.sourceListTree'),  exampleView: SC.ListItemView.extend({  hasContentIcon: true,  contentIconKey: 'icon',  contentUnreadCountKey: 'count',  contentValueKey: 'name'  }),  groupExampleView: SC.ListItemView.extend({  contentValueKey: 'groupName'  })  })"
      })
    ],
    exampleHeight: 575
  })
});
