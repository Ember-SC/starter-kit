# Ember Components Example

* With the select element using an opacity of zero (0), the element can have a custom background, and when clicking on the element the hidden select box still behaves normally (browser's default behavior)
* The element with the class `.faux-select-selected` needs javascript functionality which updates the content binding to the value that is selected using the invisble select box (on change).

## Steps to build a custom "faux" select box

1. Start with removing the default index template/model
2. Add a component template with a select box
3. Use model for collection of choices
4. Add some attributes and choices
5. Scaffold markup and styles for faux select w/ zero opacity
6. Add some custom style for the faux select box
7. Bind the selected value and set min widths

## Links

* <https://github.com/Ember-SC/starter-kit>
* <http://emberjs.com/guides/components/>
* <http://emberjs.com/api/classes/Ember.Select.html>
* <http://cssfontstack.com>
* <http://www.polymer-project.org/platform/custom-elements.html>
* <https://dvcs.w3.org/hg/webcomponents/raw-file/tip/spec/custom/index.html>

## Styling Notes:

Below is a list of required styles for an example faux select box.

* The `select` element has zero (0) opacity and is positioned `absolute`
* The `.faux-select-box` element is also positioned `absolute`
* The above two elements are siblings as the select box follows the faux element
  resulting in a higher z-index value, so when user clicks the event is fired on
  the invisble select box
* the dimensions of the select box and faux select box need to match so the invisble
  element can be used on top of the faux element

```handlebars
<div class="faux-select">
  <div class="faux-select-box">
    <span class="faux-select-selected">{{selected}}</span>
    <span class="faux-select-graphic">&#x25BE;</span>
  </div>
  <select {{bindAttr name=name class=":faux-select className"}}>
  {{#each choices}}
    <option {{bindAttr value=choice}}>{{choice}}</option>
  {{/each}}
  </select>
</div>
```

```css
/* FauxSelectComponent */
select.faux-select {
    display: block;
    opacity: 0;
    position: absolute;
    height: 20px;
    width: 125px;
    margin: 5px;
}
.faux-select {
    position: relative;
}
.faux-select-box {
    position: absolute;
    min-width: 137px;
}
.faux-select-selected,
.faux-select-graphic {
    height: 17px;
}
.faux-select-selected {
    float: left;
    min-width: 117px;
    padding: 5px 10px;
}
.faux-select-graphic {
    float: right;
    padding: 5px 7px;
}
```

## Disclaimer

The code in this example select box component has not been tested in various browsers and cross-browser css has not been included in the demo code.

## TODO

Calculate dimensions of the select box and programatically set the matching dimension of the select box (hidden) and the faux elements.
