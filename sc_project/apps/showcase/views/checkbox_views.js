// ==========================================================================
// Project:   Showcase
// Copyright: @2012 Tyler Keating
// ==========================================================================
/*globals Showcase */
sc_require('system/views_item_content.js');
sc_require('views/views_list_view.js');


/**
  This pre-configured view demonstrates SC.CheckboxView.
*/
Showcase.checkboxViews = SC.ScrollView.design({
  contentView: Showcase.ViewsListView.design({
    content: [
      Showcase.ViewsItemContent.create({
        title: 'Regular',
        example: "SC.View.extend({  childViews: ['regularCheckbox', 'iconCheckbox'],  regularCheckbox: SC.CheckboxView.extend({  layout: { width: 120, height: 16, centerX: -70, centerY: 0 },  title: 'Check Me'  }),  iconCheckbox: SC.CheckboxView.extend({  icon: 'sc-icon-bookmark-16',  layout: { width: 120, height: 16, centerX: 70, centerY: 0 },  title: 'Bookmark It'  })  })"
      }),
      Showcase.ViewsItemContent.create({
        title: 'Small',
        example: "SC.View.extend({  childViews: ['regularCheckbox', 'iconCheckbox'],  regularCheckbox: SC.CheckboxView.extend({  controlSize: SC.SMALL_CONTROL_SIZE,  layout: { width: 120, height: 14, centerX: -70, centerY: 0 },  title: 'Check Me'  }),  iconCheckbox: SC.CheckboxView.extend({  controlSize: SC.SMALL_CONTROL_SIZE,  icon: sc_static('images/alarm-clock.png'),  layout: { width: 120, height: 14, centerX: 70, centerY: 0 },  title: 'Save Alarm'  })  })"
      }),
      Showcase.ViewsItemContent.create({
        title: 'States',
        example: "SC.View.extend({  childViews: ['mixedCheckbox', 'disabledCheckbox'],  mixedCheckbox: SC.CheckboxView.extend({  layout: { width: 120, height: 16, centerX: -70, centerY: 0 },  title: 'Mixed State',  toggleOnValue: 'a',  value: ['a', 'b']  }),  disabledCheckbox: SC.CheckboxView.extend({  isEnabled: false,  layout: { width: 120, height: 16, centerX: 70, centerY: 0 },  title: 'Disabled'  })  })",
        supportAction: function() {
          this.setPath('parentView.exampleBox.contentView.mixedCheckbox.value', ['a', 'b']);
        },
        supportTitle: 'Reset Mixed Value'
      })
    ]
  })
});
