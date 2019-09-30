# Netlify Dev & Deploy Test

A config to run some Dev & Deploy tasks using **Netlify**.

Huge amount of learnings taken from other fab developers.

---

## Steps in setting this demo up and running

1. Install Netlify CLI, `npm i -g netlify-cli`
   > If you need help then run the `netlify --help` command
2. Create a `netlify.toml` config file to run the necessary `[build]` command.
3. Create an `index.html` for the sake of this demo
4. Run `netlify init` to set up the deployment rules
5. Run `netlify dev` to run and preview the *local* deployment
   > Run `netlify dev --live` to run and preview a *live* deployment
6. Create `_redirects` file to add in any redirects
   > eg. `/broo https://brootaylor.com/` and `/api/* https://jsonplaceholder.typicode.com/:splat 200`
7. Create server / lambda functions. eg...
   1. Specify `functions="functions"` location in the `netlify.toml` file.
   2. Create a function, `netlify functions:create getword`
8. This function can now be accessed through the server like this...
   1. Run `netlify dev`
   2. View local in the browser and change URL to, `http://localhost:8888/.netlify/functions/getword/getword.js`
   3. This can be simplified to access as a redirect instead like this...
      1. Open `_redirects` and add `/getword /.netlify/functions/getword/getword.js`
            > Now it can be accessed at `http://localhost:8888/getword`
9. Let's make it better, `npm i random-words`
   1.  Open `getword.js`
   2.  Import the `ramdom-word` package,
   3.  Update function to populate date from this JSON object.
10. Create some `css` and `js` to render the UI a bit better while calling / using the API we proxied into.
