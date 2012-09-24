// ==========================================================================
// Project:   Showcase
// Copyright: ©2012 7x7 Software, Inc.
// License:   Licensed under MIT license
// ==========================================================================
/*globals Showcase */

/**
  The mediating controller for the selected source object.
*/
Showcase.sourceController = SC.ObjectController.create({

  contentBinding: SC.Binding.oneWay('Showcase.sourceTreeController.selection')

});
