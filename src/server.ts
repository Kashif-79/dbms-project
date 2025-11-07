import app from "./app.js";
import { pool } from "./app/config/index.js";

import dotenv from "dotenv";
import path from "path";
import { createTables } from "./app/config/database.js";

dotenv.config({ path: path.join(process.cwd(), ".env") });

const PORT = process.env.PORT || 5000;

async function main() {
  try {
    const connection = await pool.getConnection();
    console.log("✅ Connected to MySQL database!");
    connection.release();

    await createTables();

    app.listen(PORT, () => {
      console.log(`🚀 App listening on port ${PORT}`);
    });
  } catch (error) {
    console.error("❌ Failed to start server:", error);
    process.exit(1);
  }
}

main();
