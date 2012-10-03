// ==========================================================================
// Project:   Showcase
// Copyright: ©2012 7x7 Software, Inc.
// License:   Licensed under MIT license
// ==========================================================================
/*globals Showcase */
sc_require('system/views_item_content.js');
sc_require('views/views_list_view.js');


/**
  This pre-configured view demonstrates SC.TabView.
*/
Showcase.tabViews = SC.ScrollView.design({
  contentView: Showcase.ViewsListView.design({
    content: [
      Showcase.ViewsItemContent.create({
        title: 'Regular',
        example: "SC.TabView.extend({  itemIconKey: 'icon',  itemTitleKey: 'title',  itemValueKey: 'value',  nowShowing: 'Showcase.greenTabView',  layout: { width: 400, height: 300, centerX: 0, centerY: 0 },  items: [{  title: 'Apple',  icon: sc_static('images/fruit.png'),  value: 'Showcase.blueTabView'  },  {  title: 'Orange',  icon: sc_static('images/fruit-orange.png'),  value: 'Showcase.greenTabView'  },  {  title: 'Grape',  icon: sc_static('images/fruit-grape.png'),  value: 'Showcase.pinkTabView'  }]  })"
      }),
      Showcase.ViewsItemContent.create({
        title: 'Small',
        example: "SC.TabView.extend({  controlSize: SC.SMALL_CONTROL_SIZE,  itemIconKey: 'icon',  itemTitleKey: 'title',  itemValueKey: 'value',  nowShowing: 'Showcase.blueTabView',  layout: { width: 400, height: 300, centerX: 0, centerY: 0 },  tabHeight: 18,  items: [{  title: 'Exceeds',  icon: sc_static('images/green-dot.png'),  value: 'Showcase.blueTabView'  },  {  title: 'Meets',  icon: sc_static('images/grey-dot.png'),  value: 'Showcase.greenTabView'  },  {  title: 'Below',  icon: sc_static('images/red-dot.png'),  value: 'Showcase.pinkTabView'  }]  })"
      }),
      Showcase.ViewsItemContent.create({
        title: 'Large',
        example: "SC.TabView.extend({  controlSize: SC.LARGE_CONTROL_SIZE,  itemIconKey: 'icon',  itemTitleKey: 'title',  itemValueKey: 'value',  nowShowing: 'Showcase.pinkTabView',  layout: { width: 400, height: 300, centerX: 0, centerY: 0 },  tabHeight: 30,  items: [{  title: 'Apple',  icon: sc_static('images/fruit.png'),  value: 'Showcase.blueTabView'  },  {  title: 'Orange',  icon: sc_static('images/fruit-orange.png'),  value: 'Showcase.greenTabView'  },  {  title: 'Grape',  icon: sc_static('images/fruit-grape.png'),  value: 'Showcase.pinkTabView'  }]  })"
      }),
      Showcase.ViewsItemContent.create({
        title: 'Jumbo',
        example: "SC.TabView.extend({  controlSize: SC.JUMBO_CONTROL_SIZE,  itemIconKey: 'icon',  itemTitleKey: 'title',  itemValueKey: 'value',  nowShowing: 'Showcase.greenTabView',  layout: { width: 400, height: 300, centerX: 0, centerY: 0 },  tabHeight: 44,  items: [{  title: 'FaceBook',  icon: sc_static('images/balloon-facebook.png'),  value: 'Showcase.blueTabView'  },  {  title: 'Twitter',  icon: sc_static('images/balloon-twitter.png'),  value: 'Showcase.greenTabView'  }]  })"
      }),
      Showcase.ViewsItemContent.create({
        title: 'Top Toolbar Location',
        example: "SC.TabView.extend({  itemTitleKey: 'title',  itemValueKey: 'value',  nowShowing: 'Showcase.orangeTabView',  tabLocation: SC.TOP_TOOLBAR_LOCATION,  layout: { width: 400, height: 300, centerX: 0, centerY: 0 },  items: [{  title: 'Infants',  value: 'Showcase.blueTabView'  },  {  title: 'Toddlers',  value: 'Showcase.greenTabView'  },  {  title: 'Tweens',  value: 'Showcase.pinkTabView'  },  {  title: 'Teens',  value: 'Showcase.grayTabView'  },  {  title: 'Adults',  value: 'Showcase.orangeTabView'  },  {  title: 'Seniors',  value: 'Showcase.purpleTabView'  }]  })"
      }),
      Showcase.ViewsItemContent.create({
        title: 'Bottom Location',
        example: "SC.TabView.extend({  itemTitleKey: 'title',  itemValueKey: 'value',  nowShowing: 'Showcase.grayTabView',  tabLocation: SC.BOTTOM_LOCATION,  layout: { width: 400, height: 300, centerX: 0, centerY: 0 },  items: [{  title: 'Elements',  value: 'Showcase.blueTabView'  },  {  title: 'Resources',  value: 'Showcase.greenTabView'  },  {  title: 'Network',  value: 'Showcase.pinkTabView'  },  {  title: 'Scripts',  value: 'Showcase.grayTabView'  },  {  title: 'Timeline',  value: 'Showcase.orangeTabView'  }]  })"
      }),
      Showcase.ViewsItemContent.create({
        title: 'Disabled',
        example: "SC.TabView.extend({  itemIsEnabledKey: 'isEnabled',  itemTitleKey: 'title',  itemValueKey: 'value',  nowShowing: 'Showcase.greenTabView',  layout: { width: 400, height: 300, centerX: 0, centerY: 0 },  items: [{  title: 'Badger',  isEnabled: true,  value: 'Showcase.blueTabView' },   {  title: 'Ferret',  isEnabled: false,  value: 'Showcase.greenTabView'  },  {  title: 'Weasle',  value: 'Showcase.pinkTabView'  },  {  title: 'Wolverine', isEnabled: false,  value: 'Showcase.grayTabView'  }]  })"
      }),
      Showcase.ViewsItemContent.create({
        title: 'Automatic Overflow Menu',
        example: "SC.TabView.extend({  itemWidthKey: 'width',  itemTitleKey: 'title',  itemValueKey: 'value',  nowShowing: 'Showcase.redTabView',  layout: { width: 400, height: 300, centerX: 0, centerY: 0 },  items: [{  title: 'Porifera',  width: 100,  value: 'Showcase.blueTabView' },  {  title: 'Radiata',  width: 100,  value: 'Showcase.greenTabView' },  {  title: 'Bilateria',  width: 100,  value: 'Showcase.pinkTabView' },  {  title: 'Deuterostomes',  width: 100,  value: 'Showcase.grayTabView' },  {  title: 'Ecdysozoa',  width: 100,  value: 'Showcase.orangeTabView'  },  {  title: 'Platyzoa', width: 100,  value: 'Showcase.purpleTabView'  },  {  title: 'Lophotrochozoa', width: 100,  value: 'Showcase.redTabView'  }]  })"
      })
    ],
    exampleHeight: 360
  })
});
