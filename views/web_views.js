// ==========================================================================
// Project:   Showcase
// Copyright: ©2012 7x7 Software, Inc.
// License:   Licensed under MIT license
// ==========================================================================
/*globals Showcase */
sc_require('system/views_item_content.js');
sc_require('views/views_list_view.js');


/**
  This pre-configured view demonstrates SC.WebView.
*/
Showcase.webViews = SC.ScrollView.design({
  contentView: Showcase.ViewsListView.design({
    content: [
      Showcase.ViewsItemContent.create({
        title: 'Regular',
        example: "SC.WebView.extend({  classNames: ['my-web-view'],  layout: { left: 20, top: 20, right: 20, bottom: 20 },  value: 'http://sproutcore.com' })",
        supportAction: function() {
          var view = this.getPath('parentView.exampleBox.contentView')
              value = view.get('value');

          if (value === 'http://sproutcore.com') view.set('value', 'http://docs.sproutcore.com');
          else view.set('value', 'http://sproutcore.com');
        },
        supportTitle: 'Toggle Value'

      })
    ],
    exampleHeight: 500
  })
});
