//import pics
import flash_cards from "../assets/flash-cards.png";
import lyrics_search from "../assets/lyrics-search.png";
import meal_finder from "../assets/meal-finder.png";
import weather from "../assets/weather.png";


// PROJECTS DATA
export const projectsData = [
  {
    id: 'to-do-app',
    label: ['vanilla', 'noSql'],
    img: 'https://i.imgur.com/yLm4Fnd.png',
    title: 'To Do App',
    info:
      "Instructions: To login use user: password, pass: password. This is one of my first full stack applications I ever built.",
    info2: 
      'To do app built using JavaScript, ExpressJS, MongoDB, and deployed with Heroku. Key take away from this project to this day is learning about CRUD operations and how to connect a database to my project.',
    features: 
      'Basic to do app built using JavaScript, ExpressJS, MongoDB, deployed using Heroku, and authentication with JWT. Live example of creating, reading, editing, and deleting items from the UI. <--(CRUD)',
    technologies: 
      'JavaScript, ExpressJS, MongoDB, Heroku, JWT',
    likes:
      'This was one of the first full stack applications that I ever built. It was really exciting to see data being added or created to/in the database and integrating that with the client. These were some of the key concepts to learn to start building some more complex apps and websites.',
    learnedFront:
      'Things I learned about the front end were just some minor styling. This project was more so focused on express and CRUD operations than the UI. The styling was actually an html template used.',
    learnedBack:
      'My big take away from this project again was learning about CRUD operations and how to integrate a front end client with the backend and the database.',
    url: 'https://learnjs-todo.herokuapp.com/',
    repo: 'https://github.com/mwoodward1990/learnJs-todo-app', // if no repo, the button will not show up
    // for carousel
    src: 'https://i.imgur.com/yLm4Fnd.png',
    altText: "Slide 1",
    caption: "",
    header: "",
    key: "1",
    gif: "todo"
  },
  {
    id: 'salon-shop',
    label: ['react', 'shopify'],
    img: 'https://i.imgur.com/GYa0e8o.png',
    title: 'Shopify Salon Shop',
    info:
      'E-Commerce. React. Bootstrapped with create react app. This project features Bootstrap5 for the UI framework. It offers authentication if needed easily added with Firebase. Hosted via Netlify. Product management and payment processing with Shopify including the Shopify backend admin tools like analytics and other accounting benefits. Content is managed with a (separated maybe included in authenticated routes for admin) content management system.',
    info2: '',
    features: 'A headless Shopify storefront modeled after a salon and beauty supply shop. This project was built in React starting with Create React App. Shopify REST apis power the shop, product management, cart, checkout, and payment processing. You can access Shopifys administrative features the same way by logging into your Shopify store.',
    technologies: 'Bootstrap, JavaScript, React, Shopify, Redux, Netlify, Firebase.',
    likes: 'I like working with the Shopify REST apis they are pretty straight forward and provide a ton of useful ecommerce functionality. I also really like working with React. Its nice to build Shopify storefronts with React so easily.',
    learnedFront: 'I would have to say on the front end, just importing the products from Shopify and looping through them to display them on a product page. Also how to store the product id in the window location history and use that to power the single product page.',
    learnedBack: 'One of the challenges I had when integrating the Shopify shop with the React app codebase was to persist the state and functionality of the cart from a static button in the nav bar, so that the state would persist no matter where you are on the website. Overcoming this challenge I used Redux and React hooks.',
    url: 'https://shaylas-shopify-store.netlify.app/',
    repo: 'https://github.com/mwoodward1990/shopify-salon-shop-demo', // if no repo, the button will not show up
    // for carousel
    src: 'https://i.imgur.com/asp9Q5y.png',
    altText: "Slide 1",
    caption: "",
    header: "",
    key: "3",
    gif: "salon"
  },
  {
    id: 'coffee-shop',
    label: ['react', 'shopify'],
    img: 'https://i.imgur.com/3uRmDeL.png',
    title: 'Shopify Coffee Shop',
    info:
      '',
    info2:
      '',
    features:
      'Large E-Commerce Shopify Coffee Shop featuring 8 pages excluding each of the single product pages for every product available. UI is built with React and Bootstrap. Context is used for state management. I built this example shop to highlight my ability to build a custom React front end making use of Shopifys custom apps API.',
    technologies: 
      'Bootstrap, JavaScript, React, Shopify, Context, Netlify',
    likes: 
      'What I would like to do better is optimizing the performance of this website. Probably by optimizing the images being rendered on page load. Also I would like to implement some caching methods again to speed up page load time as that is extremely important for UX and e-commerce particularly.',
    learnedFront:
      '',
    learnedBack:
      '',
    url: 'https://coffee-shop-shopify-context.netlify.app/',
    repo: 'https://github.com/mwoodward1990/coffee-shopify', // if no repo, the button will not show up
    // for carousel
    src: 'https://i.imgur.com/ZDkKXFY.png',
    altText: "Example Coffee Shopify Shop",
    caption: "",
    header: "",
    key: "4",
    gif: ""
  },
  {
    id: 'salesforce',
    label: ['salesforce'],
    img: '',
    title: 'Salesforce To Be Continued',
    info:
      '',
    info2:
      '',
    features:
      'This section is a bit different in that it is still currently a work in progress. I am working on getting my "Shopiforce-Connector" app deployed and live but for now I left a preview of it here and left a link to the code base in Github that I have built so far ( its almost done ) with instructions to run locally. I also have been working on connecting a Salesforce instance to my mock Shopify Coffee Shop, completely integrating the two platforms. The website link under the video is actually to a Python Colab Notebook that I wrote documenting all the CRUD operations required to integrate Salesforce and Shopify via APIs.',
    technologies: 
      'Salesforce, Lightning, Apex, Visualforce, SOQL, Aura, Flow',
    likes: // ? going to hardcode this in the component itself because I need some of this text to be interactive. Might change it back later.
      'NOTE* to login click the login button and enter the following guest login credentials for Salesforce,\nUser: Michaels_Guest@test.com\nPass: ThePassword.1234\n This is a simple example of user management. Have a look around my SF instance. I havent done much but I could. Including security, automation, administration, and development. For now there is just some custom apps I was experimenting with to connect Shopify and there is a connected app configuration I set up for testing the APIs in and out of Salesforce.',
    learnedFront:
      'learned a lot',
    learnedBack:
      '',
    url: 'https://github.com/mwoodward1990/colab-notebooks-general-collection/blob/main/SalesforceREST.ipynb',
    repo: 'https://github.com/mwoodward1990/shopiforce-connector', // if no repo, the button will not show up
    // for carousel
    src: '',
    altText: "Salesforce Coming Soon",
    caption: "Salesforce Coming Soon",
    header: "Salesforce Coming Soon",
    key: "9",
    gif: "shopiforce-connector"
  },
  {
    id: 'fictional-university',
    label: 'wordpress',
    img: 'https://i.imgur.com/LEknxJx.png',
    title: 'Fictional University',
    info:
      '',
    info2:
      '',
    features:
      'Large, complex, 20+ page fictional university website. Built entirely with Wordpress using a hand crafted custom theme. Also includes custom post types, custom fields, custom Javascript and PHP functions.',
    technologies: 
      'HTML, CSS, JavaScript, Wordpress, PHP',
    likes: '',
    likesNotUsedYet: // This is not in use at the moment
      'I like this project because it gave me a full overview of Wordpress and how to build complex websites using that incredibly popular platform. This was a project from a Udemy class that was 26.5 hours and taught by Brad Schiff, who I think is a phenomenal teacher and really explains the code in a way that makes it easy to understand.',
    learnedFront:
      'The ins and outs of Wordpress as a platform and how to create and build custom themes.',
    learnedBack:
      'Created custom post types and fields, used Wordpress plugins and customized admin panel to fit needs. Also used PHP and JavaScript to inject and enable dynamic content. This is also where I started writing some of my first custom functions in JavaScript. I familiarized myself with the Wordpress REST APIs as well and experimented with Wordpress as a headless content management solution.',
    url: 'http://michaelw4.sgedu.site/',
    repo: 'https://github.com/mwoodward1990/fictional-university-wp-example', // if no repo, the button will not show up
    key: "6",
    src: 'https://i.imgur.com/LEknxJx.png',
    gif: "college"
  },
    {
      id: 'lyrics-search-vanilla',
      label: 'vanilla',
      img: 'https://i.imgur.com/yssImRk.png',
      alt: 'Image of Lyrics Search app',
      caption: 'Lyrics Searching App  ',
      title: 'Lyrics Search',
      info:
        '',
      info2:
        '',
      features:
        'Large, complex, 20+ page fictional university website. Built entirely with Wordpress using a hand crafted custom theme. Also includes custom post types, custom fields, custom Javascript and PHP functions.',
      technologies: 
        'HTML, CSS, JavaScript, Wordpress, PHP',
      likes: '',
      likesNotUsedYet: // This is not in use at the moment
        'I like this project because it gave me a full overview of Wordpress and how to build complex websites using that incredibly popular platform. This was a project from a Udemy class that was 26.5 hours and taught by Brad Schiff, who I think is a phenomenal teacher and really explains the code in a way that makes it easy to understand.',
      learnedFront:
        'The ins and outs of Wordpress as a platform and how to create and build custom themes.',
      learnedBack:
        'Created custom post types and fields, used Wordpress plugins and customized admin panel to fit needs. Also used PHP and JavaScript to inject and enable dynamic content. This is also where I started writing some of my first custom functions in JavaScript. I familiarized myself with the Wordpress REST APIs as well and experimented with Wordpress as a headless content management solution.',
      url: 'http://michaelw4.sgedu.site/',
      repo: 'https://github.com/mwoodward1990/fictional-university-wp-example', // if no repo, the button will not show up
      key: "6",
      src: 'https://i.imgur.com/LEknxJx.png',
      gif: "college",
      dateCompleted: '',
      description: 'Basic app built using vanilla Javascript and a lyrics searching API. Would like to integrate an additional API to source sheet music and/or tabs for Piano and Guitar. Following a tutorial by Brad Traversy.',
      link: 'https://loveliiivelaugh.github.io/lyricsSearchJS/',
      github: 'https://github.com/mwoodward1990/lyricsSearchJS',
    },
    {
      id: 'flash-cards-vanilla',
      label: 'vanilla',
      img: 'https://i.imgur.com/3UVRX9w.png',
      alt: '',
      caption: '',
      title: 'Flash Cards',
      info:
        '',
      info2:
        '',
      features:
        'Large, complex, 20+ page fictional university website. Built entirely with Wordpress using a hand crafted custom theme. Also includes custom post types, custom fields, custom Javascript and PHP functions.',
      technologies: 
        'HTML, CSS, JavaScript, Wordpress, PHP',
      likes: '',
      likesNotUsedYet: // This is not in use at the moment
        'I like this project because it gave me a full overview of Wordpress and how to build complex websites using that incredibly popular platform. This was a project from a Udemy class that was 26.5 hours and taught by Brad Schiff, who I think is a phenomenal teacher and really explains the code in a way that makes it easy to understand.',
      learnedFront:
        'The ins and outs of Wordpress as a platform and how to create and build custom themes.',
      learnedBack:
        'Created custom post types and fields, used Wordpress plugins and customized admin panel to fit needs. Also used PHP and JavaScript to inject and enable dynamic content. This is also where I started writing some of my first custom functions in JavaScript. I familiarized myself with the Wordpress REST APIs as well and experimented with Wordpress as a headless content management solution.',
      url: 'http://michaelw4.sgedu.site/',
      repo: 'https://github.com/mwoodward1990/fictional-university-wp-example', // if no repo, the button will not show up
      key: "6",
      src: 'https://i.imgur.com/LEknxJx.png',
      gif: "college",
      description: 'A basic flash cards web app using vanilla Javascript and local storage. Following a tutorial by Brad Traversy.',
      link: 'https://loveliiivelaugh.github.io/memoryCardsJS/',
      github: 'https://github.com/mwoodward1990/memoryCardsJS',
    },
    {
      id: 'video-player-vanilla',
      label: 'vanilla',
      img: 'https://i.imgur.com/FLIe2MW.png',
      alt: '',
      caption: '',
      title: 'Custom Video Player',
      info:
        '',
      info2:
        '',
      features:
        'Large, complex, 20+ page fictional university website. Built entirely with Wordpress using a hand crafted custom theme. Also includes custom post types, custom fields, custom Javascript and PHP functions.',
      technologies: 
        'HTML, CSS, JavaScript, Wordpress, PHP',
      likes: '',
      likesNotUsedYet: // This is not in use at the moment
        'I like this project because it gave me a full overview of Wordpress and how to build complex websites using that incredibly popular platform. This was a project from a Udemy class that was 26.5 hours and taught by Brad Schiff, who I think is a phenomenal teacher and really explains the code in a way that makes it easy to understand.',
      learnedFront:
        'The ins and outs of Wordpress as a platform and how to create and build custom themes.',
      learnedBack:
        'Created custom post types and fields, used Wordpress plugins and customized admin panel to fit needs. Also used PHP and JavaScript to inject and enable dynamic content. This is also where I started writing some of my first custom functions in JavaScript. I familiarized myself with the Wordpress REST APIs as well and experimented with Wordpress as a headless content management solution.',
      url: 'http://michaelw4.sgedu.site/',
      repo: 'https://github.com/mwoodward1990/fictional-university-wp-example', // if no repo, the button will not show up
      key: "6",
      src: 'https://i.imgur.com/LEknxJx.png',
      gif: "college",
      description: 'Custom video player built using vanilla Javascript. Following a tutorial by Brad Traversy.',
      link: 'https://loveliiivelaugh.github.io/videoPlayerJS/',
      github: 'https://github.com/mwoodward1990/videoPlayerJS',
    },
    {
      id: 'meal-finder-vanilla',
      label: 'vanilla',
      img: 'https://i.imgur.com/HlkIy5X.png',
      alt: '',
      caption: '',
      title: 'Meal Finder',
      info:
        '',
      info2:
        '',
      features:
        'Large, complex, 20+ page fictional university website. Built entirely with Wordpress using a hand crafted custom theme. Also includes custom post types, custom fields, custom Javascript and PHP functions.',
      technologies: 
        'HTML, CSS, JavaScript, Wordpress, PHP',
      likes: '',
      likesNotUsedYet: // This is not in use at the moment
        'I like this project because it gave me a full overview of Wordpress and how to build complex websites using that incredibly popular platform. This was a project from a Udemy class that was 26.5 hours and taught by Brad Schiff, who I think is a phenomenal teacher and really explains the code in a way that makes it easy to understand.',
      learnedFront:
        'The ins and outs of Wordpress as a platform and how to create and build custom themes.',
      learnedBack:
        'Created custom post types and fields, used Wordpress plugins and customized admin panel to fit needs. Also used PHP and JavaScript to inject and enable dynamic content. This is also where I started writing some of my first custom functions in JavaScript. I familiarized myself with the Wordpress REST APIs as well and experimented with Wordpress as a headless content management solution.',
      url: 'http://michaelw4.sgedu.site/',
      repo: 'https://github.com/mwoodward1990/fictional-university-wp-example', // if no repo, the button will not show up
      key: "6",
      src: 'https://i.imgur.com/LEknxJx.png',
      gif: "college",
      description: 'A basic search app to find recipes with the searched for ingredient. Following a tutorial by Brad Traversy.',
      link: 'https://loveliiivelaugh.github.io/mealFinderJS/',
      github: 'https://github.com/mwoodward1990/mealFinderJS',
    },
    {
      id: 'typing-game-vanilla',
      label: 'vanilla',
      img: 'https://i.imgur.com/aNxj0Bs.png',
      alt: '',
      caption: '',
      title: 'Typing Game',
      info:
        '',
      info2:
        '',
      features:
        'Large, complex, 20+ page fictional university website. Built entirely with Wordpress using a hand crafted custom theme. Also includes custom post types, custom fields, custom Javascript and PHP functions.',
      technologies: 
        'HTML, CSS, JavaScript, Wordpress, PHP',
      likes: '',
      likesNotUsedYet: // This is not in use at the moment
        'I like this project because it gave me a full overview of Wordpress and how to build complex websites using that incredibly popular platform. This was a project from a Udemy class that was 26.5 hours and taught by Brad Schiff, who I think is a phenomenal teacher and really explains the code in a way that makes it easy to understand.',
      learnedFront:
        'The ins and outs of Wordpress as a platform and how to create and build custom themes.',
      learnedBack:
        'Created custom post types and fields, used Wordpress plugins and customized admin panel to fit needs. Also used PHP and JavaScript to inject and enable dynamic content. This is also where I started writing some of my first custom functions in JavaScript. I familiarized myself with the Wordpress REST APIs as well and experimented with Wordpress as a headless content management solution.',
      url: 'http://michaelw4.sgedu.site/',
      repo: 'https://github.com/mwoodward1990/fictional-university-wp-example', // if no repo, the button will not show up
      key: "6",
      src: 'https://i.imgur.com/LEknxJx.png',
      gif: "college",
      description: 'This is a small typing game. Will add an API to dynamically bring in new words in addition to some extra functions distributing those words into seperate categories by their defined difficulties. Following a tutorial by Brad Traversy.',
      link: 'https://loveliiivelaugh.github.io/typingGameJS/',
      github: 'https://github.com/mwoodward1990/typingGameJS',
    },
    {
      id: 'speech-text-vanilla',
      label: 'vanilla',
      img: 'https://i.imgur.com/k4YdwOC.png',
      alt: '',
      caption: '',
      title: 'Speech Text Reader',
      info:
        '',
      info2:
        '',
      features:
        'Large, complex, 20+ page fictional university website. Built entirely with Wordpress using a hand crafted custom theme. Also includes custom post types, custom fields, custom Javascript and PHP functions.',
      technologies: 
        'HTML, CSS, JavaScript, Wordpress, PHP',
      likes: '',
      likesNotUsedYet: // This is not in use at the moment
        'I like this project because it gave me a full overview of Wordpress and how to build complex websites using that incredibly popular platform. This was a project from a Udemy class that was 26.5 hours and taught by Brad Schiff, who I think is a phenomenal teacher and really explains the code in a way that makes it easy to understand.',
      learnedFront:
        'The ins and outs of Wordpress as a platform and how to create and build custom themes.',
      learnedBack:
        'Created custom post types and fields, used Wordpress plugins and customized admin panel to fit needs. Also used PHP and JavaScript to inject and enable dynamic content. This is also where I started writing some of my first custom functions in JavaScript. I familiarized myself with the Wordpress REST APIs as well and experimented with Wordpress as a headless content management solution.',
      url: 'http://michaelw4.sgedu.site/',
      repo: 'https://github.com/mwoodward1990/fictional-university-wp-example', // if no repo, the button will not show up
      key: "6",
      src: 'https://i.imgur.com/LEknxJx.png',
      gif: "college",
      description: 'Small text reader app to assist in reading. Following a tutorial by Brad Traversy.',
      link: 'https://loveliiivelaugh.github.io/speechTextReaderJS/',
      github: 'https://github.com/mwoodward1990/speechTextReaderJS',
    },
    {
      id: 'firebase-auth',
      label: ['noSql', 'react'],
      img: 'https://i.imgur.com/YnwMMfh.png',
      alt: 'Screenshot of Basic Auth with React and Firebase App',
      caption: 'Authentication with React and Firebase',
      title: 'Basic Authentication Login',
      info:
        '',
      info2:
        '',
      features:
        'Large, complex, 20+ page fictional university website. Built entirely with Wordpress using a hand crafted custom theme. Also includes custom post types, custom fields, custom Javascript and PHP functions.',
      technologies: 
        'HTML, CSS, JavaScript, Wordpress, PHP',
      likes: '',
      likesNotUsedYet: // This is not in use at the moment
        'I like this project because it gave me a full overview of Wordpress and how to build complex websites using that incredibly popular platform. This was a project from a Udemy class that was 26.5 hours and taught by Brad Schiff, who I think is a phenomenal teacher and really explains the code in a way that makes it easy to understand.',
      learnedFront:
        'The ins and outs of Wordpress as a platform and how to create and build custom themes.',
      learnedBack:
        'Created custom post types and fields, used Wordpress plugins and customized admin panel to fit needs. Also used PHP and JavaScript to inject and enable dynamic content. This is also where I started writing some of my first custom functions in JavaScript. I familiarized myself with the Wordpress REST APIs as well and experimented with Wordpress as a headless content management solution.',
      url: 'http://michaelw4.sgedu.site/',
      repo: 'https://github.com/mwoodward1990/fictional-university-wp-example', // if no repo, the button will not show up
      key: "6",
      src: 'https://i.imgur.com/LEknxJx.png',
      gif: "college",
      description: 'Basic example of a login form with additional features such as "forgot password". Including an example of an HTML wireframe converted to a React UI. Fully functioning leveraging Firebase Authentication. HTML template was sourced from Colorlib but styling was substituted with Bootstrap.',
      status: 'Completed. I want to update the alerts for the client side form handling as well as update the default email templates for resetting password.',
      link: '',
      github: 'https://github.com/mwoodward1990/react-firebase-auth-example',
    },
    {
      id: 'weather-react',
      label: 'react',
      img: weather,
      alt: '',
      caption: '',
      title: 'React Weather App',
      info:
        '',
      info2:
        '',
      features:
        'Large, complex, 20+ page fictional university website. Built entirely with Wordpress using a hand crafted custom theme. Also includes custom post types, custom fields, custom Javascript and PHP functions.',
      technologies: 
        'HTML, CSS, JavaScript, Wordpress, PHP',
      likes: '',
      likesNotUsedYet: // This is not in use at the moment
        'I like this project because it gave me a full overview of Wordpress and how to build complex websites using that incredibly popular platform. This was a project from a Udemy class that was 26.5 hours and taught by Brad Schiff, who I think is a phenomenal teacher and really explains the code in a way that makes it easy to understand.',
      learnedFront:
        'The ins and outs of Wordpress as a platform and how to create and build custom themes.',
      learnedBack:
        'Created custom post types and fields, used Wordpress plugins and customized admin panel to fit needs. Also used PHP and JavaScript to inject and enable dynamic content. This is also where I started writing some of my first custom functions in JavaScript. I familiarized myself with the Wordpress REST APIs as well and experimented with Wordpress as a headless content management solution.',
      url: 'http://michaelw4.sgedu.site/',
      repo: 'https://github.com/mwoodward1990/fictional-university-wp-example', // if no repo, the button will not show up
      key: "6",
      src: 'https://i.imgur.com/LEknxJx.png',
      gif: "college",
      description: 'A basic weather app to search for the 5 day weather forecast in your area.',
      link: 'https://adoring-mcclintock-6017c8.netlify.app/',
      github: 'https://github.com/loveliiivelaugh/react-weather-app',
    },
    {
      id: 'music-search-react',
      label: 'react',
      img: lyrics_search,
      alt: '',
      caption: '',
      title: 'React Music Search',
      info:
        '',
      info2:
        '',
      features:
        'Large, complex, 20+ page fictional university website. Built entirely with Wordpress using a hand crafted custom theme. Also includes custom post types, custom fields, custom Javascript and PHP functions.',
      technologies: 
        'HTML, CSS, JavaScript, Wordpress, PHP',
      likes: '',
      likesNotUsedYet: // This is not in use at the moment
        'I like this project because it gave me a full overview of Wordpress and how to build complex websites using that incredibly popular platform. This was a project from a Udemy class that was 26.5 hours and taught by Brad Schiff, who I think is a phenomenal teacher and really explains the code in a way that makes it easy to understand.',
      learnedFront:
        'The ins and outs of Wordpress as a platform and how to create and build custom themes.',
      learnedBack:
        'Created custom post types and fields, used Wordpress plugins and customized admin panel to fit needs. Also used PHP and JavaScript to inject and enable dynamic content. This is also where I started writing some of my first custom functions in JavaScript. I familiarized myself with the Wordpress REST APIs as well and experimented with Wordpress as a headless content management solution.',
      url: 'http://michaelw4.sgedu.site/',
      repo: 'https://github.com/mwoodward1990/fictional-university-wp-example', // if no repo, the button will not show up
      key: "6",
      src: 'https://i.imgur.com/LEknxJx.png',
      gif: "college",
      description: 'A vanilla project converted to a small React app to search for lyrics of any songs using a lyrics searching API.',
      link: 'lyrics-search-react.netlify.app/',
      github: 'https://github.com/loveliiivelaugh/react-lyrics-app',
    },
    {
      id: 'smart-menu',
      label: 'react',
      img: meal_finder,
      alt: '',
      caption: '',
      title: 'React Smart Menu',
      info:
        '',
      info2:
        '',
      features:
        'Large, complex, 20+ page fictional university website. Built entirely with Wordpress using a hand crafted custom theme. Also includes custom post types, custom fields, custom Javascript and PHP functions.',
      technologies: 
        'HTML, CSS, JavaScript, Wordpress, PHP',
      likes: '',
      likesNotUsedYet: // This is not in use at the moment
        'I like this project because it gave me a full overview of Wordpress and how to build complex websites using that incredibly popular platform. This was a project from a Udemy class that was 26.5 hours and taught by Brad Schiff, who I think is a phenomenal teacher and really explains the code in a way that makes it easy to understand.',
      learnedFront:
        'The ins and outs of Wordpress as a platform and how to create and build custom themes.',
      learnedBack:
        'Created custom post types and fields, used Wordpress plugins and customized admin panel to fit needs. Also used PHP and JavaScript to inject and enable dynamic content. This is also where I started writing some of my first custom functions in JavaScript. I familiarized myself with the Wordpress REST APIs as well and experimented with Wordpress as a headless content management solution.',
      url: 'http://michaelw4.sgedu.site/',
      repo: 'https://github.com/mwoodward1990/fictional-university-wp-example', // if no repo, the button will not show up
      key: "6",
      src: 'https://i.imgur.com/LEknxJx.png',
      gif: "college",
      description: 'A basic search app to find recipes with the searched for ingredient.',
      link: ' https://smart-menu-react.netlify.app/',
      github: 'https://github.com/loveliiivelaugh/react-smart-menu',
    },
    {
      id: 'flash-cards-react',
      label: ['react', 'noSql'],
      img: flash_cards,
      alt: '',
      caption: '',
      title: 'Flash Cards',
      info:
        '',
      info2:
        '',
      features:
        'Large, complex, 20+ page fictional university website. Built entirely with Wordpress using a hand crafted custom theme. Also includes custom post types, custom fields, custom Javascript and PHP functions.',
      technologies: 
        'HTML, CSS, JavaScript, Wordpress, PHP',
      likes: '',
      likesNotUsedYet: // This is not in use at the moment
        'I like this project because it gave me a full overview of Wordpress and how to build complex websites using that incredibly popular platform. This was a project from a Udemy class that was 26.5 hours and taught by Brad Schiff, who I think is a phenomenal teacher and really explains the code in a way that makes it easy to understand.',
      learnedFront:
        'The ins and outs of Wordpress as a platform and how to create and build custom themes.',
      learnedBack:
        'Created custom post types and fields, used Wordpress plugins and customized admin panel to fit needs. Also used PHP and JavaScript to inject and enable dynamic content. This is also where I started writing some of my first custom functions in JavaScript. I familiarized myself with the Wordpress REST APIs as well and experimented with Wordpress as a headless content management solution.',
      url: 'http://michaelw4.sgedu.site/',
      repo: 'https://github.com/mwoodward1990/fictional-university-wp-example', // if no repo, the button will not show up
      key: "6",
      src: 'https://i.imgur.com/LEknxJx.png',
      gif: "college",
      description: 'Flash cards mini game / app. Still a work in progress.',
      link: 'https://flash-cards-react.netlify.app/',
      github: 'https://github.com/loveliiivelaugh/react-flash-cards',
    },
];