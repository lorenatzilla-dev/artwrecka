# Art Wrecka — Website Package

A static personal blog with no build tools, no dependencies, and no backend.
Drop the files on any web host and you're live.

---

## File Structure

```
artwrecka/
├── index.html        Blog list (paginated, 8 per page)
├── article.html      Single article template
├── library.html      Books read, grouped by year
├── book.html         Single book detail template
├── archive.html      All posts grouped by year → month
├── css/
│   └── style.css     All styles
└── js/
    └── data.js       All content + shared helpers (header, footer, sidebar)
```

---

## How to add a new post

Open `js/data.js` and add an object to the top of the `POSTS` array:

```js
{
  slug: "your-post-slug",           // used in the URL: article.html?slug=your-post-slug
  title: "Your Post Title",
  date: "Jun 10",                   // display date
  month: "June",                    // for archive grouping
  year: 2026,
  excerpt: "One or two sentences shown on the blog list.",
  readTime: "4 min read",
  tags: ["tag-one", "tag-two"],
  body: `
    <p>Your first paragraph goes here.</p>
    <p>Second paragraph.</p>
    <blockquote>A pull quote if you have one.</blockquote>
    <p>More content...</p>
  `
}
```

The post will automatically appear on the blog list, archive, and sidebar.

---

## How to add a new book

Open `js/data.js` and add an object to the top of the `BOOKS` array:

```js
{
  slug: "book-slug",
  year: 2026,
  title: "Book Title",
  author: "Author Name",
  genre: "Fiction",
  genreClass: "genre-fic",   // see genre classes below
  stars: 4,                  // 1–5
  pages: 320,
  review: `
    <p>Your review or reading notes go here.</p>
    <p>As long or as short as you like.</p>
  `
}
```

### Available genre classes

| Class         | Colour     | Use for                  |
|---------------|------------|--------------------------|
| `genre-fic`   | warm grey  | Fiction, Literary Fiction|
| `genre-hist`  | soft red   | Historical Fiction       |
| `genre-sci`   | light blue | Science, Non-fiction     |
| `genre-scifi` | lavender   | Science Fiction          |
| `genre-phil`  | amber      | Philosophy               |
| `genre-myst`  | teal       | Mystery, Thriller        |
| `genre-bio`   | pink       | Biography, Memoir        |
| `genre-self`  | green      | Self-help                |

---

## Adding images

**Article hero image** — in `article.html`, find the `<div class="article-hero">` block and replace the SVG placeholder with:

```html
<img src="path/to/your-image.jpg" alt="Description of the image">
```

**Book cover** — in `book.html`, find the `<div class="book-cover">` block and replace the emoji with:

```html
<img src="path/to/cover.jpg" alt="Cover of Book Title">
```

**Post thumbnail** — in `js/data.js`, the `thumbSVG()` helper generates a placeholder icon. To use a real image, replace the `<a class="post-thumb">` contents in `index.html` with an `<img>` tag, or add an `image` field to each post object and update the template.

---

## Updating the sidebar counters

In `js/data.js`, find the `sidebarHTML()` function and update the numbers:

```js
<strong>12</strong><span class="counter-label">articles</span>
<strong>6</strong><span class="counter-label">videos</span>
<strong>13</strong><span class="counter-label">books read</span>
```

---

## Deployment

This is a fully static site — no server-side code required.

**Options:**
- **GitHub Pages** — push to a repo and enable Pages in settings
- **Netlify / Vercel** — drag the folder into the dashboard
- **Any web host** — upload via FTP

Because navigation uses `?slug=` query parameters (not paths), there's no need for URL rewrites or a server configuration file.

---

## Customisation quick-reference

| What to change      | Where                          |
|---------------------|--------------------------------|
| Site title          | `js/data.js` → `headerHTML()`  |
| Bio text            | `js/data.js` → `sidebarHTML()` |
| Footer year/text    | `js/data.js` → `footerHTML()`  |
| Yellow accent color | `css/style.css` → `--yellow`   |
| Font stack          | `css/style.css` → `body`       |
| Posts per page      | `index.html` → `const PER_PAGE`|
