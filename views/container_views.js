// ==========================================================================
// Project:   Showcase
// Copyright: ©2012 7x7 Software, Inc.
// License:   Licensed under MIT license
// ==========================================================================
/*global Showcase */
sc_require('system/views_item_content.js');
sc_require('views/views_list_view.js');


/**
  This pre-configured view demonstrates SC.ContainerView.
*/
Showcase.containerViews = SC.ScrollView.design({
  contentView: Showcase.ViewsListView.design({
    content: [
      Showcase.ViewsItemContent.create({
        title: 'Regular',
        example: "SC.ContainerView.extend({  layout: { left: 20, right: 20, top: 20, bottom: 20 },  nowShowing: 'blueSampleView',  blueSampleView: SC.LabelView.extend({  classNames:['blue-sample-view'],  value: 'Blue View'  }),  redSampleView: SC.LabelView.extend({  classNames:['red-sample-view'],  value: 'Red View'  }),  yellowSampleView: SC.LabelView.extend({  classNames:['yellow-sample-view'],  value: 'Yellow View'  }),  greenSampleView: SC.LabelView.extend({  classNames:['dark-green-sample-view'],  value: 'Green View' })  });",
        supportAction: function () {
          var containerView = this.getPath('parentView.exampleBox.contentView');
          if (containerView.get('nowShowing') === 'blueSampleView') containerView.set('nowShowing', 'redSampleView');
          else if (containerView.get('nowShowing') === 'redSampleView') containerView.set('nowShowing', 'yellowSampleView');
          else if (containerView.get('nowShowing') === 'yellowSampleView') containerView.set('nowShowing', 'greenSampleView');
          else containerView.set('nowShowing', 'blueSampleView');
        },
        supportTitle: 'Toggle nowShowing'
      }),
      Showcase.ViewsItemContent.create({
        title: 'DISSOLVE transition<br><span class="edge">Coming in SproutCore 1.10!</span>',
        example: "SC.ContainerView.extend({  layout: { left: 20, right: 20, top: 20, bottom: 20 },  nowShowing: 'blueSampleView',  transition: SC.ContainerView.DISSOLVE,  transitionOptions: { duration: 1.2 },  blueSampleView: SC.LabelView.extend({  classNames:['blue-sample-view'],  value: 'Blue View'  }),  redSampleView: SC.LabelView.extend({  classNames:['red-sample-view'],  value: 'Red View'  }),  yellowSampleView: SC.LabelView.extend({  classNames:['yellow-sample-view'],  value: 'Yellow View'  }),  greenSampleView: SC.LabelView.extend({  classNames:['dark-green-sample-view'],  value: 'Green View'  })  });",
        supportAction: function () {
          var containerView = this.getPath('parentView.exampleBox.contentView');
          if (containerView.get('nowShowing') === 'blueSampleView') containerView.set('nowShowing', 'redSampleView');
          else if (containerView.get('nowShowing') === 'redSampleView') containerView.set('nowShowing', 'yellowSampleView');
          else if (containerView.get('nowShowing') === 'yellowSampleView') containerView.set('nowShowing', 'greenSampleView');
          else containerView.set('nowShowing', 'blueSampleView');
        },
        supportTitle: 'Toggle nowShowing'
      }),
      Showcase.ViewsItemContent.create({
        title: 'FADE_COLOR transition<br><span class="edge">Coming in SproutCore 1.10!</span>',
        example: "SC.ContainerView.extend({  layout: { left: 20, right: 20, top: 20, bottom: 20 },  nowShowing: 'blueSampleView',  transition: SC.ContainerView.FADE_COLOR,  transitionOptions: { duration: 1.2, color: 'white' },  blueSampleView: SC.LabelView.extend({  classNames:['blue-sample-view'],  value: 'Blue View'  }),  redSampleView: SC.LabelView.extend({  classNames:['red-sample-view'],  value: 'Red View'  }),  yellowSampleView: SC.LabelView.extend({  classNames:['yellow-sample-view'],  value: 'Yellow View'  }),  greenSampleView: SC.LabelView.extend({  classNames:['dark-green-sample-view'],  value: 'Green View'  })  });",
        supportAction: function () {
          var containerView = this.getPath('parentView.exampleBox.contentView');
          if (containerView.get('nowShowing') === 'blueSampleView') containerView.set('nowShowing', 'redSampleView');
          else if (containerView.get('nowShowing') === 'redSampleView') containerView.set('nowShowing', 'yellowSampleView');
          else if (containerView.get('nowShowing') === 'yellowSampleView') containerView.set('nowShowing', 'greenSampleView');
          else containerView.set('nowShowing', 'blueSampleView');
        },
        supportTitle: 'Toggle nowShowing'
      }),
      Showcase.ViewsItemContent.create({
        title: 'MOVE_IN transition<br><span class="edge">Coming in SproutCore 1.10!</span>',
        example: "SC.ContainerView.extend({  layout: { left: 20, right: 20, top: 20, bottom: 20 },  nowShowing: 'blueSampleView',  transition: SC.ContainerView.MOVE_IN,  transitionOptions: { duration: 1.2, direction: 'up' },  blueSampleView: SC.LabelView.extend({  classNames:['blue-sample-view'],  value: 'Blue View',  wantsAcceleratedLayer: YES  }),  redSampleView: SC.LabelView.extend({  classNames:['red-sample-view'],  value: 'Red View',  wantsAcceleratedLayer: YES  }),  yellowSampleView: SC.LabelView.extend({  classNames:['yellow-sample-view'],  value: 'Yellow View',  wantsAcceleratedLayer: YES  }),  greenSampleView: SC.LabelView.extend({  classNames:['dark-green-sample-view'],  value: 'Green View',  wantsAcceleratedLayer: YES  })  });",
        supportAction: function () {
          var containerView = this.getPath('parentView.exampleBox.contentView');
          if (containerView.get('nowShowing') === 'blueSampleView') containerView.set('nowShowing', 'redSampleView');
          else if (containerView.get('nowShowing') === 'redSampleView') containerView.set('nowShowing', 'yellowSampleView');
          else if (containerView.get('nowShowing') === 'yellowSampleView') containerView.set('nowShowing', 'greenSampleView');
          else containerView.set('nowShowing', 'blueSampleView');
        },
        supportTitle: 'Toggle nowShowing'
      }),
      Showcase.ViewsItemContent.create({
        title: 'PUSH transition<br><span class="edge">Coming in SproutCore 1.10!</span>',
        example: "SC.ContainerView.extend({  layout: { left: 20, right: 20, top: 20, bottom: 20 },  nowShowing: 'blueSampleView',  transition: SC.ContainerView.PUSH,  transitionOptions: { duration: 1.2, direction: 'right' },  blueSampleView: SC.LabelView.extend({  classNames:['blue-sample-view'],  value: 'Blue View',  wantsAcceleratedLayer: YES  }),  redSampleView: SC.LabelView.extend({  classNames:['red-sample-view'],  value: 'Red View',  wantsAcceleratedLayer: YES  }),  yellowSampleView: SC.LabelView.extend({  classNames:['yellow-sample-view'],  value: 'Yellow View',  wantsAcceleratedLayer: YES  }),  greenSampleView: SC.LabelView.extend({  classNames:['dark-green-sample-view'],  value: 'Green View',  wantsAcceleratedLayer: YES  })  });",
        supportAction: function () {
          var containerView = this.getPath('parentView.exampleBox.contentView');
          if (containerView.get('nowShowing') === 'blueSampleView') containerView.set('nowShowing', 'redSampleView');
          else if (containerView.get('nowShowing') === 'redSampleView') containerView.set('nowShowing', 'yellowSampleView');
          else if (containerView.get('nowShowing') === 'yellowSampleView') containerView.set('nowShowing', 'greenSampleView');
          else containerView.set('nowShowing', 'blueSampleView');
        },
        supportTitle: 'Toggle nowShowing'
      }),
      Showcase.ViewsItemContent.create({
        title: 'REVEAL transition<br><span class="edge">Coming in SproutCore 1.10!</span>',
        example: "SC.ContainerView.extend({  layout: { left: 20, right: 20, top: 20, bottom: 20 },  nowShowing: 'blueSampleView',  transition: SC.ContainerView.REVEAL,  transitionOptions: { duration: 1.2, direction: 'down' },  blueSampleView: SC.LabelView.extend({  classNames:['blue-sample-view'],  value: 'Blue View',  wantsAcceleratedLayer: YES  }),  redSampleView: SC.LabelView.extend({  classNames:['red-sample-view'],  value: 'Red View',  wantsAcceleratedLayer: YES  }),  yellowSampleView: SC.LabelView.extend({  classNames:['yellow-sample-view'],  value: 'Yellow View',  wantsAcceleratedLayer: YES  }),  greenSampleView: SC.LabelView.extend({  classNames:['dark-green-sample-view'],  value: 'Green View',  wantsAcceleratedLayer: YES  })  });",
        supportAction: function () {
          var containerView = this.getPath('parentView.exampleBox.contentView');
          if (containerView.get('nowShowing') === 'blueSampleView') containerView.set('nowShowing', 'redSampleView');
          else if (containerView.get('nowShowing') === 'redSampleView') containerView.set('nowShowing', 'yellowSampleView');
          else if (containerView.get('nowShowing') === 'yellowSampleView') containerView.set('nowShowing', 'greenSampleView');
          else containerView.set('nowShowing', 'blueSampleView');
        },
        supportTitle: 'Toggle nowShowing'
      })
    ],
    exampleHeight: 300
  })
});
