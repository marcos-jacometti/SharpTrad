import axios from "axios";

export const handleCreateUser = async () => {
    try {
        const name = document.getElementById("name").value;
        const password = document.getElementById("password").value;
        const type = document.getElementById("type").value;

        const response = await axios.post("http://localhost:3000/users/createUser", {
            name,
            password,
            type
        });

        console.log(response.data);
    } catch (error) {
        console.error("Error to creating user", error);
    }
}