import {getAuth, GoogleAuthProvider, signInWithPopup, signOut, updateProfile as updateData} from "firebase/auth";
import {addUser, AuthDetails, AuthUser, Role} from "./users";

const provider = new GoogleAuthProvider();
export const auth = getAuth();

export async function signIn(): Promise<AuthUser> {
    try {
        const result = await signInWithPopup(auth, provider)
        const user = result.user;
        await addUser(user.uid, { role: Role.Student });
        return {
            id: user.uid,
            role: Role.Student,
            // @ts-ignore
            createdAt: Number(user.metadata.createdAt),
            photoURL: user.photoURL,
            displayName: user.displayName,
            email: user.email,
        };
    } catch (error) {
        console.log(error)
    }
}

export async function updateProfile(data: AuthDetails) {
    const user = auth.currentUser!;
    const {displayName = user.displayName, photoURL = user.photoURL} = data;
    try {
        await updateData(user, {displayName, photoURL: photoURL as string ?? ''});
    } catch (error) {
        console.log(error);
    }
}

export async function logOut() {
    try {
        await signOut(auth);
    } catch (error) {
        console.log(error)
    }
}