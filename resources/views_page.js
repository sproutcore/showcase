// ==========================================================================
// Project:   Showcase
// Copyright: ©2012 7x7 Software, Inc.
// License:   Licensed under MIT license
// ==========================================================================
/*globals Showcase */


Showcase.viewsPage = SC.Page.create({

  // This is dumb.  Don't do it this way, because the "class"es of each aren't replaced by SC.Page as they would be if they were set directly on the property.
  // TODO: fix these.
  buttonViews: Showcase.buttonViews,

  checkboxViews: Showcase.checkboxViews,

  containerViews: Showcase.containerViews,

  dateFieldViews: Showcase.dateFieldViews,

  disclosureViews: Showcase.disclosureViews,

  gridViews: Showcase.gridViews,

  imageButtonViews: Showcase.imageButtonViews,

  imageViews: Showcase.imageViews,

  labelViews: Showcase.labelViews,

  listViews: Showcase.listViews,

  popupButtonViews: Showcase.popupButtonViews,

  progressViews: Showcase.progressViews,

  radioViews: Showcase.radioViews,

  scrollViews: Showcase.scrollViews,

  segmentedViews: Showcase.segmentedViews,

  selectViews: Showcase.selectViews,

  sliderViews: Showcase.sliderViews,

  sourceListViews: Showcase.sourceListViews,

  splitViews: Showcase.splitViews,

  stackedViews: Showcase.stackedViews,

  staticContentViews: Showcase.staticContentViews,

  tabViews: Showcase.tabViews,

  textFieldViews: Showcase.textFieldViews,

  toolbarViews: Showcase.toolbarViews,

  webViews: Showcase.webViews,

  wellViews: Showcase.wellViews,

  workspaceViews: Showcase.workspaceViews

});
