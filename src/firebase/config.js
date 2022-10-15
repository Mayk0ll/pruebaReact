import { initializeApp } from "firebase/app";
import {getStorage, ref, uploadBytes, getDownloadURL} from 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyAJx3EZyjM96UzIImSqJ5HJ07OmuJgR_LA",
    authDomain: "pruebareact-368f3.firebaseapp.com",
    projectId: "pruebareact-368f3",
    storageBucket: "pruebareact-368f3.appspot.com",
    messagingSenderId: "421564712847",
    appId: "1:421564712847:web:3c269a097c0eb362c36dfa"
};

const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);

export const uploadFile = async(file, name) => {
    const storageRef = ref(storage, name);

    await uploadBytes(storageRef, file).then((snapshot) => {
        console.log(snapshot);
    });

    return await getDownloadURL(storageRef).then(res => res)
}