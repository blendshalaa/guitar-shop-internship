# 🎸 Online Guitar Shop

A modern 3-page guitar shop application built with React, JavaScript, and Tailwind CSS. The app fetches data from a GraphQL API and features a beautiful, responsive design with multi-language support.

## 🌟 Features

### Core Functionality
- **Page 1 - Guitar Brands**: Display all guitar brands with navigation to models
- **Page 2 - Guitar Models**: Show models for selected brand with search and filtering
- **Page 3 - Guitar Details**: Detailed view with specifications and musicians tabs

### Advanced Features
- **Multi-language Support**: English, Macedonian (Македонски), and Albanian (Shqip)
- **Search & Filtering**: Search models by name and filter by guitar type
- **Infinite Scroll**: Load more models dynamically as the user scrolls
- **Responsive Design**: Works perfectly on desktop, tablet, and mobile
- **Modern UI**: Beautiful gradients, animations, and hover effects
- **Hero Section**: Attractive landing page with logo and feature highlights

### Technical Features
- **Apollo Client**: GraphQL data fetching with caching
- **React Router**: Client-side routing
- **Tailwind CSS**: Utility-first CSS framework for styling
- **Lucide React**: Modern icon library
- **Responsive Grid**: Modern layout techniques

## 🚀 Getting Started

### Prerequisites
- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd guitar-shop
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:5173](http://localhost:5173)

### Available Scripts

- `npm run dev` - Runs the app in development mode
- `npm test` - Launches the test runner
- `npm run build` - Builds the app for production
- `npm run eject` - Ejects from Create React App (one-way operation)

## 📁 Project Structure

```
src/
├── components/
│   └── LanguageSwitcher.js
├── contexts/
│   └── LanguageContext.js
├── graphql/
│   └── queries.js
├── pages/
│   ├── BrandsPage.js
│   ├── ModelsPage.js
│   └── GuitarDetailsPage.js
├── translations/
│   └── index.js
├── apollo-client.js
├── App.js
├── index.js
└── index.css
```

## 🔗 API Endpoint

The application connects to the GraphQL API at:
```
https://graphql-api-brown.vercel.app/api/graphql
```

### GraphQL Queries

- `GET_BRANDS` - Fetches all guitar brands
- `GET_MODELS` - Fetches models for a specific brand
- `GET_GUITAR_DETAILS` - Fetches detailed guitar information



### Responsive Breakpoints
- **Desktop**: 1200px and above
- **Tablet**: 768px to 1199px
- **Mobile**: Below 768px

## 🌍 Language Support

The application supports three languages:

1. **English (en)** - Default language
2. **Macedonian (mk)** - Македонски
3. **Albanian (al)** - Shqip

All static text is translated and switches dynamically when the language is changed.

## 📱 User Experience

### Navigation Flow
1. **Home Page**: Users see a hero section with logo and features, followed by all available guitar brands
2. **Brand Selection**: Clicking a brand navigates to its models
3. **Model Browsing**: Users can search and filter models with infinite scroll
4. **Details View**: Clicking a model shows detailed specifications and musicians

### Interactive Elements
- **Search Bar**: Real-time filtering of models
- **Type Filter**: Dropdown to filter by guitar type
- **Infinite Scroll**: Automatic loading of more models
- **Language Switcher**: Global language selection in header
- **Back Navigation**: Intuitive back buttons with consistent styling

## 🛠️ Technologies Used

- **React 19** - UI library
- **JavaScript** - Programming language
- **Apollo Client** - GraphQL client
- **React Router** - Client-side routing
- **Tailwind CSS** - Utility-first CSS framework
- **Lucide React** - Icon library

## 📦 Dependencies

### Core Dependencies
- `@apollo/client` - GraphQL client
- `graphql` - GraphQL support
- `react-router-dom` - Routing
- `lucide-react` - Icons

### Development Dependencies
- `tailwindcss` - CSS framework
- `autoprefixer` - CSS vendor prefixing
- `postcss` - CSS processing

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

The build folder contains the production-ready files that can be deployed to any static hosting service.

### Recommended Hosting
- **Vercel** - Easy deployment with Git integration
- **Netlify** - Great for static sites
- **GitHub Pages** - Free hosting for public repositories

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request



## 🆘 Support

If you encounter any issues or have questions:

1. Check the browser console for errors
2. Verify the GraphQL API is accessible
3. Ensure all dependencies are installed
4. Create an issue in the repository



---

**Built with ❤️ using React, Tailwind CSS, and Apollo Client**