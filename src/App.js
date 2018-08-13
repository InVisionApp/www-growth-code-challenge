import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Invision Code Challenge</h1>
        <h2>Summary</h2>

        <p><em>Part 1:</em> Build out the sections of our Enterprise page provided in the design file (linked above). This will include A) the page itself; B) the video modal (use any video you'd like), and C) the form modal. When a visitor clicks the CTA "Request a demo", the form modal will open, containing Enterprise demo request form.</p>
        <p><em>Part 2:</em> Store form submissions in a NoSQL database. Please provide access to this database for submissions to be verified.</p>
        <p><em>Part 3:</em> Provide documentation outlining your best idea for an experiment you would run on this page, with the goal of increasing conversion rates on the Enterprise demo request form. BONUS: Use Freehand to mockup your idea: https://freehand.invisionapp.com/freehand/new</p>

        <h2>Requirements</h2>

        <ul>
          <li>Matches Design</li>
          <li>Responsive</li>
          <li>"Request a demo" CTA opens the demo form modal</li>
          <li>The video play button will open a video modal
            <ul>
              <li>When the video modal closes, be sure the video stops playing</li>
            </ul>
          </li>
        </ul>

        <h2>Tech Stack</h2>

        <p>The only requirement here is React. Feel free to use whatever CSS framework or 3rd party lib to help with the challenge. Internally, we use React@16.3.x, styled-components, and NextJS. The tool should work in the latest version of Chrome, Firefox, Safari, Edge, Internet Explorer, iOS Safari, and Samsung Internet.</p>
      </div>
    );
  }
}

export default App;
