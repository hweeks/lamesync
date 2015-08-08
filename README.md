Marionette Framework
====================
The simplest possible framework, mostly.
---
## What on earth is this?
This framework is so light, I'm only calling it a framework for fun. I make no assumptions about how you're going to use any of what I've put together. There is a reset css, a main App, a configured up require, a simple router, a view, and one template. I really can't think of anything less to get you started.

## How does it work?
We are using these tools:

  * [RequireJS](https://github.com/jrburke/requirejs)
  * [RequireJS Text](https://github.com/requirejs/text)
  * [Backbone](https://github.com/jashkenas/backbone)
  * [Marionette](https://github.com/marionettejs/backbone.marionette)
  * [Underscore](https://github.com/jashkenas/underscore)
  * [jQuery](https://github.com/jquery/jquery)
  * [Mustache](https://github.com/mustache/mustache)
  * [Stache](http://github.com/jfparadis/requirejs-mustache)

It's all connected up with require. It's pretty snazzy.

## How can I make it work on my machine?
With a little bit of that sweet Node. If you don't have Node, [get it here](https://nodejs.org/download/).

    npm install
    node server.js

Now you're up and running. Go to [localhost:3000](http://localhost:3000) to see it in action.

## This is sweet, what on earth structure is being used?
If you check out the src folder, you'll see an index.html. That puts the app together. You'll more than likely want to get started in the src/js/app folder in app.js. I've setup some simple console messages to show you what's firing and in what order. You'll notice we set the value of 'test' in the model and render it into our template using our view.

## Why mustache?
I'm a firm beliver that a template should have no complex logic and merely ouput data fed to it. Mustache makes sure that's true.

## You've got an idea on how to make this better?
I'm super game to hear about it. We can only become better through our peers, so open a PR, create a discussion, slander me. However you want to go about it, just get your thoughts to me!
