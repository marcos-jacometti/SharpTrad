import axios from "axios";

export const handleCreateUser = async (name, password, type) => {
    try {
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