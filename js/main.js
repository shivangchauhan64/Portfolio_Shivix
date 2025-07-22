// Hardcoded data for each section
const aboutData = [
  { key: 'profile', value: 'Tech enthusiast, skilled developer, and leader' },
  { key: 'domain', value: 'Full-Stack Web Development, Software Development' },
  { key: 'education', value: 'Bachelor of Engineering' },
  { key: 'language', value: 'English, Hindi' },
  { key: 'other_skills', value: 'Git, Hibernate, Bootstrap, AWS, API Development' },
  { key: 'certifications', value: 'Full Stack Development, Java with Spring Boot Framework, AWS and React (Full Stack Apps)' },
  { key: 'awards', value: 'President of Technical Club at RBCET, Appreciation Letter for Academic and Extracurricular Contributions' },
  { key: 'interests', value: 'Singing, Drawing' }
];

const educationData = [
  {
    institution: 'Rakshpal Bahadur College Of Engineering & Technology - Bareilly',
    degree: 'Bachelor of Technology',
    field: 'Computer Science & Engineering',
    year_of_completion: '2021-2025'
  },
  {
    institution: 'Bal Vidyapeeth Public School - Aonla, Bareilly',
    degree: 'XII-CBSE',
    field: 'PCM',
    year_of_completion: '2021'
  }
];

const skillsData = [
  { type: 'skill', name: 'React & Node.js', percentage: 85 },
  { type: 'skill', name: 'Java & Spring Boot', percentage: 80 },
  { type: 'skill', name: 'MySQL & Hibernate', percentage: 75 },
  { type: 'skill', name: 'HTML, CSS & JavaScript', percentage: 80 },
  { type: 'skill', name: 'AWS', percentage: 65 },
  { type: 'expertise', name: 'Full-Stack Web Development (MERN Stack)' },
  { type: 'expertise', name: 'Java Development with Spring Boot and Hibernate' },
  { type: 'expertise', name: 'Database Management (MySQL)' },
  { type: 'expertise', name: 'API Development and Integration (Node.js, Express.js)' },
  { type: 'expertise', name: 'Frontend Development (React, Bootstrap)' },
  { type: 'expertise', name: 'Cloud Technologies (AWS)' }
];

const experienceData = [
  {
    company: 'Extreme Appcoders',
    role: 'Full Stack Software Developer',
    start_date: 'March 2025',
    end_date: 'Present',
    points: [
      'Structured React-based UI libraries used in 15+ applications, accelerating feature delivery and maintaining uniformity across platforms.',
      'Configured and integrated RESTful APIs with robust state handling, resulting in a 25% improvement in response time for high-traffic services.'
    ]
  },
  {
    company: 'RBMI Group of Institutions',
    role: 'Java Full Stack Software Developer',
    start_date: 'Nov 2024',
    end_date: 'Mar 2025',
    points: [
      'Delivered backend systems for student administration using Spring Boot and Hibernate, supporting 200+ users seamlessly.',
      'Deployed over 10 microservices and API endpoints that optimized information flow between departments and reduced manual processing delays.'
    ]
  },
  {
    company: 'Softpro India Private Limited',
    role: 'Java Developer',
    start_date: 'Oct 2024',
    end_date: 'Nov 2024',
    points: [
      'Revamped existing academic tools by implementing new UI logic with Spring MVC, increasing user satisfaction scores by 18%.',
      'Designed scalable RESTful services supporting multi-user environments, reducing downtime during peak usage hours.'
    ]
  },
  {
    company: 'Rasheed Foundation',
    role: 'Wordpress Developer and Quality Assurance',
    start_date: 'Apr 2024',
    end_date: 'Aug 2024',
    points: [
      'Built and customized two client websites using WordPress with plugin-based functionality tailored to business needs.',
      'Conducted functional and UI testing for 3+ deployed platforms, reporting 30+ bugs and streamlining release cycles.'
    ]
  }
];

