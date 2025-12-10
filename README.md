# AI Generated Blog

### Link to the Blog:
[http://52.54.234.219:8080/](http://52.54.234.219:8080/)
The blog create an Article everyday at 10:15 UTC.

#### Disclaimer:
Maybe the blog is down for a brief time, see [**Issues creating this project**.](https://github.com/Curro85/AI-Blog?tab=readme-ov-file#issues-creating-this-project)

### Running the project locally:
- Using terminal or UI create a directory which will contain the project.
- Go to terminal, then go to the new directory to execute the below command.
- Clone the project with `git@github.com:Curro85/AI-Blog.git`.
- Once it's cloned, create a copy of `.env.template` and rename it to `.env` (You cand find this file in **backend/src/.env.template**).
- Change the values inside .env file to yours.
- Go to `backend/src/index.js` and you'll see a cron-job using [node-cron](https://nodecron.com/cron-syntax.html), change the values to create an Article when you want (Default is set to create one at 10:15 UTC).
- Then go to **frontend/src/components/Blog.jsx** and change the direction to fetch in **line 15**. (For local use you may want to use localhost:[PORT]).
- Going back to the terminal just go where `index.js` is located and execute `node index.js` to start the server, then in other terminal go to **/frontend** and execute `npm run dev`. Now you have both, backend and frontend ready to try.

### Issues creating this project:
- AWS free tier only let the EC2 instance running every 4 hours, so I have to restart it when the time is close to finish and have 4 hours more.
- AWS free tier don't authorize the use of CodeBuild, so I've used dockerhub and github/actions for deployment and actualizations.