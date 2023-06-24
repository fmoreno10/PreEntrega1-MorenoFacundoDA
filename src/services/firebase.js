// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, doc, getDoc, query, where, addDoc, orderBy } from "firebase/firestore"

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

export async function getData() {
    const productsCollectionRef = collection(db, "products");
    const q = query(productsCollectionRef, orderBy("index"));
    const querySnapshot = await getDocs(q);
    const dataDocs = querySnapshot.docs.map(doc => {
        return { ...doc.data(), id: doc.id };
    });
    return dataDocs;
}

export async function getItemData(idURL) {
    const docRef = doc(db, "products", idURL);
    const docSnap = await getDoc(docRef);
    // Verificar que existe, si no lanza un error
    if (!docSnap.exists()) {
        throw new Error("Error: producto no encontrado");
    }
    return { id: docSnap.id, ...docSnap.data() };

}
export async function getCategoryData(idCategory) {

    const productsCollectionRef = collection(db, "products");
    const q = query(productsCollectionRef, where("category", "==", idCategory));

    const querySnapshot = await getDocs(q);
    const dataDocs = querySnapshot.docs.map(doc => {
        return { ...doc.data(), id: doc.id };
    });

    return dataDocs;

}

export async function createOrder(data) {

    const ordersCollectionRef = collection(db, "orders"); // si no existe, la crea

    const response = await addDoc(ordersCollectionRef, data);

    return response.id; // id de la orden creada

}
