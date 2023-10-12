import Moralis from "moralis";

const startMoralisServer = () => {
  const moralisApiKey =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJub25jZSI6IjA0NDBmMzU2LTRkNzQtNGU4ZS1iNzIyLWFhMTU4ODY2YmE0ZSIsIm9yZ0lkIjoiMzUwMTM5IiwidXNlcklkIjoiMzU5ODg2IiwidHlwZUlkIjoiZGJlODQ5ZGQtNjYxOS00NDlhLWI5NDktM2IwZDFlZjlkY2YzIiwidHlwZSI6IlBST0pFQ1QiLCJpYXQiOjE2OTAzNTkwNTIsImV4cCI6NDg0NjExOTA1Mn0.MXNxAwE7jBb9dGgrmSx-F-FskU3wKY7lWIvoxf50aIw";
  Moralis.start(moralisApiKey);
};

export { startMoralisServer };