const projectsData = [
  {
    title: 'Student-Counselor Management System',
    description: 'Developed using Java, Spring Boot, MySQL, Hibernate, and Bootstrap. Automated counselor assignments, reducing administrative processing time for 100+ students per semester.',
    image_url: 'images/proj_1.png',
    project_url: '#'
  },
  {
    title: 'E-Commerce Gift Website',
    description: 'Built with React, Node.js, Express.js, and MySQL. Features full authentication, live cart, and secure checkout, processing over 100 user transactions.',
    image_url: 'images/proj_2.png',
    project_url: '#'
  },
  {
    title: 'Digital Visitor Management System',
    description: 'Created using Spring Boot, MySQL, JavaScript, and Bootstrap. Replaced manual logbooks, cutting approval and entry time by over 60%.',
    image_url: 'images/proj_3.png',
    project_url: '#'
  },
  {
    title: 'E-Commerce Medicine Store Website',
    description: 'Developed with React, Node.js, Express.js, and MySQL. Includes product filtering, secure checkout, and admin panel, managing 100+ orders securely.',
    image_url: 'images/proj_4.png',
    project_url: '#'
  }
];

const aboutLabels = {
  profile: "Profile",
  domain: "Domain",
  education: "Education",
  language: "Language",
  other_skills: "Other Skills",
  certifications: "Certifications",
  awards: "Awards",
  interests: "Interests"
};

document.addEventListener('DOMContentLoaded', () => {
  try {
    // About Section
    const aboutList = document.getElementById('about-info-list');
    aboutList.innerHTML = '';
    aboutData.forEach(item => {
      const label = aboutLabels[item.key] || item.key;
      const li = document.createElement('li');
      li.className = 'd-flex';
      li.innerHTML = `<span>${label}:</span> <span>${item.value}</span>`;
      aboutList.appendChild(li);
    });

    // Education Section
    const educationList = document.getElementById('education-list');
    educationList.innerHTML = '';
    educationData.forEach((item, idx) => {
      const card = document.createElement('div');
      card.className = 'education-card';
      card.innerHTML = `
        <div class="edu-title">${item.institution}</div>
        <div class="edu-details">${item.degree ? item.degree + ',' : ''} ${item.field ? item.field + ',' : ''} ${item.percentage ? item.percentage + ',' : ''} ${item.year_of_completion ? '(' + item.year_of_completion + ')' : ''}</div>
        ${item.description ? `<div class="edu-details">${item.description}</div>` : ''}
      `;
      educationList.appendChild(card);
      // Add separator except after last card
      if (idx < educationData.length - 1) {
        const sep = document.createElement('div');
        sep.className = 'education-separator';
        educationList.appendChild(sep);
      }
    });

    // Skills & Expertise Section
    const skillsList = document.getElementById('skills-list');
    skillsList.innerHTML = '';
    // Render skills (progress bars)
    skillsData.filter(item => item.type === 'skill').forEach(item => {
      const skillLabel = document.createElement('span');
      skillLabel.textContent = `${item.name}`;
      const skillPercent = document.createElement('span');
      skillPercent.className = 'pull-right';
      skillPercent.textContent = `${item.percentage}%`;
      const progress = document.createElement('div');
      progress.className = 'progress';
      const progressBar = document.createElement('div');
      progressBar.className = 'progress-bar';
      progressBar.setAttribute('role', 'progressbar');
      progressBar.style.width = `${item.percentage}%`;
      progressBar.setAttribute('aria-valuenow', item.percentage);
      progressBar.setAttribute('aria-valuemin', '0');
      progressBar.setAttribute('aria-valuemax', '100');
      progress.appendChild(progressBar);
      skillsList.appendChild(skillLabel);
      skillsList.appendChild(skillPercent);
      skillsList.appendChild(progress);
    });
    // Render expertise as a bullet list in expertise-list
    const expertiseData = skillsData.filter(item => item.type === 'expertise');
    const expertiseList = document.getElementById('expertise-list');
    expertiseList.innerHTML = '';
    if (expertiseData.length > 0) {
      const ul = document.createElement('ul');
      expertiseData.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item.name;
        ul.appendChild(li);
      });
      expertiseList.appendChild(ul);
    }

    // Experience Section
    const experienceList = document.getElementById('experience-list');
    experienceList.innerHTML = '';
    experienceData.forEach((item, idx) => {
      const card = document.createElement('div');
      card.className = 'experience-card';
      card.innerHTML = `
        <div class="exp-title">${item.company} – ${item.role} <span class="text-muted">${item.start_date || ''}${item.end_date ? ' - ' + item.end_date : ''}</span></div>
        <div class="exp-details">${item.description ? item.description : ''}</div>
        ${item.points && item.points.length > 0 ? `<ul class='exp-details'>${item.points.map(point => `<li>${point}</li>`).join('')}</ul>` : ''}
      `;
      experienceList.appendChild(card);
      // Add separator except after last card
      if (idx < experienceData.length - 1) {
        const sep = document.createElement('div');
        sep.className = 'experience-separator';
        experienceList.appendChild(sep);
      }
    });

    // Projects Section
    const projectsList = document.getElementById('projects-list');
    projectsList.innerHTML = '';
    projectsData.forEach(item => {
      const blogEntry = document.createElement('div');
      blogEntry.className = 'blog-entry justify-content-end';
      const a = document.createElement('a');
      a.className = 'block-20 zoom-effect';
      a.href = item.project_url || '#';
      a.target = '_blank';
      a.style.backgroundImage = `url('${item.image_url || ''}')`;
      a.style.backgroundColor = '#222';
      a.style.width = '350px';
      a.style.height = '200px';
      a.style.display = 'block';
      a.style.backgroundSize = 'cover';
      a.style.backgroundPosition = 'center';
      const textDiv = document.createElement('div');
      textDiv.className = 'text mt-3 float-right d-block';
      const h3 = document.createElement('h3');
      h3.className = 'heading';
      const h3a = document.createElement('a');
      h3a.href = item.project_url || '#';
      h3a.target = '_blank';
      h3a.textContent = item.title;
      h3.appendChild(h3a);
      const p = document.createElement('p');
      p.textContent = item.description;
      textDiv.appendChild(h3);
      textDiv.appendChild(p);
      blogEntry.appendChild(a);
      blogEntry.appendChild(textDiv);
      projectsList.appendChild(blogEntry);
    });
  } catch (err) {
    console.error('Error loading data:', err);
  }
});

