import axios from "axios";

export const handleLogin = async () => {
    try {
        const name = document.getElementById("name").value;
        const password = document.getElementById("password").value;

        const response = await axios.post("http://localhost:3000/login/login", {
            name,
            password
        });

        if (response.status === 200) {
            localStorage.setItem('userId', response.data.userId);
            localStorage.setItem('userType', response.data.userType);
        } else {
            throw new Error('Login failed');
        }
    } catch (err) {
        console.error('Login error:', err);
        throw new Error('Login failed');
    }
}