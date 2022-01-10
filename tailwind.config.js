module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {

    extend: {

      colors: {
        primary: "#ff4800",
        blue:
        {
          450: "#5f99f7"
        }
      },
      borderRadius:
      {
        xxl: "60px",
        lx: "50px"
      },
      width: {
        'myWidth': '50rem', // this is for team / project
        'myWidth2': '52rem', //this is for inidividual style
        'myWidth3': '78rem', //this is for Quil - Board styling
        'myWidth4': '75rem', //this is for Quil - Board styling
        'myWidth5': '18rem', //this is for Card styling in the project-part
      },
      fontFamily:{
        "google-sans":["Open Sans:wght@500"]
      }
    },
  },
  plugins: [],
}