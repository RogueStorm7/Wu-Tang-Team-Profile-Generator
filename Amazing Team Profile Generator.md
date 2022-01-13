# Amazing Team Profile Generator

## Table of Contents: 📖
  * [Description](#description)
  * [User Story](#user-story)
  * [Usage](#usage)
  * [Installation](#installation)
  * [Testing](#testing)
  * [Credits](#credits)
  * [License](#license)
  * [Demo Walk-through  Video](#demo-walk-through-video)
  * [Contributing to This Repo](#contributing-to-this-repo)
  * [Badges](#badges)
  * [Questions](#questions)
  
## Description:
  This is a Node.js command-line application that takes in information about software engineering team employees, then generates an HTML webpage that dispalys summaries for each person. Testing is key to make code maintainable, so unit testing for all part of the code and ensuring it passes each test. Please make sure you have installed [node.](https://nodejs.org/en/)

## User Story
AS A manager
I WANT to generate a webpage that displays my team's basic info
SO THAT I have quick access to their emails and GitHub profiles
AS A manager
I WANT to generate a webpage that displays my team's basic info
SO THAT I have quick access to their emails and GitHub profiles

## Acceptance Criteria
GIVEN a command-line application that accepts user input
WHEN I am prompted for my team members and their information
THEN an HTML file is generated that displays a nicely formatted team roster based on user input
WHEN I click on an email address in the HTML
THEN my default email program opens and populates the TO field of the email with the address
WHEN I click on the GitHub username
THEN that GitHub profile opens in a new tab
WHEN I start the application
THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number
WHEN I enter the team manager’s name, employee ID, email address, and office number
THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team
WHEN I select the engineer option
THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu
WHEN I select the intern option
THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu
WHEN I decide to finish building my team
THEN I exit the application, and the HTML is generated

## Usage: 
- In the terminal type in **"npm start"**.
- There will be an array of questions to answer in the command line. This is how you add all your amazing team members.
- Once you add all your employyes/ amazing team members select the **"I'm done"** option when prompted. 
- The HTML along with the  _"style.css"_ , stylesheet, will  be found in the dist folder. 
- Open the HTML page with your browser to see the results.

## Installation: 
npm i

## Testing: 
To run a test type in _"npm test"_. There are several test suites available in this application.

## Credits:
Background image is a free to use image that was obtained from [unsplash.com]()

## License:
The application is covered under a [MIT](https://opensource.org/licenses/MIT) license.

## Mock Up: 
![Mock Up]()

## Demo Walk-through Video:   
A video demonstration of this application can be found [here]()

## Contributing to This Repo: 
I am not taking pull requests at this time.

## Badges
![badge size](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)
![badge size](https://img.shields.io/badge/Made%20for-VSCode-1f425f.svg)
![License](https://img.shields.io/badge/License-MIT-blue)

## Questions: 
This app can be found on my Github page at [RogueStorm7](https://github.com/RogueStorm7/The-Team-Profile-Generator.git)

&copy; 2022 Mianta McKnight  | All rights reserved | 

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.