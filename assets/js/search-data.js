// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "About",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-team",
          title: "Team",
          description: "Together, we achieve more than we ever could alone.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/team/";
          },
        },{id: "nav-publications",
          title: "Publications",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-life-vidalab",
          title: "life@VIDALab",
          description: "Life is a journey, not a destination.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/life/";
          },
        },{id: "news-fengjie-yilun-and-can-join-the-team-warm-welcome",
          title: 'Fengjie, Yilun and Can join the team, warm welcome!',
          description: "",
          section: "News",},{id: "news-our-paper-ponzilens-is-accepted-by-tvcg",
          title: 'Our paper PonziLens+ is accepted by TVCG!',
          description: "",
          section: "News",},{id: "news-two-short-papers-are-accepted-by-chi25-lbw",
          title: 'Two short papers are accepted by CHI25-LBW!',
          description: "",
          section: "News",},{id: "news-intellicircos-is-accepted-by-eurovis25",
          title: 'IntelliCircos is accepted by EuroVis25!',
          description: "",
          section: "News",},{id: "news-congratulations-to-xiaolin-prettismart-wins-ieee-symposium-pacific-visualization-journal-track-honorable-mention-award",
          title: 'Congratulations to Xiaolin!🥳🥳🥳 PrettiSmart wins IEEE Symposium Pacific Visualization Journal Track Honorable Mention...',
          description: "",
          section: "News",},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%79%6F%75@%65%78%61%6D%70%6C%65.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-inspire',
        title: 'Inspire HEP',
        section: 'Socials',
        handler: () => {
          window.open("https://inspirehep.net/authors/1010907", "_blank");
        },
      },{
        id: 'social-rss',
        title: 'RSS Feed',
        section: 'Socials',
        handler: () => {
          window.open("/feed.xml", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=qc6CJjYAAAAJ", "_blank");
        },
      },{
        id: 'social-custom_social',
        title: 'Custom_social',
        section: 'Socials',
        handler: () => {
          window.open("https://www.alberteinstein.com/", "_blank");
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
