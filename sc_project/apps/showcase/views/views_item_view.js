// ==========================================================================
// Project:   Showcase
// Copyright: @2012 Tyler Keating
// ==========================================================================
/*globals Showcase */


/**
  This class view is for use in the Views & Controls lists.
*/
Showcase.ViewsItemView = SC.View.extend({

  childViews: ['titleLabel', 'exampleBox', 'supportButton', 'disclosure', 'snippetField'],

  classNames: ['views-item-view'],

  content: null,

  /**
    Returns the layout for the example box.
  */
  exampleLayout: function () {
    var owner = this.get('owner'),
        exampleHeight = owner.get('exampleHeight');

    return { left: 60, top: 60, right: 60, height: exampleHeight }
  }.property().cacheable(),

  titleLabel: SC.LabelView.design({
    classNames: ['title-label'],
    layout: { left: 20, top: 15, right: 20, height: 30 },
    tagName: 'h2',
    valueBinding: SC.Binding.oneWay('.parentView.content.title')
  }),

  exampleBox: SC.ContainerView.design({
    classNames: ['example-box'],
    layoutBinding: SC.Binding.oneWay('.parentView.exampleLayout'),
    nowShowingBinding: SC.Binding.oneWay('.parentView.content.exampleView'),
    replaceContent: function(newContent) {
      // SC.ContainerView needs its awake function to be called to be correctly initialized.
      newContent.awake();

      sc_super();
    },
  }),

  supportButton: SC.ButtonView.design({
    actionBinding: SC.Binding.oneWay('.parentView.content.supportAction'),
    isVisibleBinding: SC.Binding.oneWay('.parentView.content.supportTitle').bool(),
    layoutBinding: SC.Binding.oneWay('.parentView.exampleLayout').transform(function(layout) {
      var ourLayout = { height: 24, right: 60, top: layout.top + layout.height + 10, width: 140 };
      return ourLayout;
    }),
    titleBinding: SC.Binding.oneWay('.parentView.content.supportTitle')
  }),

  disclosure: SC.DisclosureView.design({
    layoutBinding: SC.Binding.oneWay('.parentView.exampleLayout').transform(function(layout) {
      var ourLayout = { left: 10, height: 25, width: 150, top: layout.top + layout.height + 30 };
      return ourLayout;
    }),

    title: function() {
      return this.get('value') ? 'Hide' : 'Show Code';
    }.property('value').cacheable(),

    valueBinding: SC.Binding.from('.parentView.content.isShowingSnippet')
  }),

  snippetField: SC.TextFieldView.design({
    classNames: ['snippet-field'],
    isEditable: false,
    isTextArea: true,
    isVisibleBinding: SC.Binding.oneWay('.parentView.disclosure.value'),
    layoutBinding: SC.Binding.oneWay('.parentView.exampleLayout').transform(function(layout) {
      var ourLayout = { left: 15, bottom: 15, right: 15, top: layout.top + layout.height + 60 };
      return ourLayout;
    }),
    valueBinding: SC.Binding.oneWay('.parentView.content.exampleString')
  })
});
