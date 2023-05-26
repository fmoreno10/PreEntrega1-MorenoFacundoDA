    // Array de productos
    const products = [
        { id: "1", name: "Celular Motorhola", description: "Celular Motorhola XXX 5G 64GB", price: 50000, stock: 15, img: "/assets/cel1.jpg", categoria: "Celulares" },
        { id: "2", name: "Celular Samsoong", description: "Celular Samsoong ZZZ 5G 128GB", price: 75000, stock: 10, img: "/assets/cel2.jpg", categoria: "Celulares" },
        { id: "3", name: "Celular Aifone", description: "Celular Aifone YYY 5G 256GB", price: 100000, stock: 5, img: "/assets/cel3.jpg", categoria: "Celulares" },
        { id: "4", name: "SmartTV Zoni", description: "Smart TV Zoni 60 pulgadas", price: 150000, stock: 30, img: "/assets/tv1.jpg", categoria: "Smart TVs" },
        { id: "5", name: "SmartTV Elyi", description: "Smart TV Elyi 55 pulgadas", price: 125000, stock: 25, img: "/assets/tv2.jpg", categoria: "Smart TVs" },
        { id: "6", name: "SmartTV Samsoong", description: "Smart TV Samsoong 50 pulgadas", price: 115000, stock: 20, img: "/assets/tv3.jpg", categoria: "Smart TVs" },
        { id: "7", name: "Notebook Manzana", description: "Notebook Manzana 32GB RAM 1TBSSD EME1", price: 350000, stock: 40, img: "/assets/pc1.jpg", categoria: "Informatica" },
        { id: "8", name: "Notebook Zoni", description: "Notebook Zoni 16GB RAM 512SSD i9", price: 300000, stock: 35, img: "/assets/pc2.jpg", categoria: "Informatica" },
        { id: "9", name: "Notebook PELL", description: "Notebook PELL 16GB RAM 512SSD i7", price: 250000, stock: 30, img: "/assets/pc3.jpg", categoria: "Informatica" }
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
                let sCategoriaMinusculas = prod.categoria.toLowerCase();
                let sCategoriaBuscarMinusculas = category.toLowerCase();
                return sCategoriaMinusculas.includes(sCategoriaBuscarMinusculas);
            }))},500);
            }
        );
    };