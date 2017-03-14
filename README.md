# js-expand-footer

## Usage

### HTML
```html
<div id="expandFooter">
    <button class="btn up">Up</button>
    <button class="btn down">Down</button>
    <div class="content">My Content</div>
</div>
```
### Javascript
```javascript
var $ = require("jquery");
var ExpandFooter = require("expand-footer");
new ExpandFooter($("#expandFooter"));
```

### CSS
```css
#expandFooter {
    position:fixed;
    bottom:0;
    left:0;
    width: 100%;
    background:#fff;
    text-align: center;
    display:none;
}

#expandFooter .down {
    display:none;
}

#expandFooter button {
    display:block;
    width: 100%;
}

#expandFooter .content {
    display:none;
    overflow-y: auto;
    height: 100%;
}
```