import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { app } from "../../../config/firebase-config";



const auth = getAuth(app);

// register a user:
export const registerUser = async (email, password) => {
    try {
        const userCredential = await createUserWithEmailAndPassword(
            auth,
            email,
            password
        );
        const user = userCredential.user;
        console.log(user)
        alert("user created successfully...")

    }
    catch (err) {
        const errCode = err.code;
        const errorMessage = err.message;
        console.log(errCode, errorMessage)

    }
}
// login user
export const loginUser = async (email, password) => {
    try {
        const userCredential = await signInWithEmailAndPassword(
            auth,
            email,
            password
        );
        const user = userCredential.user;
        console.log(user)
        return user.reloadUserInfo.email;

    }
    catch (err) {
        const errCode = err.code;
        const errorMessage = err.message;
        console.log(errCode, errorMessage)

    }
}
// Sign out a user:
export const logoutUser = async () => {
    try {
        const isSignedOut = await signOut(auth);
        console.log("Signed out successfully...")

    }
    catch (err) {
        console.log(err)

    }
}