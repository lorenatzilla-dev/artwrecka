/* =============================================
   Art Wrecka — Site Data & Logic
   ============================================= */

const POSTS = [
  {
    slug: "why-not-every-hobby-needs-to-be-productive",
    title: "Why Not Every Hobby Needs to be Productive",
    date: "Jun 2", month: "June", year: 2026,
    excerpt: "In a world that relentlessly optimises for output, there's something quietly radical about picking up a hobby for no reason other than joy.",
    readTime: "5 min read",
    tags: ["creativity","productivity","offline life"],
    body: `
      <p>In a world that relentlessly optimises for output, there's something quietly radical about picking up a hobby for no reason other than joy. We've internalised the logic of productivity so deeply that even our leisure time has become a side hustle, a portfolio piece, or a self-improvement project.</p>
      <p>But hobbies didn't used to work this way. For most of human history, people made things — songs, carvings, gardens, bread — without expecting anything in return. The making was the point. The pleasure was in the process, not the outcome.</p>
      <blockquote>The moment you start optimising a hobby, you've already missed the point of it.</blockquote>
      <p>I started drawing last year with no plan to share it, sell it, or improve fast enough to impress anyone. Some weeks I'm terrible at it. Some weeks I forget. And none of that matters, because there's no metric by which this is being measured.</p>
      <p>That's the radical part. In a culture obsessed with tracking, measuring, and improving, doing something purely for yourself — and keeping it that way — is almost an act of resistance.</p>
      <p>So pick up the hobby. Play the instrument badly. Grow the lopsided tomatoes. Write the poem nobody will read. Let it be useless. That might be exactly what makes it worth doing.</p>
    `
  },
  {
    slug: "the-slow-art-of-doing-nothing-well",
    title: "The Slow Art of Doing Nothing Well",
    date: "May 28", month: "May", year: 2026,
    excerpt: "We've forgotten how to be bored. And boredom, it turns out, is where all the interesting thoughts live.",
    readTime: "4 min read",
    tags: ["slowness","attention"],
    body: `<p>We've forgotten how to be bored. And boredom, it turns out, is where all the interesting thoughts live. A meditation on stillness and what comes after.</p><p>Add your full article content here.</p>`
  },
  {
    slug: "sketchbooks-are-not-portfolios",
    title: "Sketchbooks Are Not Portfolios",
    date: "May 15", month: "May", year: 2026,
    excerpt: "Your sketchbook is a thinking space, not a gallery. The moment you start performing for an imagined audience, you lose the very thing that makes it useful.",
    readTime: "4 min read",
    tags: ["creativity","drawing"],
    body: `<p>Your sketchbook is a thinking space, not a gallery. The moment you start performing for an imagined audience, you lose the very thing that makes it useful.</p><p>Add your full article content here.</p>`
  },
  {
    slug: "on-making-things-nobody-will-see",
    title: "On Making Things Nobody Will See",
    date: "May 3", month: "May", year: 2026,
    excerpt: "Some of my best work has never been shared. Is that a waste, or the purest form of creative practice?",
    readTime: "3 min read",
    tags: ["creativity","privacy"],
    body: `<p>Some of my best work has never been shared. Is that a waste, or the purest form of creative practice? A short essay on invisible output.</p><p>Add your full article content here.</p>`
  },
  {
    slug: "reading-offline-notes-from-a-digital-detox",
    title: "Reading Offline: Notes from a Digital Detox",
    date: "Apr 22", month: "April", year: 2026,
    excerpt: "Thirty days without Twitter, Reddit, or RSS. What I read instead, what I noticed, and why I haven't fully gone back.",
    readTime: "6 min read",
    tags: ["offline life","reading"],
    body: `<p>Thirty days without Twitter, Reddit, or RSS. What I read instead, what I noticed, and why I haven't fully gone back.</p><p>Add your full article content here.</p>`
  },
  {
    slug: "the-myth-of-the-inspired-artist",
    title: "The Myth of the Inspired Artist",
    date: "Apr 10", month: "April", year: 2026,
    excerpt: "Inspiration is overrated. Most great work is the product of showing up on the uninspired days.",
    readTime: "5 min read",
    tags: ["creativity","process"],
    body: `<p>Inspiration is overrated. Most great work is the product of showing up on the uninspired days — the ones where you'd rather do absolutely anything else.</p><p>Add your full article content here.</p>`
  },
  {
    slug: "what-birdwatching-taught-me-about-attention",
    title: "What Birdwatching Taught Me About Attention",
    date: "Mar 29", month: "March", year: 2026,
    excerpt: "I started birdwatching as a joke. Six months later I own binoculars and a field notebook.",
    readTime: "5 min read",
    tags: ["attention","nature","slowness"],
    body: `<p>I started birdwatching as a joke. Six months later I own binoculars and a field notebook. Here's what slow, patient observation has done for my other creative work.</p><p>Add your full article content here.</p>`
  },
  {
    slug: "in-defence-of-the-unfinished-project",
    title: "In Defence of the Unfinished Project",
    date: "Mar 12", month: "March", year: 2026,
    excerpt: "Half-finished novels, abandoned paintings, a guitar that gathers dust. Maybe these aren't failures.",
    readTime: "4 min read",
    tags: ["creativity","process"],
    body: `<p>Half-finished novels, abandoned paintings, a guitar that gathers dust. Maybe these aren't failures. Maybe they're evidence of a curious, restless mind.</p><p>Add your full article content here.</p>`
  },
  {
    slug: "analog-tools-in-a-digital-world",
    title: "Analog Tools in a Digital World",
    date: "Feb 27", month: "February", year: 2026,
    excerpt: "Fountain pens, index cards, printed books. There's a quiet resistance in choosing tools that don't ping you.",
    readTime: "4 min read",
    tags: ["tools","offline life"],
    body: `<p>Fountain pens, index cards, printed books. There's a quiet resistance in choosing tools that don't ping you. A look at why physicality still matters for thinking.</p><p>Add your full article content here.</p>`
  },
  {
    slug: "how-i-learned-to-sit-with-bad-work",
    title: "How I Learned to Sit With Bad Work",
    date: "Feb 11", month: "February", year: 2026,
    excerpt: "For years I deleted anything I wasn't proud of. Here's what I lost by doing that.",
    readTime: "5 min read",
    tags: ["creativity","process"],
    body: `<p>For years I deleted anything I wasn't proud of. Here's what I lost by doing that, and how making peace with mediocrity unlocked something I didn't expect.</p><p>Add your full article content here.</p>`
  },
  {
    slug: "community-vs-audience",
    title: "Community vs Audience: A Creator's Dilemma",
    date: "Jan 30", month: "January", year: 2026,
    excerpt: "An audience consumes. A community participates. The distinction sounds subtle until you're building something.",
    readTime: "5 min read",
    tags: ["community","creativity"],
    body: `<p>An audience consumes. A community participates. The distinction sounds subtle until you're building something and realise which one you actually want around you.</p><p>Add your full article content here.</p>`
  },
  {
    slug: "the-case-for-a-personal-library",
    title: "The Case for a Personal Library",
    date: "Jan 14", month: "January", year: 2026,
    excerpt: "Physical bookshelves are out of fashion. I'm doubling down anyway.",
    readTime: "4 min read",
    tags: ["books","reading"],
    body: `<p>Physical bookshelves are out of fashion. I'm doubling down anyway. Why owning books — not just reading them — has changed how I think and who I am.</p><p>Add your full article content here.</p>`
  },
  {
    slug: "resting-without-guilt",
    title: "Resting Without Guilt",
    date: "Dec 20", month: "December", year: 2025,
    excerpt: "Why is doing nothing so hard? A short reflection on rest as a creative act.",
    readTime: "3 min read",
    tags: ["slowness","wellbeing"],
    body: `<p>Why is doing nothing so hard? A short reflection on rest as a creative act, and the cultural guilt we carry around leisure.</p><p>Add your full article content here.</p>`
  },
  {
    slug: "notebooks-i-have-loved",
    title: "Notebooks I Have Loved",
    date: "Dec 5", month: "December", year: 2025,
    excerpt: "A deeply personal tour through the journals that shaped how I think.",
    readTime: "5 min read",
    tags: ["tools","stationery"],
    body: `<p>A deeply personal tour through the journals that shaped how I think: from school copybooks to dot-grid Leuchtturms and everything in between.</p><p>Add your full article content here.</p>`
  },
  {
    slug: "five-books-that-changed-how-i-see",
    title: "Five Books That Changed How I See",
    date: "Nov 19", month: "November", year: 2025,
    excerpt: "Not life-changing in the motivational sense — more like they quietly rearranged the furniture of my mind.",
    readTime: "6 min read",
    tags: ["books","reading"],
    body: `<p>Not life-changing in the motivational sense — more like they quietly rearranged the furniture of my mind. A reading list with context.</p><p>Add your full article content here.</p>`
  },
  {
    slug: "on-being-a-beginner-again",
    title: "On Being a Beginner Again",
    date: "Nov 4", month: "November", year: 2025,
    excerpt: "I picked up watercolour at 32. Being genuinely bad at something — and continuing anyway — turns out to be one of the most freeing experiences available.",
    readTime: "4 min read",
    tags: ["creativity","learning"],
    body: `<p>I picked up watercolour at 32. Being genuinely bad at something — and continuing anyway — turns out to be one of the most freeing experiences available.</p><p>Add your full article content here.</p>`
  },
  {
    slug: "the-internet-archive-and-memory",
    title: "The Internet Archive and Memory",
    date: "Oct 22", month: "October", year: 2025,
    excerpt: "The web forgets things at a terrifying pace. A look at digital preservation and ephemeral content.",
    readTime: "5 min read",
    tags: ["internet","memory"],
    body: `<p>The web forgets things at a terrifying pace. A look at digital preservation, ephemeral content, and what it means to build something online that lasts.</p><p>Add your full article content here.</p>`
  },
  {
    slug: "slow-mornings-as-creative-infrastructure",
    title: "Slow Mornings as Creative Infrastructure",
    date: "Oct 8", month: "October", year: 2025,
    excerpt: "The first hour of the day is not for email. Here's the morning rhythm I've built over two years.",
    readTime: "5 min read",
    tags: ["routine","creativity"],
    body: `<p>The first hour of the day is not for email. Here's the morning rhythm I've built over two years, and why protecting it changed everything about how I work.</p><p>Add your full article content here.</p>`
  },
  {
    slug: "against-optimisation",
    title: "Against Optimisation",
    date: "Sep 22", month: "September", year: 2025,
    excerpt: "We've applied the logic of efficiency to too many parts of life. Some things are not supposed to be optimised.",
    readTime: "4 min read",
    tags: ["productivity","slowness"],
    body: `<p>We've applied the logic of efficiency to too many parts of life. Some things — friendships, art, meals, walks — are not supposed to be optimised.</p><p>Add your full article content here.</p>`
  },
  {
    slug: "what-drawing-does-for-my-brain",
    title: "What Drawing Does for My Brain",
    date: "Sep 7", month: "September", year: 2025,
    excerpt: "I'm not a good draughtsperson. But drawing daily — even badly — has quietly become the most important thinking tool in my kit.",
    readTime: "4 min read",
    tags: ["drawing","creativity"],
    body: `<p>I'm not a good draughtsperson. But drawing daily — even badly — has quietly become the most important thinking tool in my kit. Here's what I've noticed.</p><p>Add your full article content here.</p>`
  }
];

