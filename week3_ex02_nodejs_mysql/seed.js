const pool = require("./config/db");

async function seedDatabase() {
  try {
    console.log("Seeding database...");

    await pool.execute("DELETE FROM products");
    await pool.execute("DELETE FROM employees");

    const products = [
      ["Biltong 200g", 85.0, "Snacks"],
      ["Boerewors Pack 500g", 65.5, "Meat"],
      ["Rooibos Tea 100s", 45.0, "Beverages"],
      ["Chakalaka 410g", 22.99, "Canned Goods"],
      ["Appletiser 330ml", 18.5, "Beverages"],
    ];

    for (const p of products) {
      await pool.execute("INSERT INTO products (name, price, category) VALUES (?, ?, ?)", p);
    }

    const employees = [
      ["Yusuf Osman", "yusuf@techvibe.co.za", "Development"],
      ["Thabo Mokoena", "thabo@techvibe.co.za", "Sales"],
      ["Lerato Molefe", "lerato@techvibe.co.za", "HR"],
      ["Willem van der Merwe", "willem@techvibe.co.za", "Engineering"],
      ["Fatima Patel", "fatima@techvibe.co.za", "Marketing"],
    ];

    for (const e of employees) {
      await pool.execute("INSERT INTO employees (name, email, department) VALUES (?, ?, ?)", e);
    }

    console.log("Database seeded successfully with SA sample data!");
    process.exit(0);
  } catch (error) {
    console.error("Seeding error:", error);
    process.exit(1);
  }
}

seedDatabase();
