module.exports = [
  {
    id: "qiita",
    media: "Qiita",
    production: "/feed/qiita",
    origin: "https://qiita.com/terrierscript/feed.atom",
    dev: null,
    bgColor: "#55c500"
  },
  {
    id: "devto",
    media: "dev.to",
    production: "/feed/devto",
    dev: "https://dev.to/feed/terrierscript",
    origin: "https://dev.to/feed/terrierscript",
    bgColor: "#000"
  },
  {
    id: "media",
    media: "Medium",
    production: "/feed/medium",
    origin: "https://medium.com/feed/@terrierscript",
    dev: null,
    color: "#fff",
    bgColor: "#000"
  },
  {
    id: "scrapbox",
    media: "Scrapbox",
    production: "/feed/scrapbox",
    origin: "https://scrapbox.io/api/feed/terrierscript/",
    dev: null,
    bgColor: "#29a972",
    color: "#fff"
  },
  {
    id: "note",
    media: "note",
    production: "/feed/note",
    origin: "https://note.mu/terrierscript/rss",
    dev: "https://note.mu/terrierscript/rss",
    // dev: null,
    bgColor: "#2cb696",
    color: "#fff"
  }
]