const BOOKS = [
  { slug: "das-cafe-ohne-namen", year: 2026, title: "Das Café ohne Namen", author: "Robert Seethaler", genre: "Historical Fiction", genreClass: "genre-hist", stars: 3, pages: 192,
    review: `<p>A quiet, melancholy novel set in a Viennese café. Seethaler writes with great restraint — every sentence carries more weight than it lets on.</p><p>Three stars feels almost unfair given how beautifully it's written, but the plot is slim and the ending left me wanting more. That said, the atmosphere alone makes it worth the afternoon it takes to read.</p>` },
  { slug: "everything-is-tuberculosis", year: 2026, title: "Everything Is Tuberculosis", author: "John Green", genre: "Science", genreClass: "genre-sci", stars: 4, pages: 288,
    review: `<p>A surprisingly compelling look at how one disease shaped history. Green writes science with warmth and accessibility — this isn't textbook stuff.</p><p>Add your notes here.</p>` },
  { slug: "how-to-love", year: 2026, title: "How to Love", author: "Thich Nhat Hanh", genre: "Philosophy", genreClass: "genre-phil", stars: 5, pages: 128,
    review: `<p>One of the most quietly transformative books I've read. Each page is a single thought, given room to breathe. Hanh makes philosophy feel like a natural part of being alive rather than an academic exercise.</p><p>Add your notes here.</p>` },
  { slug: "void", year: 2026, title: "Void", author: "Veronika Roth", genre: "Science Fiction", genreClass: "genre-scifi", stars: 3, pages: 352,
    review: `<p>Fast-moving and fun, but ultimately less interesting than the premise suggested. Add your notes here.</p>` },
  { slug: "vera-wongs-unsolicited-advice-for-murderers", year: 2026, title: "Vera Wong's Unsolicited Advice for Murderers", author: "Jesse Q. Sutanto", genre: "Mystery", genreClass: "genre-myst", stars: 3, pages: 320,
    review: `<p>Charming, cosy mystery with a very specific energy. Vera Wong is a wonderful character. Add your notes here.</p>` },
  { slug: "die-chronistin-der-meere", year: 2026, title: "Die Chronistin der Meere", author: "Patrik Svensson", genre: "Science", genreClass: "genre-sci", stars: 3, pages: 240,
    review: `<p>A lyrical take on the natural world. Svensson writes beautifully but the science occasionally gets lost in the prose. Add your notes here.</p>` },
  { slug: "all-about-love", year: 2026, title: "All About Love", author: "bell hooks", genre: "Philosophy", genreClass: "genre-phil", stars: 3, pages: 256,
    review: `<p>Important ideas, earnestly delivered. Some sections landed harder than others but the core argument about love as a practice rather than a feeling is one I keep returning to. Add your notes here.</p>` },
  { slug: "stoner", year: 2025, title: "Stoner", author: "John Williams", genre: "Fiction", genreClass: "genre-fic", stars: 5, pages: 278,
    review: `<p>One of the great novels of the 20th century. Devastating in the quietest possible way. Add your notes here.</p>` },
  { slug: "devotions", year: 2025, title: "Devotions", author: "Mary Oliver", genre: "Philosophy", genreClass: "genre-phil", stars: 5, pages: 432,
    review: `<p>A life's work of poetry collected in one volume. Keep this by your bed. Add your notes here.</p>` },
  { slug: "piranesi", year: 2025, title: "Piranesi", author: "Susanna Clarke", genre: "Fiction", genreClass: "genre-fic", stars: 4, pages: 272,
    review: `<p>Utterly strange and utterly wonderful. Clarke builds a world that feels both completely impossible and entirely real. Add your notes here.</p>` },
  { slug: "when-breath-becomes-air", year: 2025, title: "When Breath Becomes Air", author: "Paul Kalanithi", genre: "Biography", genreClass: "genre-bio", stars: 5, pages: 228,
    review: `<p>I finished this on a train and sat very still for a long time afterwards. Required reading. Add your notes here.</p>` },
  { slug: "four-thousand-weeks", year: 2025, title: "Four Thousand Weeks", author: "Oliver Burkeman", genre: "Self-help", genreClass: "genre-self", stars: 4, pages: 288,
    review: `<p>The anti-productivity productivity book. Burkeman argues convincingly that the problem isn't how you manage your time — it's that you have almost none of it. Clarifying and slightly terrifying. Add your notes here.</p>` },
  { slug: "the-ministry-for-the-future", year: 2025, title: "The Ministry for the Future", author: "Kim Stanley Robinson", genre: "Science Fiction", genreClass: "genre-scifi", stars: 4, pages: 576,
    review: `<p>Ambitious, sprawling, and sometimes slow — but the ideas are worth the effort. KSR imagines climate solutions in concrete, institutional detail. Add your notes here.</p>` }
];

