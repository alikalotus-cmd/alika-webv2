(function () {
  let progressBar = null;

  // Initialize SPA routing
  function init() {
    createProgressBar();
    interceptLinks();

    // Listen for browser Back/Forward navigation
    window.addEventListener('popstate', () => {
      loadPage(window.location.href, false);
    });

    console.log("SPA Router initialized.");
  }

  function createProgressBar() {
    progressBar = document.createElement('div');
    progressBar.id = 'spa-progress-bar';
    progressBar.className = 'fixed top-0 left-0 h-1 z-[99999] bg-gradient-to-r from-pink-500 via-purple-500 to-sky-400 transition-all duration-300 ease-out opacity-0';
    progressBar.style.width = '0%';
    document.body.appendChild(progressBar);
  }

  function showProgressBar() {
    if (!progressBar) return;
    progressBar.style.width = '0%';
    progressBar.classList.remove('opacity-0');
    progressBar.classList.add('opacity-100');

    // Simulate loading progress
    setTimeout(() => {
      if (progressBar.classList.contains('opacity-100')) {
        progressBar.style.width = '70%';
      }
    }, 100);
  }

  function hideProgressBar() {
    if (!progressBar) return;
    progressBar.style.width = '100%';
    setTimeout(() => {
      progressBar.classList.remove('opacity-100');
      progressBar.classList.add('opacity-0');
      setTimeout(() => {
        progressBar.style.width = '0%';
      }, 300);
    }, 200);
  }

  function interceptLinks() {
    document.addEventListener('click', (e) => {
      // Find the closest anchor tag
      const anchor = e.target.closest('a');
      if (!anchor) return;

      const href = anchor.getAttribute('href');
      if (!href) return;

      // Skip external links, hashes, mailto, etc.
      if (href.startsWith('http') || href.startsWith('mailto:') || href.startsWith('tel:') || href.startsWith('javascript:')) {
        return;
      }

      // Check if it is a hash change on the same page
      const currentPath = window.location.pathname.split('/').pop() || 'index.html';
      const targetUrl = new URL(href, window.location.href);
      const targetPath = targetUrl.pathname.split('/').pop() || 'index.html';

      if (currentPath === targetPath && targetUrl.hash) {
        // Same page path, just hash target
        const hash = targetUrl.hash.substring(1);
        if (currentPath === 'index.html' || currentPath === '') {
          // If on home page, trigger standard tab transition
          if (typeof window.initHomepage === 'function') {
            e.preventDefault();
            window.initHomepage(hash);
            history.pushState(null, '', href);
          }
        }
        return;
      }

      // Intercept local page transitions
      if (targetPath.endsWith('.html')) {
        e.preventDefault();
        loadPage(href, true);
      }
    });
  }

  function loadPage(url, pushState = true) {
    showProgressBar();

    fetch(url)
      .then(res => {
        if (!res.ok) throw new Error("Network response was not ok");
        return res.text();
      })
      .then(html => {
        const parser = new DOMParser();
        const doc = parser.parseFromString(html, 'text/html');

        // 1. Swap main content
        const currentMain = document.querySelector('main');
        const newMain = doc.querySelector('main');
        if (currentMain && newMain) {
          // Pre-adjust tab visibility if navigating to homepage tabs to avoid flashes
          const targetUrl = new URL(url, window.location.href);
          const pageName = targetUrl.pathname.split('/').pop() || 'index.html';
          if ((pageName === 'index.html' || pageName === '') && targetUrl.hash) {
            const tabId = targetUrl.hash.substring(1);
            if (tabId === 'dashboard' || tabId === 'profil' || tabId === 'schedule') {
              const tabSections = newMain.querySelectorAll('.tab-section');
              tabSections.forEach(sec => {
                if (sec.id === tabId) {
                  sec.classList.remove('hidden');
                } else {
                  sec.classList.add('hidden');
                }
              });
            }
          }
          currentMain.innerHTML = newMain.innerHTML;
          currentMain.className = newMain.className;
        }

        // 2. Update Document Title
        document.title = doc.title;

        // 3. Resolve page name
        const targetUrl = new URL(url, window.location.href);
        const pageName = targetUrl.pathname.split('/').pop() || 'index.html';

        // 4. Update address bar history
        if (pushState) {
          history.pushState(null, '', url);
        }

        // 5. Update Navigation active links classes
        updateNavActiveLinks(pageName);

        // 6. Execute page specific scripts
        executePageScripts(pageName);

        // 6.5. Update player display mode (docked/floating)
        if (window.PersistentPlayer && typeof window.PersistentPlayer.onPageTransition === 'function') {
          window.PersistentPlayer.onPageTransition();
        }

        // 7. Scroll handling / hash navigation
        if (targetUrl.hash) {
          const hashId = targetUrl.hash.substring(1);
          const targetEl = document.getElementById(hashId);
          if (targetEl) {
            setTimeout(() => {
              targetEl.scrollIntoView({ behavior: 'smooth' });
            }, 100);
          }

          if (pageName === 'index.html' || pageName === '') {
            if (typeof window.initHomepage === 'function') {
              window.initHomepage(hashId);
            }
          }
        } else {
          window.scrollTo({ top: 0, behavior: 'smooth' });
          if (pageName === 'index.html' || pageName === '') {
            if (typeof window.initHomepage === 'function') {
              window.initHomepage('dashboard');
            }
          }
        }

        hideProgressBar();
      })
      .catch(err => {
        console.error("SPA dynamic navigation failed, fallback to standard load:", err);
        hideProgressBar();
        if (pushState) {
          window.location.href = url;
        }
      });
  }

  function updateNavActiveLinks(pageName) {
    const navLinks = document.querySelectorAll('.nav-link');
    const currentHash = window.location.hash.substring(1) || 'dashboard';

    navLinks.forEach(link => {
      const href = link.getAttribute('href') || '';
      const dataTarget = link.getAttribute('data-target') || '';
      const linkPath = href.split('#')[0].split('/').pop() || 'index.html';

      // Reset style classes
      link.classList.remove('active', 'text-pink-600', 'dark:text-pink-400', 'text-pink-500', 'text-purple-600', 'dark:text-purple-400');
      link.classList.add('text-zinc-600', 'dark:text-zinc-400');

      if (pageName === 'index.html' || pageName === '') {
        // Match home page tabs using data-target attribute
        if (dataTarget === currentHash) {
          link.classList.add('active', 'text-pink-600', 'dark:text-pink-400');
          link.classList.remove('text-zinc-600', 'dark:text-zinc-400');
        }
      } else {
        // Match sub-pages using linkPath
        if (linkPath === pageName) {
          if (pageName === 'b.indo.html') {
            link.classList.add('active', 'text-purple-600', 'dark:text-purple-400');
          } else {
            link.classList.add('active', 'text-pink-600', 'dark:text-pink-400');
          }
          link.classList.remove('text-zinc-600', 'dark:text-zinc-400');
        }
      }
    });
  }

  function executePageScripts(pageName) {
    if (pageName === 'b.indo.html') {
      reloadScript('assets/js/b.indo.js');
    } else if (pageName === 'informatika.html') {
      reloadScript('assets/js/informatika.js');
    } else if (pageName === 'index.html' || pageName === '') {
      if (typeof window.initOrbitWidget !== 'function') {
        reloadScript('assets/js/orbit-progress.js');
      }
      if (typeof window.initHomepage === 'function') {
        window.initHomepage();
      } else {
        reloadScript('assets/js/main.js');
      }
    }
  }

  function reloadScript(src) {
    // Remove existing scripts to keep document body clean
    const existing = document.querySelectorAll(`script[src^="${src.split('?')[0]}"]`);
    existing.forEach(s => s.remove());

    const script = document.createElement('script');
    script.src = src + '?t=' + Date.now(); // force fresh parse and IIFE run
    document.body.appendChild(script);
  }

  // Run initialization
  if (document.readyState === 'complete' || document.readyState === 'interactive') {
    init();
  } else {
    document.addEventListener('DOMContentLoaded', init);
  }

  // Expose loadPage internationally if needed
  window.SPARouter = {
    loadPage: loadPage
  };
})();
