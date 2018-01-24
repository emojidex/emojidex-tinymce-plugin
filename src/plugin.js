import _ from 'lodash';
import * as url from './img/icon.png';

const plugin = (editor) => {
  editor.addButton('emojidex', {
    tooltip: 'emojidex',
    image: url.default,

    onclick: function() {
      editor.windowManager.open({
        title: 'emojidex',
        body: [
          {
            type: 'button',
            image: url.default,
            minWidth: 30,
            minHeight: 30,
            onclick: function(e) {
              editor.insertContent('aaaa');
            }
          },
          {
            type: 'button',
            image: url.default,
            minWidth: 30,
            minHeight: 30,
            onclick: function(e) {
              editor.insertContent('bbbb');
            }
          }
        ]
        // onsubmit: function(e) {
        //   // editor.insertContent('Title: ' + e.data.title);
        // }
      });
    }
  });

  return {
    getMetadata: () => {
      return  {
        title: 'emojidex plugin for tinymce',
        author: 'emojidex',
        url: 'https://www.emojidex.com'
      };
    }
  };
};

export default plugin;
