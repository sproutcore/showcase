// ==========================================================================
// Project:   Showcase
// Copyright: ©2012 7x7 Software, Inc.
// License:   Licensed under MIT license
// ==========================================================================
/*globals Showcase */
sc_require('system/views_item_content.js');
sc_require('views/views_list_view.js');


/**
  This pre-configured view demonstrates SC.ProgressView.
*/
Showcase.progressViews = SC.ScrollView.design({
  contentView: Showcase.ViewsListView.design({
    content: [
      Showcase.ViewsItemContent.create({
        title: 'Regular',
        example: "SC.ProgressView.extend({  layout: { width: 150, height: 20, centerX: 0, centerY: 0 },  increment: function() {  this.incrementProperty('value', 0.01);  if (this.get('value') > 1.25) { this.set('value', 0); }  },  init: function init () {  init.base.apply(this, arguments);  SC.Timer.schedule({  action: 'increment', target: this, interval: 30, repeats: true  });  }  })"
      }),
      Showcase.ViewsItemContent.create({
        title: 'Indeterminate',
        example: "SC.ProgressView.extend({  layout: { width: 150, height: 20, centerX: 0, centerY: 0 },  isIndeterminate: YES,  isRunning: YES  })"
      }),
      Showcase.ViewsItemContent.create({
        title: 'Indeterminate disabled',
        example: "SC.ProgressView.extend({  layout: { width: 200, height: 16, centerX: 0, centerY: 0 },  isIndeterminate: YES,  isEnabled: NO  })"
      })
    ]
  })
});
