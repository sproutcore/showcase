// ==========================================================================
// Project:   Showcase
// Copyright: @2012 Tyler Keating
// ==========================================================================
/*globals Showcase */
sc_require('system/views_item_content.js');
sc_require('views/views_list_view.js');


/**
  This pre-configured view demonstrates SC.WellView.
*/
Showcase.wellViews = SC.ScrollView.design({
  contentView: Showcase.ViewsListView.design({
    content: [
      Showcase.ViewsItemContent.create({
        title: 'Regular',
        example: "SC.WellView.extend({  layout: { left: 20, right: 20, top: 20, bottom: 20 },  nowShowing: 'blueSampleView',  blueSampleView: SC.LabelView.extend({  classNames:['blue-sample-view'],  value: 'Blue View'  }),  redSampleView: SC.LabelView.extend({  classNames:['red-sample-view'],  value: 'Red View'  })  });",
        supportAction: function() {
          var containerView = this.getPath('parentView.exampleBox.contentView');
          if (containerView.get('nowShowing') === 'blueSampleView') containerView.set('nowShowing', 'redSampleView');
          else containerView.set('nowShowing', 'blueSampleView');
        },
        supportTitle: 'Toggle nowShowing'
      })
    ],
    exampleHeight: 315
  })
});
