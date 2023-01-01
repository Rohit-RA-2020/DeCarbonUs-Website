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
        'face-bkg': "url('../public/Assets/back1.png')",        
        'hero-bkg': "url('../public/Assets/heroBg.jpg')",        
      },
      backgroundSize:{
        '1s':['35%','60%'],
        'ps':['100%','50%'],
      },
      height:{
        '10vh':"10vh",
        '20vh':"20vh",
        '30vh':"30vh",
        '40vh':"40vh",
        '50vh':"50vh",
        '70vh':"70vh",
        '80vh':"80vh",
        '85vh':"85vh",
        '88vh':"88vh",
        '90vh':"90vh",
        '93vh':"93vh",
        '95vh':"95vh",
        '150vh':"150vh",
        '200vh':"520vh",

      }
    },
  },
  plugins: [],
}