// ==========================================================================
// Project:   Showcase
// Copyright: ©2012 7x7 Software, Inc.
// License:   Licensed under MIT license
// ==========================================================================
/*globals Showcase */
sc_require('system/views_item_content.js');
sc_require('views/views_list_view.js');


/**
  This pre-configured view demonstrates SC.ImageButtonView.
*/
Showcase.imageButtonViews = SC.ScrollView.design({
  contentView: Showcase.ViewsListView.design({
    content: [
      Showcase.ViewsItemContent.create({
        title: 'Regular',
        example: "SC.ImageButtonView.extend({  classNames: ['my-image-button'],  layout: { width: 56, height: 56, centerX: 0, centerY: 0 },  image: 'sc-icon-alert-48'  });"
      })
    ]
  })
});
