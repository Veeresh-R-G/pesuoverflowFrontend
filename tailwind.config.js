module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {

    extend: {
      padding: {
        '13': '13px',
        '25': '25px',
      },
      colors: {
        primary: "#ff4800",
        blue:
        {
          450: "#5f99f7"
        },

        brown1: "#525252",
        brown2: "#737070"
      },
      borderRadius:
      {
        xxl: "60px",
        lx: "50px"
      },
      height: {
        '128': '33rem', //this is for the register page styling
        'home': '40.2rem', //this is for the Home page styling
      },
      width: {
        'myWidth': '50rem', // this is for team / project
        'myWidth2': '52rem', //this is for inidividual style
        'myWidth3': '78rem', //this is for Quil - Board styling
        'myWidth4': '75rem', //this is for Quil - Board styling
        'myWidth5': '18rem', //this is for Card styling in the project-part
        'myWidth6': '21rem', //this is for Error Page Styling
        'myWidth7': '31rem', //this is for Error Page Styling
      }
    },
  },
  plugins: [],
}