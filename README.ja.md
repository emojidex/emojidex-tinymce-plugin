emojidex-tinymce-plugin
=======================
emojidexのtinymce用プラグインです。
このプラグインを導入することで、tinymceでemojidexパレットの使用ができ、簡単にemojidex絵文字を挿入することができます！

使い方
-----

```
<head>
  <link href="https://cdn.emojidex.com/scripts/css/emojidex.min.css" rel="stylesheet" />
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>
  <script src="https://cdn.emojidex.com/scripts/javascript/emojidex.min.js"></script>
  <script src="../node_modules/tinymce/tinymce.min.js"></script>
  <script src="emojidex-tinymce-plugin.js"></script>
  <script>
    tinymce.init({
      selector:'textarea',
      plugins: 'emojidex',
      toolbar: 'emojidex'
    });
  </script>
</head>
```

ライセンス
=======
emojidex and emojidex tools are licensed under the
[emojidex Open License](https://www.emojidex.com/emojidex/emojidex_open_license).

©2013 the emojidex project / K.K. GenSouSha [Phantom Creation Inc.]
