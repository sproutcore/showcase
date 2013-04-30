// ==========================================================================
// Project:   Showcase
// Copyright: ©2012 7x7 Software, Inc.
// License:   Licensed under MIT license
// ==========================================================================
/*globals Showcase */
sc_require('system/views_item_content.js');
sc_require('views/views_list_view.js');


/**
  This pre-configured view demonstrates SC.SelectView.
*/
Showcase.selectViews = SC.ScrollView.design({
  contentView: Showcase.ViewsListView.design({
    content: [
      Showcase.ViewsItemContent.create({
        title: 'Regular',
        example: "SC.SelectView.extend({  layout: { width: 150, height: 24, centerX: 0, centerY: 0 },  itemTitleKey: 'title',  itemValueKey: 'title',  itemIconKey: 'icon',  items: [  { title: 'Bacon' },  { title: 'Sausage' },  { title: 'Ham' },  { isSeparator: true },  { title: 'Orange', icon: sc_static('images/fruit-orange.png') },  { title: 'Apple', icon: sc_static('images/fruit.png') },  { title: 'Grape', icon: sc_static('images/fruit-grape.png') },  { title: 'Lime', icon: sc_static('images/fruit-lime.png') }  ]  })",
        supportAction: function() {
          var view = this.getPath('parentView.exampleBox.contentView'),
              items = view.get('items'),
              value = view.get('value');

          if (value === 'Bacon') view.set('value', 'Ham');
          else if (value === 'Ham') view.set('value', 'Sausage');
          else if (value === 'Sausage') view.set('value', 'Apple');
          else if (value === 'Apple') view.set('value', 'Orange');
          else if (value === 'Orange') view.set('value', 'Grape');
          else if (value === 'Grape') view.set('value', 'Lime');
          else view.set('value', 'Bacon');
        },
        supportTitle: 'Set Value to Next'
      }),
      // Showcase.ViewsItemContent.create({
      //   title: 'Tiny',
      //   example: "SC.SelectView.extend({  controlSize: SC.TINY_CONTROL_SIZE,  layout: { width: 150, height: 24, centerX: 0, centerY: 0 },  itemTitleKey: 'title',  itemValueKey: 'title',  itemIconKey: 'icon',  items: [  { title: 'Bacon' },  { title: 'Ham' },  { title: 'Sausage' },  { isSeparator: true },  { title: 'Apple', icon: sc_static('images/fruit.png') },  { title: 'Orange', icon: sc_static('images/fruit-orange.png') },  { title: 'Grape', icon: sc_static('images/fruit-grape.png') },  { title: 'Lime', icon: sc_static('images/fruit-lime.png') }  ],  value: 'Grape'  })"
      // }),
      // Showcase.ViewsItemContent.create({
      //   title: 'Small',
      //   example: "SC.SelectView.extend({  controlSize: SC.SMALL_CONTROL_SIZE,  layout: { width: 150, height: 24, centerX: 0, centerY: 0 },  itemTitleKey: 'title',  itemValueKey: 'title',  itemIconKey: 'icon',  items: [  { title: 'Bacon' },  { title: 'Ham' },  { title: 'Sausage' },  { isSeparator: true },  { title: 'Apple', icon: sc_static('images/fruit.png') },  { title: 'Orange', icon: sc_static('images/fruit-orange.png') },  { title: 'Grape', icon: sc_static('images/fruit-grape.png') },  { title: 'Lime', icon: sc_static('images/fruit-lime.png') }  ],  value: 'Grape'  })"
      // }),
      // Showcase.ViewsItemContent.create({
      //   title: 'Large',
      //   example: "SC.SelectView.extend({  controlSize: SC.LARGE_CONTROL_SIZE,  layout: { width: 150, height: 24, centerX: 0, centerY: 0 },  itemTitleKey: 'title',  itemValueKey: 'title',  itemIconKey: 'icon',  items: [  { title: 'Bacon' },  { title: 'Ham' },  { title: 'Sausage' },  { isSeparator: true },  { title: 'Apple', icon: sc_static('images/fruit.png') },  { title: 'Orange', icon: sc_static('images/fruit-orange.png') },  { title: 'Grape', icon: sc_static('images/fruit-grape.png') },  { title: 'Lime', icon: sc_static('images/fruit-lime.png') }  ],  value: 'Grape'  })"
      // }),
      // Showcase.ViewsItemContent.create({
      //   title: 'Huge',
      //   example: "SC.SelectView.extend({  controlSize: SC.HUGE_CONTROL_SIZE,  layout: { width: 150, height: 24, centerX: 0, centerY: 0 },  itemTitleKey: 'title',  itemValueKey: 'title',  itemIconKey: 'icon',  items: [  { title: 'Bacon' },  { title: 'Ham' },  { title: 'Sausage' },  { isSeparator: true },  { title: 'Apple', icon: sc_static('images/fruit.png') },  { title: 'Orange', icon: sc_static('images/fruit-orange.png') },  { title: 'Grape', icon: sc_static('images/fruit-grape.png') },  { title: 'Lime', icon: sc_static('images/fruit-lime.png') }  ],  value: 'Grape'  })"
      // }),
      // Showcase.ViewsItemContent.create({
      //   title: 'Jumbo',
      //   example: "SC.SelectView.extend({  controlSize: SC.JUMBO_CONTROL_SIZE,  layout: { width: 150, height: 24, centerX: 0, centerY: 0 },  itemTitleKey: 'title',  itemValueKey: 'title',  itemIconKey: 'icon',  items: [  { title: 'Bacon' },  { title: 'Ham' },  { title: 'Sausage' },  { isSeparator: true },  { title: 'Apple', icon: sc_static('images/fruit.png') },  { title: 'Orange', icon: sc_static('images/fruit-orange.png') },  { title: 'Grape', icon: sc_static('images/fruit-grape.png') },  { title: 'Lime', icon: sc_static('images/fruit-lime.png') }  ],  value: 'Grape'  })"
      // }),
      Showcase.ViewsItemContent.create({
        title: 'Disabled',
        example: "SC.View.extend({  childViews: ['view1', 'view2'],  view1: SC.SelectView.extend({  isEnabled: false,  layout: { width: 150, height: 24, centerX: -85, centerY: 0 },  itemTitleKey: 'title',  itemValueKey: 'title',  itemIconKey: 'icon',  items: [  { title: 'Grape', icon: sc_static('images/fruit-grape.png') }  ]  }),  view2: SC.SelectView.extend({  layout: { width: 150, height: 24, centerX: 85, centerY: 0 },  itemTitleKey: 'title',  itemValueKey: 'title',  itemIconKey: 'icon',  items: [  { title: 'Bacon' },  { title: 'Ham', isEnabled: false },  { title: 'Sausage' },  { isSeparator: true },  { title: 'Apple', icon: sc_static('images/fruit.png'), isEnabled: false },  { title: 'Orange', icon: sc_static('images/fruit-orange.png'), isEnabled: false },  { title: 'Grape', icon: sc_static('images/fruit-grape.png') },  { title: 'Lime', icon: sc_static('images/fruit-lime.png') }  ], value: 'Lime'  })  })"
      }),
      Showcase.ViewsItemContent.create({
        title: 'Sorting',
        example: "SC.View.extend({  childViews: ['view1', 'view2'],  view1: SC.SelectView.extend({  disableSort: false,  layout: { width: 150, height: 24, centerX: -85, centerY: 0 },  itemTitleKey: 'title',  itemValueKey: 'title',  itemIconKey: 'icon',  items: [  { title: 'Bacon' },  { title: 'Sausage' },  { title: 'Ham' },  { title: 'Orange', icon: sc_static('images/fruit-orange.png') },  { title: 'Apple', icon: sc_static('images/fruit.png') },  { title: 'Grape', icon: sc_static('images/fruit-grape.png') },  { title: 'Lime', icon: sc_static('images/fruit-lime.png') }  ]  }),  view2: SC.SelectView.extend({  disableSort: false,  layout: { width: 150, height: 24, centerX: 85, centerY: 0 },  itemTitleKey: 'title',  itemValueKey: 'title',  itemIconKey: 'icon',  itemSortKey: 'pos',  items: [  { title: 'Bacon - 7', pos: 7 },  { title: 'Ham - 6', pos: 6 },  { title: 'Sausage - 8', pos: 8 },  { isSeparator: true,  pos: 5 },  { title: 'Apple - 2', icon: sc_static('images/fruit.png'), pos: 2 },  { title: 'Orange - 0', icon: sc_static('images/fruit-orange.png'), pos: 0 },  { title: 'Grape - 1', icon: sc_static('images/fruit-grape.png'), pos: 1 },  { title: 'Lime - 3', icon: sc_static('images/fruit-lime.png'), pos: 3 }  ]  })  })"
      })
    ]
  })
});
