// ==========================================================================
// Project:   Showcase
// Copyright: ©2012 7x7 Software, Inc.
// License:   Licensed under MIT license
// ==========================================================================
/*globals Showcase */
sc_require('system/views_item_content.js');
sc_require('views/views_list_view.js');


/**
  This pre-configured view demonstrates SC.WorkspaceView.
*/
Showcase.workspaceViews = SC.ScrollView.design({
  contentView: Showcase.ViewsListView.design({
    content: [
      Showcase.ViewsItemContent.create({
        title: 'Regular (Resize to change toolbar size)',
        example: "SC.WorkspaceView.extend({  autoResizeToolbars: true,  classNames: ['my-workspace-view'],  layout: { left: 20, right: 20, top: 20, bottom: 20 },  topToolbar: SC.ToolbarView.extend({  childViews: ['title'],  layout: { height: 44 },  title: SC.LabelView.extend({  classNames: ['my-title-label'],  controlSize: SC.LARGE_CONTROL_SIZE,  layout: { width: 220, height: 24, centerX: 0, centerY: 0 },  value: 'Heading'  })  }),  bottomToolbar: SC.ToolbarView.extend({  anchorLocation:  SC.ANCHOR_BOTTOM,  childViews: ['title'],  layout: { height: 44 },  title: SC.LabelView.extend({  classNames: ['my-title-label'],  controlSize: SC.LARGE_CONTROL_SIZE,  layout: { width: 220, height: 24, centerX: 0, centerY: 0 },  value: 'Footing'  })  }),  contentView: SC.LabelView.extend({  classNames: ['my-content-label'],  value: 'Content'  })  })"
      })
    ],
    exampleHeight: 500
  })
});
