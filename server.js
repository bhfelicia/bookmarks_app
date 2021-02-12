const {
  db,
  syncAndSeed,
  models: { Bookmark },
} = require("./db");

const bookmarkUtil = require("./views/Bookmarks");

const express = require("express");
const app = express();

app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => res.redirect("/bookmarks"));

app.get("/bookmarks", async (req, res, next) => {
  try {
    const bookmarks = await Bookmark.findAll();

    res.send(bookmarkUtil(bookmarks));
  } catch (error) {
    next(error);
  }
});

const port = 3000;

(async () => {
  await db.authenticate();
  app.listen(port, console.log(`listening on port ${port}`));
  await syncAndSeed();
})();
