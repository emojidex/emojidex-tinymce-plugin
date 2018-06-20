import url from './img/icon.png';

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

export default class plugin {
  constructor(editor) {
    editor.addButton('emojidex', {
      tooltip: 'emojidex',
      image: url,
      onpostrender: (e) => {
        checkPalette(editor, e);
      }
    });
    editor.on('init', (e) => {
      tinymce.activeEditor.dom.loadCSS('https://cdn.emojidex.com/scripts/css/emojidex.min.css');
    });
  }
};
