// ==========================================================================
// Project:   Showcase
// Copyright: @2012 Tyler Keating
// ==========================================================================
/*globals Showcase */
sc_require('system/views_item_content.js');
sc_require('views/views_list_view.js');


/**
  This pre-configured view demonstrates SC.ListView.
*/
Showcase.listViews = SC.ScrollView.design({
  contentView: Showcase.ViewsListView.design({
    content: [
      Showcase.ViewsItemContent.create({
        title: 'Regular',
        example: "SC.ScrollView.extend({  classNames: ['my-scroll-view'],  layout: { left: 20, right: 20, top: 20, bottom: 20 },  contentView:  SC.ListView.extend({  classNames: ['my-list-view'],  rowHeight: 48,  contentBinding: SC.Binding.oneWay('Showcase.collectionItems'),  exampleView: SC.ListItemView.extend({  hasContentIcon: true,  hasContentRightIcon: true,  contentCheckboxKey: 'isSelected',  contentIconKey: 'icon',  contentRightIconKey: 'rightIcon',  contentValueKey: 'title'  })  })  })"
      }),
      Showcase.ViewsItemContent.create({
        title: 'Editable',
        example: "SC.ScrollView.extend({  classNames: ['my-scroll-view'],  layout: { left: 20, right: 20, top: 20, bottom: 20 },  contentView:  SC.ListView.extend({  canDeleteContent: true,  canEditContent: true,  canReorderContent: true,  classNames: ['my-list-view'],  rowHeight: 48,  contentBinding: SC.Binding.oneWay('Showcase.editableCollectionItems'),  exampleView: SC.ListItemView.extend({  hasContentIcon: true,  hasContentRightIcon: true,  contentCheckboxKey: 'isSelected',  contentIconKey: 'icon',  contentRightIconKey: 'rightIcon',  contentValueKey: 'title'  })  })  })",
        supportAction: function() {
          Showcase.propertyDidChange('editableCollectionItems');
        },
        supportTitle: 'Reset Content'
      })
    ],
    exampleHeight: 420
  })
});
