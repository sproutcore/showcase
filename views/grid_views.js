// ==========================================================================
// Project:   Showcase
// Copyright: @2012 Tyler Keating
// ==========================================================================
/*globals Showcase */
sc_require('system/views_item_content.js');
sc_require('views/views_list_view.js');


/**
  This pre-configured view demonstrates SC.DisclosureView.
*/
Showcase.gridViews = SC.ScrollView.design({
  contentView: Showcase.ViewsListView.design({
    content: [
      Showcase.ViewsItemContent.create({
        title: 'Regular',
        example: "SC.GridView.extend({  columnWidth: 120,  rowHeight: 58,  contentBinding: SC.Binding.oneWay('Showcase.collectionItems'),  layout: { left: 20, right: 20, top: 20, bottom: 20 },  exampleView: SC.View.extend(SC.Control, {  classNames: ['grid-example-view'],  childViews: ['image', 'title'],  image: SC.ImageView.extend({  layout: { centerX: 0, centerY: 0, height: 24, width: 24 },  valueBinding: SC.Binding.oneWay('.parentView.content.icon')  }),  title: SC.LabelView.extend({  layout: { centerX: 0, bottom: 0, height: 18, width: 120 },  valueBinding: SC.Binding.oneWay('.parentView.content.title')  })  })  })"
      }),

      Showcase.ViewsItemContent.create({
        title: 'Scrollable with Minimum Width',
        example: "SC.ScrollView.extend({ layout: { left: 20, right: 20, top: 20, bottom: 20 },  contentView: SC.GridView.extend({  columnWidth: 200,  rowHeight: 200,  layout: { minWidth: 600 },  contentBinding: SC.Binding.oneWay('Showcase.collectionItems'),  exampleView: SC.View.extend(SC.Control, {  classNames: ['grid-example-view'],  childViews: ['image', 'title'],  image: SC.ImageView.extend({  layout: { centerX: 0, centerY: 0, height: 24, width: 24 },  valueBinding: SC.Binding.oneWay('.parentView.content.icon')  }),  title: SC.LabelView.extend({  layout: { centerX: 0, bottom: 0, height: 18, width: 120 },  valueBinding: SC.Binding.oneWay('.parentView.content.title')  })  })  })  })"
      })
    ],
    exampleHeight: 360
  })
});
