// nodejs core libs
const path = require("path");

// 3-rd Party Libs
const express = require("express");
const bodyParser = require("body-parser");
const app = express();

// our code
const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");


app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use("/admin", adminRoutes);
app.use(shopRoutes);

// error handler
app.use((req, res, next) => {
  res.status(404).sendFile(path.join(__dirname, "views", "404.html"));
});

/* 
  * similar to: 
  * const http = require("http")
  * http.createServer(app).listen(5055)
*/
app.listen(5055);
