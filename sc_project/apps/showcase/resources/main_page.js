// ==========================================================================
// Project:   Showcase
// Copyright: @2012 Tyler Keating
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
      render: function(context, firstTime) {
        context.attr('role', 'banner');
        context.push('<div class="container"><h1 id="logo"><a href="http://www.sproutcore.com"><img src="/img/logo.png" alt="SproutCore"></a></h1><nav role="navigation"><ul><li><a href="http://www.sproutcore.com/about/">About</a></li><li><a href="http://guides.sproutcore.com">Guides</a></li><li class="active"><a href="/">Docs</a></li><li><a href="http://www.sproutcore.com/showcase/">Showcase</a></li><li><a href="http://www.sproutcore.com/community/">Community</a></li><li><a href="http://blog.sproutcore.com">Blog</a></li></ul></nav></div>');
      }
    }),

    masterDetail: SC.MasterDetailView.design({
      layout: { top: 51 },

      masterView: SC.ScrollView.design({

        contentView: SC.SourceListView.design({
          contentBinding: SC.Binding.oneWay('Showcase.sourceTreeController.arrangedObjects'),
          contentExampleViewKey: 'rowClass',
          contentGroupExampleViewKey: 'groupClass',
          contentIconKey: 'icon',
          contentValueKey: 'name',
          delegate: Showcase.sourceTreeController,
          hasContentIcon: YES,
          selectionBinding: SC.Binding.from('Showcase.sourceTreeController.selection')
        })
      }),

      detailView: SC.ContainerView.design({
        nowShowingBinding: SC.Binding.oneWay('Showcase.sourceController.view')
      })
    })
  })

});
