Really simple Javascript alert I've built for personal purposes.

![](https://media.giphy.com/media/YBJBvBJPQcTguxwdC8/giphy.gif)

# USAGE

Don't forget to import the style and script files into your project. 
The notification is stored in sessionStorage and displayed on the next page load.

```html
<link rel="stylesheet" href="lynxalert.css">
<script src="lynxalert.js"></script>
```

Then call:

```javascript
// color = currently only 'Green' and 'Red' colors.
// msg = Your message.
lynxAlert.Green(msg);
lynxAlert.Red(msg);
```
