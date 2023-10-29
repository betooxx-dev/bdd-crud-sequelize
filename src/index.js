import app from "./app.js";
import { connectDB } from "./db.js";
import relaciones from "./relaciones.js";

relaciones();
connectDB();
app.listen(process.env.PORT || 3000);
console.log('Server on port:', process.env.PORT || 3000);
