emojidex-tinymce-plugin
=======================
An emojidex plugin for tinymce which enables emojidex emoji selection, input, 
and display.

Usage
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

License
=======
emojidex and emojidex tools are licensed under the
[emojidex Open License](https://www.emojidex.com/emojidex/emojidex_open_license).

©2013 the emojidex project / K.K. GenSouSha [Phantom Creation Inc.]
