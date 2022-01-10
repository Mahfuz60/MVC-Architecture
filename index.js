const express = require("express");
const userRouter = require("./routes/users.route");
const productRouter = require("./routes/products.route");
const PORT = 3000;
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(userRouter);
app.use(productRouter);

app.use((req, res) => {
  res.send("<h1>Error:404,Server is Not Found!</h1>");
});

app.listen(PORT, () => {
  console.log(`server is running at http://localhost:${PORT}`);
});
