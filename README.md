# Frontend Mentor - Huddle landing page with alternating feature blocks solution

This is a solution to the [Huddle landing page with alternating feature blocks challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/huddle-landing-page-with-alternating-feature-blocks-5ca5f5981e82137ec91a5100). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Frontend Mentor - Huddle landing page with alternating feature blocks solution]([#frontend-mentor---huddle-landing-page-with-alternating-feature-blocks-solution](https://www.frontendmentor.io/challenges/huddle-landing-page-with-alternating-feature-blocks-5ca5f5981e82137ec91a5100))
  - [Table of contents](#table-of-contents)
  - [Overview](#overview)
    - [The challenge](#the-challenge)
    - [Screenshot](#screenshot)
    - [Links](#links)
  - [My process](#my-process)
    - [Built with](#built-with)
    - [What I learned](#what-i-learned)
    - [Continued development](#continued-development)
    - [Useful resources](#useful-resources)
  - [Author](#author)
  - [Acknowledgments](#acknowledgments)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

Recreate the Huddle landing page using React and styled components.

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page

### Screenshot

![](./screenshot.jpg)

Add a screenshot of your solution. The easiest way to do this is to use Firefox to view your project, right-click the page and select "Take a Screenshot". You can choose either a full-height screenshot or a cropped one based on how long the page is. If it's very long, it might be best to crop it.

Alternatively, you can use a tool like [FireShot](https://getfireshot.com/) to take the screenshot. FireShot has a free option, so you don't need to purchase it. 

Then crop/optimize/edit your image however you like, add it to your project, and update the file path in the image above.

**Note: Delete this note and the paragraphs above when you add your screenshot. If you prefer not to add a screenshot, feel free to remove this entire section.**

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

- [x] initialize git and create github repo
- [x] npm init
- [x] install react and react-dom styled-components
- [x] create src folder and build React component
- [x] modify gitignore to add few more folders and files
- [x] install webpack, webpack-cli, babel-loader, @babel/core, @babel/preset-env, @babel/preset-react, css-loader, style-loader, html-webpack-plugin, webpack-dev-server
- [x] set babel presets in package.json file
- [x] create webpack config file
- [x] create the App main component
- [x] create Header component
- [x] create theme and set global settings
- [x] Build Header component and set media query for mobile 
- [x] create card content for card template. This will feed into the card component.
- [x] include the public folder in the root directory and get images from public. This is needed to dynamically bring in the images for the card component.
- [x] style the card component
- [x] create footer component
- [x] style footer component


### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library
- [Styled Components](https://styled-components.com/) - For styles

**Note: These are just examples. Delete this note and replace the list above with your own choices**

### What I learned

- Setup React manually and setup my own webpack config file.
- Use Styled-components to style this landing page.
- Setup Global Styles for css resets so it will look as intended in any browser. 

```js
import React from "react";
import ReactDOM from "react-dom";
import { Container } from "./components/styles/Container.styled";

class App extends React.Component {
  render() {
    return (
      <>
        <Container>
          <h1>React</h1>
        </Container>
      </>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
```

### Continued development

Use this section to outline areas that you want to continue focusing on in future projects. These could be concepts you're still not completely comfortable with or techniques you found useful that you want to refine and perfect.

### Useful resources

- [Traversy Media](https://www.youtube.com/watch?v=02zO0hZmwnw&t=17s) - This helped me learn to use styled components and find answers to any problem while recreating this landing page.

## Author

- Website - [Add your name here](https://www.your-site.com)
- Frontend Mentor - [@m2paulc](https://www.frontendmentor.io/profile/m2paulc)
- Twitter - [@yourusername](https://www.twitter.com/yourusername)

## Acknowledgments

This is where you can give a hat tip to anyone who helped you out on this project. Perhaps you worked in a team or got some inspiration from someone else's solution. This is the perfect place to give them some credit.
