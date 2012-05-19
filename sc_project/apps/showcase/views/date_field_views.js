// ==========================================================================
// Project:   Showcase
// Copyright: @2012 Tyler Keating
// ==========================================================================
/*globals Showcase */
sc_require('system/views_item_content.js');
sc_require('views/views_list_view.js');


/**
  This pre-configured view demonstrates SC.DateFieldView.
*/
Showcase.dateFieldViews = SC.ScrollView.design({
  contentView: Showcase.ViewsListView.design({
    content: [
      Showcase.ViewsItemContent.create({
        title: 'Regular',
        example: "SC.View.extend({  childViews: ['regularField', 'formattedLabel', 'formattedField'],  regularField: SC.DateFieldView.extend({  classNames: ['centered-field'],  layout: { width: 160, height: 24, centerX: -90, centerY: 0 },  value: SC.DateTime.create()  }),  formattedLabel: SC.LabelView.extend({  layout: { width: 160, height: 18, centerX: 90, centerY: -20 },  value: 'Custom format'  }),  formattedField: SC.DateFieldView.extend({  classNames: ['centered-field'],  formatDate: '%b | %d | %Y',  layout: { width: 160, height: 24, centerX: 90, centerY: 0 },  value: SC.DateTime.create()  })  })"
      }),
      Showcase.ViewsItemContent.create({
        title: 'Date and Time',
        example: "SC.View.extend({  childViews: ['regularField', 'formattedLabel', 'formattedField'],  regularField: SC.DateFieldView.extend({  classNames: ['centered-field'],  layout: { width: 160, height: 24, centerX: -90, centerY: 0 },  showTime: true,  value: SC.DateTime.create()  }),  formattedLabel: SC.LabelView.extend({  layout: { width: 160, height: 18, centerX: 90, centerY: -20 },  value: 'Custom format'  }),  formattedField: SC.DateFieldView.extend({  classNames: ['centered-field'],  formatDateTime: '%y-%m-%d @ %H:%M',  layout: { width: 160, height: 24, centerX: 90, centerY: 0 },  showTime: true,  value: SC.DateTime.create()  })  })"
      }),
      Showcase.ViewsItemContent.create({
        title: 'Time Only',
        example: "SC.View.extend({  childViews: ['regularField', 'formattedLabel', 'formattedField'],  regularField: SC.DateFieldView.extend({  classNames: ['centered-field'],  layout: { width: 160, height: 24, centerX: -90, centerY: 0 },  showDate: false,  showTime: true,  value: SC.DateTime.create()  }),  formattedLabel: SC.LabelView.extend({  layout: { width: 160, height: 18, centerX: 90, centerY: -20 },  value: 'Custom format'  }),  formattedField: SC.DateFieldView.extend({  classNames: ['centered-field'],  formatTime: '%Hh%Mm%Ss',  layout: { width: 160, height: 24, centerX: 90, centerY: 0 },  showDate: false,  showTime: true,  value: SC.DateTime.create()  })  })"
      })
    ]
  })
});
