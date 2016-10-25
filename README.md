# mario-item-block

This project is a jQuery plugin that creates a simple area that allows a Mario sprite to jump, hit an item block, and randomly generate an item. Press `space` or mouse click to jump.

### How does it work?

* Include jQuery (e.g. https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js)
* Include the js and css source files
* Create an empty div
* Call the marioItemBlock function on the div

```html

<script src="path/jquery.min.js"></script>
<script src="path/mario.js"></script>
<link rel="stylesheet" type="text/css" href="path/mario.css">
<script>
  $(document).ready(function() {
    $('.game').marioItemBlock();
  });
</script>
```

### Screenshot

![Screenshot](http://i.imgur.com/JY2B41C.png)

### Example
http://kevincho.ca/mario
