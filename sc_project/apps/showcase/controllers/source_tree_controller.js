// ==========================================================================
// Project:   Showcase
// Copyright: @2012 Tyler Keating
// ==========================================================================
/*globals Showcase */


/**
  The source objects.
*/
Showcase.sources = SC.Object.create({

  treeItemIsExpanded: true,

  treeItemChildren: [
    SC.Object.create({
      treeItemIsExpanded: true,
      group: true,
      name: "Views & Controls",
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
    //   name: "Demos",
    //   treeItemChildren: [
    //     // SC.Object.create({
    //     //   name: "SC.Statechart Routing",
    //     //   view: 'Showcase.demosPage.statechartRouting'
    //     // })
    //   ]
    // }),

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
  treeItemIsGrouped: NO,

  /** Don't allow multiple selection. */
  allowsMultipleSelection: NO,

  /** Don't allow empty selection. */
  allowsEmptySelection: YES

});
