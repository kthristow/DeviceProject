import axios from "axios";

const API_KEY = "AIzaSyDdZY0sFM6wy8L9GxWgX14aLSX0xyve1JM";

export async function createUser(email, password) {
  const response = await axios.post(
    "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=" + API_KEY,
    {
      email,
      password,
      returnSecureToken: true,
    }
  );
}
