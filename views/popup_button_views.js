// ==========================================================================
// Project:   Showcase
// Copyright: ©2012 7x7 Software, Inc.
// License:   Licensed under MIT license
// ==========================================================================
/*globals Showcase */
sc_require('system/views_item_content.js');
sc_require('views/views_list_view.js');


/**
  This pre-configured view demonstrates SC.PopupButtonView.
*/
Showcase.popupButtonViews = SC.ScrollView.design({
  contentView: Showcase.ViewsListView.design({
    content: [
      Showcase.ViewsItemContent.create({
        title: 'Regular',
        example: "SC.PopupButtonView.extend({  layout: { width: 150, height: 24, centerX: 0, centerY: 0 },  menu: SC.MenuPane.extend({  layout: { width: 250 },  items: [  { title: 'Menu Item', keyEquivalent: 'ctrl_shift_n', shortcut: '⌃⇧N' },  { isSeparator: true },  { title: 'Checked Menu Item', checkbox: true, keyEquivalent: 'ctrl_a', shortcut: '⌃A' },  { isSeparator: true },  { title: 'Menu Item with Icon', icon: 'sc-icon-group-16' }  ]  }),  title: 'View Menu'  })"
      })
    ]
  })
});

//selectedItem: function(key, value) {  if (SC.none(value)) { value = this.get('items').objectAt(3); }  return value;  }.property().cacheable(0)
