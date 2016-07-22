// ==========================================================================
// Project:   Showcase
// Copyright: ©2012 7x7 Software, Inc.
// License:   Licensed under MIT license
// ==========================================================================
/*globals Showcase */
sc_require('system/views_item_content.js');
sc_require('views/views_list_view.js');


/**
  This pre-configured view demonstrates SC.SliderView.
*/
Showcase.sliderViews = SC.ScrollView.design({
  contentView: Showcase.ViewsListView.design({
    content: [
      Showcase.ViewsItemContent.create({
        title: 'Regular',
        example: "SC.SliderView.extend({  layout: { width: 250, height: 18, centerX: 0, centerY: 0 },  markSteps: true })"
      }),
      // Showcase.ViewsItemContent.create({
      //   title: 'Tiny',
      //   example: "SC.SliderView.extend({  controlSize: SC.TINY_CONTROL_SIZE,  layout: { width: 250, height: 20, centerX: 0, centerY: 0 } })"
      // }),
      Showcase.ViewsItemContent.create({
        title: 'Small',
        example: "SC.SliderView.extend({  controlSize: SC.SMALL_CONTROL_SIZE,  layout: { width: 250, height: 16, centerX: 0, centerY: 0 },  markSteps: true })"
      }),
      // Showcase.ViewsItemContent.create({
      //   title: 'Large',
      //   example: "SC.SliderView.extend({  controlSize: SC.LARGE_CONTROL_SIZE,  layout: { width: 250, height: 20, centerX: 0, centerY: 0 } })"
      // }),
      // Showcase.ViewsItemContent.create({
      //   title: 'Huge',
      //   example: "SC.SliderView.extend({  controlSize: SC.HUGE_CONTROL_SIZE,  layout: { width: 250, height: 20, centerX: 0, centerY: 0 } })"
      // }),
      Showcase.ViewsItemContent.create({
        title: 'Jumbo',
        example: "SC.SliderView.extend({  controlSize: SC.JUMBO_CONTROL_SIZE,  layout: { width: 250, height: 24, centerX: 0, centerY: 0 },  markSteps: true })"
      }),
      Showcase.ViewsItemContent.create({
        title: 'Continuous',
        example: "SC.SliderView.extend({  layout: { width: 250, height: 18, centerX: 0, centerY: 0 },  step: 0 })"
      })
    ]
  })
});
