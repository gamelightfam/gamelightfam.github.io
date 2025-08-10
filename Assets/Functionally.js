 const siteOnline = false;

  const gamesData = [
    {
      name: "FREE ADMIN",
      image:
        "https://tr.rbxcdn.com/180DAY-b0c3cfa83c9b22a66f99ab2c86b255c3/150/150/Image/Webp/noFilter",
      description:
        "Welcome to Free Admin! You have cool Admin Powers, which allow you to do awesome Admin Commands.<br><br>❓The Prefix is ;<br>💬 Type ;cmds to view all Admin Commands!<br><br>🔨 FREE ADMIN 💥 allows you to:<br>⭐ Play with Admin Commands!<br>🗡️💣🔫 Fight with Hundreds of Free Powerful Gears!<br>😎💬 Chat and Play with Others!",
      screenshots: [
        "https://tr.rbxcdn.com/180DAY-c584bc3a17518be78f0d874cbae00f77/768/432/Image/Webp/noFilter",
        "https://tr.rbxcdn.com/180DAY-dab6a3eb758071f5904839f6232576c1/768/432/Image/Webp/noFilter",
      ],
      genre: "Action, Roleplay",
      subgenre: "Open World Action",
      players: "Up to 25 players",
      developer: "GameLightFam Studios",
      releaseDate: "2025-5-21",
      placeId: "110271545001533",
      specifications: {
        Genre: "Action, Roleplay",
        Subgenre: "Battlegrounds & Fighting",
        Players: "Up to 10 players",
        Developer: "GameLightFam Studios",
        "Release Date": "2025-5-21",
        Platform: "PC, Mobile, Xbox"
      },
      maturity: "Violence (Mild/Repeated), Crude humor (Mild)",
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
        Maturity: "Mild Violence (Repeated/Mild)",
        Platform: "PC, Mobile, Xbox"
      },
      maturity: "Mild Violence (Repeated/Mild)",
      isPublic: true
    },
  ];

  const comingSoonGames = [];

  // Blog posts data for Newswire and Blog Post pages
  const blogPosts = [];

  const navbarHTML = `
    <nav class="bg-gradient-to-r from-indigo-900 via-purple-900 to-indigo-900 shadow-md sticky top-0 z-50 border-b border-indigo-700">
      <div class="container mx-auto flex items-center justify-between px-4 py-3 md:py-4">
        <a class="flex items-center" href="?page=home" data-page="home" aria-label="GameLightFam Home">
          <img alt="GameLightFam Logo, stylized letters GLF in neon purple and blue with futuristic style" class="h-12 w-12" height="48" src="https://static.wixstatic.com/media/66c613_3454970f97e64b04a7cac86647b7a4ef~mv2.png" width="48"/>
        </a>
        <button aria-expanded="false" aria-label="Toggle menu" class="md:hidden flex flex-col space-y-1.5 focus:outline-none focus:ring-2 focus:ring-indigo-400" id="menu-toggle">
          <span class="block w-7 h-0.5 bg-indigo-300 rounded"></span>
          <span class="block w-7 h-0.5 bg-indigo-300 rounded"></span>
          <span class="block w-7 h-0.5 bg-indigo-300 rounded"></span>
        </button>
        <ul class="hidden md:flex space-x-8 text-indigo-200 font-semibold text-lg" id="nav-links" role="menubar">
          <li role="none"><a role="menuitem" class="hover:text-indigo-400 transition focus:outline-none focus:ring-2 focus:ring-indigo-400 rounded" href="?page=home" data-page="home" tabindex="0">Home</a></li>
          <li role="none"><a role="menuitem" class="hover:text-indigo-400 transition focus:outline-none focus:ring-2 focus:ring-indigo-400 rounded" href="?page=games" data-page="games" tabindex="0">Games</a></li>
          <li role="none"><a role="menuitem" class="hover:text-indigo-400 transition focus:outline-none focus:ring-2 focus:ring-indigo-400 rounded" href="?page=newswire" data-page="newswire" tabindex="0">Newswire</a></li>
        </ul>
      </div>
      <ul class="md:hidden hidden flex-col space-y-4 bg-indigo-900 bg-opacity-90 px-6 py-6 text-indigo-200 font-semibold text-lg" id="mobile-nav-links" role="menu" aria-label="Mobile navigation">
        <li role="none"><a role="menuitem" class="block hover:text-indigo-400 transition focus:outline-none focus:ring-2 focus:ring-indigo-400 rounded" href="?page=home" data-page="home" tabindex="0">Home</a></li>
        <li role="none"><a role="menuitem" class="block hover:text-indigo-400 transition focus:outline-none focus:ring-2 focus:ring-indigo-400 rounded" href="?page=games" data-page="games" tabindex="0">Games</a></li>
        <li role="none"><a role="menuitem" class="block hover:text-indigo-400 transition focus:outline-none focus:ring-2 focus:ring-indigo-400 rounded" href="?page=newswire" data-page="newswire" tabindex="0">Newswire</a></li>
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
        <p>At GameLightFam, your privacy is our priority. This policy explains how we collect, use, and protect your information when you engage with our games and services.</p>

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
          <li>With Roblox Corporation as needed to operate our games.</li>
          <li>With trusted service providers assisting us.</li>
          <li>With authorities when legally required.</li>
        </ul>

        <h2>4. Security Measures</h2>
        <p>We implement robust security protocols to safeguard your data against unauthorized access or disclosure.</p>

        <h2>5. Your Rights</h2>
        <p>You may choose what information to provide and can request updates or deletion of your data by contacting us.</p>

        <h2>6. Children's Privacy</h2>
        <p>Our games are intended for users 13 and older. We do not knowingly collect data from children under 13 without parental consent.</p>

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
      <h2 class="text-4xl font-extrabold mb-10 text-indigo-400 font-orbitron select-none">Our Games</h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
    `;
    gamesData.forEach((game) => {
      const desc = game.description && game.description.trim() !== "" ? game.description : "No description available";
      html += `
        <article class="bg-indigo-800 rounded-xl shadow-xl overflow-hidden flex flex-col relative focus-within:ring-4 focus-within:ring-indigo-500 focus-within:outline-none transition-transform hover:scale-[1.03]" tabindex="0" aria-label="Game card for ${game.name}">
          <a href="?page=details&game=${encodeURIComponent(
            game.name
          )}" data-page="details" class="block focus:outline-none focus:ring-0" tabindex="-1">
            <div class="game-image-container relative">
              <img src="${game.image}" alt="Cover image of the game ${game.name} showing a thematic scene" loading="lazy" class="w-full h-52 sm:h-56 object-cover rounded-b-xl" />
            </div>
            <div class="p-6 flex-grow flex flex-col">
              <h3 class="text-2xl font-semibold mb-3 text-indigo-200">${game.name}</h3>
              <p class="text-indigo-300 flex-grow break-words leading-relaxed">${
                desc.length > 120
                  ? desc.slice(0, 120) + "..."
                  : desc
              }</p>
              <div class="mt-6 text-indigo-400 font-semibold tracking-wide">${game.genre}</div>
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
      .filter(([key]) => key !== "Developer")
      .map(
        ([key, val]) =>
          `<div class="flex flex-col">
            <span class="font-semibold text-indigo-300">${key}</span>
            <span>${val}</span>
          </div>`
      )
      .join("");

    const desc = game.description && game.description.trim() !== "" ? game.description : "No description available";

    const isPublic = game.isPublic === true;

    return `
    <main id="main-content" class="flex-grow container mx-auto px-4 py-8 max-w-6xl">
      <article class="bg-indigo-800 rounded-3xl shadow-2xl p-8 flex flex-col gap-12">
        <div class="game-details-main">
          <div class="md:w-1/2 relative flex-shrink-0 rounded-3xl overflow-hidden shadow-2xl">
            <img id="main-screenshot" src="${game.screenshots[0]}" alt="Main screenshot of the game ${game.name} showing gameplay or environment" class="w-full object-cover max-h-[480px] rounded-3xl" />
            <div class="thumbnails-container mt-4 px-1" role="list" aria-label="Game screenshots thumbnails">
              ${game.screenshots.map((src, i) => `
                <img src="${src}" alt="Screenshot ${i + 1} of the game ${game.name} showing gameplay or environment" class="w-28 h-20 object-cover rounded-lg cursor-pointer border-2 border-transparent hover:border-indigo-400 transition thumbnail" tabindex="0" data-index="${i}" role="listitem" />
              `).join('')}
            </div>
          </div>
          <div class="md:w-1/2 flex flex-col justify-between text-indigo-200">
            <div class="details-header" tabindex="0" aria-label="Game title and key information">
              <h2>${game.name}</h2>
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
              ${isPublic ? `
                <a href="https://www.roblox.com/games/start?launchData=utm1%253A0%252C0%252Cweb-link%252Chome-bottom-play-button%252C%253B&placeId=${game.placeId}" target="_blank" rel="noopener noreferrer" class="play-btn" aria-label="Play ${game.name} on Roblox" tabindex="0">
                  <i class="fas fa-play"></i> Play Now
                </a>
              ` : `
                <span class="text-indigo-400 font-semibold italic select-none" aria-label="Game is private and cannot be played">This game is currently not available to play.</span>
              `}
              <a href="?page=games" data-page="games" class="btn-back" aria-label="Back to Games" tabindex="0" title="Back to Games">
                <i class="fas fa-arrow-left"></i> Back
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

  function renderNewswire() {
    let postsHTML = "";
    blogPosts.forEach(post => {
      const publishedDate = new Date(post.date).toLocaleDateString(undefined, { year: "numeric", month: "long", day: "numeric" });
      postsHTML += `
        <article tabindex="0" class="post bg-indigo-800 rounded-2xl shadow-2xl p-6 flex flex-col text-center text-indigo-200 focus:outline-none focus:ring-4 focus:ring-indigo-500 transition-transform hover:scale-[1.03]">
          <div class="news-post-image-container mb-6 rounded-2xl overflow-hidden relative">
            <img src="${post.image}" alt="News post titled '${post.title}' image" loading="lazy" class="rounded-2xl w-full h-48 object-cover" />
            <div class="news-date-overlay" aria-label="Published date">${publishedDate}</div>
          </div>
          <h3 class="font-semibold text-2xl mb-3">${post.title}</h3>
          <p class="flex-grow mb-6 break-words leading-relaxed">${post.content.replace(/<[^>]+>/g, '').slice(0, 150)}...</p>
          <a href="?page=blogpost&id=${post.id}" data-page="blogpost" data-id="${post.id}" class="read-more text-indigo-300 font-semibold hover:underline focus:outline-none focus:ring-2 focus:ring-indigo-400 rounded" tabindex="0">Read More</a>
        </article>
      `;
    });

    return `
    <main id="main-content" class="flex-grow container mx-auto px-4 py-8 max-w-7xl text-indigo-200 font-orbitron">
      <h2 class="text-4xl font-extrabold mb-10 text-left text-indigo-400 select-none">Latest News & Updates</h2>
      <div id="news-container" class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-full mx-auto">
        ${postsHTML}
      </div>
    </main>
    `;
  }

  function renderBlogPost(post) {
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
        <div class="mt-10">
          <a href="?page=newswire" data-page="newswire" class="btn-back inline-flex items-center gap-2" tabindex="0" aria-label="Back to Newswire">
            <i class="fas fa-arrow-left"></i> Back to Newswire
          </a>
        </div>
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
            What platforms are your games available on?
            <span class="icon"><i class="fas fa-chevron-down"></i></span>
          </button>
          <div class="faq-answer max-h-0 overflow-hidden transition-max-height duration-300 text-indigo-200 px-6 mt-3" id="faq1" role="region" aria-labelledby="faq1-btn" tabindex="0">
            <p>Our games are primarily available on Roblox, accessible on PC, mobile, and Xbox platforms.</p>
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
        <p>Welcome to GameLightFam. By accessing our games and services, you agree to comply with the following terms and conditions.</p>
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
    const featuredGames = gamesData.slice(0, 3);
    let featuredGamesHTML = "";
    featuredGames.forEach((game) => {
      const desc = game.description && game.description.trim() !== "" ? game.description : "No description available";
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
        const desc = game.description && game.description.trim() !== "" ? game.description : "No description available";
        comingSoonHTML += `
          <article class="home-game-card bg-indigo-800 rounded-2xl shadow-2xl overflow-hidden flex flex-col relative focus-within:ring-4 focus-within:ring-indigo-500 focus-within:outline-none transition-transform hover:scale-[1.04]" tabindex="0" aria-label="Coming soon game ${game.name}">
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
    <section class="full-width-banner max-w-full bg-gradient-to-r from-indigo-900 via-purple-900 to-indigo-900 text-center text-indigo-100 p-16 rounded-3xl shadow-2xl font-orbitron mx-6 sm:mx-auto max-w-7xl select-none" role="banner" aria-label="Main promotional banner">
      <div>
        <h1 class="text-5xl sm:text-6xl font-extrabold mb-6 leading-tight text-shadow-lg">Unleashing the Potential of Metaverse Gaming</h1>
        <p class="text-xl max-w-4xl mx-auto mb-12 font-medium">Committed to creating breakthrough experiences and original content, GameLightFam strives to achieve entertainment excellence and redefine the future of gaming.</p>
        <a href="?page=games" data-page="games" class="cta-btn inline-block px-8 py-4 rounded-3xl font-extrabold text-indigo-900 hover:bg-indigo-300 focus:outline-none focus:ring-4 focus:ring-indigo-400" tabindex="0" aria-label="Explore all games">
          Explore Our Games
        </a>
      </div>
    </section>
    <section class="whats-up-container max-w-7xl mx-auto bg-indigo-800 rounded-3xl shadow-2xl p-8 mt-16 flex flex-col md:flex-row gap-10 text-indigo-200" aria-label="What's Up With Us Facebook feed and description">
      <div class="whats-up-text flex-1 text-lg leading-relaxed select-text">
        <h2 class="text-4xl font-extrabold mb-6 text-indigo-400 font-orbitron select-none">What's Up With Us?</h2>
        <p>Stay connected with GameLightFam Studios through our Facebook page. Get the latest updates, community events, and behind-the-scenes content. Join the conversation and be part of our growing community!</p>
      </div>
      <div class="iframe-wrapper flex-1 flex justify-center">
        <iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fgamelightfam&tabs=timeline&width=360&height=520&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId" width="360" height="520" style="border:none;overflow:hidden;border-radius:1rem;" scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share" title="GameLightFam Facebook Timeline"></iframe>
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

  const pages = {
    home: renderHome(),
    games: renderGames(),
    newswire: renderNewswire(),
    faq: renderFAQ(),
    terms: renderTerms(),
    privacy: renderPrivacy(),
    contact: renderContact(),
    about: renderAbout(),
  };

  function renderApp() {
    const app = document.getElementById("app");
    if (!siteOnline) {
      app.innerHTML = `<main id="main-content" class="flex-grow container mx-auto px-4 py-8 max-w-5xl"></main>`;
    } else {
      app.innerHTML = `
        ${navbarHTML}
        <main id="main-content" class="flex-grow container mx-auto px-4 py-8 max-w-7xl"></main>
        ${footerHTML}
      `;
    }
  }

  function loadPage(page, gameName, blogPostId) {
    const mainContent = document.getElementById("main-content");
    if (!mainContent) return;

    if (!siteOnline) {
      mainContent.innerHTML = renderOfflinePage();
      document.title = "Offline ・ GameLightFam";
      return;
    }

    if (page === "details") {
      const gameIndex = gamesData.findIndex((g) => g.name === gameName);
      const game = gamesData[gameIndex];
      mainContent.innerHTML = renderGameDetails(game);
      document.title = game ? game.name + " ・ GameLightFam" : "GameLightFam";

      if (game) {
        const mainScreenshot = document.getElementById("main-screenshot");
        const thumbnails = mainContent.querySelectorAll("img.thumbnail");
        thumbnails.forEach((thumb) => {
          thumb.addEventListener("click", () => {
            mainScreenshot.src = thumb.src;
            mainScreenshot.alt = thumb.alt;
            thumbnails.forEach(t => t.classList.remove("thumbnail-selected"));
            thumb.classList.add("thumbnail-selected");
          });
          thumb.addEventListener("keydown", (e) => {
            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault();
              thumb.click();
            }
          });
        });
        if (thumbnails.length > 0) {
          thumbnails[0].classList.add("thumbnail-selected");
        }
      }
    } else if (page === "blogpost") {
      const post = blogPosts.find(p => p.id === blogPostId);
      mainContent.innerHTML = renderBlogPost(post);
      document.title = post ? post.title + " ・ GameLightFam" : "Blog Post ・ GameLightFam";
    } else if (pages[page]) {
      if (typeof pages[page] === "function") {
        mainContent.innerHTML = pages[page]();
      } else {
        mainContent.innerHTML = pages[page];
      }
      document.title =
        page.charAt(0).toUpperCase() + page.slice(1) + " ・ GameLightFam";
      if (page === "faq") {
        setupFAQToggle();
      } else if (page === "newswire") {
        // No API fetch needed, content is static from blogPosts
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

  function handleNavClick(e) {
    if (e.target.matches("a[data-page]")) {
      e.preventDefault();
      const page = e.target.getAttribute("data-page");
      history.pushState({ page }, "", `?page=${page}`);
      loadPage(page);
      closeMobileMenu();
    } else if (e.target.closest("a[data-page]")) {
      e.preventDefault();
      const link = e.target.closest("a[data-page]");
      const page = link.getAttribute("data-page");
      history.pushState({ page }, "", `?page=${page}`);
      loadPage(page);
      closeMobileMenu();
    }
  }

  function handleGameLinkClick(e) {
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
      loadPage("details", gameName);
      closeMobileMenu();
    } else if (params.get("page") === "blogpost" && params.has("id")) {
      e.preventDefault();
      const postId = params.get("id");
      history.pushState(
        { page: "blogpost", id: postId },
        "",
        `?page=blogpost&id=${encodeURIComponent(postId)}`
      );
      loadPage("blogpost", null, postId);
      closeMobileMenu();
    }
  }

  function setupMenuToggle() {
    const menuToggle = document.getElementById("menu-toggle");
    const mobileNavLinks = document.getElementById("mobile-nav-links");
    if (!menuToggle || !mobileNavLinks) return;
    menuToggle.addEventListener("click", () => {
      const expanded = menuToggle.getAttribute("aria-expanded") === "true" || false;
      menuToggle.setAttribute("aria-expanded", !expanded);
      mobileNavLinks.classList.toggle("hidden");
    });
  }
  function closeMobileMenu() {
    const mobileNavLinks = document.getElementById("mobile-nav-links");
    const menuToggle = document.getElementById("menu-toggle");
    if (mobileNavLinks && !mobileNavLinks.classList.contains("hidden")) {
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

  function setupContactForm() {
    const form = document.getElementById("contactForm");
    const messageEl = document.getElementById("formMessage");
    if (!form || !messageEl) return;

    form.addEventListener("submit", (e) => {
      e.preventDefault();
      messageEl.classList.add("hidden");
      const name = form.name.value.trim();
      const email = form.email.value.trim();
      const subject = form.subject.value.trim();
      const message = form.message.value.trim();

      if (!name || !email || !subject || !message) {
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

  function initialLoad() {
    const urlParams = new URLSearchParams(window.location.search);
    const page = urlParams.get("page") || "home";
    const gameName = urlParams.get("game");
    const blogPostId = urlParams.get("id");
    loadPage(page, gameName, blogPostId);
  }

  window.addEventListener("popstate", (event) => {
    const state = event.state || {};
    const page = state.page || "home";
    const gameName = state.game;
    const blogPostId = state.id;
    loadPage(page, gameName, blogPostId);
  });

  document.addEventListener("DOMContentLoaded", () => {
    renderApp();
    setupMenuToggle();
    if(siteOnline) {
      document.getElementById("nav-links").addEventListener("click", handleNavClick);
      document.getElementById("mobile-nav-links").addEventListener("click", handleNavClick);
    }
    document.getElementById("main-content").addEventListener("click", handleGameLinkClick);
    initialLoad();
  });

