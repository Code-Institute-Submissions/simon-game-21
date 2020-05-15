# Simon-Game

This project is about an old game which is called "SimonGame". It is a memory game and it is really fun to play solo and with friends.
 
## UX
 
This game designed as simple as possible so that everyone will be able to learn and play it. It is an one page website so users have access to all the content that they need.

- As an user/player, I need to know how the game works and what is my goal in this game.
- As an user/player, I want to be able to turn the game ON and OFF at any time.
- As an user/player, I want to be able to challenge myself by changing the mode of the game from normal to hard.
- As an user/player, I want the game starts with my permission. I rather have a count down after turning the game on or have access to a button to start the game.
- As an user/player, I want to know which level/round I am and get informed if I Win or Lose.

To design this game and website, I used Adobe XD to see how my final website must look like and then by HTML, CSS and Javascript I made it live and functional for users. To download and see the UX design please go [here](https://github.com/IIxShahinxII/simon-game/blob/master/UX%20design/simon-game.xd) and then click on "View raw"

## Features
 
### Existing Features
- Guide : Explains for users that how they can play.
- ON/OFF checkbox : allows users to turn the game ON and OFF.
- Hard checkbox : allows users to change the game mode from easy to difficult mode.
- Start button : allows users to be able to start the game. (users must turn on the game and see the lightRed "-" on    display then the they can click to start the game.)
- Display : allows users to see the game is ON or OFF and also their current round in the game.

### Features Left to Implement
- LeaderBoard will be added.
- the game has currently 20 rounds but we will add more rounds in future.
- Speed-Up for each round will be added in future.
- Option to choose for different background and game-sound will be added.

## Technologies Used
* HTML
* CSS 
* Bootstrap
* GitHub
* Google Fonts
* Javascript

## Testing

I have tested my HTML,CSS and Javascript through links below:

* [W3C Validator](https://validator.w3.org/#validate_by_input) - For HTML
* [JIGSAW W3C Validator](https://jigsaw.w3.org/css-validator/#validate_by_input) - For CSS
* [JSHint](https://jshint.com/) - For JavaScript

##### Chrome Dev Tools

I used Dev Tools to check if there was an error on my page. Then, I changed what was wrong in the dev tools and I would be able to see the changes in a live update into my browser.Once I've found the issue I went back to Vscode and make the changes there.

### Debugging

During the process i found a bug which the the position of small-box was not relative to big-box. in CSS file i added "position: Absolute" to #small-box and added "position: relative" to #big-box.

- Guide: NO buggs.
- ON/OFF checkbox: NO buggs.
- Hard checkbox: NO buggs.
- Start button: NO buggs.
- Display: NO buggs.

##### Responsive Test
 This website is responsive on devices below:

* Moto G4
* Galaxy S5
* Pixel 2
* Pixel 2 XL
* iPhone 5/SE
* iPhone 6/7/8
* iPhone 6/7/8 Plus
* iPhone X
* iPad
* iPad Pro

## Deployment

My website was created is Visual Studio Code and liked it to my new repository in Github.

* I created new Repository in my Github account.
* I created a new workplace in Vscode (Visual Studio Code).
* I Created all my folders and files.
* Press "Ctrl+Shift+P" and it opened a bar at top of my Vscode editor.
* Typed Git:Add Remote and pressed "Enter".
* typed a remote name and then pressed "Enter".
* Copied and pasted my repository URL into the bar and pressed "Enter"

To deploy this website to GitHub pages:
* Clicked the simon-game from my GitHub dashboard.
* Select 'Settings' from the menu bar.
* From the GitHub pages section, I chose 'master branch' from the dropdown menu.
* Once selected, I refreshed the page and a link was generated in the GitHub pages section to my website.
* [Simongame]( https://iixshahinxii.github.io/simon-game/)

### To run this project locally

* Click on [GitHub Repository](https://github.com/IIxShahinxII/simon-game)
* Click on the 'Clone or Download' button.
* Copy the URL provided.
* Open a bash terminal, move to your desired directory.
* Type 'git clone' and paste in the URL.

## Credits

### Content
- The text for section Text-Guide was copied from the [ultraboardgames](https://www.ultraboardgames.com/simon/game-rules.php)

### Media
- The sounds for this game are taken from [amazonaws](https://s3.amazonaws.com)
- The back ground image was downloaded from [toptal](https://www.toptal.com/designers/subtlepatterns/)

### Acknowledgements

## I received inspiration for this project from
- My mentor Mr.Maranatha.
- [Treehouse](https://www.youtube.com/watch?v=UOeofWla8mE&list=WL&index=5&t=1371s).
- [freeCodeCamp.org](https://www.youtube.com/watch?v=lhNdUVh3qCc&list=WL&index=3&t=5018s).
- [freeCodeCamp.org](https://www.youtube.com/watch?v=PkZNo7MFNFg&list=WL&index=8&t=10073s).