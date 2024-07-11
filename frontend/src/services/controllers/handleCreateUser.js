import axios from "axios";

export const handleCreateUser = async () => {
    try {
        const name = document.getElementById("name").value;
        const password = document.getElementById("password").value;
        const type = document.getElementById("type").value;

        console.log('frontend:', { name, password, type });

        const response = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/users/createUser`, {
            name,
            password,
            type
        });

        console.log(response.data);
    } catch (error) {
        console.error("Error to creating user", error);
    }
}