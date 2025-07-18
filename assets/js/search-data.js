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
          description: "Let&#39;s explore the unknown TOGETHER to shape the future!",
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
        },{id: "nav-photos",
          title: "Photos",
          description: "Life is a journey, not a destination.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/photos/";
          },
        },{id: "nav-contact-us",
          title: "Contact Us",
          description: "We are always happy to hear from you.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/contact-us/";
          },
        },{id: "news-vida-lab-was-founded-at-smu",
          title: 'VIDA Lab was founded at SMU!',
          description: "",
          section: "News",},{id: "news-songheng-joined-our-team-as-the-first-phd-student-welcome",
          title: 'Songheng joined our team as the first PhD student! Welcome! 🥳',
          description: "",
          section: "News",},{id: "news-our-team-received-two-ieee-vis-2021-best-paper-honorable-mention-award-kg4vis-amp-amp-m-lens-congrats",
          title: 'Our team received two IEEE VIS 2021 Best Paper Honorable Mention Award 🏅...',
          description: "",
          section: "News",},{id: "news-shaolun-officially-joined-our-team-as-a-phd-student-and-xiaolin-joined-our-team-as-a-visiting-student-warm-welcome",
          title: 'Shaolun officially joined our team as a PhD student and Xiaolin joined our...',
          description: "",
          section: "News",},{id: "news-visiting-phds-yanna-and-cheng-joined-our-team-welcome",
          title: 'Visiting PhDs, Yanna and Cheng, joined our team! Welcome!🔥',
          description: "",
          section: "News",},{id: "news-our-paper-structure-aware-visualization-retrieval-won-best-paper-honorable-mention-award-at-chi-2022-congratulations-to-haotian",
          title: 'Our paper “Structure-aware Visualization Retrieval” won Best Paper Honorable Mention Award 🏅 at...',
          description: "",
          section: "News",},{id: "news-two-papers-vacsen-taurus-were-accepted-by-vis-2022-and-one-paper-gesturelens-was-accepted-by-tvcg",
          title: 'Two papers (VACSEN, Taurus) were accepted by VIS 2022, and one paper (Gesturelens)...',
          description: "",
          section: "News",},{id: "news-seven-papers-were-accepted-across-chi-lbw-eurovis-kdd-tkdd-tvcg-amp-amp-more",
          title: 'Seven papers were accepted across CHI LBW, EuroVis, KDD, TKDD, TVCG &amp;amp;amp; more!...',
          description: "",
          section: "News",},{id: "news-manusha-phd-li-visiting-student-haoxuan-visiting-student-and-xiaolin-research-engineer-joined-our-team-welcome",
          title: 'Manusha (PhD), Li (visiting student), Haoxuan (visiting student), and Xiaolin (research engineer) joined...',
          description: "",
          section: "News",},{id: "news-shaolun-received-the-smu-presidential-doctoral-fellowship-congratulations",
          title: 'Shaolun received the SMU Presidential Doctoral Fellowship 🏅! Congratulations! 🎓🎉',
          description: "",
          section: "News",},{id: "news-five-new-papers-were-accepted-by-emnlp-tvcg-prdc-and-finllm-numgpt-won-the-technology-novelty-award",
          title: 'Five new papers were accepted by EMNLP, TVCG, PRDC and FinLLM. NumGPT won...',
          description: "",
          section: "News",},{id: "news-violet-was-accepted-by-pacificvis-2024-tvcg-track-congrats-to-shaolun",
          title: 'VIOLET was accepted by PacificVis 2024 (TVCG Track)! Congrats to Shaolun! 🚀🚀🚀',
          description: "",
          section: "News",},{id: "news-two-papers-vaid-chi-2024-and-conceptthread-tvcg-were-accepted-congrats",
          title: 'Two papers, VAID (CHI 2024) and ConceptThread (TVCG), were accepted! Congrats! 👏👏👏',
          description: "",
          section: "News",},{id: "news-kavinda-joined-our-team-as-a-research-engineer-welcome",
          title: 'Kavinda joined our team as a Research Engineer. Welcome! 👏👏👏',
          description: "",
          section: "News",},{id: "news-vida-lab-moved-to-nanyang-technological-university-ntu",
          title: 'VIDA Lab moved to Nanyang Technological University (NTU)!!!🎉🎉🎉',
          description: "",
          section: "News",},{id: "news-two-papers-were-accepted-by-tvcg-and-adamotif-was-accepted-by-ieee-vis-2024",
          title: 'Two papers were accepted by TVCG, and AdaMotif was accepted by IEEE VIS...',
          description: "",
          section: "News",},{id: "news-fengjie-yilun-and-can-joined-the-team-warm-welcome",
          title: 'Fengjie, Yilun, and Can joined the team, warm welcome!👏👏👏',
          description: "",
          section: "News",},{id: "news-our-team-recently-had-two-papers-about-smart-contract-visualization-prettismart-and-ponzilens-accepted-by-pacificvis2025-tvcg-track-and-tvcg-congratulations-to-xiaolin",
          title: 'Our team recently had two papers about smart contract visualization (PrettiSmart and PonziLens+)...',
          description: "",
          section: "News",},{id: "news-we-are-happy-to-have-new-members-xiaolin-and-shiwei-become-the-first-phd-student-and-m-eng-student-of-our-team-at-ntu-and-jaeuk-joined-us-as-a-visiting-student",
          title: 'We are happy to have new members: Xiaolin and Shiwei become the first...',
          description: "",
          section: "News",},{id: "news-fengling-and-yi-joined-our-team-as-visiting-students-welcome",
          title: 'Fengling and Yi joined our team as visiting students! Welcome! 🎉🎉🎉',
          description: "",
          section: "News",},{id: "news-our-team-had-one-paper-accepted-by-eurovis25-and-two-papers-accepted-by-chi25-lbw",
          title: 'Our team had one paper accepted by EuroVis25 and two papers accepted by...',
          description: "",
          section: "News",},{id: "news-our-paper-prettismart-won-the-best-paper-honorable-mention-award-at-pacificvis2025-tvcg-track-congratulations-to-xiaolin",
          title: 'Our paper, PrettiSmart, won the Best Paper Honorable Mention Award 🏅 at PacificVis2025...',
          description: "",
          section: "News",},{id: "news-zubair-bashir-joined-our-team-as-a-visiting-student-welcome",
          title: 'Zubair Bashir joined our team as a visiting student! Welcome! 🎉🎉🎉',
          description: "",
          section: "News",},{id: "news-our-team-has-five-papers-four-full-papers-and-one-short-paper-accepted-at-ieee-vis-2025-congratulations-to-shaolun-xiaolin-can-and-other-outstanding-collaborators",
          title: 'Our team has five papers (four full-papers and one short-paper) accepted at IEEE...',
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
