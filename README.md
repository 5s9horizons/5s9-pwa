# 5s9 PWA

5s9 PWA is a progressive web application designed to provide a seamless, offline-capable, and responsive user experience. This project includes various features such as user authentication, background sync, push notifications, and periodic sync to ensure that the app is always up-to-date and ready for the user.

## Project Structure

The project is organized as follows:

```
5s9-pwa/
├── css/
│   ├── styles.css
│   ├── features.css
│   ├── about.css
│   ├── blog.css
│   ├── portfolio.css
│   └── settings.css
├── js/
│   ├── main.js
│   ├── features.js
│   ├── about.js
│   ├── blog.js
│   ├── portfolio.js
│   └── settings.js
├── icons/
│   ├── icon-192x192.png
│   └── icon-512x512.png
├── screenshots/
│   ├── screenshot1.png
│   └── screenshot2.png
├── pages/
│   ├── index.html
│   ├── features.html
│   ├── about.html
│   ├── blog.html
│   ├── portfolio.html
│   ├── settings.html
│   ├── offline.html
│   ├── 404.html
│   └── 500.html
├── locales/
│   ├── en.json
│   └── fr.json
├── manifest.json
├── service-worker.js
└── indexeddb.js
```

### Description of Files and Directories

- **css/**: Contains the CSS files for styling different pages.
  - `styles.css`: The shared CSS file containing common styles used across all pages. Includes styles for high contrast mode and large text size.
  - `features.css`: Specific CSS file for the features page.
  - `about.css`: Specific CSS file for the about page.
  - `blog.css`: Specific CSS file for the blog page.
  - `portfolio.css`: Specific CSS file for the portfolio page.
  - `settings.css`: Specific CSS file for the settings page.

- **js/**: Contains the JavaScript files for different pages.
  - `main.js`: The shared JavaScript file containing common functionality used across all pages, including the custom install banner.
  - `features.js`: Specific JavaScript file for the features page.
  - `about.js`: Specific JavaScript file for the about page.
  - `blog.js`: Specific JavaScript file for the blog page.
  - `portfolio.js`: Specific JavaScript file for the portfolio page.
  - `settings.js`: Specific JavaScript file for the settings page, including handling of language and accessibility settings.

- **icons/**: Contains the icon files used for the app's icon in different sizes.
  - `icon-192x192.png`: Icon file with 192x192 resolution.
  - `icon-512x512.png`: Icon file with 512x512 resolution.

- **screenshots/**: Contains screenshots of the app used for display in the manifest.
  - `screenshot1.png`: First screenshot of the app.
  - `screenshot2.png`: Second screenshot of the app.

- **pages/**: Contains the HTML files for different pages.
  - `index.html`: The main HTML file for the home page of the PWA.
  - `features.html`: The HTML file for the features page of the PWA.
  - `about.html`: The HTML file for the about page of the PWA.
  - `blog.html`: The HTML file for the blog page of the PWA.
  - `portfolio.html`: The HTML file for the portfolio page of the PWA.
  - `settings.html`: The HTML file for the settings page of the PWA, including language and accessibility settings.
  - `offline.html`: The HTML file for the offline page displayed when the user is offline.
  - `404.html`: The HTML file for the 404 error page displayed when a page is not found.
  - `500.html`: The HTML file for the 500 error page displayed when there is a server error.

- **locales/**: Contains JSON files for translations in English and French.
  - `en.json`: English translations.
  - `fr.json`: French translations.

- **manifest.json**: The web app manifest file that provides information about the PWA, such as its name, icons, and start URL.

- **service-worker.js**: The service worker file that handles caching, background sync, push notifications, and periodic sync to ensure the app is always up-to-date and can work offline. Implements app shell architecture and advanced caching strategies.

- **indexeddb.js**: A JavaScript file that provides functions to interact with IndexedDB for storing and retrieving user actions offline.

## Features

- **App Shell Architecture**: Ensures the app loads quickly on repeat visits by caching the core components.
- **Advanced Caching Strategies**: Implements different caching strategies for different types of resources to optimize performance and reliability.
- **Analytics Integration**: Tracks user behavior and app usage to make data-driven decisions for future improvements.
- **Authentication**: Provides user authentication using OAuth or JWT for personalized experiences and secure access to user-specific content.
- **Content Management System (CMS) Integration**: Manages and updates the content dynamically using a CMS like Contentful.
- **Accessibility Improvements**: Ensures the app is usable by people with disabilities using ARIA roles and attributes. Includes high contrast mode and large text size options.
- **Multilingual Support**: Supports English and French to reach a broader audience with language detection and translations.
- **Background Sync**: Ensures user actions and content are always in sync even if the network connection is lost.
- **Periodic Sync**: Updates the app in the background so it's ready next time the user opens it.
- **Push Notifications**: Sends notifications to users even if the app is not running.
- **Offline Support**: Provides an offline page to enhance the user experience when the network connection is lost.
- **Error Pages**: Includes custom 404 and 500 error pages for a better user experience during errors.
- **Custom Install Banner**: Displays a custom install banner to prompt users to install the PWA.

## Getting Started

To get started with the 5s9 PWA, follow these steps:

1. Clone the repository: `git clone https://github.com/5s9horizons/5s9-pwa.git`
2. Navigate to the project directory: `cd 5s9-pwa`
3. Install dependencies (if any).
4. Start a local server to serve the files.
5. Open the app in your browser: `http://localhost:8080`

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.