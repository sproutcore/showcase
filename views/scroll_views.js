// ==========================================================================
// Project:   Showcase
// Copyright: ©2012 7x7 Software, Inc.
// License:   Licensed under MIT license
// ==========================================================================
/*globals Showcase */
sc_require('system/views_item_content.js');
sc_require('views/views_list_view.js');


/**
  This pre-configured view demonstrates SC.ScrollView.
*/
Showcase.scrollViews = SC.ScrollView.design({
  contentView: Showcase.ViewsListView.design({
    content: [
      Showcase.ViewsItemContent.create({
        title: 'Regular',
        example: "SC.ScrollView.extend({  classNames: ['my-scroll-view'],  layout: { centerX: 0, centerY: 0, height: 220, width: 220 },  contentView: SC.LabelView.extend({  classNames:['green-sample-view'],  layout: { width: 500, height: 500 },  value: 'Green View'  })  })"
      }),
      Showcase.ViewsItemContent.create({
        title: 'Disabling Scrollers',
        example: "SC.View.extend({  childViews: ['left', 'middle', 'right'],  left: SC.ScrollView.extend({  classNames: ['my-scroll-view'],  hasHorizontalScroller: NO,  layout: { width: 220, height: 220, centerX: -230, centerY: 0 },  contentView: SC.LabelView.extend({  classNames:['green-sample-view'],  layout: { width: 500, height: 500 },  value: 'Green View'  })  }),  middle: SC.ScrollView.extend({  classNames: ['my-scroll-view'],  hasHorizontalScroller: NO,  hasVerticalScroller: NO,  layout: { width: 220, height: 220, centerX: 0, centerY: 0 },  contentView: SC.LabelView.extend({  classNames:['green-sample-view'],  layout: { width: 500, height: 500 },  value: 'Green View'  })  }),  right: SC.ScrollView.extend({  classNames: ['my-scroll-view'],  hasVerticalScroller: NO,  layout: { width: 220, height: 220, centerX: 230, centerY: 0 },  contentView: SC.LabelView.extend({  classNames:['green-sample-view'],  layout: { width: 500, height: 500 },  value: 'Green View'  })  })  })"
      })
      // Turn these on when alignment works.
      // Showcase.ViewsItemContent.create({
      //   title: 'Top Alignments',
      //   example: "SC.View.extend({  childViews: ['left', 'middle', 'right'],  left: SC.ScrollView.extend({  classNames: ['my-scroll-view'],  layout: { width: 220, height: 220, centerX: -230, centerY: 0 },  verticalAlign: SC.ALIGN_TOP,  contentView: SC.LabelView.extend({  classNames:['pink-sample-view'],  layout: { width: 110, height: 110 },  value: 'Pink View'  })  }),  middle: SC.ScrollView.extend({  classNames: ['my-scroll-view'],  layout: { width: 220, height: 220, centerX: 0, centerY: 0 },  horizontalAlign: SC.ALIGN_CENTER,  verticalAlign: SC.ALIGN_TOP,  contentView: SC.LabelView.extend({  classNames:['pink-sample-view'],  layout: { width: 110, height: 110 },  value: 'Pink View'  })  }),  right: SC.ScrollView.extend({  classNames: ['my-scroll-view'],  layout: { width: 220, height: 220, centerX: 230, centerY: 0 },  horizontalAlign: SC.ALIGN_RIGHT,  verticalAlign: SC.ALIGN_TOP,  contentView: SC.LabelView.extend({  classNames:['pink-sample-view'],  layout: { width: 110, height: 110 },  value: 'Pink View'  })  })  })"
      // }),
      // Showcase.ViewsItemContent.create({
      //   title: 'Middle Alignments',
      //   example: "SC.View.extend({  childViews: ['left', 'middle', 'right'],  left: SC.ScrollView.extend({  classNames: ['my-scroll-view'],  layout: { width: 220, height: 220, centerX: -230, centerY: 0 },  verticalAlign: SC.ALIGN_MIDDLE,  contentView: SC.LabelView.extend({  classNames:['pink-sample-view'],  layout: { width: 110, height: 110 },  value: 'Pink View'  })  }),  middle: SC.ScrollView.extend({  classNames: ['my-scroll-view'],  layout: { width: 220, height: 220, centerX: 0, centerY: 0 },  horizontalAlign: SC.ALIGN_CENTER,  verticalAlign: SC.ALIGN_MIDDLE,  contentView: SC.LabelView.extend({  classNames:['pink-sample-view'],  layout: { width: 110, height: 110 },  value: 'Pink View'  })  }),  right: SC.ScrollView.extend({  classNames: ['my-scroll-view'],  layout: { width: 220, height: 220, centerX: 230, centerY: 0 },  horizontalAlign: SC.ALIGN_RIGHT,  verticalAlign: SC.ALIGN_MIDDLE,  contentView: SC.LabelView.extend({  classNames:['pink-sample-view'],  layout: { width: 110, height: 110 },  value: 'Pink View'  })  })  })"
      // }),
      // Showcase.ViewsItemContent.create({
      //   title: 'Bottom Alignments',
      //   example: "SC.View.extend({  childViews: ['left', 'middle', 'right'],  left: SC.ScrollView.extend({  classNames: ['my-scroll-view'],  layout: { width: 220, height: 220, centerX: -230, centerY: 0 },  verticalAlign: SC.ALIGN_BOTTOM,  contentView: SC.LabelView.extend({  classNames:['pink-sample-view'],  layout: { width: 110, height: 110 },  value: 'Pink View'  })  }),  middle: SC.ScrollView.extend({  classNames: ['my-scroll-view'],  layout: { width: 220, height: 220, centerX: 0, centerY: 0 },  horizontalAlign: SC.ALIGN_CENTER,  verticalAlign: SC.ALIGN_BOTTOM,  contentView: SC.LabelView.extend({  classNames:['pink-sample-view'],  layout: { width: 110, height: 110 },  value: 'Pink View'  })  }),  right: SC.ScrollView.extend({  classNames: ['my-scroll-view'],  layout: { width: 220, height: 220, centerX: 230, centerY: 0 },  horizontalAlign: SC.ALIGN_RIGHT,  verticalAlign: SC.ALIGN_BOTTOM,  contentView: SC.LabelView.extend({  classNames:['pink-sample-view'],  layout: { width: 110, height: 110 },  value: 'Pink View'  })  })  })"
      // })
    ],
    exampleHeight: 256
  })
});
