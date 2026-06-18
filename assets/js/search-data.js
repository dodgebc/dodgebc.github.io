// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-papers",
          title: "papers",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/papers/";
          },
        },{id: "nav-code",
          title: "code",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/code/";
          },
        },{id: "nav-talks",
          title: "talks",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/talks/";
          },
        },{id: "nav-extras",
          title: "extras",
          description: "Instructive examples and unfinished side-projects that I think are worth sharing.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/extras/";
          },
        },{id: "nav-cv",
          title: "cv",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "extras-gaussian-splat-dust-map",
          title: 'Gaussian Splat Dust Map',
          description: "",
          section: "Extras",handler: () => {
              window.location.href = "/extras/gaussian-splat-dust/";
            },},{id: "extras-3d-supernova-remnant",
          title: '3D Supernova Remnant',
          description: "",
          section: "Extras",handler: () => {
              window.location.href = "/extras/supernova-remnant/";
            },},{id: "teachings-observational-astronomy",
          title: 'Observational Astronomy',
          description: "KIPAC observational astronomy course.",
          section: "Teachings",handler: () => {
              window.location.href = "/teachings/observational-astro/";
            },},{
        id: 'social-cv',
        title: 'CV',
        section: 'Socials',
        handler: () => {
          window.open("/assets/pdf/cv.pdf", "_blank");
        },
      },{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%62%65%6E%64%6F%64%67%65@%73%74%61%6E%66%6F%72%64.%65%64%75", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/dodgebc", "_blank");
        },
      },{
        id: 'social-custom_social',
        title: 'Custom_social',
        section: 'Socials',
        handler: () => {
          window.open("https://arxiv.org/search/?searchtype=author&query=Dodge%2C+Benjamin", "_blank");
        },
      },{
        id: 'social-nasa_ads',
        title: 'Nasa_ads',
        section: 'Socials',
        handler: () => {
          window.open("https://ui.adsabs.harvard.edu/search/q=orcid%3A0000-0002-2519-2219&sort=date+desc", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=DA7fd-kAAAAJ", "_blank");
        },
      },{
        id: 'social-orcid',
        title: 'ORCID',
        section: 'Socials',
        handler: () => {
          window.open("https://orcid.org/0000-0002-2519-2219", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
