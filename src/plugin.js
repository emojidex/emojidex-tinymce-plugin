import * as url from './img/icon.png';

const checkPalette = (editor, e) => {
  if (typeof Palette != 'undefined') {
    $(e.target.$el).emojidexPalette({
      onEmojiButonnClicked: (insertString) => {
        editor.insertContent(insertString.imageTag);
      }
    });
  } else {
    setTimeout(() => { checkPalette(editor, e) }, 1000);
  }
}

const plugin = (editor) => {
  editor.addButton('emojidex', {
    tooltip: 'emojidex',
    image: url.default,
    onpostrender: (e) => {
      checkPalette(editor, e);
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
