// ==========================================================================
// Project:   Showcase
// Copyright: ©2012 7x7 Software, Inc.
// License:   Licensed under MIT license
// ==========================================================================
/*globals Showcase */


/**

  The Showcase application is used to highlight the many components of
  SproutCore.  You can visit the live site at http://showcase.sproutcore.com.

  @extends SC.Application
*/
Showcase = SC.Application.create(
  /** @scope Showcase.prototype */ {

  NAMESPACE: 'Showcase',

  VERSION: '0.1.0',

  // Used by the List and Grid view examples.
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

  editableCollectionItems: function() {
    var collectionItems = this.get('collectionItems');

    return SC.copy(collectionItems, true);
  }.property().cacheable(),

  // Used by the SourceList view example.
  sourceListTree: function() {
    var sourceListTree;

    sourceListTree = SC.TreeItemObserver.create({
      delegate: this,
      item: SC.Object.create({
        treeItemIsExpanded: true,
        treeItemChildren: [
          SC.Object.create({
            treeItemIsExpanded: true,
            group: true,
            groupName: "Mission Control",
            treeItemChildren: [
              SC.Object.create({
                name: 'Warnings',
                icon: 'sc-icon-alert-16',
                count: 2
              }),
              SC.Object.create({
                name: 'Notices',
                icon: 'sc-icon-info-16',
                count: 15
              })
            ]
          }),
          SC.Object.create({
            treeItemIsExpanded: false,
            group: true,
            groupName: "Administration",
            treeItemChildren: [
              SC.Object.create({
                name: 'Tag Management',
                icon: 'sc-icon-bookmark-16'
              }),
              SC.Object.create({
                name: 'Users',
                icon: 'sc-icon-user-16'
              }),
              SC.Object.create({
                name: 'CRM Default Options'
              }),
              SC.Object.create({
                name: 'Document Settings',
                icon: 'sc-icon-document-16'
              }),
              SC.Object.create({
                name: 'Directory Structure',
                icon: 'sc-icon-folder-16'
              })
            ]
          }),
          SC.Object.create({
            treeItemIsExpanded: true,
            group: true,
            groupName: "Games",
            treeItemChildren: [
              SC.Object.create({
                name: 'Tunnel of Like',
                icon: 'sc-icon-favorite-16'
              }),
              SC.Object.create({
                name: 'Squirbo!',
                icon: 'sc-icon-group-16'
              }),
              SC.Object.create({
                treeItemIsExpanded: true,
                group: true,
                name: "Puzzles",
                treeItemChildren: [
                   SC.Object.create({
                    name: 'Flashpoint'
                  }),
                   SC.Object.create({
                    name: 'Weezaxo 3'
                  })
                ]
              }),
              SC.Object.create({
                name: 'Trasholis',
                icon: 'sc-icon-trash-16'
              })
            ]
          }),
          SC.Object.create({
            name: 'Help',
            icon: 'sc-icon-help-16'
          })
        ]
      })
    });

    return sourceListTree;
  }.property().cacheable(),

  treeItemIsExpandedKey: "treeItemIsExpanded",

  treeItemChildrenKey: "treeItemChildren",

  treeItemIsGrouped: true,

  // Used by the Tab views.
  blueTabView: SC.LabelView.extend({  classNames:['blue-tab-view', 'tab-view'],  value: 'Blue View'  }),
  greenTabView: SC.LabelView.extend({  classNames:['green-tab-view', 'tab-view'],  value: 'Green View'  }),
  pinkTabView: SC.LabelView.extend({  classNames:['pink-tab-view', 'tab-view'],  value: 'Pink View'  }),
  grayTabView: SC.LabelView.extend({  classNames:['gray-tab-view', 'tab-view'],  value: 'Gray View'  }),
  orangeTabView: SC.LabelView.extend({  classNames:['orange-tab-view', 'tab-view'],  value: 'Orange View'  }),
  purpleTabView: SC.LabelView.extend({  classNames:['purple-tab-view', 'tab-view'],  value: 'Purple View'  }),
  redTabView: SC.LabelView.extend({  classNames:['red-tab-view', 'tab-view'],  value: 'Red View'  }),

  store: SC.Store.create().from(SC.Record.fixtures),

  /**
    Our simple route handler.  This will be called whenever the URL changes
    directly or on reload.
   */
  route: function(route) {
    var object,
      section;

    section = Showcase.sources.get('treeItemChildren').findProperty('subpath', route.section);
    object = section.get('treeItemChildren').findProperty('name', route.key);

    Showcase.sourceTreeController.selectObject(object);
  }

});