// AOS Animation Initialization
AOS.init({
  duration: 800,
  easing: 'slide'
});

// jQuery-based functionality
(function($) {
  "use strict";

  $(window).stellar({
    responsive: true,
    parallaxBackgrounds: true,
    parallaxElements: true,
    horizontalScrolling: false,
    hideDistantElements: false,
    scrollProperty: 'scroll'
  });

  var fullHeight = function() {
    $('.js-fullheight').css('height', $(window).height());
    $(window).resize(function() {
      $('.js-fullheight').css('height', $(window).height());
    });
  };
  fullHeight();

  // Loader
  var loader = function() {
    setTimeout(function() {
      if ($('#ftco-loader').length > 0) {
        $('#ftco-loader').removeClass('show');
      }
    }, 1);
  };
  loader();

  // Scrollax
  $.Scrollax();

  // Burger Menu
  var burgerMenu = function() {
    $('body').on('click', '.js-fh5co-nav-toggle', function(event) {
      event.preventDefault();
      if ($('#ftco-nav').is(':visible')) {
        $(this).removeClass('active');
      } else {
        $(this).addClass('active');
      }
    });
  };
  burgerMenu();

  var onePageClick = function() {
    $(document).on('click', '#ftco-nav a[href^="#"]', function(event) {
      event.preventDefault();
      var href = $.attr(this, 'href');
      $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top - 70
      }, 500, function() {
        // window.location.hash = href;
      });
    });
  };
  onePageClick();

  var carousel = function() {
    $('.home-slider').owlCarousel({
      loop: true,
      autoplay: true,
      margin: 0,
      animateOut: 'fadeOut',
      animateIn: 'fadeIn',
      nav: false,
      autoplayHoverPause: false,
      items: 1,
      navText: ["<span class='ion-md-arrow-back'></span>", "<span class='ion-chevron-right'></span>"],
      responsive: {
        0: { items: 1 },
        600: { items: 1 },
        1000: { items: 1 }
      }
    });
  };
  carousel();

  $('nav .dropdown').hover(function() {
    var $this = $(this);
    $this.addClass('show');
    $this.find('> a').attr('aria-expanded', true);
    $this.find('.dropdown-menu').addClass('show');
  }, function() {
    var $this = $(this);
    $this.removeClass('show');
    $this.find('> a').attr('aria-expanded', false);
    $this.find('.dropdown-menu').removeClass('show');
  });

  $('#dropdown04').on('show.bs.dropdown', function() {
    console.log('show');
  });

  // Scroll
  var scrollWindow = function() {
    $(window).scroll(function() {
      var $w = $(this),
        st = $w.scrollTop(),
        navbar = $('.ftco_navbar'),
        sd = $('.js-scroll-wrap');

      if (st > 150) {
        if (!navbar.hasClass('scrolled')) {
          navbar.addClass('scrolled');
        }
      }
      if (st < 150) {
        if (navbar.hasClass('scrolled')) {
          navbar.removeClass('scrolled sleep');
        }
      }
      if (st > 350) {
        if (!navbar.hasClass('awake')) {
          navbar.addClass('awake');
        }
        if (sd.length > 0) {
          sd.addClass('sleep');
        }
      }
      if (st < 350) {
        if (navbar.hasClass('awake')) {
          navbar.removeClass('awake');
          navbar.addClass('sleep');
        }
        if (sd.length > 0) {
          sd.removeClass('sleep');
        }
      }
    });
  };
  scrollWindow();

  var counter = function() {
    $('#section-counter, .hero-wrap, .ftco-counter, .ftco-about').waypoint(function(direction) {
      if (direction === 'down' && !$(this.element).hasClass('ftco-animated')) {
        var comma_separator_number_step = $.animateNumber.numberStepFactories.separator(',');
        $('.number').each(function() {
          var $this = $(this),
            num = $this.data('number');
          $this.animateNumber({
            number: num,
            numberStep: comma_separator_number_step
          }, 7000);
        });
      }
    }, { offset: '95%' });
  };
  counter();

  var contentWayPoint = function() {
    var i = 0;
    $('.ftco-animate').waypoint(function(direction) {
      if (direction === 'down' && !$(this.element).hasClass('ftco-animated')) {
        i++;
        $(this.element).addClass('item-animate');
        setTimeout(function() {
          $('body .ftco-animate.item-animate').each(function(k) {
            var el = $(this);
            setTimeout(function() {
              var effect = el.data('animate-effect');
              if (effect === 'fadeIn') {
                el.addClass('fadeIn ftco-animated');
              } else if (effect === 'fadeInLeft') {
                el.addClass('fadeInLeft ftco-animated');
              } else if (effect === 'fadeInRight') {
                el.addClass('fadeInRight ftco-animated');
              } else {
                el.addClass('fadeInUp ftco-animated');
              }
              el.removeClass('item-animate');
            }, k * 50, 'easeInOutExpo');
          });
        }, 100);
      }
    }, { offset: '95%' });
  };
  contentWayPoint();

  // Magnific Popup
  $('.image-popup').magnificPopup({
    type: 'image',
    closeOnContentClick: true,
    closeBtnInside: false,
    fixedContentPos: true,
    mainClass: 'mfp-no-margins mfp-with-zoom',
    gallery: {
      enabled: true,
      navigateByImgClick: true,
      preload: [0, 1]
    },
    image: {
      verticalFit: true
    },
    zoom: {
      enabled: true,
      duration: 300
    }
  });

  $('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
    disableOn: 700,
    type: 'iframe',
    mainClass: 'mfp-fade',
    removalDelay: 160,
    preloader: false,
    fixedContentPos: false
  });
})(jQuery);

// Typing animation for hero section
const typingAnimationElement = document.getElementById('typing-animation');
if (typingAnimationElement) {
  const typingTexts = [
    'MERN Stack Developer  ',
    'Java Developer  ',
    'Full Stack Developer'
  ];
  function playTypingAnimation(text) {
    for (let i = 0; i < text.length; i++) {
      setTimeout(() => {
        typingAnimationElement.textContent += text[i];
      }, i * 200);
    }
    setTimeout(() => {
      typingAnimationElement.textContent = '';
      playTypingAnimation(typingTexts[(typingTexts.indexOf(text) + 1) % typingTexts.length]);
    }, text.length * 200);
  }
  playTypingAnimation(typingTexts[0]);
}