// Import the axios library to make HTTP requests
import axios from "axios";

// Create an instance of axios with a base URL for the API
const api = axios.create({
    baseURL: "http://100.20.5.236:8084"
});

// Export the created axios instance so it can be used in other parts of the application
export default api;