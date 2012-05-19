// ==========================================================================
// Project:   Showcase
// Copyright: @2012 Tyler Keating
// ==========================================================================
/*globals Showcase */
sc_require('system/views_item_content.js');
sc_require('views/views_list_view.js');


/**
  This pre-configured view demonstrates SC.ButtonView.
*/
Showcase.buttonViews = SC.ScrollView.design({
  contentView: Showcase.ViewsListView.design({
    content: [
      Showcase.ViewsItemContent.create({
        title: 'Regular',
        example: "SC.View.extend({  childViews: ['regularButton', 'iconButton'],  regularButton: SC.ButtonView.extend({  layout: { width: 120, height: 24, centerX: -70, centerY: 0 },  title: 'Push Me'  }),  iconButton: SC.ButtonView.extend({  icon: 'sc-icon-favorite-16',  layout: { width: 120, height: 24, centerX: 70, centerY: 0 },  title: 'Love Me'  })  })"
      }),
      Showcase.ViewsItemContent.create({
        title: 'Small',
        example: "SC.View.extend({  childViews: ['regularButton', 'iconButton'],  regularButton: SC.ButtonView.extend({  controlSize: SC.SMALL_CONTROL_SIZE,  layout: { width: 100, height: 18, centerX: -60, centerY: 0 },  title: 'Push Me'  }),  iconButton: SC.ButtonView.extend({  controlSize: SC.SMALL_CONTROL_SIZE,  icon: sc_static('images/green-dot.png'),  layout: { width: 100, height: 18, centerX: 60, centerY: 0 },  title: 'Status OK'  })  })"
      }),
      Showcase.ViewsItemContent.create({
        title: 'Huge',
        example: "SC.View.extend({  childViews: ['regularButton', 'iconButton'],  regularButton: SC.ButtonView.extend({  controlSize: SC.HUGE_CONTROL_SIZE,  layout: { width: 120, height: 30, centerX: -70, centerY: 0 },  title: 'Push Me'  }),  iconButton: SC.ButtonView.extend({  controlSize: SC.HUGE_CONTROL_SIZE,  icon: 'sc-icon-options-16',  layout: { width: 120, height: 30, centerX: 70, centerY: 0 },  title: 'Configure'  })  })"
      }),
      Showcase.ViewsItemContent.create({
        title: 'Jumbo',
        example: "SC.View.extend({  childViews: ['regularButton', 'iconButton'],  regularButton: SC.ButtonView.extend({  controlSize: SC.JUMBO_CONTROL_SIZE,  layout: { width: 150, height: 44, centerX: -85, centerY: 0 },  title: 'Push Me'  }),  iconButton: SC.ButtonView.extend({  controlSize: SC.JUMBO_CONTROL_SIZE,  icon: 'sc-icon-cancel-24',  layout: { width: 150, height: 44, centerX: 85, centerY: 0 },  title: 'Delete'  })  })"
      }),
      Showcase.ViewsItemContent.create({
        title: 'Toggles',
        example: "SC.View.extend({  childViews: ['toggle', 'toggleOn', 'toggleOff'],  toggle: SC.ButtonView.extend({  buttonBehavior: SC.TOGGLE_BEHAVIOR,  layout: { width: 120, height: 24, centerX: -135, centerY: 0 },  title: 'Toggle Me'  }),  toggleOn: SC.ButtonView.extend({  buttonBehavior: SC.TOGGLE_ON_BEHAVIOR,  layout: { width: 120, height: 24, centerX: 0, centerY: 0 },  title: 'Toggle On',  value: false  }),  toggleOff: SC.ButtonView.extend({  buttonBehavior: SC.TOGGLE_OFF_BEHAVIOR,  layout: { width: 120, height: 24, centerX: 135, centerY: 0 },  title: 'Toggle Off',  value: true  })  });",
        supportAction: function() {
          this.setPath('parentView.exampleBox.contentView.toggleOn.value', false);
          this.setPath('parentView.exampleBox.contentView.toggleOff.value', true);
        },
        supportTitle: 'Reset Values'
      }),
      Showcase.ViewsItemContent.create({
        title: 'States',
        example: "SC.View.extend({  childViews: ['disabledButton', 'defaultButton'],  disabledButton: SC.ButtonView.extend({  isEnabled: false,  layout: { width: 100, height: 24, centerX: 60, centerY: 0 },  title: 'Disabled'  }),  defaultButton: SC.ButtonView.extend({  isDefault: true,  layout: { width: 100, height: 24, centerX: -60, centerY: 0 },  title: 'Default'  })  })"
      }),
      Showcase.ViewsItemContent.create({
        title: 'Capsule',
        example: "SC.ButtonView.extend({  layout: { width: 100, height: 24, centerX: 0, centerY: 0 },  themeName: 'capsule',  title: 'Click Me'  });"
      }),
      Showcase.ViewsItemContent.create({
        title: 'Pointers',
        example: "SC.View.extend({  childViews: ['pointLeftButton', 'pointRightButton'],  pointLeftButton: SC.ButtonView.extend({  layout: { width: 100, height: 24, centerX: -50, centerY: 0 },  themeName: 'point-left',  title: 'Back'  }),  pointRightButton: SC.ButtonView.extend({  layout: { width: 100, height: 24, centerX: 50, centerY: 0 },  themeName: 'point-right',  title: 'Forward'  })  });"
      })
    ]
  })
});
