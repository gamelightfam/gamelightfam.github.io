  const siteOnline = true;
  const shutdown = false;

  const siteStatus = {
    showBanner: false,
    message: "We’re aware that our experiences are currently private due to Roblox being banned in our country starting April 10. Thank you for your patience. We’ll restore access as soon as possible."
  };

  const chartsData = [
    {
      name: "FREE ADMIN",
      image:
        "https://tr.rbxcdn.com/180DAY-245bed370a60b2a7bc7b5e2c8c92a9f7/150/150/Image/Webp/noFilter",
      description:
        "Welcome to Free Admin! You have cool Admin Powers, which allow you to do awesome Admin Commands.<br><br>❓The Prefix is ;<br>💬 Type ;cmds to view all Admin Commands!<br><br>🔨 FREE ADMIN 💥 allows you to:<br>⭐ Play with Admin Commands!<br>🗡️💣🔫 Fight with Hundreds of Free Powerful Gears!<br>😎💬 Chat and Play with Others!",
      screenshots: [
        "https://tr.rbxcdn.com/180DAY-715868ce8a396b09b0c4c88172206c5d/768/432/Image/Webp/noFilter",
      ],
      genre: "Action, Roleplay",
      subgenre: "Open World Action",
      players: "Up to 10 players",
      developer: "GameLightFam Studios",
      releaseDate: "2025-5-21",
      placeId: "110271545001533",
      specifications: {
        "Voice Chat": "Yes",
        Camera: "No",
        Created: "May 21, 2025",
        Updated: "2 months ago",
        Players: "Up to 10 players",
        Genre: "Action, Roleplay",
        Subgenre: "Open World Action, Battlegrounds & Fighting",
        "Avatar Type": "R15",
        Maturity: "Crude humor (Mild), Violence (Repeated/Mild)",
        Platform: "PC, Mobile"
      },
      maturity: "Crude humor (Mild), Violence (Repeated/Mild)",
      isPublic: true
    },
    {
      name: "PrisonBreak Life",
      image:
        "https://tr.rbxcdn.com/180DAY-dfe1e03f05f528587fb01894242b8aaa/150/150/Image/Webp/noFilter",
      description:
        "Live life as a prisoner and escape, or become a guard and defend the prison!<br><br>PrisonBreak Life is a prison game where you can orchestrate catch criminals! Team up with friends for even more fun and plan the ultimate police raid or criminal. What role will you play?",
      screenshots: [
        "https://tr.rbxcdn.com/180DAY-f2313fc38eb1ac6e4eaba70238fda964/768/432/Image/Webp/noFilter",
        "https://tr.rbxcdn.com/180DAY-c2ab1668772b21ff2367965ff0698426/768/432/Image/Webp/noFilter",
      ],
      genre: "Action, Roleplay",
      subgenre: "Open World Action",
      players: "Up to 24 players",
      developer: "GameLightFam Studios",
      releaseDate: "2025-7-5",
      placeId: "102996244873668",
      specifications: {
        "Voice Chat": "No",
        Camera: "No",
        Created: "July 5, 2025",
        Updated: "3 weeks ago",
        Players: "Up to 24 players",
        Genre: "Action, Roleplay",
        Subgenre: "Open World Action",
        "Avatar Type": "R6",
        Maturity: "Violence (Repeated/Mild)",
        Platform: "PC, Mobile, Xbox"
      },
      maturity: "Violence (Repeated/Mild)",
      isPublic: true
    },
  ];

  const comingSoonGames = [];

  // NEW: Global variable to store blog posts
  let blogPosts = [];

  const navbarHTML = `
    <nav class="sticky top-0 z-50 border-b border-indigo-700/60 bg-indigo-950/70 backdrop-blur supports-[backdrop-filter]:bg-indigo-950/50">
      <div class="container mx-auto flex items-center justify-between px-4 py-3 md:py-4">
        <a class="flex items-center gap-3 group" href="?page=home" data-page="home" aria-label="GameLightFam Home">
          <img alt="GameLightFam Logo" class="h-10 w-10 md:h-12 md:w-12" height="48" width="48" src="https://static.wixstatic.com/media/66c613_3454970f97e64b04a7cac86647b7a4ef~mv2.png"/>
        </a>
        <button id="menu-toggle" class="md:hidden inline-flex items-center justify-center rounded-xl p-2 text-indigo-200 hover:text-white hover:bg-indigo-800/60 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400" aria-expanded="false" aria-controls="mobile-nav-links" aria-label="Toggle menu">
          <svg class="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
            <path stroke-linecap="round" d="M4 7h16M4 12h16M4 17h16"/>
          </svg>
        </button>

        <ul id="nav-links" class="hidden md:flex items-center gap-2 text-indigo-200 font-semibold" role="menubar">
          <li role="none">
            <a role="menuitem" data-page="home"
              class="nav-link px-3 py-2 rounded-xl hover:text-white hover:bg-indigo-800/60 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400"
              href="?page=home">Home</a>
          </li>
          <li role="none">
            <a role="menuitem" data-page="games"
              class="nav-link px-3 py-2 rounded-xl hover:text-white hover:bg-indigo-800/60 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400"
              href="?page=games">Charts</a>
          </li>
          <li role="none">
            <a role="menuitem" data-page="newswire"
              class="nav-link px-3 py-2 rounded-xl hover:text-white hover:bg-indigo-800/60 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400"
              href="?page=newswire">Newswire</a>
          </li>
        </ul>
      </div>

      <!-- Mobile -->
      <ul id="mobile-nav-links"
          class="md:hidden hidden flex-col gap-2 border-t border-indigo-800/60 bg-indigo-950/90 px-4 py-4 text-indigo-200 font-semibold"
          role="menu" aria-label="Mobile navigation">
        <li role="none"><a role="menuitem" data-page="home" class="block px-3 py-2 rounded-xl hover:text-white hover:bg-indigo-800/60 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400" href="?page=home">Home</a></li>
        <li role="none"><a role="menuitem" data-page="games" class="block px-3 py-2 rounded-xl hover:text-white hover:bg-indigo-800/60 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400" href="?page=games">Games</a></li>
        <li role="none"><a role="menuitem" data-page="newswire" class="block px-3 py-2 rounded-xl hover:text-white hover:bg-indigo-800/60 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400" href="?page=newswire">Newswire</a></li>
      </ul>
    </nav>
  `;

  const footerHTML = `
      <footer class="bg-indigo-900 text-indigo-200 mt-auto border-t border-indigo-700">
        <div class="container mx-auto px-6 py-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h3 class="text-xl font-semibold mb-4 text-indigo-300">Company</h3>
            <nav class="flex flex-col space-y-2" aria-label="Company links">
              <a class="hover:text-indigo-400 transition focus:outline-none focus:ring-2 focus:ring-indigo-400 rounded" href="?page=about" data-page="about" tabindex="0">About Us</a>
            </nav>
          </div>
          <div>
            <h3 class="text-xl font-semibold mb-4 text-indigo-300">Games</h3>
            <nav class="flex flex-col space-y-2" aria-label="Games links">
              <a class="hover:text-indigo-400 transition focus:outline-none focus:ring-2 focus:ring-indigo-400 rounded" href="?page=games" data-page="games" tabindex="0">Games</a>
              <a class="hover:text-indigo-400 transition focus:outline-none focus:ring-2 focus:ring-indigo-400 rounded" href="?page=newswire" data-page="newswire" tabindex="0">Newswire</a>
            </nav>
          </div>
          <div>
            <h3 class="text-xl font-semibold mb-4 text-indigo-300">Support</h3>
            <nav class="flex flex-col space-y-2" aria-label="Support links">
              <a class="hover:text-indigo-400 transition focus:outline-none focus:ring-2 focus:ring-indigo-400 rounded" href="?page=faq" data-page="faq" tabindex="0">FAQ</a>
              <a class="hover:text-indigo-400 transition focus:outline-none focus:ring-2 focus:ring-indigo-400 rounded" href="?page=contact" data-page="contact" tabindex="0">Contact</a>
              <a class="hover:text-indigo-400 transition focus:outline-none focus:ring-2 focus:ring-indigo-400 rounded" href="?page=privacy" data-page="privacy" tabindex="0">Privacy Policy</a>
              <a class="hover:text-indigo-400 transition focus:outline-none focus:ring-2 focus:ring-indigo-400 rounded" href="?page=terms" data-page="terms" tabindex="0">Terms of Use</a>
            </nav>
          </div>
          <div>
            <h3 class="text-xl font-semibold mb-4 text-indigo-300">Follow Us</h3>
            <div class="flex space-x-4" aria-label="Social media links">
              <a aria-label="YouTube" href="https://www.youtube.com/@gamelightfam" rel="noopener noreferrer" target="_blank" tabindex="0">
                <img alt="YouTube logo in red and white" class="h-8 w-8" height="32" src="https://static.wixstatic.com/media/66c613_8e47d0fe4b3649b5a1f3e0a35a98c9c6~mv2.png" width="32"/>
              </a>
              <a aria-label="Facebook" href="https://www.facebook.com/gamelightfam" rel="noopener noreferrer" target="_blank" tabindex="0">
                <img alt="Facebook logo in blue and white" class="h-8 w-8" height="32" src="https://static.wixstatic.com/media/66c613_202b967da99041d7be2b7422b5f032d3~mv2.png" width="32"/>
              </a>
              <a aria-label="Discord" href="https://discord.gg/VmpFpYB2AT" rel="noopener noreferrer" target="_blank" tabindex="0">
                <img alt="Discord logo in purple and white" class="h-8 w-8" height="32" src="https://static.wixstatic.com/media/66c613_7e1dae88459f4cb5804ea250a29ff53b~mv2.png" width="32"/>
              </a>
              <a aria-label="Roblox" href="https://www.roblox.com/communities/36008741/gamelightfam-Studios" rel="noopener noreferrer" target="_blank" tabindex="0">
                <img alt="Roblox logo in red and white" class="h-8 w-8" height="32" src="https://static.wixstatic.com/media/66c613_f24ca82e8c16460d9c8ec948defa3ed7~mv2.png" width="32"/>
              </a>
            </div>
          </div>
        </div>
        <div class="border-t border-indigo-700 text-center py-4 text-sm text-indigo-400 select-none">
          © 2025 GameLightFam Inc. All Rights Reserved.
        </div>
      </footer>
    `;

  function renderPrivacy() {
    return `
      <main id="main-content" class="flex-grow container mx-auto px-4 py-8 max-w-5xl prose prose-indigo">
        <section class="terms-content">
          <h1 class="font-orbitron text-indigo-400">Privacy Policy</h1>
          <p>At GameLightFam, your privacy is our priority. This policy explains how we collect, use, and protect your information when you engage with our experiences and services.</p>

          <h2>1. Information We Collect</h2>
          <ul>
            <li>Personal details you provide when contacting us or joining our community (e.g., name, email).</li>
            <li>Gameplay data and preferences from your interaction with our Roblox games.</li>
            <li>Technical data such as IP addresses, device type, and browser information.</li>
          </ul>

          <h2>2. How We Use Your Information</h2>
          <ul>
            <li>To deliver and enhance our gaming experiences.</li>
            <li>To communicate updates, events, and support.</li>
            <li>To maintain security and prevent misuse.</li>
            <li>To comply with legal requirements.</li>
          </ul>

          <h2>3. Data Sharing</h2>
          <ul>
            <li>With Roblox Corporation as needed to operate our experiences.</li>
            <li>With trusted service providers assisting us.</li>
            <li>With authorities when legally required.</li>
          </ul>

          <h2>4. Security Measures</h2>
          <p>We implement robust security protocols to safeguard your data against unauthorized access or disclosure.</p>

          <h2>5. Your Rights</h2>
          <p>You may choose what information to provide and can request updates or deletion of your data by contacting us.</p>

          <h2>6. Children's Privacy</h2>
          <p>Our experiences are intended for users 13 and older. We do not knowingly collect data from children under 13 without parental consent.</p>

          <h2>7. Policy Updates</h2>
          <p>We may revise this policy periodically. Updates will be posted here with the effective date.</p>

          <h2>8. Contact</h2>
          <p>Questions? Reach out via our Roblox profile or the <a href="?page=contact" tabindex="0" class="underline text-indigo-300 hover:text-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-400">Contact page</a>.</p>
        </section>
      </main>
      `;
  }

  function renderGames() {
    let html = `
      <main id="main-content" class="flex-grow container mx-auto px-4 py-8 max-w-7xl">
        <h2 class="text-4xl font-extrabold mb-10 text-indigo-300 font-orbitron select-none">Our experiences</h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
    `;

    chartsData.forEach((game) => {
      const safeName = game.name.replace(/"/g, '&quot;');
      html += `
        <article class="group relative overflow-hidden rounded-2xl bg-indigo-950/40 ring-1 ring-indigo-800/50 shadow-lg shadow-indigo-950/30 transition hover:-translate-y-0.5 hover:shadow-xl focus-within:ring-2 focus-within:ring-indigo-400" tabindex="0" aria-label="Game card for ${safeName}">
          <a href="?page=details&game=${encodeURIComponent(game.name)}"
            data-page="details"
            class="block focus:outline-none"
            aria-label="Open ${safeName} details">
            <div class="relative aspect-[16/9] w-full overflow-hidden">
              <img src="${game.image}"
                  alt="Cover image of ${safeName}"
                  loading="lazy"
                  class="h-full w-full object-cover transition duration-300 group-hover:scale-[1.03]" />
              <div class="pointer-events-none absolute inset-0 bg-gradient-to-t from-indigo-950/80 via-indigo-950/20 to-transparent"></div>

              <!-- Title + CTA -->
              <div class="absolute bottom-0 left-0 right-0 p-4 flex items-end justify-between gap-3">
                <h3 class="truncate text-lg md:text-xl font-semibold text-white drop-shadow-[0_1px_1px_rgba(0,0,0,0.6)]">
                  ${game.name}
                </h3>
                <span class="shrink-0 rounded-full bg-white/10 px-2.5 py-1 text-xs font-medium text-indigo-100 ring-1 ring-white/15 backdrop-blur">
                  View
                </span>
              </div>
            </div>
          </a>
        </article>
      `;
    });

    html += `</div></main>`;
    return html;
  }

  function renderGameDetails(game) {
    if (!game) {
      return `<main id="main-content" class="flex-grow container mx-auto px-4 py-8 max-w-5xl text-center text-indigo-300 font-orbitron select-none"><p>Game not found.</p></main>`;
    }

    let specsHTML = Object.entries(game.specifications)
    .filter(([key]) => key!== "Developer")
    .map(
        ([key, val]) =>
          `<div class="flex flex-col">
              <span class="font-semibold text-indigo-300">${key}</span>
              <span>${val}</span>
            </div>`
      )
    .join("");

    const desc = game.description && game.description.trim()!== ""? game.description : "No description available";
    const isPublic = game.isPublic === true;
    const shots = Array.isArray(game.screenshots)? game.screenshots : [];

    return `
      <main id="main-content" class="flex-grow container mx-auto px-4 py-8 max-w-6xl">
      <article class="bg-indigo-800 rounded-3xl shadow-2xl p-8 flex flex-col gap-12">
        <div class="game-details-main flex flex-col md:flex-row gap-8">
          <div class="md:w-1/2 relative flex-shrink-0 rounded-3xl overflow-hidden shadow-2xl group">
            <img id="main-screenshot" src="${shots[0] || ''}" alt="Main screenshot of the game ${game.name} showing gameplay or environment" class="w-full object-cover max-h-[480px] rounded-3xl select-none" draggable="false">
            <!-- Prev/Next -->
            <button id="shot-prev" class="absolute left-3 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white rounded-full w-10 h-10 flex items-center justify-center backdrop-blur-sm transition opacity-0 group-hover:opacity-100 focus:opacity-100" aria-label="Previous screenshot" type="button">
              <i class="fas fa-chevron-left"></i>
            </button>
            <button id="shot-next" class="absolute right-3 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white rounded-full w-10 h-10 flex items-center justify-center backdrop-blur-sm transition opacity-0 group-hover:opacity-100 focus:opacity-100" aria-label="Next screenshot" type="button">
              <i class="fas fa-chevron-right"></i>
            </button>
            <!-- Counter -->
            <div id="shot-counter" class="absolute bottom-3 right-3 text-xs px-2 py-1 rounded-full bg-black/50 text-white select-none">1/${shots.length || 1}</div>
          </div>
          <div class="md:w-1/2 flex flex-col justify-between text-indigo-200">
            <div class="details-header" tabindex="0" aria-label="Game title and key information">
              <h2 class="text-4xl font-bold mb-2">${game.name}</h2>
              <div class="details-meta">
                <span>
                  <label>Developer</label>
                  <span>${game.developer}</span>
                </span>
                <span>
                  <label>Maturity</label>
                  <span>${game.maturity}</span>
                </span>
              </div>
            </div>
            <div class="btn-group flex flex-col gap-3 mt-4">
              ${isPublic? `
                <a href="https://www.roblox.com/games/start?launchData=utm1%253A0%252C0%252Cweb-link%252Chome-bottom-play-button%252C%253B&placeId=${game.placeId}" target="_blank" rel="noopener noreferrer" class="play-btn" aria-label="Play ${game.name} on Roblox" tabindex="0">
                  <i class="fas fa-play"></i> Play Now
                </a>
              ` : `
                <span class="text-indigo-400 font-semibold italic select-none" aria-label="Game is private and cannot be played">This experience is currently not available to play.</span>
              `}
              <a href="?page=games" data-page="games" class="btn-back" aria-label="Back to Games" tabindex="0" title="Back to charts"> Back to charts
              </a>
            </div>
          </div>
        </div>
        <section class="game-description text-indigo-200 prose max-w-full" aria-label="Game description" tabindex="0">
          <h3 class="text-3xl font-bold mb-6 text-indigo-300 select-none">Description</h3>
          ${desc}
        </section>
        <section class="specifications-section text-indigo-200 max-w-full" aria-label="Game specifications" tabindex="0">
          <h3 class="text-3xl font-bold mb-6 text-indigo-300 select-none">Specifications</h3>
          <div class="specs-grid">
            ${specsHTML}
          </div>
        </section>
      </article>
    </main>
    `;
  }

  // MODIFIED: renderNewswire now accepts blogPosts as an argument
  function renderNewswire(posts = []) {
    let postsHTML = "";
    if (posts.length === 0) {
      postsHTML = `<p class="text-center text-indigo-300 col-span-full select-none">No news posts available at the moment.</p>`;
    } else {
      posts.forEach(post => {
        // Ensure post.id is a string for the URL
        const postId = typeof post.id === 'number'? post.id.toString() : post.id;
        const publishedDate = new Date(post.date).toLocaleDateString(undefined, { year: "numeric", month: "long", day: "numeric" });
        postsHTML += `
          <a href="?page=blogpost&id=${postId}" data-page="blogpost" data-id="${postId}">
            <article tabindex="0" class="post bg-indigo-800 rounded-2xl shadow-2xl p-6 flex flex-col text-center text-indigo-200 focus:outline-none focus:ring-4 focus:ring-indigo-500 transition-transform hover:scale-[1.03]">
              <div class="news-post-image-container mb-6 rounded-2xl overflow-hidden relative">
                <img src="${post.image}" alt="News post titled '${post.title}' image" loading="lazy" class="rounded-2xl w-full h-48 object-cover" />
                <div class="news-date-overlay" aria-label="Published date">${publishedDate}</div>
              </div>
              <h3 class="font-semibold text-2xl mb-3">${post.title}</h3>
            </article>
          </a>
        `;
      });
    }

    return `
      <main id="main-content" class="flex-grow container mx-auto px-4 py-8 max-w-7xl text-indigo-200 font-orbitron">
        <h2 class="text-4xl font-extrabold mb-10 text-left text-indigo-400 select-none">Latest News & Updates</h2>
        <div id="news-container" class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-full mx-auto">
          ${postsHTML}
        </div>
      </main>
      `;
  }

  // MODIFIED: renderBlogPost now finds the post from the global blogPosts array
  function renderBlogPost(postId) {
    const post = blogPosts.find(p => p.id == postId); // Use == for loose comparison if ID type might vary
    if (!post) {
      return `<main id="main-content" class="flex-grow container mx-auto px-4 py-8 max-w-5xl text-center text-indigo-300 font-orbitron select-none"><p>Blog post not found.</p></main>`;
    }
    const publishedDate = new Date(post.date).toLocaleDateString(undefined, { year: "numeric", month: "long", day: "numeric" });
    return `
      <main id="main-content" class="flex-grow container mx-auto px-4 py-8 max-w-5xl prose prose-indigo">
        <article class="bg-indigo-800 rounded-2xl shadow-2xl p-8">
          <h1 class="font-orbitron text-indigo-400 mb-4">${post.title}</h1>
          <div class="text-indigo-400 italic mb-6 select-none">Published on ${publishedDate}</div>
          <img src="${post.image}" alt="Featured image for blog post titled '${post.title}'" class="rounded-2xl mb-8 w-full object-cover max-h-96" />
          <section class="blog-post-content">${post.content}</section>
        </article>
      </main>
      `;
  }

  function renderFAQ() {
    return `
      <main id="main-content" class="flex-grow container mx-auto px-4 py-8 max-w-3xl prose prose-indigo">
        <h2 class="text-4xl font-extrabold mb-10 text-center text-indigo-400 font-orbitron select-none">Frequently Asked Questions</h2>
        <section class="space-y-6">
          <div>
            <button class="faq-question w-full text-left bg-indigo-800 rounded-xl px-6 py-4 font-semibold text-indigo-300 flex justify-between items-center focus:outline-none focus:ring-2 focus:ring-indigo-400" aria-expanded="false" aria-controls="faq1" id="faq1-btn" tabindex="0">
              What platforms are your experiences available on?
              <span class="icon"><i class="fas fa-chevron-down"></i></span>
            </button>
            <div class="faq-answer max-h-0 overflow-hidden transition-max-height duration-300 text-indigo-200 px-6 mt-3" id="faq1" role="region" aria-labelledby="faq1-btn" tabindex="0">
              <p>Our experiences are primarily available on Roblox, accessible on PC platforms.</p>
            </div>
          </div>
          <div>
            <button class="faq-question w-full text-left bg-indigo-800 rounded-xl px-6 py-4 font-semibold text-indigo-300 flex justify-between items-center focus:outline-none focus:ring-2 focus:ring-indigo-400" aria-expanded="false" aria-controls="faq2" id="faq2-btn" tabindex="0">
              How can I report bugs or issues?
              <span class="icon"><i class="fas fa-chevron-down"></i></span>
            </button>
            <div class="faq-answer max-h-0 overflow-hidden transition-max-height duration-300 text-indigo-200 px-6 mt-3" id="faq2" role="region" aria-labelledby="faq2-btn" tabindex="0">
              <p>You can report bugs by contacting us through our Roblox profile or via the Contact page on our website.</p>
            </div>
          </div>
          <div>
            <button class="faq-question w-full text-left bg-indigo-800 rounded-xl px-6 py-4 font-semibold text-indigo-300 flex justify-between items-center focus:outline-none focus:ring-2 focus:ring-indigo-400" aria-expanded="false" aria-controls="faq3" id="faq3-btn" tabindex="0">
              Do you have plans for new games?
              <span class="icon"><i class="fas fa-chevron-down"></i></span>
            </button>
            <div class="faq-answer max-h-0 overflow-hidden transition-max-height duration-300 text-indigo-200 px-6 mt-3" id="faq3" role="region" aria-labelledby="faq3-btn" tabindex="0">
              <p>Yes! We are constantly working on new projects and updates. Stay tuned to our Newswire for announcements.</p>
            </div>
          </div>
        </section>
      </main>
      `;
  }

  function renderTerms() {
    return `
      <main id="main-content" class="flex-grow container mx-auto px-4 py-8 max-w-5xl prose prose-indigo">
        <section class="terms-container">
          <h1 class="font-orbitron text-indigo-400">Terms of Use</h1>
          <p>Welcome to GameLightFam. By accessing our experiences and services, you agree to comply with the following terms and conditions.</p>
          <h2>1. Use of Services</h2>
          <p>You agree to use our services only for lawful purposes and in a way that does not infringe the rights of others.</p>
          <h2>2. Intellectual Property</h2>
          <p>All content, including games, images, and text, are owned by GameLightFam or its licensors.</p>
          <h2>3. User Conduct</h2>
          <p>Users must not engage in cheating, hacking, or any behavior that disrupts the community.</p>
          <h2>4. Limitation of Liability</h2>
          <p>GameLightFam is not liable for any damages arising from the use of our services.</p>
          <h2>5. Changes to Terms</h2>
          <p>We may update these terms at any time. Continued use constitutes acceptance of changes.</p>
          <h2>6. Contact</h2>
          <p>For questions, please contact us through our Roblox profile or the Contact page.</p>
        </section>
      </main>
      `;
  }

  function renderContact() {
    return `
      <main id="main-content" class="flex-grow container mx-auto px-4 py-8 max-w-lg prose prose-indigo">
        <section class="contact-form" aria-label="Contact form">
          <h1 class="text-4xl font-extrabold mb-8 text-indigo-400 font-orbitron text-center select-none">Contact Us</h1>
          <form id="contactForm" novalidate class="flex flex-col gap-6">
            <label for="name" class="font-semibold text-indigo-300 select-none">Name</label>
            <input type="text" id="name" name="name" required aria-required="true" placeholder="Your full name" class="rounded-lg p-3 text-slate-900 focus:outline-none focus:ring-2 focus:ring-indigo-400" />
            <label for="email" class="font-semibold text-indigo-300 select-none">Email</label>
            <input type="email" id="email" name="email" required aria-required="true" placeholder="you@example.com" class="rounded-lg p-3 text-slate-900 focus:outline-none focus:ring-2 focus:ring-indigo-400" />
            <label for="subject" class="font-semibold text-indigo-300 select-none">Subject</label>
            <input type="text" id="subject" name="subject" required aria-required="true" placeholder="Subject of your message" class="rounded-lg p-3 text-slate-900 focus:outline-none focus:ring-2 focus:ring-indigo-400" />
            <label for="message" class="font-semibold text-indigo-300 select-none">Message</label>
            <textarea id="message" name="message" rows="6" required aria-required="true" placeholder="Write your message here" class="rounded-lg p-3 text-slate-900 focus:outline-none focus:ring-2 focus:ring-indigo-400 resize-y"></textarea>
            <button type="submit" aria-label="Send message" class="play-btn w-full text-center text-lg font-semibold">Send Message</button>
          </form>
          <p id="formMessage" class="mt-6 text-center text-indigo-300 hidden" role="alert"></p>
        </section>
      </main>
      `;
  }

  function renderAbout() {
    return `
      <main id="main-content" class="flex-grow container mx-auto px-4 py-8 max-w-5xl prose prose-indigo">
        <section class="about-container prose max-w-full">
          <h1 class="font-orbitron select-none text-indigo-400">About GameLightFam</h1>
          <p>GameLightFam is a pioneering metaverse game developer and publisher, crafting immersive connected experiences that unite gaming communities with globally recognized brands. We are shaping the future of pop culture franchises, all born within the metaverse.</p>
          <p>Our mission is to deliver dynamic, immersive experiences to our vibrant community while shaping the next generation of gaming and entertainment franchises born in the metaverse.</p>
          <p>Join us on this exciting journey as we redefine gaming and entertainment for the digital age.</p>
        </section>
      </main>
      `;
  }

  function renderHome() {
    const featuredGames = chartsData.slice(0, 3);
    let featuredGamesHTML = "";
    featuredGames.forEach((game) => {
      const desc = game.description && game.description.trim()!== ""? game.description : "No description available";
      featuredGamesHTML += `
          <article class="home-game-card bg-indigo-800 rounded-2xl shadow-2xl overflow-hidden flex flex-col relative focus-within:ring-4 focus-within:ring-indigo-500 focus-within:outline-none transition-transform hover:scale-[1.04]" tabindex="0" aria-label="Featured game ${game.name}">
            <img src="${game.image}" alt="Cover image of the game ${game.name} showing a thematic scene" loading="lazy" class="w-full h-48 sm:h-56 object-cover rounded-t-2xl" />
            <div class="home-game-card-content p-6 flex flex-col flex-grow">
              <h3 class="text-2xl font-semibold mb-3 text-indigo-200 select-text">${game.name}</h3>
              <p class="flex-grow text-indigo-300 break-words leading-relaxed">${
                desc.length > 120
                ? desc.slice(0, 120) + "..."
                  : desc
              }</p>
              <div class="home-game-genre mt-4 font-semibold text-indigo-400 select-text tracking-wide">${game.genre}</div>
            </div>
          </article>
        `;
    });

    let comingSoonHTML = "";
    if (comingSoonGames.length === 0) {
      comingSoonHTML = `<p class="text-center text-indigo-300 col-span-full mt-6 mb-6 font-orbitron text-lg select-none">There's nothing here just yet, stay tuned.</p>`;
    } else {
      comingSoonGames.forEach((game) => {
        const desc = game.description && game.description.trim()!== ""? game.description : "No description available";
        comingSoonHTML += `
            <article class="home-game-card bg-indigo-800 rounded-2xl shadow-2xl overflow-hidden flex flex-col relative focus-within:ring-4 focus:ring-indigo-500 focus-within:outline-none transition-transform hover:scale-[1.04]" tabindex="0" aria-label="Coming soon game ${game.name}">
              <img src="${game.image}" alt="Coming soon cover image for the game ${game.name} showing thematic artwork" loading="lazy" class="w-full h-48 sm:h-56 object-cover rounded-t-2xl" />
              <div class="coming-soon-label" aria-label="Coming soon label">Coming Soon</div>
              <div class="home-game-card-content p-6 flex flex-col flex-grow">
                <h3 class="text-2xl font-semibold mb-3 text-indigo-200 select-text">${game.name}</h3>
                <p class="flex-grow text-indigo-300 break-words leading-relaxed">${
                  desc.length > 120
                  ? desc.slice(0, 120) + "..."
                    : desc
                }</p>
                <div class="home-game-genre mt-4 font-semibold text-indigo-400 select-text tracking-wide">${game.genre}</div>
              </div>
            </article>
          `;
      });
    }

    return `
    <section class="max-w-7xl mx-4 sm:mx-auto mt-12 sm:mt-16 rounded-3xl bg-indigo-900/70 ring-1 ring-indigo-800/60 shadow-2xl p-6 sm:p-8 lg:p-10 backdrop-blur">
    <div class="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">
      <div class="flex-1 text-indigo-100">
        <h2 class="font-orbitron text-3xl sm:text-4xl font-extrabold text-indigo-200 mb-4">What's Up With Us?</h2>
        <p class="text-base sm:text-lg leading-relaxed text-indigo-100/90">
          Follow GameLightFam Studios on Facebook for dev logs, patch notes, community spotlights, and behind-the-scenes looks at how we build. We share early concepts, playtest invites, and event recaps so you can see what’s coming next and how we got there.
        </p>
        <ul class="mt-4 space-y-2 text-indigo-100/90 list-disc list-inside">
          <li>Weekly updates and roadmap peeks</li>
          <li>Event schedules</li>
        </ul>
        <div class="mt-5 flex flex-wrap gap-3">
          <a href="https://www.facebook.com/gamelightfam" target="_blank" rel="noopener"
            class="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-indigo-200 text-indigo-950 font-semibold hover:bg-white focus:outline-none focus-visible:ring-4 focus-visible:ring-indigo-400/70 transition">
            Visit Facebook
          </a>
          <a href="?page=contact" data-page="contact"
            class="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-indigo-800/60 text-indigo-100 ring-1 ring-indigo-700/60 hover:bg-indigo-800 focus:outline-none focus-visible:ring-4 focus-visible:ring-indigo-400/70 transition">
            Contact Us
          </a>
        </div>
      </div>

      <div class="w-full lg:w-[380px] shrink-0">
        <div class="rounded-2xl overflow-hidden ring-1 ring-indigo-800/60 bg-indigo-950/40 shadow-xl">
          <iframe
            src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fgamelightfam&tabs=timeline&width=360&height=520&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
            width="360" height="520"
            style="border:0;overflow:hidden;border-radius:1rem;display:block;margin:auto;"
            scrolling="no" frameborder="0" allowfullscreen="true"
            allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
            title="GameLightFam Facebook Timeline"></iframe>
        </div>
      </div>
    </div>
  </section>
  
    <h2 class="home-section-title text-center text-indigo-400 font-orbitron mt-20 mb-12 text-4xl select-none">Featured Games</h2>
    <section class="home-games-grid max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 px-6">
      ${featuredGamesHTML}
    </section>
    <h2 class="home-section-title text-center text-indigo-400 font-orbitron mt-20 mb-12 text-4xl select-none">Coming Soon</h2>
    <section class="home-games-grid max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 px-6">
      ${comingSoonHTML}
    </section>
    `;
  }

  // NOTE: `pages` object now refers to functions that will be called dynamically
  // The `newswire` entry is removed as it's handled by `loadPage` dynamically
  const pages = {
    home: renderHome, // Changed to function reference
    games: renderGames, // Changed to function reference
    faq: renderFAQ, // Changed to function reference
    terms: renderTerms, // Changed to function reference
    privacy: renderPrivacy, // Changed to function reference
    contact: renderContact, // Changed to function reference
    about: renderAbout, // Changed to function reference
    // 'newswire' and 'blogpost' will be handled directly in loadPage as they fetch dynamic data
  };

  function renderApp() {
    const app = document.getElementById("app");
    if (!app) return;

    // Shutdown takes priority
    if (typeof shutdown !== "undefined" && shutdown) {
      app.innerHTML = `
        <main id="main-content" class="flex-grow container mx-auto px-4 py-8 max-w-5xl">
          ${renderShutdownPage()}
        </main>`;
      return;
    }

    if (!siteOnline) {
      app.innerHTML = `<main id="main-content" class="flex-grow container mx-auto px-4 py-8 max-w-5xl"></main>`;
    } else {
      app.innerHTML = `
          ${navbarHTML}
          ${renderStatusBanner()}
          <main id="main-content" class="flex-grow container mx-auto px-4 py-8 max-w-7xl"></main>
          ${footerHTML}
        `;
    }
  }

  async function loadPage(page, gameName, blogPostId) {
    const mainContent = document.getElementById("main-content");
    if (!mainContent) return;

    if (!siteOnline) {
      mainContent.innerHTML = renderOfflinePage();
      document.title = "Offline ・ GameLightFam";
      return;
    }

    // Clear main content while loading
    mainContent.innerHTML = `<p class="text-center text-indigo-300 text-xl mt-20 font-orbitron select-none">Loading...</p>`;
    document.title = "Loading... ・ GameLightFam";

    if (page === "details") {
      const gameIndex = chartsData.findIndex((g) => g.name === gameName);
      const game = chartsData[gameIndex];
      mainContent.innerHTML = renderGameDetails(game);
      document.title = game? game.name + " ・ GameLightFam" : "GameLightFam";

    if (game) {
    const mainScreenshot = document.getElementById("main-screenshot");
    const btnPrev = document.getElementById("shot-prev");
    const btnNext = document.getElementById("shot-next");
    const counter = document.getElementById("shot-counter");
    const shots = Array.isArray(game.screenshots)? game.screenshots : [];
    let idx = 0;

    function updateShot(i) {
      if (!shots.length) return;
      idx = (i + shots.length) % shots.length;
      mainScreenshot.src = shots[idx];
      mainScreenshot.alt = `Screenshot ${idx + 1} of the game ${game.name} showing gameplay or environment`;
      if (counter) counter.textContent = `${idx + 1}/${shots.length}`;
    }

    // Buttons
    btnPrev?.addEventListener("click", () => updateShot(idx - 1));
    btnNext?.addEventListener("click", () => updateShot(idx + 1));

    // Keyboard (← / →)
    const keyHandler = (e) => {
      if (e.key === "ArrowLeft") { e.preventDefault(); updateShot(idx - 1); }
      if (e.key === "ArrowRight") { e.preventDefault(); updateShot(idx + 1); }
    };
    document.addEventListener("keydown", keyHandler, { once: true }); // attach once per render

    // Initialize counter
    updateShot(0);
  }
    } else if (page === "newswire") {
      await fetchAndRenderPosts(blogId, apiKey); // Fetch and render posts for the newswire page
      document.title = "Newswire ・ GameLightFam";
    } else if (page === "blogpost") {
      // Ensure blogPosts are loaded before trying to render a single post
      if (blogPosts.length === 0) {
        // If navigating directly to a blog post, fetch all posts first
        await fetchBlogPosts(blogId, apiKey);
      }
      mainContent.innerHTML = renderBlogPost(blogPostId);
      const post = blogPosts.find(p => p.id == blogPostId);
      document.title = post? post.title + " ・ GameLightFam" : "Blog Post ・ GameLightFam";
    } else if (pages[page]) {
      mainContent.innerHTML = pages[page](); // Call the function to get HTML
      document.title = page.charAt(0).toUpperCase() + page.slice(1) + " ・ GameLightFam";
      if (page === "faq") {
        setupFAQToggle();
      } else if (page === "contact") {
        setupContactForm();
      }
    } else {
      mainContent.innerHTML = `<p class="text-center text-indigo-300 text-xl mt-20 font-orbitron select-none">Page not found.</p>`;
      document.title = "Page Not Found ・ GameLightFam";
    }
  }

  function renderOfflinePage() {
    return `
      <section class="offline-container min-h-screen text-indigo-200 flex flex-col justify-center items-center p-6 text-center font-orbitron select-none">
        <div class="flex flex-col items-center justify-center max-w-xs w-full">
          <img src="https://static.wixstatic.com/media/66c613_3454970f97e64b04a7cac86647b7a4ef~mv2.png" alt="Illustration of a computer screen with maintenance tools and a caution sign in neon purple and blue" class="w-full h-auto rounded-2xl shadow-lg" />
          <h1 class="text-5xl font-extrabold mb-6 text-indigo-400 mt-8">We'll be back soon!</h1>
          <p class="text-lg max-w-md mb-8 text-indigo-300">Our website is currently undergoing scheduled maintenance. We apologize for the inconvenience and appreciate your patience. Please check back later.</p>
          <p class="status-link text-indigo-400 text-lg">Please visit our <a href="https://status-gamelightfam.instatus.com/" target="_blank" rel="noopener noreferrer" class="underline hover:text-indigo-200 focus:outline-none focus:ring-2 focus:ring-indigo-400 rounded">Status Page</a> for more information</p>
        </div>
      </section>
      `;
  }

  function renderStatusBanner() {
    if (!siteStatus.showBanner) return "";
    return `
      <div role="status" aria-live="polite"
        class="bg-yellow-900/40 border-y border-yellow-600 text-yellow-100 text-center px-4 py-3 text-sm md:text-base">
        <div class="container mx-auto max-w-7xl">
          <strong class="font-semibold"></strong> ${siteStatus.message}
        </div>
      </div>
    `;
  }

  function renderShutdownPage() {
    return `
      <section class="min-h-[70vh] flex items-center justify-center px-6">
        <div class="max-w-2xl w-full text-center bg-indigo-900/40 border border-indigo-700 rounded-3xl p-10 shadow-2xl backdrop-blur">
          <div class="mx-auto mb-6 h-16 w-16 rounded-2xl bg-gradient-to-br from-indigo-700 to-purple-700 flex items-center justify-center shadow-lg">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="h-8 w-8 text-indigo-100" fill="currentColor" aria-hidden="true">
              <path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20Zm1 5a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm-1 4a1 1 0 0 1 1 1v5a1 1 0 1 1-2 0v-5a1 1 0 0 1 1-1Z"/>
            </svg>
          </div>
          <h1 class="text-4xl md:text-5xl font-extrabold text-indigo-200 font-orbitron mb-4">We’re currently shut down</h1>
          <p class="text-indigo-300 text-lg md:text-xl leading-relaxed">
            The site is permanently shut down.
          </p>
          <div class="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
          </div>
        </div>
      </section>
    `;
  }

  async function handleNavClick(e) {
    const link = e.target.closest("a[data-page]");
    if (link) {
      e.preventDefault();
      const page = link.getAttribute("data-page");
      // For blogpost, we need the ID, which isn't in the simple nav link
      // So for newswire, just push the page state.
      history.pushState({ page }, "", `?page=${page}`);
      await loadPage(page);
      closeMobileMenu();
    }
  }

  async function handleGameLinkClick(e) {
    const link = e.target.closest("a");
    if (!link) return;
    const url = new URL(link.href);
    const params = new URLSearchParams(url.search);

    if (params.get("page") === "details" && params.has("game")) {
      e.preventDefault();
      const gameName = params.get("game");
      history.pushState(
        { page: "details", game: gameName },
        "",
        `?page=details&game=${encodeURIComponent(gameName)}`
      );
      await loadPage("details", gameName);
      closeMobileMenu();
    } else if (params.get("page") === "blogpost" && params.has("id")) {
      e.preventDefault();
      const postId = params.get("id");
      history.pushState(
        { page: "blogpost", id: postId },
        "",
        `?page=blogpost&id=${encodeURIComponent(postId)}`
      );
      await loadPage("blogpost", null, postId);
      closeMobileMenu();
    }
  }

  function setupMenuToggle() {
    const menuToggle = document.getElementById("menu-toggle");
    const mobileNavLinks = document.getElementById("mobile-nav-links");
    if (!menuToggle ||!mobileNavLinks) return;
    menuToggle.addEventListener("click", () => {
      const expanded = menuToggle.getAttribute("aria-expanded") === "true" || false;
      menuToggle.setAttribute("aria-expanded",!expanded);
      mobileNavLinks.classList.toggle("hidden");
    });
  }
  function closeMobileMenu() {
    const mobileNavLinks = document.getElementById("mobile-nav-links");
    const menuToggle = document.getElementById("menu-toggle");
    if (mobileNavLinks &&!mobileNavLinks.classList.contains("hidden")) {
      mobileNavLinks.classList.add("hidden");
      menuToggle.setAttribute("aria-expanded", false);
    }
  }

  function setupFAQToggle() {
    const faqQuestions = document.querySelectorAll(".faq-question");
    faqQuestions.forEach((question) => {
      question.addEventListener("click", () => {
        const answer = question.nextElementSibling;
        const expanded = question.getAttribute("aria-expanded") === "true";
        if (expanded) {
          question.setAttribute("aria-expanded", "false");
          answer.style.maxHeight = null;
          answer.classList.remove("open");
        } else {
          question.setAttribute("aria-expanded", "true");
          answer.style.maxHeight = answer.scrollHeight + "px";
          answer.classList.add("open");
        }
      });
      question.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          question.click();
        }
      });
    });
  }

  // Load EmailJS SDK asynchronously
  (function () {
    const script = document.createElement("script");
    script.src = "https://cdn.emailjs.com/sdk/3.2.0/email.min.js";
    script.onload = () => {
      if (window.emailjs) {
        emailjs.init("YOUR_PUBLIC_KEY"); // Replace with your EmailJS public key
      }
    };
    document.head.appendChild(script);
  })();

  // --- Fetch posts and render news list ---
  const blogId = "4111203618850589496";
  const apiKey = "AIzaSyDEqcAcV2P6NudKaTZvSHpkHsZqmXFzzmw";

  // NEW: Function to fetch blog posts and populate the global blogPosts array
  async function fetchBlogPosts(blogId, apiKey) {
    try {
      const response = await fetch(
        `https://www.googleapis.com/blogger/v3/blogs/${blogId}/posts?key=${apiKey}&maxResults=6`
      );
      if (!response.ok) throw new Error("Network response was not ok");

      const data = await response.json();
      if (data.items) {
        blogPosts = data.items.map(post => {
          const tempDiv = document.createElement("div");
          tempDiv.innerHTML = post.content;
          const imgElement = tempDiv.querySelector("img");
          // Clean up content: strip tags and decode HTML entities for description,
          // keep full HTML for blog post content.
          const contentText = tempDiv.textContent || tempDiv.innerText || "";
          const sanitizedContent = post.content.replace(/<img[^>]*>/g, ''); // Remove image tags from content

          return {
            id: post.id,
            title: post.title,
            date: post.published,
            // Store the raw HTML content for display on the single blog post page
            content: post.content,
            // Extract a plain text description for list views
            description: contentText.substring(0, 150) + (contentText.length > 150? '...' : ''),
            image: imgElement? imgElement.src : "https://placehold.co/600x300/png?text=GameLightFam+News&font=Orbitron",
            url: post.url || "#"
          };
        });
      } else {
        blogPosts = [];
      }
    } catch (error) {
      console.error("Error fetching news posts:", error);
      blogPosts = []; // Clear posts on error
      // Potentially render an error message to the user
    }
  }

  // MODIFIED: fetchAndRenderPosts now uses the global blogPosts array
  async function fetchAndRenderPosts(blogId, apiKey) {
    const mainContent = document.getElementById("main-content");
    if (!mainContent) return;

    // Show a loading message while fetching
    mainContent.innerHTML = `<p class="text-center text-indigo-300 text-xl mt-20 font-orbitron select-none">Loading latest news...</p>`;

    await fetchBlogPosts(blogId, apiKey); // Populate global blogPosts

    if (blogPosts.length > 0) {
      mainContent.innerHTML = renderNewswire(blogPosts);
    } else {
      mainContent.innerHTML = `<p class="text-center text-indigo-300 col-span-full select-none">Failed to load news posts or no posts available. Please try again later.</p>`;
    }
  }

  function setupContactForm() {
    const form = document.getElementById("contactForm");
    const messageEl = document.getElementById("formMessage");
    if (!form ||!messageEl) return;

    form.addEventListener("submit", (e) => {
      e.preventDefault();
      messageEl.classList.add("hidden");
      const name = form.name.value.trim();
      const email = form.email.value.trim();
      const subject = form.subject.value.trim();
      const message = form.message.value.trim();

      if (!name ||!email ||!subject ||!message) {
        messageEl.textContent = "Please fill in all fields.";
        messageEl.classList.remove("hidden");
        return;
      }
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        messageEl.textContent = "Please enter a valid email address.";
        messageEl.classList.remove("hidden");
        return;
      }

      messageEl.textContent = "Sending message...";
      messageEl.classList.remove("hidden");

      setTimeout(() => {
        messageEl.textContent = "Thank you for contacting us! We will get back to you soon.";
        form.reset();
      }, 1500);
    });
  }

  // MODIFIED: initialLoad is now async to wait for API calls
  async function initialLoad() {
    const urlParams = new URLSearchParams(window.location.search);
    const page = urlParams.get("page") || "home";
    const gameName = urlParams.get("game");
    const blogPostId = urlParams.get("id");

    // Pre-fetch blog posts if not already loaded, especially if starting on a blog related page
    if (page === "newswire" || page === "blogpost") {
        await fetchBlogPosts(blogId, apiKey);
    }

    await loadPage(page, gameName, blogPostId);
  }

  // MODIFIED: popstate listener is now async
  window.addEventListener("popstate", async (event) => {
    const state = event.state || {};
    const page = state.page || "home";
    const gameName = state.game;
    const blogPostId = state.id;

    // Pre-fetch blog posts if navigating back to a blog related page and they aren't loaded
    if ((page === "newswire" || page === "blogpost") && blogPosts.length === 0) {
        await fetchBlogPosts(blogId, apiKey);
    }
    await loadPage(page, gameName, blogPostId);
  });

  document.addEventListener("DOMContentLoaded", () => {
    renderApp();
    setupMenuToggle();
    if (siteOnline) {
      document.getElementById("nav-links").addEventListener("click", handleNavClick);
      document.getElementById("mobile-nav-links").addEventListener("click", handleNavClick);
    }
    // NEW: Add a general click listener to the document body to handle game and blog links
    // This is more robust for dynamically loaded content
    document.body.addEventListener("click", async (e) => {
      // Check if the clicked element or its parent is an anchor tag with data-page
      const anchor = e.target.closest("a[data-page]");
      if (anchor) {
        e.preventDefault();
        const page = anchor.getAttribute("data-page");
        const gameName = anchor.getAttribute("href").includes("game=")? new URLSearchParams(anchor.search).get("game") : null;
        const blogPostId = anchor.getAttribute("href").includes("id=")? new URLSearchParams(anchor.search).get("id") : null;

        // Update history state
        let state = { page };
        let url = `?page=${page}`;
        if (gameName) {
          state.game = gameName;
          url += `&game=${encodeURIComponent(gameName)}`;
        }
        if (blogPostId) {
          state.id = blogPostId;
          url += `&id=${encodeURIComponent(blogPostId)}`;
        }

        history.pushState(state, "", url);
        await loadPage(page, gameName, blogPostId);
        closeMobileMenu();
      }
    });
    initialLoad();
  });
