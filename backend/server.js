const express = require("express");
const cors = require("cors");
const taxRoutes = require("./src/routes/taxRoutes");

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/tax", taxRoutes); // ✅ Ensure this matches the frontend

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
