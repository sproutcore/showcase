// ==========================================================================
// Project:   Showcase
// Copyright: @2012 My Company, Inc.
// ==========================================================================
/*globals Showcase */

/** @namespace

  My cool new app.  Describe your application.

  @extends SC.Object
*/
Showcase = SC.Application.create(
  /** @scope Showcase.prototype */ {

  NAMESPACE: 'Showcase',

  VERSION: '0.1.0',

  collectionItems: function() {
    var collectionItems = [],
        icons = ['sc-icon-alert-24', 'sc-icon-bookmark-24', 'sc-icon-cancel-24', 'sc-icon-document-24', 'sc-icon-down-24', 'sc-icon-favorite-24', 'sc-icon-folder-24', 'sc-icon-group-24', 'sc-icon-help-24', 'sc-icon-info-24', 'sc-icon-left-24', 'sc-icon-options-24', 'sc-icon-redo-24', 'sc-icon-right-24', 'sc-icon-tools-24', 'sc-icon-trash-24', 'sc-icon-undo-24', 'sc-icon-up-24', 'sc-icon-user-24' ];

    for (var i = 0, len = icons.length; i < len; i++) {
      var icon = icons[i];
      collectionItems.push(SC.Object.create({
        icon: icon, title: icon, isSelected: false, rightIcon: 'sc-icon-help-16'
      }));
    }

    return collectionItems;
  }.property().cacheable(),

  collectionItemSelection: null,

  store: SC.Store.create().from(SC.Record.fixtures)

});
