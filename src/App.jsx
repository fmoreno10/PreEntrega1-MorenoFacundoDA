import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

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
const db = getFirestore (firebaseApp);
console.log(db);

function App() {

  return (
    <div className='App'>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/category/:categoryId" element={<ItemListContainer />} />
          <Route path="/item/:itemId" element={<ItemDetailContainer />} />
          <Route path="*" element={<h1>Error 404: Página no encontrada</h1>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
