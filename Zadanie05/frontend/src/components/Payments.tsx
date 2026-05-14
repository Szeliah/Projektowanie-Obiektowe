import { useState } from "react";

interface CartItem {
    id: number;
    name: string;
    price: number;
    quantity: number;
}

interface PaymentsProps {
    cart: CartItem[];
}

function Payments({ cart }: PaymentsProps) {

    const [form, setForm] = useState({
        name: "",
        surname: "",
    });

    const [status, setStatus] = useState<{type: string; message: string;} | null>(null);

    const [loading, setLoading] = useState<boolean>(false);

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement>
    ) => {

        setForm(prev => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    };

    const handleSubmit = async (
        e: React.FormEvent
    ) => {

        e.preventDefault();

        if (cart.length === 0) {

            setStatus({
                type: "error",
                message: "Koszyk jest pusty",
            });

            return;
        }

        setLoading(true);

        const order = {

            items: cart.map(p => ({
                product_id: p.id,
                name: p.name,
                quantity: p.quantity,
                price: p.price,
            })),

            total: cart.reduce(
                (sum, p) =>
                    sum + p.price * p.quantity,
                0
            ),

            customer: {
                name: form.name,
                surname: form.surname,
            },
        };

        console.log(order);

        setLoading(false);
    };

    return (

        <div>

            <h1>Payments</h1>

            <form onSubmit={handleSubmit}>

                <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    onChange={handleChange}
                />

                <input
                    type="text"
                    name="surname"
                    placeholder="Surname"
                    onChange={handleChange}
                />

                <button type="submit">

                    {loading ? "Loading..." : "Pay"}

                </button>

            </form>

            {status && (
                <p>{status.message}</p>
            )}

        </div>
    );
}

export default Payments;