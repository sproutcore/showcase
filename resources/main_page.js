// ==========================================================================
// Project:   Showcase
// Copyright: ©2012 7x7 Software, Inc.
// License:   Licensed under MIT license
// ==========================================================================
/*globals Showcase */


// This page describes the main user interface for your application.
Showcase.mainPage = SC.Page.design({

  // The main pane is made visible on screen as soon as your app is loaded.
  // Add childViews to this pane for views to display immediately on page
  // load.
  mainPane: SC.MainPane.design({
    childViews: ['header', 'masterDetail'],

    header: SC.View.design({
      layout: { borderBottom: 1, height: 50, zIndex: 999 },
      tagName: 'header',
      render: function (context, firstTime) {
        context.setAttr('role', 'banner');
        context.push('<div class="container"><h1 id="logo"><a href="http://www.sproutcore.com"><img src="' + sc_static('images/logo.png') + '" alt="SproutCore"></a></h1><nav role="navigation"><ul><li><a href="http://www.sproutcore.com/about/">About</a></li><li class="active"><a href="/">Showcase</a></li><li><a href="http://guides.sproutcore.com">Guides</a></li><li><a href="http://docs.sproutcore.com">Docs</a></li><li><a href="http://www.sproutcore.com/community/">Community</a></li><li><a href="http://blog.sproutcore.com">Blog</a></li></ul></nav></div>');
      }
    }),

    masterDetail: SC.MasterDetailView.design({
      layout: { top: 51 },

      masterView: SC.ScrollView.design({

        contentView: SC.SourceListView.design({
          classNames: ['main-source-list'],
          contentBinding: SC.Binding.oneWay('Showcase.sourceTreeController.arrangedObjects'),
          contentValueKey: 'name',

          // Show all the items for best performance since the list is short.
          contentIndexesInRect: function () { return null; }.property().cacheable(),
          selectionBinding: SC.Binding.from('Showcase.sourceTreeController.selection')
        })
      }),

      detailView: SC.ContainerView.design({
        classNames: ['main-detail-view'],
        nowShowing: 'Showcase.mainPage.welcomeView',
        nowShowingBinding: SC.Binding.notEmpty('Showcase.sourceController.view', 'Showcase.mainPage.welcomeView')
      })
    })
  }),

  welcomeView: SC.StaticContentView.design({
    classNames: ['welcome-view'],
    content: "<h1>SproutCore Showcase</h1>" +
          "<h2>Demos</h2>" +
          "<p>The showcase demos were built to illustrate some of the powerful concepts within SproutCore.  Each demo is a SproutCore app and you can find the source for each demo on <a href=\"https://github.com/sproutcore/demos\" target=\"_blank\" title=\"Demos Source on Github\">Github</a>.</p>" +
          "<h2>Views &amp; Controls</h2>" +
          "<p>SproutCore is bundled with a wide array of controls for you to use within your own applications.  This allows you to build a fully functioning professional looking application very quickly and to iteratively apply a unique theme as you go.</p>" +
          "<p>Select a class name on the left to view examples of each view, including the code used.</p>" +
          "<footer>Some icons by <a href=\"http://p.yusukekamiyamane.com/\">Yusuke Kamiyamane</a>. All rights reserved.</footer>"
  }),

  demoView: SC.WebView.design({
    classNames: ['demo-view'],
    valueBinding: SC.Binding.oneWay('Showcase.sourceController.appPath'),
    childViews: ['loading'],

    iframeDidLoad: function () {
      sc_super();

      this.set('isLoading', false);
    },

    valueDidChange: function () {
      this.set('isLoading', true);
    }.observes('value'),

    loading: SC.LabelView.extend({
      classNames: ['loading-label'],
      layout: { centerX: 0, centerY: 0, height: 150, width: 250 },
      escapeHTML: false,
      isVisibleBinding: SC.Binding.oneWay('.parentView.isLoading'),
      value: "Loading Demo Application&hellip;"
    })
  })

});
