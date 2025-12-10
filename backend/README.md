# The Backend

### Main files:
- `index.js` with two endpoints to get all articles and their details, and a cron-job using *node-cron*.
- `models.js` it's just the *Articles* model.
- `connection.js` uses sequelize to create a connection to a database, in this case, using sqlite.

### Services files:
- `aiClient.js` here we have the AI, in my case Gemini, configured and ready to use in other files.
- `articleJob.js` it's an *async function* which calls Gemini to generate and article.
- `config.js` I used this file to create *env* variables and exported them to use where I needed.

### env.template
- `env.template` contains the essential environment variables needed to excute this project.
- *GEMINI_API_KEY*: [Google Gemini API_KEY](https://ai.google.dev/gemini-api/docs/api-key)
- *PORT*: Standar port is 3000.

## DISCLAIMER

Using other AI may need changes instantiating it at `aiClient.js`.
