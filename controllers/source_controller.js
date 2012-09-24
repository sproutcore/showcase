// ==========================================================================
// Project:   Showcase
// Copyright: @2012 Tyler Keating
// ==========================================================================
/*globals Showcase */

/**
  The mediating controller for the selected source object.
*/
Showcase.sourceController = SC.ObjectController.create({

  contentBinding: SC.Binding.oneWay('Showcase.sourceTreeController.selection')

});
