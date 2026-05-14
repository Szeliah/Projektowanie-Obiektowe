import express from "express";
import cors from "cors";

import productRoutes from "./routes/product.routes";
import paymentRoutes from "./routes/payment.routes";

const PORT = 3000;
const app = express();

app.use(cors());
app.use(express.json());

app.use("/products", productRoutes);
app.use("/payments", paymentRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});