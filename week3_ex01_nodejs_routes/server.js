const express = require("express");
const app = express();
const PORT = 3000;

app.use(express.json());

app.get("/health", (req, res) => {
  res.json({
    status: "OK",
    timestamp: new Date().toISOString(),
  });
});

const productsRouter = require("./routes/products");
const employeesRouter = require("./routes/employees");

app.use("/products", productsRouter);
app.use("/employees", employeesRouter);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
