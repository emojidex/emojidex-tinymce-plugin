## Usage

```
<head>
  <link href="https://cdn.emojidex.com/scripts/css/emojidex.min.css" rel="stylesheet" />
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>
  <script src="https://cdn.emojidex.com/scripts/javascript/emojidex.min.js"></script>
  <script src="../node_modules/tinymce/tinymce.min.js"></script>
  <script>
    tinymce.init({
      selector:'textarea',
      plugins: 'emojidex',
      toolbar: 'emojidex'
    });
  </script>
</head>
```
