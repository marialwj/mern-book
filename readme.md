# Book Search Engine 📚

Welcome to the Book Search Engine project! This application revolutionizes the way you find and save books to read, leveraging the power of GraphQL with Apollo Server and React.

## 🌟 Features

- **Search for Books**: Easily search for books using a simple and intuitive interface.
- **Save Your Favorites**: Logged in users can save books to review or purchase later.
- **Manage Your Collection**: View your saved books and remove them from your list at any time.
- **Secure Authentication**: Sign up and log in to access personalized features.

## 🚀 Getting Started

To get started with this project, clone the starter code repository and create your own repository with the starter code. 

```bash
git clone 
cd https://github.com/marialwj/mern-book
npm install
```
## 🛠 Setup
- Set up Apollo Server: Implement GraphQL queries and mutations to fetch and modify data.
- Modify Authentication Middleware: Ensure the authentication middleware is compatible with GraphQL API.
- Apollo Provider: Implement Apollo Provider for React to communicate with Apollo Server.

## 📖 User Stories
As an avid reader, I want to search for new books to read so that I can keep a list of books to purchase.

## Acceptance Criteria
1. When I load the search engine, I am presented with a menu with options to Search for Books and Login/Signup, along with an input field and a submit button.
2. Upon searching for books, I am presented with search results featuring book details and an option to save books to my account.
3. Users can sign up or log in to access personalized features like saving books.
4. Logged in users can view their saved books and remove them from their list.

## 🎨 Mock-Up
The application's appearance and functionality are demonstrated below:
[pic1](./assets/book1.png)
[pic2](./assets/book2.png)

## 📚 Technical Specifications
1. Back-End
- auth.js: Updated to work with GraphQL API.
- server.js: Implements Apollo Server as middleware.
- Schemas Directory: Contains typeDefs and resolvers for GraphQL implementation.
2. Front-End
- queries.js & mutations.js: Contains GraphQL queries and mutations.
- React Components: Updated to use Apollo Hooks (useQuery, useMutation) for data fetching and mutations.

## 🚀 Deployment
The application is deployed on Render. Check it out here.
https://mern-book-9csr.onrender.com/ 

## Licensing 
N/A

