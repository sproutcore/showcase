// ==========================================================================
// Project:   Showcase
// Copyright: ©2012 7x7 Software, Inc.
// License:   Licensed under MIT license
// ==========================================================================
/*global Showcase */

window.SHOWCASE_IMGS = {
  'images/green-dot.png': sc_static('images/green-dot.png'),
  './images/sproutcore-128.png': sc_static('sproutcore-128.png'),
  './images/sproutcore-512.png': sc_static('sproutcore-512.png'),
};



Showcase.viewsPage = SC.Page.create({

  buttonViews: SC.ScrollView.design({
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
          supportAction: function () {
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
          title: 'Dark',
          example: "SC.View.extend({  childViews: ['toggle', 'toggleOn', 'toggleOff'],  toggle: SC.ButtonView.extend({  buttonBehavior: SC.TOGGLE_BEHAVIOR,  layout: { width: 120, height: 24, centerX: -135, centerY: 0 },  themeName: 'dark',  title: 'Toggle Me'  }),  toggleOn: SC.ButtonView.extend({  buttonBehavior: SC.TOGGLE_ON_BEHAVIOR,  layout: { width: 120, height: 24, centerX: 0, centerY: 0 },  themeName: 'dark',  title: 'Toggle On',  value: false  }),  toggleOff: SC.ButtonView.extend({  buttonBehavior: SC.TOGGLE_OFF_BEHAVIOR,  layout: { width: 120, height: 24, centerX: 135, centerY: 0 },  themeName: 'dark',  title: 'Toggle Off',  value: true  })  });"
        }),
        Showcase.ViewsItemContent.create({
          title: 'Info',
          example: "SC.View.extend({  childViews: ['toggle', 'toggleOn', 'toggleOff'],  toggle: SC.ButtonView.extend({  buttonBehavior: SC.TOGGLE_BEHAVIOR,  layout: { width: 120, height: 24, centerX: -135, centerY: 0 },  themeName: 'info',  title: 'Toggle Me'  }),  toggleOn: SC.ButtonView.extend({  buttonBehavior: SC.TOGGLE_ON_BEHAVIOR,  layout: { width: 120, height: 24, centerX: 0, centerY: 0 },  themeName: 'info',  title: 'Toggle On',  value: false  }),  toggleOff: SC.ButtonView.extend({  buttonBehavior: SC.TOGGLE_OFF_BEHAVIOR,  layout: { width: 120, height: 24, centerX: 135, centerY: 0 },  themeName: 'info',  title: 'Toggle Off',  value: true  })  });"
        }),
        Showcase.ViewsItemContent.create({
          title: 'Success',
          example: "SC.View.extend({  childViews: ['toggle', 'toggleOn', 'toggleOff'],  toggle: SC.ButtonView.extend({  buttonBehavior: SC.TOGGLE_BEHAVIOR,  layout: { width: 120, height: 24, centerX: -135, centerY: 0 },  themeName: 'success',  title: 'Toggle Me'  }),  toggleOn: SC.ButtonView.extend({  buttonBehavior: SC.TOGGLE_ON_BEHAVIOR,  layout: { width: 120, height: 24, centerX: 0, centerY: 0 },  themeName: 'success',  title: 'Toggle On',  value: false  }),  toggleOff: SC.ButtonView.extend({  buttonBehavior: SC.TOGGLE_OFF_BEHAVIOR,  layout: { width: 120, height: 24, centerX: 135, centerY: 0 },  themeName: 'success',  title: 'Toggle Off',  value: true  })  });"
        }),
        Showcase.ViewsItemContent.create({
          title: 'Warning',
          example: "SC.View.extend({  childViews: ['toggle', 'toggleOn', 'toggleOff'],  toggle: SC.ButtonView.extend({  buttonBehavior: SC.TOGGLE_BEHAVIOR,  layout: { width: 120, height: 24, centerX: -135, centerY: 0 },  themeName: 'warning',  title: 'Toggle Me'  }),  toggleOn: SC.ButtonView.extend({  buttonBehavior: SC.TOGGLE_ON_BEHAVIOR,  layout: { width: 120, height: 24, centerX: 0, centerY: 0 },  themeName: 'warning',  title: 'Toggle On',  value: false  }),  toggleOff: SC.ButtonView.extend({  buttonBehavior: SC.TOGGLE_OFF_BEHAVIOR,  layout: { width: 120, height: 24, centerX: 135, centerY: 0 },  themeName: 'warning',  title: 'Toggle Off',  value: true  })  });"
        }),
        Showcase.ViewsItemContent.create({
          title: 'Danger',
          example: "SC.View.extend({  childViews: ['toggle', 'toggleOn', 'toggleOff'],  toggle: SC.ButtonView.extend({  buttonBehavior: SC.TOGGLE_BEHAVIOR,  layout: { width: 120, height: 24, centerX: -135, centerY: 0 },  themeName: 'danger',  title: 'Toggle Me'  }),  toggleOn: SC.ButtonView.extend({  buttonBehavior: SC.TOGGLE_ON_BEHAVIOR,  layout: { width: 120, height: 24, centerX: 0, centerY: 0 },  themeName: 'danger',  title: 'Toggle On',  value: false  }),  toggleOff: SC.ButtonView.extend({  buttonBehavior: SC.TOGGLE_OFF_BEHAVIOR,  layout: { width: 120, height: 24, centerX: 135, centerY: 0 },  themeName: 'danger',  title: 'Toggle Off',  value: true  })  });"
        }),
        Showcase.ViewsItemContent.create({
          title: 'Pointers',
          example: "SC.View.extend({  childViews: ['pointLeftButton', 'pointRightButton'],  pointLeftButton: SC.ButtonView.extend({  layout: { width: 100, height: 24, centerX: -50, centerY: 0 },  themeName: 'point-left',  title: 'Back'  }),  pointRightButton: SC.ButtonView.extend({  layout: { width: 100, height: 24, centerX: 50, centerY: 0 },  themeName: 'point-right',  title: 'Forward'  })  });"
        })
      ]
    })
  }),

  // This is dumb.  Don't do it this way, because the "class"es of each aren't replaced by SC.Page as they would be if they were set directly on the property.
  // TODO: fix these.
  checkboxViews: Showcase.checkboxViews,

  containerViews: SC.ScrollView.design({
    contentView: Showcase.ViewsListView.design({
      content: [
        Showcase.ViewsItemContent.create({
          title: 'Regular',
          example: "SC.ContainerView.extend({  layout: { left: 20, right: 20, top: 20, bottom: 20 },  nowShowing: 'blueSampleView',  blueSampleView: SC.LabelView.extend({  classNames:['blue-sample-view'],  value: 'Blue View'  }),  redSampleView: SC.LabelView.extend({  classNames:['red-sample-view'],  value: 'Red View'  }),  yellowSampleView: SC.LabelView.extend({  classNames:['yellow-sample-view'],  value: 'Yellow View'  }),  greenSampleView: SC.LabelView.extend({  classNames:['dark-green-sample-view'],  value: 'Green View' })  });",
          supportAction: function () {
            var containerView = this.getPath('parentView.exampleBox.contentView');
            if (containerView.get('nowShowing') === 'blueSampleView') containerView.set('nowShowing', 'redSampleView');
            else if (containerView.get('nowShowing') === 'redSampleView') containerView.set('nowShowing', 'yellowSampleView');
            else if (containerView.get('nowShowing') === 'yellowSampleView') containerView.set('nowShowing', 'greenSampleView');
            else containerView.set('nowShowing', 'blueSampleView');
          },
          supportTitle: 'Toggle nowShowing'
        }),
        Showcase.ViewsItemContent.create({
          title: 'DISSOLVE transition',
          example: "SC.ContainerView.extend({  layout: { left: 20, right: 20, top: 20, bottom: 20 },  nowShowing: 'blueSampleView',  transitionSwap: SC.ContainerView.DISSOLVE,  transitionSwapOptions: { duration: 1.2 },  blueSampleView: SC.LabelView.extend({  classNames:['blue-sample-view'],  value: 'Blue View'  }),  redSampleView: SC.LabelView.extend({  classNames:['red-sample-view'],  value: 'Red View'  }),  yellowSampleView: SC.LabelView.extend({  classNames:['yellow-sample-view'],  value: 'Yellow View'  }),  greenSampleView: SC.LabelView.extend({  classNames:['dark-green-sample-view'],  value: 'Green View'  })  });",
          supportAction: function () {
            var containerView = this.getPath('parentView.exampleBox.contentView');
            if (containerView.get('nowShowing') === 'blueSampleView') containerView.set('nowShowing', 'redSampleView');
            else if (containerView.get('nowShowing') === 'redSampleView') containerView.set('nowShowing', 'yellowSampleView');
            else if (containerView.get('nowShowing') === 'yellowSampleView') containerView.set('nowShowing', 'greenSampleView');
            else containerView.set('nowShowing', 'blueSampleView');
          },
          supportTitle: 'Toggle nowShowing'
        }),
        Showcase.ViewsItemContent.create({
          title: 'FADE_COLOR transition',
          example: "SC.ContainerView.extend({  layout: { left: 20, right: 20, top: 20, bottom: 20 },  nowShowing: 'blueSampleView',  transitionSwap: SC.ContainerView.FADE_COLOR,  transitionSwapOptions: { duration: 1.2, color: 'white' },  blueSampleView: SC.LabelView.extend({  classNames:['blue-sample-view'],  value: 'Blue View'  }),  redSampleView: SC.LabelView.extend({  classNames:['red-sample-view'],  value: 'Red View'  }),  yellowSampleView: SC.LabelView.extend({  classNames:['yellow-sample-view'],  value: 'Yellow View'  }),  greenSampleView: SC.LabelView.extend({  classNames:['dark-green-sample-view'],  value: 'Green View'  })  });",
          supportAction: function () {
            var containerView = this.getPath('parentView.exampleBox.contentView');
            if (containerView.get('nowShowing') === 'blueSampleView') containerView.set('nowShowing', 'redSampleView');
            else if (containerView.get('nowShowing') === 'redSampleView') containerView.set('nowShowing', 'yellowSampleView');
            else if (containerView.get('nowShowing') === 'yellowSampleView') containerView.set('nowShowing', 'greenSampleView');
            else containerView.set('nowShowing', 'blueSampleView');
          },
          supportTitle: 'Toggle nowShowing'
        }),
        Showcase.ViewsItemContent.create({
          title: 'MOVE_IN transition',
          example: "SC.ContainerView.extend({  layout: { left: 20, right: 20, top: 20, bottom: 20 },  nowShowing: 'blueSampleView',  transitionSwap: SC.ContainerView.MOVE_IN,  transitionSwapOptions: { duration: 1.2, direction: 'up' },  blueSampleView: SC.LabelView.extend({  classNames:['blue-sample-view'],  value: 'Blue View',  wantsAcceleratedLayer: YES  }),  redSampleView: SC.LabelView.extend({  classNames:['red-sample-view'],  value: 'Red View',  wantsAcceleratedLayer: YES  }),  yellowSampleView: SC.LabelView.extend({  classNames:['yellow-sample-view'],  value: 'Yellow View',  wantsAcceleratedLayer: YES  }),  greenSampleView: SC.LabelView.extend({  classNames:['dark-green-sample-view'],  value: 'Green View',  wantsAcceleratedLayer: YES  })  });",
          supportAction: function () {
            var containerView = this.getPath('parentView.exampleBox.contentView');
            if (containerView.get('nowShowing') === 'blueSampleView') containerView.set('nowShowing', 'redSampleView');
            else if (containerView.get('nowShowing') === 'redSampleView') containerView.set('nowShowing', 'yellowSampleView');
            else if (containerView.get('nowShowing') === 'yellowSampleView') containerView.set('nowShowing', 'greenSampleView');
            else containerView.set('nowShowing', 'blueSampleView');
          },
          supportTitle: 'Toggle nowShowing'
        }),
        Showcase.ViewsItemContent.create({
          title: 'PUSH transition',
          example: "SC.ContainerView.extend({  layout: { left: 20, right: 20, top: 20, bottom: 20 },  nowShowing: 'blueSampleView',  transitionSwap: SC.ContainerView.PUSH,  transitionSwapOptions: { duration: 1.2, direction: 'right' },  blueSampleView: SC.LabelView.extend({  classNames:['blue-sample-view'],  value: 'Blue View',  wantsAcceleratedLayer: YES  }),  redSampleView: SC.LabelView.extend({  classNames:['red-sample-view'],  value: 'Red View',  wantsAcceleratedLayer: YES  }),  yellowSampleView: SC.LabelView.extend({  classNames:['yellow-sample-view'],  value: 'Yellow View',  wantsAcceleratedLayer: YES  }),  greenSampleView: SC.LabelView.extend({  classNames:['dark-green-sample-view'],  value: 'Green View',  wantsAcceleratedLayer: YES  })  });",
          supportAction: function () {
            var containerView = this.getPath('parentView.exampleBox.contentView');
            if (containerView.get('nowShowing') === 'blueSampleView') containerView.set('nowShowing', 'redSampleView');
            else if (containerView.get('nowShowing') === 'redSampleView') containerView.set('nowShowing', 'yellowSampleView');
            else if (containerView.get('nowShowing') === 'yellowSampleView') containerView.set('nowShowing', 'greenSampleView');
            else containerView.set('nowShowing', 'blueSampleView');
          },
          supportTitle: 'Toggle nowShowing'
        }),
        Showcase.ViewsItemContent.create({
          title: 'REVEAL transition',
          example: "SC.ContainerView.extend({  layout: { left: 20, right: 20, top: 20, bottom: 20 },  nowShowing: 'blueSampleView',  transitionSwap: SC.ContainerView.REVEAL,  transitionSwapOptions: { duration: 1.2, direction: 'down' },  blueSampleView: SC.LabelView.extend({  classNames:['blue-sample-view'],  value: 'Blue View',  wantsAcceleratedLayer: YES  }),  redSampleView: SC.LabelView.extend({  classNames:['red-sample-view'],  value: 'Red View',  wantsAcceleratedLayer: YES  }),  yellowSampleView: SC.LabelView.extend({  classNames:['yellow-sample-view'],  value: 'Yellow View',  wantsAcceleratedLayer: YES  }),  greenSampleView: SC.LabelView.extend({  classNames:['dark-green-sample-view'],  value: 'Green View',  wantsAcceleratedLayer: YES  })  });",
          supportAction: function () {
            var containerView = this.getPath('parentView.exampleBox.contentView');
            if (containerView.get('nowShowing') === 'blueSampleView') containerView.set('nowShowing', 'redSampleView');
            else if (containerView.get('nowShowing') === 'redSampleView') containerView.set('nowShowing', 'yellowSampleView');
            else if (containerView.get('nowShowing') === 'yellowSampleView') containerView.set('nowShowing', 'greenSampleView');
            else containerView.set('nowShowing', 'blueSampleView');
          },
          supportTitle: 'Toggle nowShowing'
        })
      ],
      exampleHeight: 300
    })
  }),

  dateFieldViews: Showcase.dateFieldViews,

  disclosureViews: Showcase.disclosureViews,

  gridViews: SC.ScrollView.design({
    contentView: Showcase.ViewsListView.design({
      content: [
        Showcase.ViewsItemContent.create({
          title: 'Regular',
          example: "SC.GridView.extend({  columnWidth: 120,  rowHeight: 58,  contentBinding: SC.Binding.oneWay('Showcase.collectionItems'),  layout: { left: 20, right: 20, top: 20, bottom: 20 },  exampleView: SC.View.extend(SC.Control, {  classNames: ['grid-example-view'],  childViews: ['image', 'title'],  image: SC.ImageView.extend({  layout: { centerX: 0, centerY: 0, height: 24, width: 24 },  valueBinding: SC.Binding.oneWay('.parentView*content.icon')  }),  title: SC.LabelView.extend({  layout: { centerX: 0, bottom: 0, height: 18, width: 120 },  valueBinding: SC.Binding.oneWay('.parentView*content.title')  })  })  })"
        }),

        Showcase.ViewsItemContent.create({
          title: 'Scrollable with Minimum Width',
          example: "SC.ScrollView.extend({ layout: { left: 20, right: 20, top: 20, bottom: 20 },  contentView: SC.GridView.extend({  columnWidth: 200,  rowHeight: 200,  layout: { minWidth: 600 },  contentBinding: SC.Binding.oneWay('Showcase.collectionItems'),  exampleView: SC.View.extend(SC.Control, {  classNames: ['grid-example-view'],  childViews: ['image', 'title'],  image: SC.ImageView.extend({  layout: { centerX: 0, centerY: 0, height: 24, width: 24 },  valueBinding: SC.Binding.oneWay('.parentView*content.icon')  }),  title: SC.LabelView.extend({  layout: { centerX: 0, bottom: 0, height: 18, width: 120 },  valueBinding: SC.Binding.oneWay('.parentView*content.title')  })  })  })  })"
        })
      ],
      exampleHeight: 360
    })
  }),

  imageButtonViews: SC.ScrollView.design({
    contentView: Showcase.ViewsListView.design({
      content: [
        Showcase.ViewsItemContent.create({
          title: 'Regular',
          example: "SC.ImageButtonView.extend({  classNames: ['my-image-button'],  layout: { width: 48, height: 48, centerX: 0, centerY: 0 },  image: 'sc-icon-alert-48'  });"
        })
      ]
    })
  }),

  imageViews: SC.ScrollView.design({
    contentView: Showcase.ViewsListView.design({
      content: [
        Showcase.ViewsItemContent.create({
          title: 'Default (<code>scale: SC.FILL</code>)',
          example: "SC.View.extend({  childViews: ['smallerImage', 'largerImage'],  smallerImage: SC.ImageView.extend({  classNames: ['my-image-view'],  layout: { width: 280, height: 220, centerX: -160, centerY: 0 },  value: sc_static('sproutcore-128.png')  }),  largerImage: SC.ImageView.extend({  classNames: ['my-image-view'],  layout: { width: 280, height: 220, centerX: 160, centerY: 0 },  value: sc_static('sproutcore-512.png')  })  })"
        }),
        Showcase.ViewsItemContent.create({
          title: 'No Scaling (<code>scale: SC.SCALE_NONE</code>)',
          example: "SC.View.extend({  childViews: ['smallerImage', 'largerImage'],  smallerImage: SC.ImageView.extend({  classNames: ['my-image-view'],  layout: { width: 280, height: 220, centerX: -160, centerY: 0 },  scale: SC.SCALE_NONE,  value: sc_static('sproutcore-128.png')  }),  largerImage: SC.ImageView.extend({  classNames: ['my-image-view'],  layout: { width: 280, height: 220, centerX: 160, centerY: 0 },  scale: SC.SCALE_NONE,  value: sc_static('sproutcore-512.png')  })  })"
        }),
        Showcase.ViewsItemContent.create({
          title: 'Best Fit Scaling (<code>scale: SC.BEST_FIT</code>)',
          example: "SC.View.extend({  childViews: ['smallerImage', 'largerImage'],  smallerImage: SC.ImageView.extend({  classNames: ['my-image-view'],  layout: { width: 280, height: 220, centerX: -160, centerY: 0 },  scale: SC.BEST_FIT,  value: sc_static('sproutcore-128.png')  }),  largerImage: SC.ImageView.extend({  classNames: ['my-image-view'],  layout: { width: 280, height: 220, centerX: 160, centerY: 0 },  scale: SC.BEST_FIT,  value: sc_static('sproutcore-512.png')  })  })"
        }),
        Showcase.ViewsItemContent.create({
          title: 'Best Fit Scaling Down Only (<code>scale: SC.BEST_FIT_DOWN_ONLY</code>)',
          example: "SC.View.extend({  childViews: ['smallerImage', 'largerImage'],  smallerImage: SC.ImageView.extend({  classNames: ['my-image-view'],  layout: { width: 280, height: 220, centerX: -160, centerY: 0 },  scale: SC.BEST_FIT_DOWN_ONLY,  value: sc_static('sproutcore-128.png')  }),  largerImage: SC.ImageView.extend({  classNames: ['my-image-view'],  layout: { width: 280, height: 220, centerX: 160, centerY: 0 },  scale: SC.BEST_FIT_DOWN_ONLY,  value: sc_static('sproutcore-512.png')  })  })"
        }),
        Showcase.ViewsItemContent.create({
          title: 'Fill Proportionally (<code>scale: SC.BEST_FILL</code>)',
          example: "SC.View.extend({  childViews: ['smallerImage', 'largerImage'],  smallerImage: SC.ImageView.extend({  classNames: ['my-image-view'],  layout: { width: 280, height: 220, centerX: -160, centerY: 0 },  scale: SC.BEST_FILL,  value: sc_static('sproutcore-128.png')  }),  largerImage: SC.ImageView.extend({  classNames: ['my-image-view'],  layout: { width: 280, height: 220, centerX: 160, centerY: 0 },  scale: SC.BEST_FILL,  value: sc_static('sproutcore-512.png')  })  })"
        }),
        Showcase.ViewsItemContent.create({
          title: 'Top Alignments',
          example: "SC.View.extend({  childViews: ['left', 'middle', 'right'],  left: SC.ImageView.extend({  classNames: ['my-image-view'],  layout: { width: 220, height: 220, centerX: -230, centerY: 0 },  align: SC.ALIGN_TOP_LEFT,  scale: SC.SCALE_NONE,  value: sc_static('sproutcore-128.png')  }),  middle: SC.ImageView.extend({  classNames: ['my-image-view'],  layout: { width: 220, height: 220, centerX: 0, centerY: 0 },  align: SC.ALIGN_TOP,  scale: SC.SCALE_NONE,  value: sc_static('sproutcore-128.png')  }),  right: SC.ImageView.extend({  classNames: ['my-image-view'],  layout: { width: 220, height: 220, centerX: 230, centerY: 0 },  align: SC.ALIGN_TOP_RIGHT,  scale: SC.SCALE_NONE,  value: sc_static('sproutcore-128.png')  })  })"
        }),
        Showcase.ViewsItemContent.create({
          title: 'Middle Alignments',
          example: "SC.View.extend({  childViews: ['left', 'middle', 'right'],  left: SC.ImageView.extend({  classNames: ['my-image-view'],  layout: { width: 220, height: 220, centerX: -230, centerY: 0 },  align: SC.ALIGN_LEFT,  scale: SC.SCALE_NONE,  value: sc_static('sproutcore-128.png')  }),  middle: SC.ImageView.extend({  classNames: ['my-image-view'],  layout: { width: 220, height: 220, centerX: 0, centerY: 0 },  scale: SC.SCALE_NONE,  value: sc_static('sproutcore-128.png')  }),  right: SC.ImageView.extend({  classNames: ['my-image-view'],  layout: { width: 220, height: 220, centerX: 230, centerY: 0 },  align: SC.ALIGN_RIGHT,  scale: SC.SCALE_NONE,  value: sc_static('sproutcore-128.png')  })  })"
        }),
        Showcase.ViewsItemContent.create({
          title: 'Bottom Alignments',
          example: "SC.View.extend({  childViews: ['left', 'middle', 'right'],  left: SC.ImageView.extend({  classNames: ['my-image-view'],  layout: { width: 220, height: 220, centerX: -230, centerY: 0 },  align: SC.ALIGN_BOTTOM_LEFT,  scale: SC.SCALE_NONE,  value: sc_static('sproutcore-128.png')  }),  middle: SC.ImageView.extend({  classNames: ['my-image-view'],  layout: { width: 220, height: 220, centerX: 0, centerY: 0 },  align: SC.ALIGN_BOTTOM,  scale: SC.SCALE_NONE,  value: sc_static('sproutcore-128.png')  }),  right: SC.ImageView.extend({  classNames: ['my-image-view'],  layout: { width: 220, height: 220, centerX: 230, centerY: 0 },  align: SC.ALIGN_BOTTOM_RIGHT,  scale: SC.SCALE_NONE,  value: sc_static('sproutcore-128.png')  })  })"
        })
      ],
      exampleHeight: 270
    })
  }),

  labelViews: Showcase.labelViews,

  listViews: Showcase.listViews,

  popupButtonViews: Showcase.popupButtonViews,

  progressViews: Showcase.progressViews,

  radioViews: Showcase.radioViews,

  scrollViews: Showcase.scrollViews,

  segmentedViews: Showcase.segmentedViews,

  selectViews: Showcase.selectViews,

  sliderViews: Showcase.sliderViews,

  sourceListViews: Showcase.sourceListViews,

  splitViews: Showcase.splitViews,

  stackedViews: Showcase.stackedViews,

  staticContentViews: Showcase.staticContentViews,

  tabViews: Showcase.tabViews,

  textFieldViews: Showcase.textFieldViews,

  toolbarViews: Showcase.toolbarViews,

  webViews: Showcase.webViews,

  wellViews: Showcase.wellViews,

  workspaceViews: Showcase.workspaceViews

});
