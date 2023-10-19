# In a Class of Our Own
This is a responsive and user-friendly web application where trainees at CodeYourFuture(CYF) can log in with their GitHub account to check their progress, including their GitHub PRs linked to CYF coursework, Codewar rank, and Codewar point. 

The data will be compared with a specific algorithm behind the scenes (according to the rule set by CYF on calculating trainees' milestones) and a milestone status will be returned to indicate where the trainee is at - if they are beyond/at/behind the milestone. All trainees' data will be stored in the database. 

![github](https://github.com/Doris-Siu/in-a-class-of-our-own/assets/107772913/6c6b41cc-818b-4205-9379-835a8a200083)

![register](https://github.com/Doris-Siu/in-a-class-of-our-own/assets/107772913/75b96a82-8d70-492e-bad5-f9a559f1c65d)

![dashboard](https://github.com/Doris-Siu/in-a-class-of-our-own/assets/107772913/01d07742-364d-4271-8b08-72653ac581b4)


## Technologies
- React.js
- JavaScript
- CSS
- Express.js
- Node.js
- Postgresql
- OAuth


## Scripts

Various scripts are provided in the package file, but many are helpers for other scripts; here are the ones you'll
commonly use:

- `dev`: starts the frontend and backend in dev mode, with file watching (note that the backend runs on port 3100, and
  the frontend is proxied to it).
- `lint`: runs ESLint and Prettier against all the code in the project.
- `serve`: builds and starts the app in production mode locally.

### Debugging

While running the dev mode using `npm run dev`, you can attach the Node debugger to the server process via port 9229.
If you're using VS Code, a debugging configuration is provided for this.

There is also a VS Code debugging configuration for the Chrome debugger, which requires the recommended Chrome
extension, for debugging the client application.

### Security

If the project handles **any kind of** Personally Identifiable Information (PII) then make sure the following
principles are followed:

- Only collect **strictly necessary** PII;
- Access to PII should be as restricted as possible;
- Access to PII should only be possible after authentication. Authentication **must be done** via GitHub. **Ad hoc
  authentication solutions are not allowed**;
- Admins must be able to control who has access to the platform and at which levels using only GitHub groups;
- There must be an audit mechanism in place. It is required by law to know who accessed what and when;
- Code must be reviewed by senior developers before being pushed to production;
- APIs must be secure. Make sure we are not handling security on the frontend.


### Troubleshooting

See the guidance in the [wiki].

[1]: https://docs.github.com/en/free-pro-team@latest/github/creating-cloning-and-archiving-repositories/creating-a-repository-from-a-template#creating-a-repository-from-a-template
[2]: https://codeyourfuture.slack.com/archives/C021ATWS9A5
[Babel]: https://babeljs.io/
[Cloud Foundry]: https://www.cloudfoundry.org/
[collaborators]: https://help.github.com/en/articles/inviting-collaborators-to-a-personal-repository
[Docker]: https://www.docker.com
[ESLint]: https://eslint.org/
[Express]: https://expressjs.com/
[Morgan]: https://github.com/expressjs/morgan
[Node]: https://nodejs.org/en/
[node-postgres]: https://node-postgres.com/
[Postgres]: https://www.postgresql.org/
[Prettier]: https://prettier.io/
[pull request]: https://help.github.com/en/articles/about-pull-requests
[React]: https://reactjs.org/
[React Router]: https://reactrouter.com/web
[Render]: https://render.com/
[Webpack]: https://webpack.js.org/
[wiki]: https://github.com/textbook/starter-kit/wiki
[Winston]: https://github.com/winstonjs/winston

## License

This project is licensed under the [MIT](https://choosealicense.com/licenses/mit/)
