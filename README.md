# ![Tic-Tac-Toe](http://i63.tinypic.com/691ee0.png)It's a Tic Tac Toe! ![Tic-Tac-Toe](http://i66.tinypic.com/2epn9fc.png)

## Motivation:

This game was created as a part of the learning process at SEI-Eternitiy. The main goals of the project is to be able to build a web application from scratch, apply the programming knowledge that I've aquired, building an application under someone else's specifications, exploring options and creating a well-written README.md file.

---

## Screenshots:
- **Initial wireframe design** 

  <p align=“center”> ![WireFrame](http://i63.tinypic.com/24pjghi.png) </p>
- **End design**

   ![Design](http://i66.tinypic.com/1zzqbo.png)
   ![Design](http://i66.tinypic.com/al470p.png)
   ![Design](http://i65.tinypic.com/10dfoyr.png)
- **Color Scheme**

   ![Scheme](http://i67.tinypic.com/qoc85e.jpg)
- **Cursor**

   ![Cursor](http://i64.tinypic.com/2qcfn10.png)
   
- **Play Audio**

   ![play](http://i68.tinypic.com/zush6q.png)

- **Mute Audio**

   ![mute](http://i64.tinypic.com/r8hxqh.png)

- **Replay Game from Start**

   ![replay](http://i65.tinypic.com/2hzi8er.png)


---

### User Stories:

- As a user, I should be able to start a new tic tac toe game
- As a user, I should be able to click on a square to add X first and then O, and so on
- As a user, I should be shown a message after each turn for if I win, lose, tie or who's turn it is next
- As a user, I should not be able to click the same square twice
- As a user, I should be shown a message when I win, lose or tie
- As a user, I should not be able to continue playing once I win, lose, or tie
- As a user, I should be able to play the game again without refreshing the page
- As a user, I should be able to play sounds when clicking sound button
- As a user, I should be able to mute sounds when clicking mute button

#### Potential Extra Tic Tac Toe Features:

- Keep track of multiple game rounds with a win, lose and tie counter
- Allow players to customize their tokens (X, O, name, picture, etc)
- Use LocalStorage to persist data locally to allow games to continue after page refresh or loss of internet connectivity
- Create an AI opponent: teach JavaScript to play an unbeatable game against you
- Make the site fully responsive so that it is playable from a mobile phone
- Display highest scores
- Have multiple theme options
- Allow players to create an account that includes their previous games scores

## Technologies Used:
- **Command Line**: used for interacting with the computer, navigating the filesystem.
- **Source Control**: used for interaction, management and upload changes on code to Git repository
- **wireframe.cc**: used for building the wireframe
- **Sublime Text Editor**: used for coding with Html, CSS, JQuery and JavaScript
- **Google Chrome Web Browser**: used for launching the website
- **Google Chrome Developer Tools**: used to debug and solve problems in the code
- **SweetAlert**: used for modals popups
- **Animate.css**: used for animations
- **Google Fonts**: used for "Luckiest Guy" and "Indie Flower" fonts
- **Pixlr Photo Editor**: used for removing white background from images used
- **Audacity Audio Editor**: used for trimming audio 
- **cursors-4u.net**: used for mario hat cursor

## Installation:
- **Web Browser**
- **Internet Connectivity**
- **JavaScript support**

## Development Process:
The development process started with a wireframe. A simple design of wireframe was made just to give an idea of elements placement and sizes in the game. Afterwards the files for html, js and css were created. The first step afterwards was to start building those elements in html and css and get them in their right positions, shapes and sizes. Once that was done, I've decided to start on the design of the game to get a feel of where the theme is heading. The simplest thing to start with was choosing a wallpaper, as simple as it is, it has a huge impact on the feel and direction of the game design. Once a wallpaper was chosen the rest of the design elements followed easily (e.g. font style, audio, images and color scheme). The theme has a retro game feel which is why the fonts "Luckiest Guy" and "Indie Flower" were chosen. After placing the elements in their position comes the logic part of the game. Javascript and jQuery were used for DOM manipulation, functions, conditions and eventListeners. Eventlisteners were used in buttons such as audio to fire or mute sounds, replay game button and cells. The logic of the game is simply as follows: Start the game --> initialize scores if the localStorage has null values else get the previous values of scores from localStorage --> listen to button clicks on cells --> if there is a column/row/diagonal with three cells matching to player 1 or player 2 then win! else tie. --> refresh game.


<p align=“center”>ENJOY!</p>
