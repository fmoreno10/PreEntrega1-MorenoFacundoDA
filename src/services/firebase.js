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
    return { id: docSnap.id, ...docSnap.data() };
    // Verificar que existe .exists()
    /*if (docSnap.exists()) {
        console.log("Document data:", docSnap.data());
        } else {
        // docSnap.data() will be undefined in this case
        console.log("No such document!");
        }
      */
}
export async function getCategoryData(idCategory) { 
    /*
    const q = query(collection(db, "cities"), where("capital", "==", true));

const querySnapshot = await getDocs(q);
querySnapshot.forEach((doc) => {
  // doc.data() is never undefined for query doc snapshots
    console.log(doc.id, " => ", doc.data());
});
    */
    const productsCollectionRef = collection(db, "products");
    const q = query(productsCollectionRef, where("category", "==", idCategory));

    const querySnapshot = await getDocs(q);
    const dataDocs = querySnapshot.docs.map( doc => {
        return { ...doc.data(), id: doc.id};
    });

    return dataDocs;

}

export async function createOrder(data){
    const ordersCollectionRef = collection(db, "orders"); // si no existe, la crea
    const response = await addDoc(ordersCollectionRef, data);
    // response.id id de la orden creada

}

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => { resolve(products) }, 500);
    }
    );
};

export const getProductById = (productId) => {
    return new Promise((resolve) => {
        setTimeout(() => { resolve(products.find(prod => prod.id === productId)) }, 500);
    }
    );
};

export const getProductsByCategory = (category) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.filter(prod => {
                let sCategoriaMinusculas = prod.categoria.toLowerCase();
                let sCategoriaBuscarMinusculas = category.toLowerCase();
                return sCategoriaMinusculas.includes(sCategoriaBuscarMinusculas);
            }))
        }, 500);
    }
    );
};
