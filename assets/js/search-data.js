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
  },{id: "nav-news",
          title: "News",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/news/";
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
        },{id: "nav-awards",
          title: "Awards",
          description: "Big achievements come from embracing challenges with courage.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/achievements/";
          },
        },{id: "nav-life-vidalab",
          title: "life@VIDALab",
          description: "Life is a journey, not a destination.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/life/";
          },
        },{id: "nav-contact-us",
          title: "Contact Us",
          description: "We&#39;re always happy to hear from you.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/contact-us/";
          },
        },{id: "news-vida-lab-was-born-at-smu",
          title: 'VIDA Lab was born at SMU!',
          description: "",
          section: "News",},{id: "news-early-victories-eurovis-2021-chi-2021-and-a-patented-video-analysis-system-set-a-solid-foundation-for-the-lab-keep-it-up-team",
          title: 'Early victories: EuroVis 2021, CHI 2021 and a patented video-analysis system set a...',
          description: "",
          section: "News",},{id: "news-breakthrough-year-two-ieee-vis-2021-best-paper-honorable-mentions-kg4vis-amp-amp-m-lens-multiple-tvcg-date-acceptances-and-our-first-phd-student-songheng-joined-bravo-team",
          title: 'Breakthrough year: two IEEE VIS 2021 Best Paper Honorable Mentions (KG4VIS &amp;amp;amp; M²Lens),...',
          description: "",
          section: "News",},{id: "news-shaolun-officially-joined-our-team-as-a-phd-student-and-xiaolin-joined-our-team-as-a-visiting-student-warm-welcome",
          title: 'Shaolun officially joined our team as a PhD student and Xiaolin joined our...',
          description: "",
          section: "News",},{id: "news-2022-highlights-two-vis-2022-papers-vacsen-taurus-a-chi-2022-best-paper-honorable-mention-for-structure-aware-retrieval-gesturelens-published-in-tvcg-tutorials-presented-at-qce-2022-amp-amp-esweek-2022-visiting-phds-yanna-amp-amp-cheng-joined-great-job-team",
          title: '2022 highlights: two VIS 2022 papers (VACSEN, Taurus), a CHI 2022 Best Paper...',
          description: "",
          section: "News",},{id: "news-spring-surge-seven-team-papers-accepted-across-chi-lbw-eurovis-kdd-tkdd-tvcg-amp-amp-more-fantastic-collaboration-team",
          title: 'Spring surge: seven team papers accepted across CHI LBW, EuroVis, KDD, TKDD, TVCG...',
          description: "",
          section: "News",},{id: "news-the-team-expands-manusha-phd-li-amp-amp-haoxuan-visiting-scholars-and-xiaolin-re-joined-while-shaolun-received-the-smu-presidential-doctoral-fellowship-congrats",
          title: 'The team expands: Manusha (PhD), Li &amp;amp;amp; Haoxuan (visiting scholars), and Xiaolin (RE)...',
          description: "",
          section: "News",},{id: "news-autumn-haul-five-new-papers-across-emnlp-tvcg-prdc-amp-amp-finllm-and-numgpt-won-the-technology-novelty-award-stellar-teamwork",
          title: 'Autumn haul: five new papers across EMNLP, TVCG, PRDC &amp;amp;amp; FinLLM, and NumGPT...',
          description: "",
          section: "News",},{id: "news-violet-was-accepted-by-pacificvis-2024-tvcg-track-capping-a-six-paper-year-for-the-team-way-to-go",
          title: 'VIOLET was accepted by PacificVis 2024 (TVCG Track), capping a six-paper year for...',
          description: "",
          section: "News",},{id: "news-strong-start-to-the-year-vaid-chi-2024-amp-amp-conceptthread-tvcg-were-accepted-and-kavinda-joined-us-as-a-research-engineer-welcome-aboard",
          title: 'Strong start to the year: VAID (CHI 2024) &amp;amp;amp; ConceptThread (TVCG) were accepted,...',
          description: "",
          section: "News",},{id: "news-vida-lab-moved-to-nanyang-technological-university-ntu",
          title: 'VIDA Lab moved to Nanyang Technological University (NTU)!!!🎉🎉🎉',
          description: "",
          section: "News",},{id: "news-triple-boost-for-the-team-chartkg-amp-amp-our-cnn-generalization-study-were-accepted-by-tvcg-and-adamotif-was-accepted-by-ieee-vis-2024",
          title: 'Triple boost for the team — ChartKG &amp;amp;amp; our CNN-Generalization study were accepted...',
          description: "",
          section: "News",},{id: "news-fengjie-yilun-and-can-joined-the-team-warm-welcome",
          title: 'Fengjie, Yilun, and Can joined the team, warm welcome!👏👏👏',
          description: "",
          section: "News",},{id: "news-our-team-recently-had-two-papers-about-smart-contract-visualization-prettismart-and-ponzilens-accepted-by-pacificvis2025-tvcg-track-and-tvcg-congratulations-to-xiaolin",
          title: 'Our team recently had two papers about smart contract visualization (PrettiSmart and PonziLens+)...',
          description: "",
          section: "News",},{id: "news-xiaolin-became-the-first-phd-student-at-ntu-shiwei-joined-the-team-as-a-master-s-student-and-jaeuk-joined-us-as-a-visiting-student-warm-welcome",
          title: 'Xiaolin became the first PhD student at NTU, Shiwei joined the team as...',
          description: "",
          section: "News",},{id: "news-fengling-and-yi-joined-our-team-as-visiting-students-welcome",
          title: 'Fengling and Yi joined our team as visiting students! Welcome!!!🎉🎉🎉',
          description: "",
          section: "News",},{id: "news-recently-our-team-had-one-paper-accepted-by-eurovis25-and-two-papers-accepted-by-chi25-lbw",
          title: 'Recently, our team had one paper accepted by EuroVis25 and two papers accepted...',
          description: "",
          section: "News",},{id: "news-our-paper-prettismart-won-the-best-paper-honorable-mention-award-at-pacificvis2025-tvcg-track-congratulations-to-xiaolin",
          title: 'Our paper, PrettiSmart, won the Best Paper Honorable Mention Award🏆 at PacificVis2025 (TVCG...',
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
