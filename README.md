<img src="https://github.com/AntonyDavidTroy/one-piece-quiz/blob/main/readme-assets/responsive-preview.jpg">

[View the live project here.](https://antonydavidtroy.github.io/one-piece-quiz/)


# One Piece Quiz


## Milestone 2 Project

This is a fictional quiz website for my Milestone 2 project.

The intention behind this project is a simple but fun quiz for those who enjoy watching One Piece and want to test their knowledge and that would or could test between other friends that are fans.

## Table of Contents
1. [**User Experience(UX)**](#user-experience(ux))
     - [**Colour Scheme**](#colour-scheme)
     - [**Typography**](#typography)
     - [**Imagery**](#imagery)
     - [**Wireframes**](#wireframes)

2. [**Existing Features**](#existing-features)

      - [**Features Left To Implement**](#features-left-to-implement)
      
3. [**Technology Used**](#technology-used)
    - [**Languages Used**](#languages-used)
    - [**Frameworks, Libraries & Programs Used**](#frameworks,-libraries-&-programs-used)

      
4. [**Testing**](#testing)
      - [**Validator Testing**](#validator-testing)
      - [**Testing User Stories from User Experience (UX) Section**](#testing-user-stories-from-user-experience-(UX)-section)
      - [**Further Testing**](#further-testing)
      - [**Issues**](#issues)
5. [**Deployment**](#deployment)
      - [**Forking**](#forking)
      - [**Cloning**](#cloning)
 
6.  [**Credits**](#credits)
       - [**Contents**](#contents)
       - [**Media**](#Media)
       - [**Acknowledgements**](#acknowledgements)
       
## User Experience(UX)


 - First Time User Goals. 
   1. As a First Time Visitor, I want to easily understand how to navigate through the quiz.
   2. As a First Time Visitor, I want to be able to read the rules, questions and answers easily.
   3. As a First Time Visitor, I want to be see the quiz be themed correctly and colorful to match the quiz contents.
   4. As a First Time Visitor, I want to enjoy myself with the quiz while being slightly challenged and be wanting to come back to retry the quiz with new questions.
 
 - Returning Visitor Goals.
   1. As a Returning Visitor, I want to be able to try and beat my old score at a quicker time and to be able to see if there is more or different questions.
     
 - Frequent User Goals.
   1. As a Frequent User, I want to be able to complete the quiz with friends and/or family to see who thinks they know more.

This website instantly shows that the quiz is in the theme of an anime called One Piece, that is welcoming anyone to challenge the quiz. The design is simple with a colorful background and containers with a opacity so the user can still see the colorful background image. After starting the quiz, the user will be able to see the short list of quiz rules to browse through and be able to either continue or exit the quiz. If the user chooses to click continue, the user will be brought straight to the quiz questions and answers with multiple choice answers. As soon as the user clicks on the answer option they desire, it will automatically bring the user to the next question. Once the user has finished the 20 questions, a results box will pop up and give the score that the user got from the quiz. The quiz has some challenging questions to make the user want to retry and beat their last score. 

#### Colour Scheme

  - colorful background image
  - rgba(255, 255, 255, 0.65)
   
   - The main colors for the website is from a colorful background image that is themed into the quiz. rgba(255, 255, 255, 0.65) is the color I used for the containers of the information throughout the quiz and a low opacity so that the user will still be able to see the background image while playing the quiz. I believe that this compliment the quiz by making it colourful but simple and consistent, it also does not make it too complex and full of distracting images all over the website. I believe the colours and style used in this website helps make the quiz look fun and wanting the user to come back or attempt more.

##### Typography

   - Lato 
   - The Lato font is the font used throughout the whole website with Sans Serif as the fallback font in case for any reason the font isn't being imported into the site correctly. Lato is a clean font used frequently in programming, so it is both attractive, east to read and appropriate.

    
#### Imagery

  - Imagery is important however having too many images can be distracting in certain websites. I believe using one big colorful image as a background and using the simple color of while with a low opacity to give the website a clean yet slightly colorful website without being too distracting. 
    
    
#### Wireframes



 - Desktop Wireframe - home page -  [View](https://github.com/AntonyDavidTroy/one-piece-quiz/blob/main/readme-assets/deskotp-home-page.jpg)
 - Desktop Wireframe - rules page - [View](https://github.com/AntonyDavidTroy/one-piece-quiz/blob/main/readme-assets/deskotp-rules-page.jpg)
 - Desktop Wireframe - quiz page - [View](https://github.com/AntonyDavidTroy/one-piece-quiz/blob/main/readme-assets/deskotp-quiz-page.jpg)
 - Desktop Wireframe - results page -[View](https://github.com/AntonyDavidTroy/one-piece-quiz/blob/main/readme-assets/deskotp-results-page.jpg)
 
 - Tablet Wireframe - home page -[View](https://github.com/AntonyDavidTroy/one-piece-quiz/blob/main/readme-assets/tablet-home-page.jpg)
 - Tablet Wireframe - rules page -[View](https://github.com/AntonyDavidTroy/one-piece-quiz/blob/main/readme-assets/tablet-rules-page.jpg)
 - Tablet Wireframe - quiz page - [View](https://github.com/AntonyDavidTroy/one-piece-quiz/blob/main/readme-assets/tablet-quiz-page.jpg)
 - Tablet Wireframe - results page [View](https://github.com/AntonyDavidTroy/one-piece-quiz/blob/main/readme-assets/tablet-results-page.jpg)

 - Mobile Wireframe - home page - [View](https://github.com/AntonyDavidTroy/one-piece-quiz/blob/main/readme-assets/phone-home-page.jpg)
 - Mobile Wireframe - rules page -[View](https://github.com/AntonyDavidTroy/one-piece-quiz/blob/main/readme-assets/phone-rules-page.jpg)
 - Mobile Wireframe - quiz page - [View](https://github.com/AntonyDavidTroy/one-piece-quiz/blob/main/readme-assets/phone-quiz-page.jpg)
 - Mobile Wireframe - results page - [View](https://github.com/AntonyDavidTroy/one-piece-quiz/blob/main/readme-assets/phone-results-page.jpg)


## Existing Features

 -  This quiz uses a set of 20 questions in a array in javascript to keep them shuffled everytime a user starts the quiz. Javascript is used alot on this website to show and hide certain boxes when needed and not needed. Javascript is also used to add 'click' styles for the answers options so when the user chooses their answers it automatically goes to the next question without the hassle of having to go to and then click another button,  which would direct you to the next question which would take longer. Once the Quiz has finished, you are greeted with a results page which has used Javascript to accumulate all the correct scores you gained through the quiz to show how many the user got correct. Additionally Javascript is used to jump from the end 'results' page after you have finished to quiz to either exit or retry the quiz, when retrying the quiz, Javascript is also used to reshuffled the questions, reset the score and also reset the question counter. When opening the website, there is a large title and a 'start' button quiz. Once selecting the start button the user will then see a list of rules and will have the option to either 'exit' or 'continue' the quiz. The questions have multiple choice answers of 4. All correct answers will be added along the way with a score counter which used Javascript. Javascript also keeps note of all the incorrect scores but does not show them at the end due to it being unnecessary.


## Features Left To Implement

  - Add a option to add a usernames to go with the score along with a leaderboard so that the user can show off their score and see how well they did compared to others.
  
  - Would like to add a section where users can suggest questions and leave feedback.

## Technology Used

#### Languages Used

-   [HTML5](https://en.wikipedia.org/wiki/HTML5)

-   [CSS3](https://en.wikipedia.org/wiki/Cascading_Style_Sheets)

-   [Javascript](https://en.wikipedia.org/wiki/JavaScript)


#### Frameworks, Libraries & Programs Used

- [Media Queries:](https://en.wikipedia.org/wiki/Media_queriesn/)
    - Media Queries was used to assist with the responsiveness and styling of the website when it comes to multiple sizes of the devices that are used.
- [Hover.css:](https://ianlunn.github.io/Hover/)
    - Hover.css was used on the answer buttons and for the navigations options buttons e.g start, exit or retry quiz. The reason why I used the hover style is to let the user know what and where they are on the screen and know what answer they want.
- [Google Fonts:](https://fonts.google.com/)
    - Google fonts were used to import the 'Titillium Web' font into the style.css file which is used on all pages throughout the project.
- [Git](https://git-scm.com/)
    - Git was used for version control by utilizing the Gitpod terminal to commit to Git and Push to GitHub.
- [GitHub:](https://github.com/)
    - GitHub is used to store the projects code after being pushed from Git.
- [Balsamiq:](https://balsamiq.com/)
    - Balsamiq was used to create the [wireframes](https://github.com/) during the design process.


## Testing

#### Validator Testing

  - HTML
      - No errors were returned when passing through the official W3C validator - [Results](https://validator.w3.org/nu/?doc=https%3A%2F%2Fantonydavidtroy.github.io%2Fone-piece-quiz%2F)
  - CSS
     -  No errors were found when passing through the official (Jigsaw) validator - [Results](https://jigsaw.w3.org/css-validator/validator?uri=https%3A%2F%2Fantonydavidtroy.github.io%2Fone-piece-quiz%2F&profile=css3svg&usermedium=all&warning=1&vextwarning=&lang=en)
 - JSHint
   - No errors were found when passing through the official JSHint validator - [website] (https://jshint.com/)
 
 #### Testing User Stories from User Experience (UX) Section
 
 - First Time USer Goals.
 
      - As a First Time Visitor, I want to easily understand how to navigate through the quiz.
 
     1. When first entering the site, users are automatically greeted with a bright colorful background image, with a clear button that reads 'start quiz'. Throughout the quiz, the navigation is simple and while attempting the quiz the quiz itself navigates for you to the next question to save the hassle of clicking another button e.g a 'next' button. After you finish the last question, you are greeted by the score results and two buttons to either quit or retry the quiz.

      - As a First Time Visitor, I want to be able to read the rules, questions and answers easily.

     1. When first entering the site, the font is an easy to read and clear font for the user. the title font is obviously the biggest size of them all. The questions are slightly bigger than the answers and they all scale down accordingly when using smaller devices.
       
      -  As a First Time Visitor, I want to be see the quiz be themed correctly and colorful to match the quiz contents.
       
      1.  When first entering the site, you are greeted with a huge background image which is themed in the anime One Piece, which is obviously what the quiz is about. It greets the user and entices them to start and complete the quiz. To keep the theme consistent I use all the containers with the content inside in white with the opacity low to let the user still be able to see the background image. 
     
      - As a First Time Visitor, I want to enjoy myself with the quiz while being slightly challenged and be wanting to come back to retry the quiz with new questions.

      1. When first starting the quiz, you are greeted with the first question, they are randomized in order so that they can not be memorized easily. Some questions are easy and some are slightly difficult. It is stated in the rules box before starting the quiz, which will make the user feel challenged and wanted to test their own knowledge. After completing the quiz and seeing the users results, they will be wanting to test their knowledge again and hoping to come back to see if there will be new or more questions. 
       
- Returning User Goals.

     - As a Returning Visitor, I want to be able to try and beat my old score at a quicker time and to be able to see if there is more or different questions.
     
     1. When opening up the site as a returning visitor, I want the quiz to be styled and navigated the same way or very similar to before, but to have additional questions or different questions in difficulty to keep the visitor feeling refreshed and again, eager to return for the next quiz.
    
 - Frequent User Goals.
 
     - As a Frequent User, I want to be able to complete the quiz with friends and/or family to see who thinks they know more.
     
     1. When opening up the site as a frequent user, I want to be able to add a username before starting the quiz, that will be able to add onto a leaderboard at the end of the quiz to show off and challenge other people. I want there to be different batches of questions so not all questions are same all the time even if they are shuffled.

 #### Further Testing
 
 - The Website was tested on Google Chrome, Internet Explorer and Safari browsers.
 
 - The website was viewed on a variety of devices such as Desktop, Laptop, iPhone7, iPhone 8 & iPhoneX, being portrait and landscape.
 
 - Family members and friends were asked to review the quiz and to point out any bugs and/or user experience issues and what they did or did not like.

#### Issues

  - At first, on the mobile side of things, I was really struggling with the position of the divs as I had used 'absolute' position.
  - When it came to Javascript, I struggled getting the questions to shuffled everytime I restarted the quiz so they wasn't in the same order each time. 
  - I noticed that the buttons and answers kept floating out of the containers when being used on the mobile devices.
  - I really struggled getting the 'exit' and 'continue' buttons to stay center, they stayed centered through all devices except for when the screens were under 400px or on the iphoneX.
  - I struggled getting the question counter to go up along with the questions to let the user know what question they was on at that time.
  - I struggled getting the score counter to go up along with the questions to let the user know how many questions they were getting correct during the quiz.
  - When it came to the finalising the styles, I kept noticiing that the question counter was droppning out of the container with some questions due to questions and answering being so long.
  - I also noticed that the 'congratulations' text on the results page at the end of the quiz was overlapping the container it is supposed to stay in.
  
## Deployment

- Github
  1. Log in to GitHub and locate the [GitHub Repository](https://github.com/)
  2. At the top of the Repository (not top of page), locate the "Settings" Button on the menu.
  3. Scroll down the Settings page until you locate the "GitHub Pages" Section.
  4. Under "Source", click the dropdown called "None" and select "Master Branch".
  5. The page will automatically refresh.


## Forking
  If you wish to contribute to this website you can Fork it without affecting the main branch by following the procedure outlined below.
  1. Go to the GitHub website and log in.
  2. Locate the [Repository](https://antonydavidtroy.github.io/one-piece-quiz/) used for this project.
  3. On the right-hand side of the Repository name, you'll see the 'Fork' button. It's located next to the 'Star' and 'Watch' buttons.
  4. This will create a copy in your personal repository.
  5. Once you're finished making changes you can locate the 'New Pull Request' button just above the file listing in the original repository.

## Cloning 
  If you wish to clone or download this repository to your local device you can follow the procedure outlined below.
  1. Go to the GitHub website and log in.
  2. Locate the [Repository](https://antonydavidtroy.github.io/one-piece-quiz/s) used for this project.
  3. Under the Repository name locate 'Clone or Download' button in green.
  4. To clone the repository using HTTPS click the link under "Clone with HTTPS".
  5. Open your Terminal and go to a directory where you want the cloned directory to be copied in.
  6. Type `Git Clone` and paste the URL you copied from the GitHub.
  7. To create your local clone press `Enter`

## Credits

#### Contents
     
  - Some of the questions in the quiz are from the top of my head as I am a huge fan of the Anime, however the majority of the harder questions I found and was taken from the website https://twinfinite.net/2021/01/hardest-one-piece-quiz-youll-ever-take/
  
  - The layout of the quiz is set up in the form of how majority quizzes are, so I thought i'd keep it simple and familiar.
  
#### Media
       
  - The image throughout the website was just from a google images searches of 'One piece backgrounds'.


#### Acknowledgements

-   I'd like to say and give a HUGE thanks to my Mentor Antonio for continuously helping with the struggles and the consistent feedback and ideas throughout the project.

