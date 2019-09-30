# Netlify Dev & Deploy Test

A config to run some Dev & Deploy tasks using **Netlify**.

---

## Steps in setting this up

1. Install Netlify CLI, `npm i -g netlify-cli`
   > If you need help then run the `netlify --help` command
2. Create a `netlify.toml` config file to run the necessary `[build]` command.
3. Create an `index.html` for the sake of this demo
4. Run `netlify init` to set up the deployment rules
5. Run `netlify dev` to run and preview the *local* deployment
   > Run `netlify dev --live` to run and preview a *live* deployment
6. Create `_redirects` file to add in redirects
   > eg. `/broo https://brootaylor.com/` and `/api/* https://jsonplaceholder.typicode.com/:splat 200`
