#Bookmarklet Template
A template for creating bookmarklets

##About the Template
This template provides a quick and easy starting point for creating new [bookmarklets](http://en.wikipedia.org/wiki/Bookmarklet). A bookmarklet allows you to extend the functionality of your browser or a web page with a single click. The Wikipedia page provides [a simple example](http://en.wikipedia.org/wiki/Bookmarklet#Example).

##Modifying the Template
Since this is just a template, it doesn't do very much out of the box. You'll need to add your own code in order to do anything useful. Fortunately, that's really simple to do!

There are two functions defined in the template. The first is performs any initialization tasks neccessary before the bookmarklet can do real work. For example, here you might want to check for and add any dependencies to the DOM. The template adds jQuery if it doesn't already exists, but there is no reason you can't remove those lines if you don't need them.

The second function does all the heavy lifting. This is where you add your code to do, well, anything you want!

##Adding the Bookmarklet
1. Create a new bookmark in your browser. The keyboard shortcut is usually Ctrl+D.
2. Set the name to anything you desire.
3. Paste the code from bookmarklet.js into the URL field.
4. Save the bookmark.
