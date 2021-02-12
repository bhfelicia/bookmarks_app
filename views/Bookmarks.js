const html = require("html-template-tag");

module.exports = (bookmarks) => {
  return `<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>All Bookmarks</title>
      </head>
      <body>
        <form action="/bookmarks" method="POST">
          <input type="text" autocomplete="off" placeholder="Enter site name" />
          <input type="text" autocomplete="off" placeholder="Enter site URL" />
          <input type="text" autocomplete="off" placeholder="Enter category" />
          <button type="submit">Save</button>
        </form>
      </body>
    </html>`;
};
