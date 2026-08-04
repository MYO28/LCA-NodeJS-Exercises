const productModel = require("./models/productModel");
const employeeModel = require("./models/employeeModel");

async function testDatabaseOperations() {
  console.log("=== TESTING PRODUCT MODEL ===");

  console.log("\n1. GET ALL PRODUCTS:");
  console.log(await productModel.getAllProducts());

  console.log("\n2. ADD PRODUCT:");
  const newProduct = await productModel.addProduct("Bros 50g", 15.5, "Snacks");
  console.log(newProduct);

  console.log("\n3. GET PRODUCT BY ID:");
  console.log(await productModel.getProductById(newProduct.id));

  console.log("\n4. UPDATE PRODUCT:");
  console.log(await productModel.updateProduct(newProduct.id, "BarOne 50g", 16.5, "Snacks"));

  console.log("\n5. DELETE PRODUCT:");
  console.log(await productModel.deleteProduct(newProduct.id));

  console.log("\n6. STRETCH: GET PRODUCTS BY CATEGORY (Beverages):");
  console.log(await productModel.getProductsByCategory("Beverages"));

  console.log("\n=== TESTING EMPLOYEE MODEL ===");

  console.log("\n1. GET ALL EMPLOYEES:");
  console.log(await employeeModel.getAllEmployees());

  console.log("\n2. ADD EMPLOYEE:");
  const newEmp = await employeeModel.addEmployee("Sipho Ndlovu", "sipho@techvibe.co.za", "Support");
  console.log(newEmp);

  console.log("\n3. GET EMPLOYEE BY ID:");
  console.log(await employeeModel.getEmployeeById(newEmp.id));

  console.log("\n4. DELETE EMPLOYEE:");
  console.log(await employeeModel.deleteEmployee(newEmp.id));

  process.exit(0);
}

testDatabaseOperations();
