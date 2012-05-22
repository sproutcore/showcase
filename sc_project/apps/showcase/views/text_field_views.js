// ==========================================================================
// Project:   Showcase
// Copyright: @2012 Tyler Keating
// ==========================================================================
/*globals Showcase */
sc_require('system/views_item_content.js');
sc_require('views/views_item_view.js');
sc_require('views/views_list_view.js');


/**
  This pre-configured view demonstrates SC.TextFieldView.
*/
Showcase.textFieldViews = SC.ScrollView.design({
  contentView: Showcase.ViewsListView.design({
    content: [
      Showcase.ViewsItemContent.create({
        title: 'Regular',
        example: "SC.TextFieldView.extend({  layout: { width: 250, height: 32, centerX: 0, centerY: 0 },  value: 'Hector Montegno'  })"
      }),
      Showcase.ViewsItemContent.create({
        title: 'Password',
        example: "SC.TextFieldView.extend({  classNames: ['my-password-field'],  layout: { width: 250, height: 48, centerX: 0, centerY: 0 },  type: 'password',  value: 'er*3oI--%Vzdo2!W'  })"
      }),
      Showcase.ViewsItemContent.create({
        title: 'Multi-line',
        example: "SC.TextFieldView.extend({  isTextArea: true,  layout: { width: 250, height: 80, centerX: 0, centerY: 0 },  value: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'  })"
      }),
      Showcase.ViewsItemContent.create({
        title: 'With Hint',
        example: "SC.TextFieldView.extend({  hint: 'Your given name',  layout: { width: 250, height: 32, centerX: 0, centerY: 0 }  })"
      }),
      Showcase.ViewsItemContent.create({
        title: 'Accessory Views',
        example: "SC.View.extend({  childViews: ['view1', 'view2'],  view1: SC.TextFieldView.extend({  hint: 'What are you doing tonight?',  layout: { width: 250, height: 24, centerX: -135, centerY: 0 },  leftAccessoryView: SC.ImageView.extend({  value: sc_static('images/balloon.png'),  layout: { left: 4, top: 4, width: 16, height: 16 }  })  }),  view2: SC.TextFieldView.extend({  layout: { width: 250, height: 24, centerX: 135, centerY: 0 },  rightAccessoryView: SC.ImageView.extend({  value: sc_static('images/calendar-insert.png'),  layout: { right: 4, top: 4, width: 16, height: 16 }  }),  value: 'Meeting @ 7PM'  })  })"
      }),
      // This will be more useful with email validation
      // Showcase.ViewsItemContent.create({
      //   title: 'Email',
      //   example: "SC.TextFieldView.extend({  layout: { width: 250, height: 24, centerX: 0, centerY: 0 },  type: 'email',  value: 'admin@sproutcore.com'  })"
      // }),
      Showcase.ViewsItemContent.create({
        title: 'No Spellcheck',
        example: "SC.TextFieldView.extend({  autoCorrect: false,  hint: 'Many browsers support spellcheck',  layout: { width: 250, height: 32, centerX: 0, centerY: 0 }  })"
      }),
      Showcase.ViewsItemContent.create({
        title: 'No Auto-capitalize (iOS)',
        example: "SC.TextFieldView.extend({  autoCapitalize: false,  hint: 'iOS supports autocapitalize',  layout: { width: 250, height: 32, centerX: 0, centerY: 0 }  })"
      })
    ]
  })
});