// ── Helpers ──────────────────────────────────────────────────────────────

function starsHTML(n) {
  return Array.from({ length: 5 }, (_, i) =>
    `<span class="star${i >= n ? ' off' : ''}">★</span>`
  ).join('');
}

function thumbSVG() {
  return `<svg width="60" height="50" viewBox="0 0 60 50" fill="none" aria-hidden="true">
    <rect x="5" y="5" width="50" height="40" rx="3" fill="currentColor"/>
    <circle cx="20" cy="18" r="6" fill="white"/>
    <path d="M5 35 L18 22 L28 32 L38 20 L55 38" stroke="white" stroke-width="2" fill="none"/>
  </svg>`;
}

function sidebarHTML(activeSlug) {
  const latest = POSTS.slice(0, 5).map(p =>
    `<li><a href="article.html?slug=${p.slug}">${p.title}</a></li>`
  ).join('');

  return `
    <div class="sidebar-avatar" aria-hidden="true">L</div>
    <div class="sidebar-name">Art Wrecker</div>
    <div class="sidebar-bio">I decided to start living offline a bit more, and it turns out I get a lot of things done!</div>
    <div class="sidebar-section">
      <div class="sidebar-heading">Offline Counter</div>
      <div class="counter-row">
        <div class="counter-item"><strong>12</strong><span class="counter-label">articles</span></div>
        <div class="counter-item"><strong>6</strong><span class="counter-label">videos</span></div>
        <div class="counter-item"><strong>13</strong><span class="counter-label">books read</span></div>
      </div>
    </div>
    <div class="sidebar-section">
      <div class="sidebar-heading">Latest Posts</div>
      <ul class="sidebar-posts">${latest}</ul>
    </div>
  `;
}

function headerHTML(activePage) {
  const pages = ['blog', 'library', 'archive'];
  const labels = { blog: 'Blog', library: 'Library', archive: 'Archive' };
  const hrefs  = { blog: 'index.html', library: 'library.html', archive: 'archive.html' };
  return `
    <header class="site-header">
      <div class="site-title">Art Wrecka</div>
    </header>
    <nav class="site-nav" aria-label="Main navigation">
      ${pages.map(p =>
        `<a href="${hrefs[p]}"${activePage === p ? ' class="active" aria-current="page"' : ''}>${labels[p]}</a>`
      ).join('')}
    </nav>
  `;
}

function footerHTML() {
  return `
    <footer class="site-footer" role="contentinfo">
      <span>© 2026 Art Wrecker</span>
      <nav aria-label="Footer navigation">
        <a href="index.html">Blog</a>
        <a href="library.html">Library</a>
        <a href="archive.html">Archive</a>
      </nav>
      <span>Last updated June 2026</span>
    </footer>
  `;
}
