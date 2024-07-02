import axios from "axios";

export const handleLogin = async () => {
    try {
        const name = document.getElementById("name").value;
        const password = document.getElementById("password").value;

        const response = await axios.post("http://localhost:3000/login/login", {
            name,
            password
        });

        console.log('Login successful! User ID:', response.data.userId);

        localStorage.setItem('userId', response.data.userId);

    } catch(err) {
        console.error(err);
    }
}