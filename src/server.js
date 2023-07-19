import app from "./app.js";
import { ENV_CONFIG_PROCESS } from "./config.js";

const PORT = ENV_CONFIG_PROCESS.PORT || 8080;

app.listen(PORT, () => {
    console.log(`Server is up and running on port: ${PORT}`);
});