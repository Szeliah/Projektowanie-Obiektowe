import { Request, Response } from "express";
import { prisma } from "../lib/prisma";

const allowedMethods = [
    "card",
    "blik",
    "applepay",
];


export const paymentController = {

    async createPayment(req: Request, res: Response): Promise<void> {

        try {

            const { amount, method, cartId } = req.body;

            if (
                typeof amount !== "number" ||
                typeof method !== "string" ||
                typeof cartId !== "number"
            ) {
                res.status(400).json({
                    message: "Invalid request body",
                });

                return;
            }

            if (amount <= 0) {
                res.status(400).json({
                    message: "Amount must be greater than 0",
                });

                return;
            }

            if (!allowedMethods.includes(method)) {
                res.status(400).json({
                    message: "Invalid payment method",
                });

                return;
             }

            const cart = await prisma.cart.findUnique({
                where: {
                    id: cartId,
                },
            });

            if (!cart) {
                res.status(404).json({
                    message: "Cart not found",
                });

                return;
            }

            const payment = await prisma.payment.create({
                data: {
                    amount,
                    method,
                    status: "pending",
                    cartId,
                },
            });

            res.status(201).json(payment);

        } catch (error) {

            console.error(error);

            res.status(500).json({
                message: "Internal server error",
            });
        }
    },

};