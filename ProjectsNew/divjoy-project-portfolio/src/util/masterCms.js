export const navbarData = {
    bg:"white",
    variant:"light",
    expand:"md",
    logo:"https://i.imgur.com/IAGoAki.png",
    logo_title:"Data Science Dad",
    link_1:"Home",
    link_2:"Blog",
    link_3:"Projects",
    link_4:"Contact",
}

export const leadHeroData = {
    bg: "white",
    textColor: "dark",
    size: "md",
    bgImage: "",
    bgImageOpacity: "1",
    title: "Hi, my name is Michael.",
    buttonText: "Hire me",
    subtitle: "I am a junior full stack developer. I enjoy building projects with JavaScript, React, Python and accompanying libraries and frameworks. The bulk of my work includes sourcing data either via webscraping techniques or authenticating access to an API. Then annalyzing or applying algorithms to the data to discover new insights. As well as building a front end client to interact with that data or make it accessible to the general end user. I enjoy using a large set of tools and technologies including Wordpress, Shopify, and Salesforce as other backend solutions. But for the most part I like to build websites and apps that are data driven and data centric. You will usually find me tinkering with data using Python or JavaScript and then building some front end in React to access that data and make it usable in a new way. And I also love integrations typically through RESTful APIs.",
    buttonColor: "primary",
    image: "https://uploads.divjoy.com/undraw-beer_celebration_cefj.svg",
}

export const wordpressSectionData = {
    id:"blog-section",
    bg:"white",
    textColor:"dark",
    size:"md",
    bgImage:"",
    bgImageOpacity:1,
    title:"Written Word",
    subtitle:"",
    // I will move this to a .env file eventually
    wordpressREST: "https://dev-michaelwoodward.pantheonsite.io/wp-json/wp/v2/posts?_embed",
    blogImage:
      [
        {src:"https://i.imgur.com/sz5fc4o.png"},
        {src:"https://i.imgur.com/7HlBC0e.jpg"},
        {src:"https://i.imgur.com/ZTMZmZt.jpg"},
      ],
    mediumUrl: '',
    wordpressUrl: ''
}

export const projectsSectionData = {
    bg:"white",
    textColor:"dark",
    size:"md",
    bgImage:"",
    bgImageOpacity:1,
    title:"Projects",
    subtitle:"Some of my work. My projects vary from full stack software development to data science. Whichever project I am working on, I always take joy in learning new things and staying on the edge of this rapidly evolving industry."
    // I want to merge the projects data file here in some way
}

export const githubSectionData = {
    bg:"white",
    textColor:"dark",
    size:"md",
    bgImage:"",
    bgImageOpacity:1,
    title:"Recent Github Repos",
    subtitle:"",
    // need to put this in a .env file
    githubREST: "https://api.github.com/users/mwoodward1990/repos"
}

export const faqSectionData = {
    bg:"white",
    textColor:"dark",
    size:"md",
    bgImage:"",
    bgImageOpacity:1,
    title:"Frequently Asked Questions",
    subtitle:"",
    items:[
      {
        question: "Where did you learn to code?",
        answer:
          "Some college but I am mostly self taught. From a lot of different sources actually. Most memorably, I started off with Treehouse.com. That's where I learned introductory HTML and CSS. From there another more memorable platform by far is FreeCodeCamp.com. That's a resource I still use today. Then honestly, YouTube was always another huge source of truth for me with programming and then I occassionally purchase a Udemy course here and there. There are a lot more resources I use to learn to code as well but these are the main ones.",
      },
      {
        question: "What do you like most about programming?",
        answer:
          "To be honest, just about everything. I like learning so this was a great fit. Not only that but for whatever reason I have just always had an affinity for computers. At this point in my development journey though I just love coming up with an idea or a solution to a problem and being able to go out there and build it.",
      },
      // {
      //   question: "Where do you see yourself in the next 5 years?",
      //   answer:
      //     "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In lobortis, metus et mattis ullamcorper. Suspendisse ut tincidunt eros. In velit mi, rhoncus dictum neque a, tincidunt lobortis justo.",
      // },
      {
        question: "What is one of your greatest ambitions?",
        answer:
          "You know probably just to be a good dad. I don't think it was something I ever thought about too much growing up but after having my son one of my greatest ambitions is just to be a good parent, to support my family, and give my family the quality of life they deserve. I believe I found a way to do that through programming and so as a result another one of my greatest ambitions would be to become a software engineer or technical architect.",
      },
      {
        question: "One cool thing to note about this portfolio.",
        answer:
          "One of my favorite things about this portfolio project is that it is heavily API driven, and the rest of the native data is abstracted to a central location that is easy to manage as well as capable of being replaced with a substitue data/content source. From the Wordpress posts, the Github repos, and the rest of the content, all driven by API. The components are all also heavily reusable passing props down all the way from the highest levels.",
      }
    ]
};

export const contactSectionData = {
    bg:"white",
    textColor:"dark",
    size:"md",
    bgImage:"",
    bgImageOpacity:1,
    title:"Contact Me",
    subtitle:"I'm for hire! Send me a message! I get notified right on my phone. (:",
    buttonText:"Send message",
    buttonColor:"primary",
    showNameField:true,
    inputSize:"md",
}

export const footerData = {
    id: "footer",
    bg: "white",
    textColor: "dark",
    size: "md",
    bgImage: "",
    bgImageOpacity: 1,
    description: "A short description of what you do here",
    copyright: "© 2020 Michael Woodward",
    logo: "https://i.imgur.com/IAGoAki.png",
    logo_title: "Data Science Dad",
    link_1: "Top",
    link_2: "Blog",
    link_3: "Projects",
    link_4: "Contact",
}