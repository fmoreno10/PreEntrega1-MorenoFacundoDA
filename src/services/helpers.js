import { products } from "../asyncMock";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, writeBatch, doc } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyB8wo-MVUARXvc5T87PzmJrWVVD9TPWBZM",
    authDomain: "fmoreno-react.firebaseapp.com",
    projectId: "fmoreno-react",
    storageBucket: "fmoreno-react.appspot.com",
    messagingSenderId: "843929734586",
    appId: "1:843929734586:web:24b985d37e2d9f5a406183"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);

export async function exportDataWithBatch(){
    const productsCollectionRef = collection(db, "products");
    const batch = writeBatch(db);

    for(let item of products){        
        item.index = Number(item.id);
        item.category = item.category.toLowerCase();
        delete item.id;
        const docRef = doc(productsCollectionRef);
        batch.set(docRef, item);        
    }

    await batch.commit();
    console.log("Items exportados por batch.");

}