## Markdown Text to HTML Text Convertor

### Prerequisite Tools

1. VS Code
2. NodeJS (18.16.0)
3. Typescript (5.0.4)
4. Postman
5. ReactJS (18.2.0)
6. Vite (5.2.0)

### Instructions 

#### Setup Project

1. Clone repository into local machine
``` diff
git clone https://github.com/dipnesadiya1205/Markdown-Live-Converter.git
```

##### Setup Frontend Project

----------------------------------------------------------------------------------

2. Go to frontend folder
``` diff
cd Markdown-Live-Converter/frontend
```

3. Setup "proxy" in ```package.json``` file to access backend server locally
``` diff
"proxy": "http://localhost:{backendport}"
```

4. Install all dependencies
``` diff
npm install
```

5. Run web application
``` diff
npm run dev
```

##### Setup Backend Project

----------------------------------------------------------------------------------

6. Go to backend folder
``` diff
cd Markdown-Live-Converter/backend
```

7. Create ```.env``` file for server port and other configuration.
   Variables to set in ```.env``` file.
``` diff
   # Node Server Port
   PORT

   # Set "true" if server is under maintainance otherwise mark it "false"
   APP_UNDER_MAINTAINANCE = "true" | "false"
```

8. Install all dependencies
``` diff
npm install
```

9. Run backend server
``` diff
npm run start
```