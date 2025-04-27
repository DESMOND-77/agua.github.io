  // Mobile menu toggle
  const mobileMenuButton = document.getElementById('mobile-menu-button');
  const mobileMenu = document.getElementById('mobile-menu');

  mobileMenuButton.addEventListener('click', () => {
      mobileMenu.classList.toggle('open');
  });

  // Gestion des sous-menus mobile
  document.querySelectorAll('.submenu-toggle').forEach(button => {
      button.addEventListener('click', () => {
          const submenu = button.nextElementSibling;
          submenu.classList.toggle('hidden');
          const icon = button.querySelector('i');
          icon.classList.toggle('fa-chevron-down');
          icon.classList.toggle('fa-chevron-up');
      });
  });

  // Bouton retour en haut
  const backToTopButton = document.getElementById('backToTop');

  window.addEventListener('scroll', () => {
      if (window.pageYOffset > 300) {
          backToTopButton.classList.add('visible');
      } else {
          backToTopButton.classList.remove('visible');
      }
  });

  backToTopButton.addEventListener('click', (e) => {
      e.preventDefault();
      window.scrollTo({
          top: 0,
          behavior: 'smooth'
      });
  });

  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
          e.preventDefault();
          // Close mobile menu if open
          mobileMenu.classList.remove('open');
          const targetId = this.getAttribute('href');
          const targetElement = document.querySelector(targetId);

          if (targetElement) {
              window.scrollTo({
                  top: targetElement.offsetTop - 20,
                  behavior: 'smooth'
              });

              // Update active nav item
              document.querySelectorAll('.nav-item').forEach(item => {
                  item.classList.remove('active-nav-item');
              });
              this.classList.add('active-nav-item');
          }
      });
  });
          // Add shadow to header on scroll
          window.addEventListener('scroll', function () {
            const header = document.querySelector('header');
            if (window.scrollY > 50) {
                header.classList.add('shadow-lg');
            } else {
                header.classList.remove('shadow-lg');
            }
        });
  // Année dans le footer
  document.getElementById('year').textContent = new Date().getFullYear();
