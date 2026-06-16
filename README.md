# Art Wrecka — Website

Static site. No build tools, no dependencies. Drop on any host and it works.

## Structure

```
artwrecka/
├── index.html        Blog list
├── article.html      Single article
├── library.html      Book list by year
├── book.html         Single book detail
├── archive.html      Posts by year → month
├── css/style.css     All styles
├── js/data.js        All content + shared helpers
└── images/
    ├── header.gif    Animated banner
    ├── avatar.jpg    Sidebar avatar
    ├── grog.mp4      Video for post 1
    ├── cookies.webp  Illustration for post 2
    ├── enshittified.webp
    └── sleep.webp
```

## Adding a new post

Open `js/data.js` and add to the **top** of the `POSTS` array (newest first):

```js
{
  slug: "your-post-slug",
  title: "Your Post Title",
  subtitle: "Optional subtitle shown under the title",
  date: "Jun 20",
  month: "June",
  year: 2026,
  excerpt: "One or two sentences for the blog list.",
  readTime: "4 min read",
  tags: ["tag-one", "tag-two"],
  thumb: "images/your-thumb.jpg",   // optional: thumbnail on blog list
  video: null,                       // optional: replaces hero image with video
  body: `
    <p>Your first paragraph.</p>
    <figure class="article-image">
      <img src="images/your-image.webp" alt="Description">
      <figcaption>Optional caption</figcaption>
    </figure>
    <p>More paragraphs...</p>
    <blockquote>A pull quote if you have one.</blockquote>
  `
}
```

Put your image files in `images/`. The post will automatically appear in the blog list, archive, and sidebar.

## Adding a book

Add to the top of the `BOOKS` array in `js/data.js`:

```js
{ slug: "book-slug", year: 2026, title: "Title", author: "Author",
  genre: "Philosophy", genreClass: "genre-phil", stars: 4, pages: 224 }
```

**Genre classes:** `genre-fic` · `genre-hist` · `genre-sci` · `genre-scifi` · `genre-phil` · `genre-myst` · `genre-bio` · `genre-self` · `genre-psych` · `genre-health`

**Stars:** 1–5 integer. Use `0` for unrated (shows a dash).

## Adding a rating or review to a book

Find the book in `BOOKS` and set `stars: 4` and add a `review` field:

```js
review: `<p>Your thoughts here.</p><p>More thoughts.</p>`
```

## Updating the offline counter

In `js/data.js` → `sidebarHTML()`, update the three numbers.

## Deployment

- **Netlify / Vercel**: drag the folder into the dashboard
- **GitHub Pages**: push to a repo, enable Pages
- **Any FTP host**: upload the folder as-is

No server config needed — all routing uses `?slug=` query params.
