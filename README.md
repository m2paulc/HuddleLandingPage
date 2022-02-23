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

## Overview

Recreate the Huddle landing page using React and styled components.

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page

### Screenshot

<p float="left" align="middle">
<img src="./design/mobile-design.jpg" width=18% height=50%/>
<img src="./design/desktop-design.jpg" width=50% height=50%/>
</p>

Add a screenshot of your solution. The easiest way to do this is to use Firefox to view your project, right-click the page and select "Take a Screenshot". You can choose either a full-height screenshot or a cropped one based on how long the page is. If it's very long, it might be best to crop it.

Alternatively, you can use a tool like [FireShot](https://getfireshot.com/) to take the screenshot. FireShot has a free option, so you don't need to purchase it. 

Then crop/optimize/edit your image however you like, add it to your project, and update the file path in the image above.

### Links

- Solution URL: [Here is my code](https://github.com/m2paulc/HuddleLandingPage)
- Live Site URL: [Huddle Landing Page](https://m2paulc.github.io/HuddleLandingPage/)

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
- [x] add social icons in the footer (use react-icons)
- [x] create call to action card component
- [x] style and float call to action card component


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

### Useful resources

- [Traversy Media](https://www.youtube.com/watch?v=02zO0hZmwnw&t=17s) - This helped me learn to use styled components and find answers to any problem while recreating this landing page.

## Author

- Frontend Mentor - [@m2paulc](https://www.frontendmentor.io/profile/m2paulc)
- Twitter - [@yourusername](https://www.twitter.com/yourusername)
