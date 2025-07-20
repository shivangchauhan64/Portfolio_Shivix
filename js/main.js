import { fetchAbout } from './api/about.js';
import { fetchEducation } from './api/education.js';
import { fetchSkills } from './api/skills.js';
import { fetchExperience } from './api/experience.js';
import { fetchProjects } from './api/projects.js';

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

document.addEventListener('DOMContentLoaded', async () => {
  try {
    // About Section
    const aboutData = await fetchAbout();
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
    const educationData = await fetchEducation();
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
    const skillsData = await fetchSkills();
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
    // Render expertise as a bullet list in expertise-list (below Area of Expertise heading)
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
    const experienceData = await fetchExperience();
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
    const projectsData = await fetchProjects();
    console.log('Projects data:', projectsData);
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
      // Debug log for each card
      console.log('Rendered project card:', item.title);
    });
  } catch (err) {
    console.error('Error loading data:', err);
  }
});

AOS.init({
	duration: 800,
	easing: 'slide'
});

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
		$(window).resize(function(){
			$('.js-fullheight').css('height', $(window).height());
		});

	};
	fullHeight();

	// loader
	var loader = function() {
		setTimeout(function() { 
			if($('#ftco-loader').length > 0) {
				$('#ftco-loader').removeClass('show');
			}
		}, 1);
	};
	loader();

	// Scrollax
   $.Scrollax();



   // Burger Menu
	var burgerMenu = function() {

		$('body').on('click', '.js-fh5co-nav-toggle', function(event){

			event.preventDefault();

			if ( $('#ftco-nav').is(':visible') ) {
				$(this).removeClass('active');
			} else {
				$(this).addClass('active');	
			}

			
			
		});

	};
	burgerMenu();


	var onePageClick = function() {


		$(document).on('click', '#ftco-nav a[href^="#"]', function (event) {
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
	    loop:true,
	    autoplay: true,
	    margin:0,
	    animateOut: 'fadeOut',
	    animateIn: 'fadeIn',
	    nav:false,
	    autoplayHoverPause: false,
	    items: 1,
	    navText : ["<span class='ion-md-arrow-back'></span>","<span class='ion-chevron-right'></span>"],
	    responsive:{
	      0:{
	        items:1
	      },
	      600:{
	        items:1
	      },
	      1000:{
	        items:1
	      }
	    }
		});
	};
	carousel();

	$('nav .dropdown').hover(function(){
		var $this = $(this);
		// 	 timer;
		// clearTimeout(timer);
		$this.addClass('show');
		$this.find('> a').attr('aria-expanded', true);
		// $this.find('.dropdown-menu').addClass('animated-fast fadeInUp show');
		$this.find('.dropdown-menu').addClass('show');
	}, function(){
		var $this = $(this);
			// timer;
		// timer = setTimeout(function(){
			$this.removeClass('show');
			$this.find('> a').attr('aria-expanded', false);
			// $this.find('.dropdown-menu').removeClass('animated-fast fadeInUp show');
			$this.find('.dropdown-menu').removeClass('show');
		// }, 100);
	});


	$('#dropdown04').on('show.bs.dropdown', function () {
	  console.log('show');
	});

	// scroll
	var scrollWindow = function() {
		$(window).scroll(function(){
			var $w = $(this),
					st = $w.scrollTop(),
					navbar = $('.ftco_navbar'),
					sd = $('.js-scroll-wrap');

			if (st > 150) {
				if ( !navbar.hasClass('scrolled') ) {
					navbar.addClass('scrolled');	
				}
			} 
			if (st < 150) {
				if ( navbar.hasClass('scrolled') ) {
					navbar.removeClass('scrolled sleep');
				}
			} 
			if ( st > 350 ) {
				if ( !navbar.hasClass('awake') ) {
					navbar.addClass('awake');	
				}
				
				if(sd.length > 0) {
					sd.addClass('sleep');
				}
			}
			if ( st < 350 ) {
				if ( navbar.hasClass('awake') ) {
					navbar.removeClass('awake');
					navbar.addClass('sleep');
				}
				if(sd.length > 0) {
					sd.removeClass('sleep');
				}
			}
		});
	};
	scrollWindow();

	

	var counter = function() {
		
		$('#section-counter, .hero-wrap, .ftco-counter, .ftco-about').waypoint( function( direction ) {

			if( direction === 'down' && !$(this.element).hasClass('ftco-animated') ) {

				var comma_separator_number_step = $.animateNumber.numberStepFactories.separator(',')
				$('.number').each(function(){
					var $this = $(this),
						num = $this.data('number');
						console.log(num);
					$this.animateNumber(
					  {
					    number: num,
					    numberStep: comma_separator_number_step
					  }, 7000
					);
				});
				
			}

		} , { offset: '95%' } );

	}
	counter();


	var contentWayPoint = function() {
		var i = 0;
		$('.ftco-animate').waypoint( function( direction ) {

			if( direction === 'down' && !$(this.element).hasClass('ftco-animated') ) {
				
				i++;

				$(this.element).addClass('item-animate');
				setTimeout(function(){

					$('body .ftco-animate.item-animate').each(function(k){
						var el = $(this);
						setTimeout( function () {
							var effect = el.data('animate-effect');
							if ( effect === 'fadeIn') {
								el.addClass('fadeIn ftco-animated');
							} else if ( effect === 'fadeInLeft') {
								el.addClass('fadeInLeft ftco-animated');
							} else if ( effect === 'fadeInRight') {
								el.addClass('fadeInRight ftco-animated');
							} else {
								el.addClass('fadeInUp ftco-animated');
							}
							el.removeClass('item-animate');
						},  k * 50, 'easeInOutExpo' );
					});
					
				}, 100);
				
			}

		} , { offset: '95%' } );
	};
	contentWayPoint();

	// magnific popup
	$('.image-popup').magnificPopup({
    type: 'image',
    closeOnContentClick: true,
    closeBtnInside: false,
    fixedContentPos: true,
    mainClass: 'mfp-no-margins mfp-with-zoom', // class to remove default margin from left and right side
     gallery: {
      enabled: true,
      navigateByImgClick: true,
      preload: [0,1] // Will preload 0 - before current, and 1 after the current image
    },
    image: {
      verticalFit: true
    },
    zoom: {
      enabled: true,
      duration: 300 // don't foget to change the duration also in CSS
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

