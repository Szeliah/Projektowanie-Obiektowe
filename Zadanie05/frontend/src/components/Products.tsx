import { useState, useEffect } from "react";
import type { Product } from "../types/Product";

interface ProductsProps {
    addToCart: (product: Product) => void;
}

function Products({ addToCart }: ProductsProps) {

    const [products, setProducts] = useState<Product[]>([]);
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {

        const fetchProducts = async () => {

            try {

                const res = await fetch(
                    "http://localhost:3000/products"
                );

                const data = await res.json();

                setProducts(data);

            } catch (error) {

                console.error(error);

                setError(
                    "Nie udało się pobrać produktów"
                );

            } finally {

                setLoading(false);
            }
        };

        fetchProducts();

    }, []);

    if (loading) {
        return (
            <div className="products-loading">
                Ładowanie...
            </div>
        );
    }

    if (error) {
        return (
            <div className="products-error">
                {error}
            </div>
        );
    }

    return (
        <>

            <div className="header">
                <h2>Nasze produkty</h2>
            </div>

            <div className="container">

                {products.map(product => (

                    <div
                        key={product.id}
                        className="product-card"
                    >

                        <div className="product-name">
                            Nazwa: {product.name}
                        </div>

                        <div className="product-desc">
                            Opis: {product.description}
                        </div>

                        <div className="product-price">
                            Cena:
                            {" "}
                            {product.price.toFixed(2)} zł
                        </div>

                        <button
                            className="product-btn"
                            onClick={() =>
                                addToCart(product)
                            }
                        >
                            Dodaj do koszyka
                        </button>

                    </div>
                ))}

            </div>
        </>
    );
}

export default Products;