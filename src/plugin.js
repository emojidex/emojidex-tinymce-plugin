import _ from 'lodash';
import * as url from './img/icon.png';

const plugin = (editor) => {
  editor.addButton('emojidex', {
    tooltip: 'emojidex',
    image: url.default,
    onpostrender: (e) => {
      $(e.target.$el).emojidexPalette({
        onEmojiButonnClicked: (insertString) => {
          editor.insertContent(insertString.imageTag)
        }
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
