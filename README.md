## FinTech
This repository is private, and it serve the purpose of fufilling a job assessment. Continue reading to get the brief of the tools made use of.

## Tools
1. Node v14
2. NPM v8
3. React.js Library
4. Webpack
5. TailwindCSS (majorly for responsiveness)
6. React Icon
7. React Skeleton Loader
8. Apex Chart
9. PSDETCH (for inspecting the XD file)

## Setup
To get the project up and running, you will have to first get the repository on your machine by cloning this project, you can run this command
```ssh
git clone https://github.com/ionware/fintech-react.git && cd fintech-react 
```

Then you will have to install the dependencies using NPM, simply run the following command
```ssh
npm install
```

Now, you will have to create the environment file (`.env`), and set the `API_URL` which points to the endpoint of a compatible API, you can checkout a compatible API for this 
[project here](https://github.com/ionware/fintech-api). Your `.env` file will look like this
```
API_URL=https://api-url.dev/api/
```

Finally, start the app by running this command
```
npm start
```

## Build
You can build a production version of the app by running `npm run build` instead of `npm start`. This will emit a production bundle into a new folder called `dist`. You can then serve content from this folder on your web-server or cloud platform such as Netlify or Vercel.