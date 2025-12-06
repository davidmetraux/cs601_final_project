# cs601_final_project

# Deployment
Go to cs601_finalproject
```shell
$ npm run deploy
```

# Source
Used https://github.com/gitname/react-gh-pages to help setup.

Used https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/menu to help with menu styling

Used for Button/Link styling:
https://www.w3schools.com/css/css3_buttons.asp

Used for scrollbar styling:
https://www.w3schools.com/howto/howto_css_custom_scrollbar.asp


Weather API:
https://www.weather.gov/documentation/services-web-api

React Form Hook:
https://react-hook-form.com/get-started

Random:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random

Article (what inspired me to use it for the weather page):
https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/article


Adding SVGs:
https://create-react-app.dev/docs/adding-images-fonts-and-files/#adding-svgs

SVGs from:
https://www.svgrepo.com/

Pathfinder Logo under Paizo's Community Use Policy

Email Logo under MIT License

# Current Work:
- Hosted on GitHub Pages
- Uses React
- Styled Banner with Image
- Navigational Menu
- React Router (Hash Router) for multiple pages
- Homepage that uses the same data as the navigational menu to get more details.
- Page that fetches weather from boston
- Page that gives some contact information and gives a dummy form with a variety of options
- Page that uses Grid and Float that shows off a hobby of mine, Pathfinder
- Page that asynchronously fetches a json of my Resume from the public folder and formats it. 

# Cool Notable Things:
General:
- Flex used very often
- Grid used very often
- website works without CSS
- Works on mobile views down to ~350px
- TypeScript used

Banner:
- Gradient used
- Gradient used over headshot to give effect of fading out
- Title+Logo animates upwards when hovered over
- Buttons in nav animate to different color
Nav buttons are created by iterating through list

Main-area wrapper:
- Scrollbar styled

Home Page: 
- Populated with same data as the nav

Pathfinder: 
- Uses Grid and Float

Boston Weather:
- Fetches weather from API
- Uses Grid

Contact David:
- Uses inputs, textarea, select, checkbox, and radio select
- validates input accordingly, with errors appearing after submission and updating with further edits


# MIT License

Copyright 2025 David Metraux

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.