/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/Layout/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-bkg': "url('../public/Assets/heroBg.jpg')",        
      },
      backgroundSize:{
        '1s':['35%','60%'],
        'ps':['70%','30%'],
      },
      height:{
        '95vh':"95vh",
        '93vh':"93vh",
        '20vh':"20vh",
        '30vh':"30vh",
        '90vh':"90vh",
        '40vh':"40vh",
        '70vh':"70vh",
        '85vh':"85vh",
        '80vh':"80vh",
        '50vh':"50vh",
        '150vh':"150vh",
        '200vh':"520vh",

      }
    },
  },
  plugins: [],
}