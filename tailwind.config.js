module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      height: {
        '128': '50rem',
      },
      fontFamily: {
        toona: ["Toona", "sans"]
      },
      backgroundImage: {
        'hero': "url('./res/image_1.png')",
      }
    },
  },
  plugins: [],
}

//npx tailwindcss -i ./res/css/input.css -o ./res/css/bootstrap.css --watch