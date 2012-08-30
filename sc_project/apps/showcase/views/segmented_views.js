// ==========================================================================
// Project:   Showcase
// Copyright: @2012 Tyler Keating
// ==========================================================================
/*globals Showcase */
sc_require('system/views_item_content.js');
sc_require('views/views_list_view.js');


/**
  This pre-configured view demonstrates SC.SegmentedView.
*/
Showcase.segmentedViews = SC.ScrollView.design({
  contentView: Showcase.ViewsListView.design({
    content: [
      Showcase.ViewsItemContent.create({
        title: 'Regular',
        example: "SC.View.extend({  childViews: ['regular', 'objects'],  regular: SC.SegmentedView.extend({  layout: { width: 300, height: 24, centerX: 0, centerY: -17 },  items: ['First', 'Second', 'Third'],  value: ['Third']  }),  objects: SC.SegmentedView.extend({  itemIconKey: 'icon',  itemTitleKey: 'title',  itemValueKey: 'title',  layout: { width: 300, height: 24, centerX: 0, centerY: 17 },  items: [{  title: 'Apple',  icon: sc_static('images/fruit.png')  }, {  title: 'Orange',  icon: sc_static('images/fruit-orange.png')  }, {  title: 'Grape',  icon: sc_static('images/fruit-grape.png')  }]  })  })",
        supportAction: function() {
          this.setPath('parentView.exampleBox.contentView.objects.value', null);
        },
        supportTitle: 'Reset Value'
      }),
      Showcase.ViewsItemContent.create({
        title: 'Small',
        example: "SC.View.extend({  childViews: ['regular', 'objects'],  regular: SC.SegmentedView.extend({  controlSize: SC.SMALL_CONTROL_SIZE,  layout: { width: 300, height: 18, centerX: 0, centerY: -14 },  items: ['Itsy', 'Bitsy', 'Spider'],  value: ['Spider']  }),  objects: SC.SegmentedView.extend({  controlSize: SC.SMALL_CONTROL_SIZE,  itemIconKey: 'icon',  itemTitleKey: 'title',  itemValueKey: 'title',  layout: { width: 300, height: 18, centerX: 0, centerY: 14 },  items: [{  title: 'Exceeds',  icon: sc_static('images/green-dot.png')  }, {  title: 'Meets',  icon: sc_static('images/grey-dot.png')  }, {  title: 'Below',  icon: sc_static('images/red-dot.png')  }]  })  })",
        supportAction: function() {
          this.setPath('parentView.exampleBox.contentView.objects.value', null);
        },
        supportTitle: 'Reset Value'
      }),
      Showcase.ViewsItemContent.create({
        title: 'Large',
        example: "SC.View.extend({  childViews: ['regular', 'objects'],  regular: SC.SegmentedView.extend({  controlSize: SC.LARGE_CONTROL_SIZE,  layout: { width: 300, height: 30, centerX: 0, centerY: -20 },  items: ['Français', 'Español', 'Deutsch'],  value: ['Deutsch']  }),  objects: SC.SegmentedView.extend({  controlSize: SC.LARGE_CONTROL_SIZE,  itemIconKey: 'icon',  itemTitleKey: 'title',  itemValueKey: 'title',  layout: { width: 300, height: 30, centerX: 0, centerY: 20 },  items: [{  title: 'Apple',  icon: sc_static('images/fruit.png')  }, {  title: 'Orange',  icon: sc_static('images/fruit-orange.png')  }, {  title: 'Grape',  icon: sc_static('images/fruit-grape.png')  }]  })  })",
        supportAction: function() {
          this.setPath('parentView.exampleBox.contentView.objects.value', null);
        },
        supportTitle: 'Reset Value'
      }),
      Showcase.ViewsItemContent.create({
        title: 'Jumbo',
        example: "SC.View.extend({  childViews: ['regular', 'objects'],  regular: SC.SegmentedView.extend({  controlSize: SC.JUMBO_CONTROL_SIZE,  layout: { width: 300, height: 44, centerX: 0, centerY: -27 },  items: ['Strength', 'Agility', 'Healing'],  value: ['Healing']  }),  objects: SC.SegmentedView.extend({  controlSize: SC.JUMBO_CONTROL_SIZE,  itemIconKey: 'icon',  itemTitleKey: 'title',  itemValueKey: 'title',  layout: { width: 360, height: 44, centerX: 0, centerY: 27 },  items: [{  title: 'Chat',  icon: sc_static('images/balloon.png')  }, {  title: 'FaceBook',  icon: sc_static('images/balloon-facebook.png')  }, {  title: 'Twitter',  icon: sc_static('images/balloon-twitter.png')  }]  })  })",
        supportAction: function() {
          this.setPath('parentView.exampleBox.contentView.objects.value', null);
        },
        supportTitle: 'Reset Value'
      }),
      Showcase.ViewsItemContent.create({
        title: 'Disabled',
        example: "SC.View.extend({  childViews: ['regular', 'objects'],  regular: SC.SegmentedView.extend({  isEnabled: false,  layout: { width: 300, height: 24, centerX: 0, centerY: -17 },  items: ['Red', 'White', 'Black'],  value: ['Red']  }),  objects: SC.SegmentedView.extend({  itemIsEnabledKey: 'isEnabled',  itemTitleKey: 'title',  itemValueKey: 'title',  layout: { width: 300, height: 24, centerX: 0, centerY: 17 },  items: [{  title: 'Badger',  isEnabled: true }, {  title: 'Ferret',  isEnabled: false  }, {  title: 'Weasle'  }, {  title: 'Wolverine', isEnabled: false  }]  })  })"
      }),
      Showcase.ViewsItemContent.create({
        title: 'Allows Empty Selection',
        example: "SC.SegmentedView.extend({  allowsEmptySelection: true,  layout: { width: 300, height: 24, centerX: 0, centerY: 0 },  items: ['Canada', 'United States', 'Mexico'],  value: ['Canada']  })"
      }),
      Showcase.ViewsItemContent.create({
        title: 'Allows Multiple Selection',
        example: "SC.SegmentedView.extend({  allowsMultipleSelection: true,  layout: { width: 500, height: 24, centerX: 0, centerY: 0 },  itemWidthKey: 'width',  itemTitleKey: 'title',  itemValueKey: 'title', items: [{  title: 'Celtics',  width: 100 }, {  title: 'Raptors',  width: 100  }, {  title: 'Knicks',  width: 100  }, {  title: 'Nets',  width: 100  }, {  title: '76ers',  width: 100  }],  value: ['76ers', 'Raptors']  })"
      }),
      Showcase.ViewsItemContent.create({
        title: 'Automatic Overflow Menu',
        example: "SC.View.extend({  childViews: ['regular', 'objects'],  regular: SC.SegmentedView.extend({  allowsEmptySelection: true,  layout: { width: 300, height: 24, centerX: 0, centerY: -17 },  items: ['Mercury', 'Venus', 'Earth', 'Mars', 'Jupiter', 'Uranus', 'Neptune'],  value: ['Venus']  }),  objects: SC.SegmentedView.extend({  allowsMultipleSelection: true,  itemWidthKey: 'width',  itemTitleKey: 'title',  itemValueKey: 'title',  layout: { width: 400, height: 24, centerX: 0, centerY: 17 },  items: [{  title: 'Porifera',  width: 100 }, {  title: 'Radiata',  width: 100 }, {  title: 'Bilateria',  width: 100 }, {  title: 'Deuterostomes',  width: 100 }, {  title: 'Ecdysozoa',  width: 100  }, {  title: 'Platyzoa', width: 100  }, {  title: 'Lophotrochozoa', width: 100  }]  })  })",
        supportAction: function() {
          var view1, view2;

          view1 = this.getPath('parentView.exampleBox.contentView.regular');
          view2 = this.getPath('parentView.exampleBox.contentView.objects');
          if (view1.get('layout').width === 300) {
            view1.adjust({width: 150});
            view2.adjust({width: 200});
          } else {
            view1.adjust({width: 300});
            view2.adjust({width: 400});
          }

          SC.RunLoop.begin().end();

          view1.remeasure();
          view2.remeasure();
        },
        supportTitle: 'Toggle Width'
      })
    ],
    exampleHeight: 200
  })
});
