require("dotenv").config();
const express = require("express");
const cron = require("node-cron");
const cors = require("cors");
const config = require("../services/config");
const { sequelize } = require("./connection");
const { Article } = require("./models");
const { generateArticle } = require("../services/articleJob");
const app = express();
const port = config.PORT;

app.use(cors());
app.use(express.json());

// cron.schedule("* * * * *", async () => {
//   const data = await generateArticle();
//   try {
//     const title = data.title;
//     const content = data.content;

//     const save = await Article.create({
//       title,
//       content,
//     });
//     console.log("Article saved correctly");
//   } catch (error) {
//     console.log("Error", error);
//   }
// });

app.get("/", async (req, res) => {});

app.get("/articles", async (req, res) => {
  try {
    const articles = await Article.findAll({ order: [["createdAt", "DESC"]] });
    return res.json({ articles });
  } catch (error) {
    console.log("Error", error);
    return res.status(500).json({ message: "Internal server error" });
  }
});

app.get("/articles/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const article = await Article.findByPk(id);
    if (!article) {
      return res.status(404).json({ message: "Article not found" });
    }
    return res.json({ article });
  } catch (error) {
    console.log("Error", error);
    return res.status(500).json({ message: "Internal server error" });
  }
});

app.post("/articles", async (req, res) => {
  try {
    const title = req.body?.title;
    const content = req.body?.content;

    if (!title || !content) {
      return res
        .status(400)
        .json({ message: "Bad request, title or content not found" });
    }

    const save = await Article.create({
      title,
      content,
    });
    return res.status(201).json({ article: save });
  } catch (error) {
    console.log("Error", error);
    return res.status(500).json({ message: "Internal server error" });
  }
});

sequelize
  .authenticate()
  .then(() => {
    console.log("Connection correct");
    return sequelize.sync({ alter: true });
  })
  .then(() => {
    console.log("Syncing models");
    app.listen(port, () => {
      console.log(`Server ready on: http://localhost:${port}`);
    });
  })
  .catch((error) => {
    console.error("Connection refused", error);
  });
