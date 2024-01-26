import * as React from "react"
const IndexGestion = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M214.7 78.8c-1.5 1.7-1.7 7.5-1.9 58.6l-.3 56.8-8.7-6.7c-6.8-5.3-9.2-6.6-11-6.1-1.9.5-107.6 82-123.6 95.2-6.4 5.3-6 6.8 5.5 21.5 5.3 6.8 10.1 12.7 10.7 13.1 1.6 1.1 6.4 1 7.1-.2.3-.6 1-1 1.5-1 .6 0 1.1 25 1.2 61.6l.3 61.6 2.4 1.9c2.2 1.8 5.2 1.9 95.5 1.9 73 0 93.6-.3 95.6-1.3l2.5-1.3.3-29.7.2-29.7 76.6-.2c74.5-.3 76.6-.4 78-2.2 1.2-1.7 1.4-23.4 1.4-147.1 0-139.4-.1-145.3-1.8-146.8-1.7-1.6-11.2-1.7-115.9-1.7-109 0-114.1.1-115.6 1.8zM436 226v137H292v-54.2l2.5 1.6c3.4 2.2 6.8 2 9.2-.7 1.2-1.2 6-7.2 10.7-13.2 7-8.9 8.6-11.6 8.4-14-.3-2.6-2.8-4.9-19.5-17.9L284 249.7v-19.8c0-16.6-.2-20-1.6-21.3-1.3-1.3-4.3-1.6-17.2-1.6-8.6 0-16.4.5-17.2 1-.9.5-1.7 3.1-2 6.3l-.5 5.5-10.2-8-10.3-7.9V89h211v137zm-218.4-12.8c13 10.1 27.2 21.1 31.7 24.6s12.5 9.6 17.7 13.7c5.2 4.1 16.8 13.1 25.7 20l16.3 12.6-5.1 6.4c-2.8 3.6-5.4 6.7-5.7 6.9-.4.2-23.4-17.4-51.2-39-35.4-27.6-51.2-39.4-53-39.4-1.8 0-17.1 11.4-53.4 39.6-28 21.7-51.2 39.2-51.6 38.7-3.3-3.9-10.2-13.4-9.9-13.6C87.4 277 193.4 195 193.7 195c.2 0 11 8.2 23.9 18.2zm54.4 15.9v11.1l-3.7-2.8c-10.8-8.1-10.3-7.4-10.3-13.7V218h14v11.1zm-34.2 37.2 42.2 32.9V425H107V300l13.3-10.4c51.1-40.2 73.3-57.2 74.2-56.8.6.3 20 15.4 43.3 33.5z" fill="currentColor"/>
    <path d="M255.1 122.7c-2.3 2.8-2 5.9.7 8 1.2 1 17.7 1.3 74.7 1.3s73.5-.3 74.7-1.3c2.7-2.1 3-5.2.7-8l-2-2.7H257.1l-2 2.7zM257.2 168c-3.5 1.5-4.8 5.4-2.8 8.5l1.6 2.5h74.4c58.3 0 74.6-.3 75.4-1.3 2.1-2.7 2.2-5.4.3-7.8l-1.9-2.4-72.4-.2c-42.1-.1-73.2.2-74.6.7zM313.2 216.2c-2.1 2.8-2.2 5.5-.3 7.9l1.9 2.4h89.4l1.9-2.4c1.9-2.4 1.8-5.1-.3-7.9-1.5-1.8-91.1-1.8-92.6 0zM342.7 263.8c-2.2 2.4-2.1 6.5.1 8.5 1.6 1.5 5.3 1.7 31.5 1.7h29.6l2-2.7c2.3-2.8 2-5.9-.7-8.1-1.2-.9-9-1.2-31.2-1.2-27.5 0-29.8.1-31.3 1.8zM342.8 298.2c-.9.7-3.8 6.9-6.4 13.8-2.5 6.9-4.8 12.7-5 12.9-.2.2-1.5-.4-2.8-1.3-3.8-2.4-7.3-2-9.3 1-1.5 2.4-1.5 2.9-.2 5.2 2 3.6 7.6 7.2 11.1 7.2 6 0 9.9-2.9 12.9-9.5 1.5-3.4 3.1-7.4 3.5-8.9l.6-2.6 4.2 4.5c3.8 4 4.7 4.5 8.6 4.5 4 0 4.8-.5 9-4.9l4.6-4.9 3.4 1.9c4.4 2.3 13.2 2.4 22 .1 5.3-1.4 6.7-2.2 7.8-4.5 1.2-2.4 1.1-3.2-.2-5.3-2-2.9-4.7-3-14-.9-7 1.6-8 1.5-14.5-2.7-2.5-1.5-5.2-2.8-6-2.8-.8 0-3.9 2.5-6.8 5.6-3 3.1-5.5 5.5-5.7 5.3-.2-.2-2.2-3.3-4.6-6.9-2.4-3.6-4.8-6.8-5.4-7.2-1.7-1.2-5-.9-6.8.4zM166.7 304.4c-7 2.5-10.7 7.8-10.7 15.1 0 7.1 5.8 13.8 13 15 4.9.8 12.2-2.4 15.4-6.8 3-4.1 2.9-13.1-.2-17.5-4.1-5.7-11.2-8-17.5-5.8zm7.1 11.8c1.7 1.7 1.5 4.3-.4 5.9-3.1 2.6-7-2.5-4.4-5.6 1.5-1.8 3.2-1.9 4.8-.3zM189.7 337.8c-32.4 32.4-33.7 34-30.1 37.6 4.1 4.2 5.3 3.2 38.7-30.2 17.4-17.5 31.7-32.4 31.7-33.3 0-2.8-3-5.9-5.8-5.9-2.2 0-8.5 5.8-34.5 31.8zM211.5 349.2c-12.4 4.4-14.2 20-3.3 28.2 3.5 2.5 11 2.6 15.5.3 10.3-5.4 10.6-21.9.4-27.1-3.9-2.1-9.2-2.7-12.6-1.4zm7.3 12c1.7 1.7 1.5 4.3-.4 5.9-3.1 2.6-7-2.5-4.4-5.6 1.5-1.8 3.2-1.9 4.8-.3z" fill="currentColor"/>
  </svg>
)
export default IndexGestion