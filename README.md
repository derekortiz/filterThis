# filterThis
jQuery plugin for client side list filtering

<a href="http://derekortiz.net/projects/filterthis">View the Demo</a>

To use, start by including a version of jquery and the plugin file.
```
<script src="//code.jquery.com/jquery-1.11.3.min.js"></script>
<script src="filterThis.js"></script>
```

Create a list of items
```
<div class="user">
	<div class="name">
		Derek Ortiz
	</div><!-- /.name -->
	<div class="date">
		10/22/31
	</div>
</div><!-- /.user -->
```

Create your search input and set target and hide options. 
```
<input type="text" class="filter-box" data-filter-options='{ "filterTarget":".user .name", "filterHide":".user" }'>
```

Call the plugin on your input
```
$("input.filter-box").filterThis();
```

# Options

##filterTarget (string):
Default: ""
The class with the text to be filtered

##filterHide (string);
Default: ""
Class of element or parent element to hide if there is no match

##shouldHide (boolean):
Default: true
Hides element if target is not a match

## shouldHighlight (boolean):
Default: true
Turn highlighting on/off

## highlightColor(string):
Default: yellow
Highight color of matched letters
