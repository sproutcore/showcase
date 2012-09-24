// ==========================================================================
// Project:   Showcase
// Copyright: @2012 Tyler Keating
// ==========================================================================
/*globals Showcase */
sc_require('system/views_item_content.js');
sc_require('views/views_item_view.js');
sc_require('views/views_list_view.js');


/**
  This pre-configured view demonstrates SC.LabelView.
*/
Showcase.labelViews = SC.ScrollView.design({
  contentView: Showcase.ViewsListView.design({
    action: 'beginEditing',
    isSelectable: false,
    content: [
      Showcase.ViewsItemContent.create({
        title: 'Regular',
        example: "SC.View.extend({  childViews: ['regularLabel', 'iconLabel'],  regularLabel: SC.LabelView.extend({  classNames: ['my-label-view'],  layout: { width: 220, height: 16, centerX: -120, centerY: 0 },  value: 'This is a Label'  }),  iconLabel: SC.LabelView.extend({  classNames: ['my-label-view'],  icon: 'sc-icon-document-16',  layout: { width: 220, height: 16, centerX: 120, centerY: 0 },  value: 'This label has an icon.'  })  })"
      }),
      Showcase.ViewsItemContent.create({
        title: 'Tiny',
        example: "SC.View.extend({  childViews: ['regularLabel', 'iconLabel'],  regularLabel: SC.LabelView.extend({  classNames: ['my-label-view'],  controlSize: SC.TINY_CONTROL_SIZE,  layout: { width: 220, height: 11, centerX: -120, centerY: 0 },  value: 'This is a Label'  }),  iconLabel: SC.LabelView.extend({  classNames: ['my-label-view'],  icon: sc_static('bullet.png'),  controlSize: SC.TINY_CONTROL_SIZE,  layout: { width: 220, height: 11, centerX: 120, centerY: 0 },  value: 'This label has an icon.'  })  })"
      }),
      Showcase.ViewsItemContent.create({
        title: 'Small',
        example: "SC.View.extend({  childViews: ['regularLabel', 'iconLabel'],  regularLabel: SC.LabelView.extend({  classNames: ['my-label-view'],  controlSize: SC.SMALL_CONTROL_SIZE,  layout: { width: 220, height: 15, centerX: -120, centerY: 0 },  value: 'This is a Label'  }),  iconLabel: SC.LabelView.extend({  classNames: ['my-label-view'],  icon: sc_static('grey-dot.png'),  controlSize: SC.SMALL_CONTROL_SIZE,  layout: { width: 220, height: 15, centerX: 120, centerY: 0 },  value: 'This label has an icon.'  })  })"
      }),
      Showcase.ViewsItemContent.create({
        title: 'Large',
        example: "SC.View.extend({  childViews: ['regularLabel', 'iconLabel'],  regularLabel: SC.LabelView.extend({  classNames: ['my-label-view'],  controlSize: SC.LARGE_CONTROL_SIZE,  layout: { width: 220, height: 24, centerX: -120, centerY: 0 },  value: 'This is a Label'  }),  iconLabel: SC.LabelView.extend({  classNames: ['my-label-view'],  icon: 'sc-icon-folder-24',  controlSize: SC.LARGE_CONTROL_SIZE,  layout: { width: 220, height: 24, centerX: 120, centerY: 0 },  value: 'This label has an icon.'  })  })"
      }),
      Showcase.ViewsItemContent.create({
        title: 'Inline Editing',
        example: "SC.LabelView.extend({  classNames: ['my-label-view'],  isEditable: true,  layout: { width: 300, height: 16, centerX: 0, centerY: 0 },  value: 'Double-click this label to edit inline.'  })",
        supportAction: function() {
          var label = this.getPath('parentView.exampleBox.contentView');
          label.beginEditing();
        },
        supportTitle: 'Manually Start Editing'
      })
    ],

    exampleView: Showcase.ViewsItemView.extend({
      beginEditing: function() {
        var label = this.getPath('exampleBox.contentView.regularLabel');
        label.beginEditing();
      }
    })
  })
});
