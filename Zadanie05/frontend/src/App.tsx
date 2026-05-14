import { useState } from "react";

import Products from "./components/Products";
import Payments from "./components/Payments";

import type { CartItem } from "./types/CartItem";
import type { Product } from "../types/Product";

function App() {

    const [cart, setCart] = useState<CartItem[]>([]);

    const addToCart = (product: Product) => {

        setCart(prev => {

            const existingProduct = prev.find(
                p => p.id === product.id
            );

            if (existingProduct) {

                return prev.map(p =>

                    p.id === product.id
                        ? {
                            ...p,
                            quantity: p.quantity + 1,
                        }
                        : p
                );
            }

            return [
                ...prev,
                {
                    ...product,
                    quantity: 1,
                },
            ];
        });
    };

    return (

        <div>

            <h1>Sklep internetowy</h1>

            <Products addToCart={addToCart} />

            <Payments cart={cart} />

        </div>
    );
}

export default App;