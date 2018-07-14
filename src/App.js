import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Invision Code Challenge</h1>
        <h2>Summary</h2>

        <p>For this code challenge, you will create a section of a landing page that displays the offerings from InVision. It will include 3 tabbed sections that automatically switches tabs until the user navigates to a tab on their own. On mobile, it simply provides 3 sections with horizontal scrolling.</p>

        <h2>Requirements</h2>

        <ul>
          <li>Matches Design</li>
          <li>Responsive</li>
          <li>
            Automatically swaps tabs
            <ul>
              <li>Progress bar shows time until swap</li>
              <li>Pauses when the links are not in the viewport</li>
            </ul>
          </li>
          <li>
            Clicking a tab link swaps to the tab
            <ul>
              <li>This also stops the auto swapping</li>
            </ul>
          </li>
          <li>Mobile shows all 3 sections with horizontal scrolling</li>
        </ul>

        <h2>Tech Stack</h2>

        <p>The only requirement here is React. Feel free to use whatever css framework or 3rd party lib to help with the challenge. Internally, we use React@16.3.x, styled-components, and NextJS. The tool should work in the latest version of Chrome, Firefox, Safari, Edge, Internet Explorer, iOS Safari, and Samsung Internet.</p>
      </div>
    );
  }
}

export default App;
