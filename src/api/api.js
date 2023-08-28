import axios from "axios";
import Cookies from "js-cookie";

const api = axios.create({
    baseURL: "https://asws-env.eba-m7phkd2j.us-east-1.elasticbeanstalk.com"
});

// Function to authenticate and store JWT token in cookies
export const authenticateAndGetToken = async () => {
    try {
        const response = await api.post("/authenticate", {
            userName: "admin@gmail",
            userPassword: "admin@password"
        });

        const jwtToken = response.data.token; // Assuming the JWT token is returned in the response

        // Store the token in cookies
        Cookies.set("jwtToken", jwtToken);

        console.log("JWT token:", jwtToken);

        return jwtToken;
    } catch (error) {
        console.error("Authentication failed:", error);
        throw error;
    }
};

export default api;