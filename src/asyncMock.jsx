    // Array de productos
    export const products = [
        { id: "1", discount: 0, title: "Celular Motorhola", description: "Celular Motorhola XXX 5G 64GB", price: 50000, stock: 15, img: "/assets/cel1.jpg", category: "Celulares" },
        { id: "2", discount: 0, title: "Celular Samsoong", description: "Celular Samsoong ZZZ 5G 128GB", price: 75000, stock: 10, img: "/assets/cel2.jpg", category: "Celulares" },
        { id: "3", discount: 0, title: "Celular Aifone", description: "Celular Aifone YYY 5G 256GB", price: 100000, stock: 5, img: "/assets/cel3.jpg", category: "Celulares" },
        { id: "4", discount: 0, title: "SmartTV Zoni", description: "Smart TV Zoni 60 pulgadas", price: 150000, stock: 30, img: "/assets/tv1.jpg", category: "Smart TVs" },
        { id: "5", discount: 0, title: "SmartTV Elyi", description: "Smart TV Elyi 55 pulgadas", price: 125000, stock: 25, img: "/assets/tv2.jpg", category: "Smart TVs" },
        { id: "6", discount: 0, title: "SmartTV Samsoong", description: "Smart TV Samsoong 50 pulgadas", price: 115000, stock: 20, img: "/assets/tv3.jpg", category: "Smart TVs" },
        { id: "7", discount: 0, title: "Notebook Manzana", description: "Notebook Manzana 32GB RAM 1TBSSD EME1", price: 350000, stock: 40, img: "/assets/pc1.jpg", category: "Informatica" },
        { id: "8", discount: 0, title: "Notebook Zoni", description: "Notebook Zoni 16GB RAM 512SSD i9", price: 300000, stock: 35, img: "/assets/pc2.jpg", category: "Informatica" },
        { id: "9", discount: 0, title: "Notebook PELL", description: "Notebook PELL 16GB RAM 512SSD i7", price: 250000, stock: 30, img: "/assets/pc3.jpg", category: "Informatica" }
    ];

    export const getProducts = () => {
        return new Promise((resolve) => {
            setTimeout(() => {resolve(products)},500);
            }
        );
    };

    export const getProductById = ( productId) => {
        return new Promise((resolve) => {
            setTimeout(() => {resolve(products.find( prod => prod.id === productId))},500);
            }
        );
    };

    export const getProductsByCategory = ( category ) => {
        return new Promise((resolve) => {
            setTimeout(() => {resolve(products.filter( prod => {
                let sCategoriaMinusculas = prod.category.toLowerCase();
                let sCategoriaBuscarMinusculas = category.toLowerCase();
                return sCategoriaMinusculas.includes(sCategoriaBuscarMinusculas);
            }))},500);
            }
        );
    };