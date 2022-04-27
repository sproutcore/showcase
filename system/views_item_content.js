// ==========================================================================
// Project:   Showcase
// Copyright: ©2012 7x7 Software, Inc.
// License:   Licensed under MIT license
// ==========================================================================
/*globals Showcase */


/**
  This class is used to provide content to the lists of Views & Controls.
*/
Showcase.ViewsItemContent = SC.Object.extend({

  example: null,

  /**
    Takes the example snippet and generates a multiline String.
  */
  exampleString: function() {
    var example = this.get('example'),
        padding = '  ',
        parts;

    parts = example.split('  ');
    parts.forEach(function(part, index) {
      if (part.indexOf('.extend(') >= 0 || part.indexOf('.design(') >= 0 || part.indexOf('function(') >= 0 || part.indexOf('({') >= 0) {
        parts[index] = padding + part;
        padding += '  ';
      } else if (part.indexOf('}.property') >= 0 || part.indexOf('})') >= 0) {
        padding = padding.substr(2);
        parts[index] = padding + part;
      } else {
        parts[index] = padding + part;
      }
    });

    return '\n' + parts.join('\n') + '\n';
  }.property().cacheable(),

  /**
    Takes the example snippet and generates a JavaScript class.
  */
  exampleView: function() {
    var el,
        example = this.get('example');

    // Remove the HTML formatting from the snippet.
    // el = document.createElement("div");
    // el.innerHTML = example;
    // example = el.textContent || el.innerText;

    // Return the JavaScript interpretation.
    example = example.replace(/require\('(.+?)'\)/g, "window.SHOWCASE_IMGS['$1']");
    return eval(example);
  }.property().cacheable(),

  supportTitle: null,

  title: null

});
