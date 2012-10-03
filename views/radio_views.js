// ==========================================================================
// Project:   Showcase
// Copyright: ©2012 7x7 Software, Inc.
// License:   Licensed under MIT license
// ==========================================================================
/*globals Showcase */
sc_require('system/views_item_content.js');
sc_require('views/views_list_view.js');


/**
  This pre-configured view demonstrates SC.RadioView.
*/
Showcase.radioViews = SC.ScrollView.design({
  contentView: Showcase.ViewsListView.design({
    content: [
      Showcase.ViewsItemContent.create({
        title: 'Regular',
        example: "SC.RadioView.extend({  layout: { width: 100, height: 60, centerX: 0, centerY: 0 },  items: [{ title: 'Trash', value: 'trash', enabled: true, icon: 'sc-icon-trash-16' }, { title: 'Info', value: 'info', enabled: true, icon: 'sc-icon-info-16'}, { title: 'Disabled', value: 'disabled', enabled: false, icon: 'sc-icon-favorite-16'}],  value: 'trash',  itemTitleKey: 'title',  itemValueKey: 'value',  itemIconKey: 'icon',  itemIsEnabledKey: 'enabled'  })"
      }),
      Showcase.ViewsItemContent.create({
        title: 'Horizontal',
        example: "SC.RadioView.extend({  layout: { width: 300, height: 20, centerX: 0, centerY: 0 },  items: [{ title: 'Trash', value: 'trash', enabled: true, icon: 'sc-icon-trash-16' }, { title: 'Info', value: 'info', enabled: true, icon: 'sc-icon-info-16'}, { title: 'Disabled', value: 'disabled', enabled: false, icon: 'sc-icon-favorite-16'}],  value: ['info', 'disabled'],  itemTitleKey: 'title',  itemValueKey: 'value',  itemIconKey: 'icon',  itemIsEnabledKey: 'enabled',  layoutDirection: SC.LAYOUT_HORIZONTAL  })",
        supportAction: function() {
          this.setPath('parentView.exampleBox.contentView.value', ['info', 'disabled']);
        },
        supportTitle: 'Reset Value'
      })
    ]
  })
});
