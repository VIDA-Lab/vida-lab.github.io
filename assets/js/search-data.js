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
          description: "Exploring the unknown TOGETHER to shape the future.",
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
        },{id: "nav-achievements",
          title: "Achievements",
          description: "Great achievement always requires great sacrifice.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/achievements/";
          },
        },{id: "nav-news",
          title: "News",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/news/";
          },
        },{id: "nav-life-vidalab",
          title: "life@VIDALab",
          description: "Life is a journey, not a destination.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/life/";
          },
        },{id: "news-visual-and-intelligent-data-analytics-lab-born-at-smu",
          title: 'Visual and Intelligent Data Analytics Lab born at SMU!',
          description: "",
          section: "News",},{id: "news-early-victories-eurovis-2021-chi-2021-and-a-patented-video-analysis-system-set-a-solid-foundation-for-the-lab-keep-it-up-team",
          title: 'Early victories: EuroVis 2021, CHI 2021 and a patented video-analysis system set a...',
          description: "",
          section: "News",},{id: "news-breakthrough-year-two-ieee-vis-2021-best-paper-honorable-mentions-kg4vis-amp-amp-m-lens-multiple-tvcg-date-acceptances-and-our-first-phd-student-songheng-joins-bravo-team",
          title: 'Breakthrough year: two IEEE VIS 2021 Best Paper Honorable Mentions (KG4VIS &amp;amp;amp; M²Lens),...',
          description: "",
          section: "News",},{id: "news-shaolun-officially-join-our-team-as-a-phd-student-and-xiaolin-joined-our-team-as-a-visiting-student-warm-welcome",
          title: 'Shaolun officially join our team as a PhD student and Xiaolin joined our...',
          description: "",
          section: "News",},{id: "news-2022-highlights-twin-vis-2022-papers-vacsen-taurus-a-chi-2022-best-paper-honorable-mention-for-structure-aware-retrieval-gesturelens-in-tvcg-tutorials-at-qce-2022-amp-amp-esweek-2022-and-visiting-phds-yanna-amp-amp-cheng-join-great-job-team",
          title: '2022 highlights: twin VIS 2022 papers (VACSEN, Taurus), a CHI 2022 Best Paper...',
          description: "",
          section: "News",},{id: "news-spring-surge-seven-team-papers-accepted-across-chi-lbw-eurovis-kdd-tkdd-tvcg-amp-amp-more-fantastic-collaboration-team",
          title: 'Spring surge: seven team papers accepted across CHI LBW, EuroVis, KDD, TKDD, TVCG...',
          description: "",
          section: "News",},{id: "news-the-team-expands-manusha-phd-li-amp-amp-haoxuan-visiting-scholars-and-xiaolin-re-join-while-shaolun-secures-the-smu-presidential-doctoral-fellowship-congrats",
          title: 'The team expands: Manusha (PhD), Li &amp;amp;amp; Haoxuan (visiting scholars) and Xiaolin (RE)...',
          description: "",
          section: "News",},{id: "news-autumn-haul-five-new-papers-across-emnlp-tvcg-prdc-amp-amp-finllm-and-numgpt-wins-the-technology-novelty-award-stellar-teamwork",
          title: 'Autumn haul: five new papers across EMNLP, TVCG, PRDC &amp;amp;amp; FinLLM, and NumGPT...',
          description: "",
          section: "News",},{id: "news-violet-sails-into-pacificvis-2024-tvcg-track-capping-a-six-paper-year-for-the-team-way-to-go",
          title: 'VIOLET sails into PacificVis 2024 (TVCG Track), capping a six-paper year for the...',
          description: "",
          section: "News",},{id: "news-strong-start-to-the-year-vaid-chi-2024-amp-amp-conceptthread-tvcg-are-in-and-kavinda-joins-us-as-a-research-engineer-welcome-aboard",
          title: 'Strong start to the year: VAID (CHI 2024) &amp;amp;amp; ConceptThread (TVCG) are in,...',
          description: "",
          section: "News",},{id: "news-vida-lab-move-to-nanyang-technological-university-ntu",
          title: 'VIDA Lab move to Nanyang Technological University (NTU)!!!🎉🎉🎉',
          description: "",
          section: "News",},{id: "news-triple-boost-for-the-team-chartkg-amp-amp-our-cnn-generalization-study-are-accepted-by-tvcg-and-adamotif-heads-to-ieee-vis-2024",
          title: 'Triple boost for the team — ChartKG &amp;amp;amp; our CNN-Generalization study are accepted...',
          description: "",
          section: "News",},{id: "news-fengjie-yilun-and-can-join-the-team-warm-welcome",
          title: 'Fengjie, Yilun and Can join the team, warm welcome!👏👏👏',
          description: "",
          section: "News",},{id: "news-our-team-recently-have-two-paper-about-smart-contract-visualization-prettismart-and-ponzilens-accepted-by-pacificvis2025-tvcg-track-and-tvcg-congratulations-to-xiaolin",
          title: 'Our team recently have two paper about smart contract visualization (PrettiSmart and PonziLens+)...',
          description: "",
          section: "News",},{id: "news-xiaolin-become-the-first-phd-student-at-ntu-shiwei-join-the-team-as-a-master-student-and-jaeuk-join-us-as-a-visiting-student-warm-welcome",
          title: 'Xiaolin become the first PhD student at NTU, Shiwei join the team as...',
          description: "",
          section: "News",},{id: "news-fengling-and-yi-join-our-team-as-visiting-students-welcome",
          title: 'Fengling and Yi join our team as visiting students! Welcome!!!🎉🎉🎉',
          description: "",
          section: "News",},{id: "news-recently-our-team-have-one-paper-accepted-by-eurovis25-and-two-papers-accepted-by-chi25-lbw",
          title: 'Recently, our team have one paper accepted by EuroVis25 and two papers accepted...',
          description: "",
          section: "News",},{id: "news-our-paper-prettismart-won-the-best-paper-honorable-mention-award-at-pacificvis2025-tvcg-track-congratulations-to-xiaolin",
          title: 'Our paper, PrettiSmart, won the Best Paper Honorable Mention Award🏆 at PacificVis2025(TVCG Track)!...',
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
