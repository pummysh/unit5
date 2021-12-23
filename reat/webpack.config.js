const path=require('path');

module.exports = {
    entry:"./src/index.js",
    output:{
        path:path.join(__dirname,"build"),
        filename:"bundel.js",
    },
    mode:"development",
    module: {
        rules: [
          {
            test: /\.css$/,
            use: ["style-loader", "css-loader"],
          },
          {
            test: /\.js$/,
            use: ["babel-loader"],
          },
        ],
      },
    
};