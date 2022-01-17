# Wu-Tang 👐 Team Profile Generator
<p align="center">
  <img src="./assets/images/wu-tang-triumph.gif" style="width: 900px; height:300px;"</p>


## Table of Contents: 📖
  * [Description](#description)
  * [User Story](#user-story)
  * [Usage](#usage)
  * [Installation](#installation)
  * [Testing](#testing)
  * [Credits](#credits)
  * [License](#license)
  * [Mock-up](#mock-up)
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
- In the terminal type in **"npm start**.
- There will be an array of questions to answer in the command line. This is how you add all your amazing team members.
- Once you add all your employees/ amazing team members select the **"I'm done"** option when prompted. 
- The HTML along with the  _"style.css"_ , stylesheet, will  be found in the _dist folder_. 
- Open the HTML page with your browser to see the results.

## Installation: 
npm i

## Testing: 
To run a test type in _"npm test"_. There are several test suites available in this application.

- __Employee__
   1. constructor
    - creates an Employee object
   2. getName
    - returns the Employee object's name
   3. getId
    - returns the Employee object's ID
   4. getEmail
    - returns the Employee object's email

- __Manager__
    1. constructor
    - creates the Manager object
    2. getOfficeNumber
    -  returns ***036***
    3. getRole
    -  returns *"Manager"*

- __Engineer__
    1. constructor
    - creates an Engineer object
    2. getGitHub
    - returns *"WuTangClanForever"*
    3. getRole
    - returns *"Engineer"*

- __Intern__
    1. constructor
    - creates an Intern object
    2. getSchool
    - returns *"School of Hardknocks Shoalin Univeristy"*
    3. getRole
    - returns *"Intern"*

## Credits:
Wu Tang Clan - Triumph Gif was obtained from [fufurthought.com](https://www.google.com/url?sa=i&url=https%3A%2F%2Ffuforthought.tumblr.com%2Fpost%2F169347404537%2Fwu-tang-clan-triumph&psig=AOvVaw3o4mK5EGQ8aGicQ4a8bN5p&ust=1642472325115000&source=images&cd=vfe&ved=0CAwQjhxqFwoTCNj31bXct_UCFQAAAAAdAAAAABAD)

## License:
The application is covered under a [MIT](https://opensource.org/licenses/MIT) license.

## Mock Up: 
![Mock Up](./assets/images/mockup.png)

## Demo Walk-through Video:   
[Demo](https://github.com/RogueStorm7/Wu-Tang-Team-Profile-Generator/blob/main/assets/walkthrough/walk-through-demo.webm)

## Contributing to This Repo: 
I am not taking pull requests at this time.

## Badges
![badge size](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)
![badge size](https://img.shields.io/badge/Made%20for-VSCode-1f425f.svg)
![License](https://img.shields.io/badge/License-MIT-blue)

## Questions: 
This app can be found on my Github page at [RogueStorm7](https://github.com/RogueStorm7/Wu-Tang-Team-Profile-Generator.git)

&copy; 2022 Mianta McKnight  | All rights reserved | 

