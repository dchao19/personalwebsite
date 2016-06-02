![cat meme](/images/cathello.jpg)

This blog entry doesn't actually have any content in it, which is nice. I'd figured that I would let my CS teacher know about how I actually ended up making this website in the most complicated manner possible. For the record, you can view the source code for this website at [the github project](https://github.com/dchao19/personalwebsite). Here is a list of the tools I've used to created this project.
* **Front end**
  * React, React-Router, React-Bootstrap
  * The Sass CSS Preprocessor (easiest way to load CSS in react)
  * Bootstrap 4 (core styling)
  * jQuery (for neater http requests)
* **Build Tooling**
  * Webpack, with the following loaders
    * __Style:__ bootstrap-loader, style-loader, css-loader, postcss-loader, style-loader
    * __JSX/React:__ import-loader, json-loader, babel-loader
    * __Others:__ file-loader, font-awesome-loader, find-url-loader 
  * Babel, with the following plugins
    * The React preset
    * The ES6/ES2015 (god knows what to call it) preset
    * The class-properties plugin from ES7
    * The bind syntax plugin from ES7
  * ESLint, with the following configuration
    * React ESLint plugin
    * Google extension configuration
    * The following rules were modified and/or changed
      * Indent - 4 spaces, error
      * Max length - off
      * No else return - off
* __Back end__
  * Node.JS
  * Express
  * MongoDB + Mongoose
  * Passport and passport-local-mongoose for authentication
  * Deployment to Azure Websites + MongoLab for the database   
  
### So how did it all work out?
Overall, It went pretty well. The static components of the website was easy, all I did was use React's virtual dom to make things look a little neater. The blog is where things get a lot more interesting. I orginially didn't even want to use a back end, figured I'd just serve static webpages, but that's just not fun. Instead, I created a quick backend with authentication so I could upload posts without directly changing the database but ran into a fundamental problem. *How do I save the content?*

I never quite understood how extremely complex CMS (WordPress) saved all of their data. I figured I have a few options:
* Save raw text, without formatting and just forgo it for the sake of this project. 
* Save HTML into the Mongo document itself, which would be fine, but *it's incredibly bad practice* to set the content of a React component based on it's innerHTML (the prop is called *dangerouslySetInnerHTML* for goodness sakes)
* Save Markdown into the Mongo document, which parsers from markdown->react components exist already.

So that's what I ended up doing. Instead of saving raw text or HTML, all of the blog posts (so this one) are created in Markdown, and uploaded to the database after they've been stringified. Then, when I load the post from the server to render it, I use the react-markdown component to convert the Markdown into a react component and render that. It's probably not the best idea but I was running out of time and out of ideas. 

### Why not render it server-side?
Well I was planning to serve static pages, decided it was too much of a pain and too verbose and switched to straight React. This was before I decided to create a backend. Server-side rendering in React and Express is not easy and I didn't want to rewrite the stateful components of the website. 

![cat bye meme](/images/catbye.jpg)