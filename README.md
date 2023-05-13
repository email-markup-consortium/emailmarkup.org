# Email Markup Consortium website

Built with [Astro🚀](https://astro.build/). Uses [Astro Starter Kit: Docs Site](https://github.com/withastro/astro/tree/main/examples/docs).

## Commands Cheatsheet

All commands are run from the root of the project, from the command line:

| Command           | Action                                       |
| :---------------- | :------------------------------------------- |
| `npm install`     | Installs dependencies                        |
| `npm run dev`     | Starts local dev server at `localhost:3000`  |
| `npm run build`   | Build your production site to `./dist/`      |
| `npm run preview` | Preview your build locally, before deploying |


## Automated deploys

The site is set to build and deploy once a week. This is triggered by posting to a Netlify webhook from an IFTTT applet.

Similar setup: https://flaviocopes.com/netlify-auto-deploy/ 