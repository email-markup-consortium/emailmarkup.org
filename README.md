# Email Markup Consortium website

Built with [Astro🚀](https://astro.build/). Uses [Astro Starter Kit: Docs Site](https://github.com/withastro/astro/tree/main/examples/docs).

Requires Node.js 22.23.4 or newer. Run `nvm use` to select the version in `.nvmrc`, then `npm ci` to install the locked dependencies. Netlify uses `.nvmrc` for its build runtime.

Production builds fetch GitHub commit metadata and the Can I Email dataset, so they require network access. The site remains statically generated; rebuild to refresh those values.

## Commands Cheatsheet

All commands are run from the root of the project, from the command line:

| Command           | Action                                       |
| :---------------- | :------------------------------------------- |
| `npm install`     | Installs dependencies                        |
| `npm run dev`     | Starts local dev server at `localhost:4321`  |
| `npm run build`   | Build your production site to `./dist/`      |
| `npm run preview` | Preview your build locally, before deploying |


## Automated deploys

The site is set to build and deploy once a week. This is triggered by posting to a Netlify webhook from a Render.com cron.
