import plugin from './plugin';

if (tinymce) {
  tinymce.PluginManager.add('emojidex', plugin);
}
