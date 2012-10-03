// ==========================================================================
// Project:   Showcase
// Copyright: ©2012 7x7 Software, Inc.
// License:   Licensed under MIT license
// ==========================================================================
/*globals Showcase */
sc_require('system/views_item_content.js');
sc_require('views/views_list_view.js');


/**
  This pre-configured view demonstrates SC.DisclosureView.
*/
Showcase.disclosureViews = SC.ScrollView.design({
  contentView: Showcase.ViewsListView.design({
    content: [
      Showcase.ViewsItemContent.create({
        title: 'Regular',
        example: "SC.DisclosureView.extend({  layout: { width: 150, height: 24, centerX: 0, centerY: 0 },  title: function() {  return this.get('value') ? 'Collapse something' : 'Expand something';  }.property('value').cacheable()  })"
      })
    ]
  })
});
