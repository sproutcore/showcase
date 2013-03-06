// ==========================================================================
// Project:   Showcase
// Copyright: ©2012 7x7 Software, Inc.
// License:   Licensed under MIT license
// ==========================================================================
/*global Showcase */


/**
  The source objects.
*/
Showcase.sources = SC.Object.create(SC.CollectionContent, SC.TreeItemContent, {

  treeItemIsExpanded: true,

  treeItemIsGrouped: true,

  treeItemChildren: [

    SC.Object.create(SC.TreeItemContent, {
      treeItemIsExpanded: true,
      group: true,
      name: "Demos",
      subpath: 'demos',
      treeItemChildren: [
        SC.Object.create({
          appPath: 'http://demos.sproutcore.com/big_data_demo',
          name: "Big Data",
          view: 'Showcase.mainPage.demoView'
        }),
        SC.Object.create({
          appPath: 'http://demos.sproutcore.com/color_demo',
          name: "Working with Color",
          view: 'Showcase.mainPage.demoView'
        })
      ]
    }),

    SC.Object.create(SC.TreeItemContent, {
      treeItemIsExpanded: true,
      group: true,
      name: "Views & Controls",
      subpath: 'ui',
      treeItemChildren: [
        SC.Object.create({
          name: "SC.ButtonView",
          view: 'Showcase.viewsPage.buttonViews'
        }),
        SC.Object.create({
          name: "SC.CheckboxView",
          view: 'Showcase.viewsPage.checkboxViews'
        }),
        SC.Object.create({
          name: "SC.ContainerView",
          view: 'Showcase.viewsPage.containerViews'
        }),
        SC.Object.create({
          name: "SC.DateFieldView",
          view: 'Showcase.viewsPage.dateFieldViews'
        }),
        SC.Object.create({
          name: "SC.DisclosureView",
          view: 'Showcase.viewsPage.disclosureViews'
        }),
        SC.Object.create({
          name: "SC.GridView",
          view: 'Showcase.viewsPage.gridViews'
        }),
        SC.Object.create({
          name: "SC.ImageButtonView",
          view: 'Showcase.viewsPage.imageButtonViews'
        }),
        SC.Object.create({
          name: "SC.ImageView",
          view: 'Showcase.viewsPage.imageViews'
        }),
        SC.Object.create({
          name: "SC.LabelView",
          view: 'Showcase.viewsPage.labelViews'
        }),
        SC.Object.create({
          name: "SC.ListView",
          view: 'Showcase.viewsPage.listViews'
        }),
        SC.Object.create({
          name: "SC.PopUpButtonView",
          view: 'Showcase.viewsPage.popupButtonViews'
        }),
        SC.Object.create({
          name: "SC.ProgressView",
          view: 'Showcase.viewsPage.progressViews'
        }),
        SC.Object.create({
          name: "SC.RadioView",
          view: 'Showcase.viewsPage.radioViews'
        }),
        SC.Object.create({
          name: "SC.ScrollView",
          view: 'Showcase.viewsPage.scrollViews'
        }),
        SC.Object.create({
          name: "SC.SegmentedView",
          view: 'Showcase.viewsPage.segmentedViews'
        }),
        SC.Object.create({
          name: "SC.SelectView",
          view: 'Showcase.viewsPage.selectViews'
        }),
        SC.Object.create({
          name: "SC.SliderView",
          view: 'Showcase.viewsPage.sliderViews'
        }),
        SC.Object.create({
          name: "SC.SourceListView",
          view: 'Showcase.viewsPage.sourceListViews'
        }),
        SC.Object.create({
          name: "SC.SplitView",
          view: 'Showcase.viewsPage.splitViews'
        }),
        SC.Object.create({
          name: "SC.StackedView",
          view: 'Showcase.viewsPage.stackedViews'
        }),
        SC.Object.create({
          name: "SC.StaticContentView",
          view: 'Showcase.viewsPage.staticContentViews'
        }),
        SC.Object.create({
          name: "SC.TabView",
          view: 'Showcase.viewsPage.tabViews'
        }),
        SC.Object.create({
          name: "SC.TextFieldView",
          view: 'Showcase.viewsPage.textFieldViews'
        }),
        SC.Object.create({
          name: "SC.ToolbarView",
          view: 'Showcase.viewsPage.toolbarViews'
        }),
        SC.Object.create({
          name: "SC.WebView",
          view: 'Showcase.viewsPage.webViews'
        }),
        SC.Object.create({
          name: "SC.WellView",
          view: 'Showcase.viewsPage.wellViews'
        }),
        SC.Object.create({
          name: "SC.WorkspaceView",
          view: 'Showcase.viewsPage.workspaceViews'
        })
      ]
    })

    // SC.Object.create({
    //   treeItemIsExpanded: true,
    //   group: true,
    //   name: "Recipes",
    //   treeItemChildren: []
    // }),

    // SC.Object.create({
    //   treeItemIsExpanded: true,
    //   group: true,
    //   name: "Labs",
    //   treeItemChildren: []
    // })

  ]
});


/**
  The mediating controller for the source list object and the delegate for
  the source list.
*/
Showcase.sourceTreeController = SC.TreeController.create({

  /** Display top level items as groups. */
  treeItemIsGrouped: YES,

  /** Don't allow multiple selection. */
  allowsMultipleSelection: NO,

  /** Don't allow empty selection. */
  allowsEmptySelection: YES,

  /** Update the URL to match the selection. */
  selectionDidChange: function() {
    var content = this.get('content'),
      selection = this.get('selection');

    if (selection && selection.firstObject()) {
      var object = selection.firstObject(),
        section;

      // Determine which group the selection belongs to.
      content.get('treeItemChildren').forEach(function(group) {
        if (group.get('treeItemChildren').indexOf(object) >= 0) {
          section = group;
        }
      });

      // Set the location to be a combination of the section and the item.  We
      // use the name in the URL rather than having to add extra properties to
      // our source objects.
      // Use informLocation to avoid triggering a route call, since the
      // selection change already does what we want.
      SC.routes.informLocation('location', section.get('subpath') + '/' + object.get('name'));
    } else {
      // Clear the last location
      SC.routes.informLocation('location', null);
    }
  }.observes('selection')

});
