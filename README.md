# Learning-TypeScript\\

# use this before executing the code
npm install -g typescript

# use this to install lite server on the project 
npm install lite-server --save-dev

...and add a "script" entry within your project's package.json file:

# Inside package.json...
  "scripts": {
    "dev": "lite-server"
  },
With the above script entry, you can then start lite-server via:

npm run dev


tsc app.ts 
npm init 
npm install --save -dev lite-server
# Add below in package.json file 
"scripts"{
  "start": "lite-server",
}
