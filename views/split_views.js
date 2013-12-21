// ==========================================================================
// Project:   Showcase
// Copyright: ©2012 7x7 Software, Inc.
// License:   Licensed under MIT license
// ==========================================================================
/*globals Showcase */
sc_require('system/views_item_content.js');
sc_require('views/views_list_view.js');


/**
  This pre-configured view demonstrates SC.SplitView.
*/
Showcase.splitViews = SC.ScrollView.design({
  contentView: Showcase.ViewsListView.design({
  	exampleHeight: 200,
    content: [
      Showcase.ViewsItemContent.create({
        title: 'Horizontal (default)',
        example: "SC.SplitView.extend({  layout: { top: 20, bottom: 20, left: 20, right: 20 },  childViews: ['leftView', 'rightView'],  leftView: SC.LabelView.design(SC.SplitChild, {  classNames: ['demo-split-view-label'],  value: 'Left View',  minimumSize: 80  }),  rightView: SC.LabelView.design(SC.SplitChild, {  classNames: ['demo-split-view-label'],  value: 'Right View',  minimumSize: 80  })  })"
      }),
      Showcase.ViewsItemContent.create({
        title: 'Vertical',
        example: "SC.SplitView.extend({  layoutDirection: SC.LAYOUT_VERTICAL,  layout: { top: 20, bottom: 20, left: 20, right: 20 },  childViews: ['topView', 'bottomView'],  topView: SC.LabelView.design(SC.SplitChild, {  classNames: ['demo-split-view-label'],  value: 'Top View',  minimumSize: 40  }),  bottomView: SC.LabelView.design(SC.SplitChild, {  classNames: ['demo-split-view-label'],  value: 'Bottom View',  minimumSize: 40  })  })"
      }),
      Showcase.ViewsItemContent.create({
        title: 'Custom Initial Size',
        example: "SC.SplitView.extend({  layout: { top: 20, bottom: 20, left: 20, right: 20 },  childViews: ['leftView', 'rightView'],  leftView: SC.LabelView.design(SC.SplitChild, {  classNames: ['demo-split-view-label'],  size: 120,  value: 'Left View',  minimumSize: 80  }),  rightView: SC.LabelView.design(SC.SplitChild, {  classNames: ['demo-split-view-label'],  value: 'Right View',  minimumSize: 80  })  })"
      }),
      Showcase.ViewsItemContent.create({
        title: 'Three Children',
        example: "SC.SplitView.extend({  layout: { top: 20, bottom: 20, left: 20, right: 20 },  childViews: ['leftView', 'middleView', 'rightView'],  leftView: SC.LabelView.design(SC.SplitChild, {  classNames: ['demo-split-view-label'],  value: 'Left View',  minimumSize: 80  }),  middleView: SC.LabelView.design(SC.SplitChild, {  classNames: ['demo-split-view-label'],  value: 'Middle View',  minimumSize: 80  }),  rightView: SC.LabelView.design(SC.SplitChild, {  classNames: ['demo-split-view-label'],  value: 'Right View',  minimumSize: 80  })  })"
      })
    ]
  })
});
