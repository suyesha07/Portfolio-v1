/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Suyesha Bhattacharjee",
  description: "Portfolio",
  og: {
    title: "Portfolio",
    type: "website",
    url: "https://suyesha.github.io/",
  },
};

//Home Page
const greeting = {
  title: "Suyesha Bhattacharjee 👋",
  logo_name: "Suyesha Bhattacharjee",
  subTitle:
    "More into creating things, rather than making .",
};

const socialMediaLinks = [
  {
    name: "Github",
    link: "https://github.com/suyesha07",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/suyesha-bhattacharjee07/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "Gmail",
    link: "suyesha7b@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  {
    name: "Twitter",
    link: "https://twitter.com/Suyeshaaaa?s=09",
    fontAwesomeIcon: "fa-twitter", // Reference https://fontawesome.com/icons/twitter?style=brands
    backgroundColor: "#1DA1F2", // Reference https://simpleicons.org/?q=twitter
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/suyeshaaaaa/",
    fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
    backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
  },
];

const skills = {
  data: [
    {
      title: "Data Science & AI",
      fileName: "DataScienceImg",
      skills: [
        "💬 Experience of working with Computer Vision and NLP projects",
        "💬 Infering stories behind data through several data visualization tools ",
        "💬 Experimenting with various algorithms in NLP and still in phase of learning.",
      ],
      softwareSkills: [
        {
          skillName: "Tensorflow",
          fontAwesomeClassname: "logos-tensorflow",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Keras",
          fontAwesomeClassname: "simple-icons:keras",
          style: {
            backgroundColor: "white",
            color: "#D00000",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
        {
          skillName: "Numpy",
          fontAwesomeClassname: "simple-icons:numpy",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Scikit-Learn",
          fontAwesomeClassname: "simple-icons:scikit-learn",
          style: {
            backgroundColor: "transparent",
            color: "#F7931E",
          },
        },
        {
          skillName: "Pandas",
          fontAwesomeClassname: "simple-icons:pandas",
          style: {
            backgroundColor: "transparent",
            color: "#150458",
          },
        },
        {
          skillName: "Tableau",
          fontAwesomeClassname: "simple-icons:tableau",
          style: {
            color: "#4285F4",
          },
        },
      ],
    },
    {
      title: "Familiar With",
      fileName: "FullStackImg",
      skills: [
        "💡 Building foundation for Frontend application and Full Stack by working on small projects",
        "💡 Developing the idea of user interfaces and its importance in product development",
        "💡 Getting along with the new technologies such as quantum via Qiskit",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "simple-icons:node-dot-js",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        },
        {
          skillName: "GCP",
          fontAwesomeClassname: "simple-icons:googlecloud",
          style: {
            color: "#4285F4",
          },
        },
        {
          skillName: "Ethereum",
          fontAwesomeClassname: "simple-icons:ethereum",
          style: {
            color: "#3C3C3D",
          },
        },
        {
          skillName: "Qiskit",
          fontAwesomeClassname: "simple-icons:qiskit",
          style: {
            color: "#000000",
          },
        },
        {
          skillName: "Figma",
          fontAwesomeClassname: "simple-icons:figma",
          style: {
            color: "#F24E1E",
          },
        },
        {
          skillName: "Drupal",
          fontAwesomeClassname: "simple-icons:drupal",
          style: {
            color: "#4285F4",
          },
        },
        {
          skillName: "Version Control",
          fontAwesomeClassname: "simple-icons:github",
          style: {
            color: "#000000",
          },
        },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "HackerRank",
      iconifyClassname: "simple-icons:hackerrank",
      style: {
        color: "#2EC866",
      },
      profileLink: "https://www.hackerrank.com/suyesha7b",
    },
    {
      siteName: "Hackerearth ",
      iconifyClassname: "simple-icons:hackerearth",
      style: {
        color: "#323754",
      },
      profileLink: "https://www.hackerearth.com/@suyesha7",
    },
    {
      siteName: "Kaggle",
      iconifyClassname: "simple-icons:kaggle",
      style: {
        color: "#20BEFF",
      },
      profileLink: "https://www.kaggle.com/suyeshabhattacharjee",
    },
    {
      siteName: "Codechef",
      iconifyClassname: "simple-icons:codechef",
      style: {
        color: "#5B4638",
      },
      profileLink: "https://www.codechef.com/users/suyesha7",
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "Sir M. Visvesvaraya Institute of Technology Bengaluru",
      subtitle: "B.E in Electrical and Electronics Engineering",
      logo_path: "smvit_logo.png",
      alt_name: "S.MVIT",
      duration: "Aug' 2019 - Present",
      descriptions: [
        "🎓 Under the curriculum I am learning many niches of Electrical and Electronics engineering such as Embedded system, Data structure and algorithms , Object oriented design , Operating System , DBMS , Computer Network.",
        "🎓 I have also been introduced to many core fundamentals in the domain of Compiler Design , Computer Architecture , Software Engineering",
      ],
      website_link: "https://www.sirmvit.edu/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Deep Learning Specialization ",
      subtitle: "deeplearning.ai",
      logo_path: "deeplearning_ai_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/specialization/CF8WHYAZ8P9T",
      alt_name: "deeplearning.ai",
      color_code: "#ffffff",
    },
    {
      title: "An Introduction to Programming the Internet of Things Specialization",
      subtitle: "University of California",
      logo_path: "Uni.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/specialization/TYW5CX7P99SG",
      alt_name: "University of California",
      color_code: "#ffffff",
    },
    {
      title: "Machine Learning Specialization",
      subtitle: "University of Washington",
      logo_path: "uni_wash.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/specialization/ZWK4W3QARVGR",
      alt_name: "University of Washington",
      color_code: "#ffffff",
    },
    {
      title: "AI for Everyone",
      subtitle: "deeplearning.ai",
      logo_path: "deeplearning_ai_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/F7S8JUHM9X8B",
      alt_name: "deeplearning.ai",
      color_code: "#ffffff",
    },
    {
      title: "Python Data Structures",
      subtitle: "University of Michigan",
      logo_path: "Michi.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/WQ7RD9247GL8",
      alt_name: "University of Michigan",
      color_code: "#ffffff",
    },
    {
      title: "C++ for C Programmers",
      subtitle: "University of California",
      logo_path: "Uni.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/ZZVVRRZXXRGZ",
      alt_name: "University of California",
      color_code: "#ffffff",
    },
    {
      title: "Getting Started with AWS machine learning",
      subtitle: "Amazon Web Service",
      logo_path: "AWS.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/L233AHKBU7FQ",
      alt_name: "AWS",
      color_code: "#ffffff",
    },
    {
      title: "Interactivity with JavaScript",
      subtitle: "University Of Michigan",
      logo_path: "Michi.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/Y889ZELDADAL",
      alt_name: "University Of Michigan",
      color_code: "#ffffff",
    },
    {
      title: "Introduction to CSS",
      subtitle: "University of Michigan",
      logo_path: "Michi.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/EQ3P2MJSM4YH?utm_medium=certificate&utm_source=link&utm_campaign=copybutton_certificate&utm_term=long",
      alt_name: "University of Michigan",
      color_code: "#ffffff",
    },
    {
      title: "Build Your First Android App",
      subtitle: "Project-Centered Course",
      logo_path: "coursera_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/GQG4QE9NBAA2",
      alt_name: "coursera",
      color_code: "#4E9BF2",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Internship and Volunteership",
  description:
    "I have been an active part of the community working in the lines of technology and social progress,also involved in work of research and development . Have been also engaged in the student led organization promoting entrepreneurship .",
  header_image_path: "career_progress.svg",
  sections: [
    {
      title: "Internships & Work",
      experiences: [
        {
          title: "Electrical Technician",
          company: "Team Inferno SMVIT",
          company_url: "https://www.teaminferno.in/",
          logo_path: "inferno.jpg",
          duration: "Oct 2019 - Present",
          location: "SMVIT Bengaluru",
          description:
            "Team Inferno is a Supermileage Team from Sir M.Visvesvaraya Institute Of Technology. The Team aims at excelling at the Shell ECO Marathon.",
          color: "#ee3c26",
        },
        {
          title: "Computer Vision Inter",
          company: "The Sparks Foundation ",
          company_url: "https://www.thesparksfoundationsingapore.org/",
          logo_path: "spark_logo.png",
          duration: "Feb 2021 - Mar 2021",
          color: "#ee3c26",
        },
      ],
    },
    {
      title: "Volunteerships",
      experiences: [
        {
          title: "Volunteer",
          company: "Women Who Code",
          company_url: "https://www.womenwhocode.com/",
          logo_path: "wwc-logo.jpg",
          duration: "September 2021 - Present",
          description:
            "Women who code mission is to inspire the women in tech in their respective careers . I am the active part of their community.",
          color: "#D83B01",
        },
        {
          title: "Volunteer",
          company: "Aspire for Her",
          company_url: "http://www.aspireforher.org/",
          logo_path: "asp-logo.jpeg",
          duration: "Feb 2021 - Present",
          description:
            "Aspire for Her Foundation primarily works on a C2B (College-to-Business) model creating online and offline programs for its members (18-25 year old women) through partnerships with forward-thinking, diversity-focused organisations and professionals.",
          color: "#D83B01",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "I believe that the world is shifting towards products from services, plenty of products are emerging as solutions . I strive to implement my learning to use latest technology to live, right now mostly in the field of AI and further software in development 🔧",
  avatar_image_path: "projects_image.svg",
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
};
