import { Request, Response } from "express";
import { prisma } from "../lib/prisma";
import type _default = require("@prisma/client");


export const productController = {

    async getAllProducts(_req: Request, res: Response): Promise<void> {
       
        try {
            const products = await prisma.product.findMany();
            res.json(products);
        } 
        catch (error) {
            console.error(error);
            res.status(500).json({message: "Internal server error"});
        }
    
    },

    async getProductById(req: Request, res: Response): Promise<void> {
        
        try {
            const id: number = Number(req.params.id);  

            if (isNaN(id)) {
                res.status(400).json({
                    message: "invalid product id",
                })

                return;
            }

            const product = await prisma.product.findUnique({
                where: {
                    id,
                },
            })

            if (!product) {
                res.status(404).json({
                    message: "Product not found",
                })

                return;
            }

            res.json(product);
        }
        catch (error) {
            console.error(error);
            res.status(500).json({message: "Internal server error"});
        }
    },

    async createProduct(req: Request, res: Response): Promise<void> {

        try {
            const { name, description, price } = req.body;
            
            if (
                typeof name !== "string" ||
                typeof description !== "string" ||
                typeof price !== "number"
            ) {
                res.status(400).json({
                    message: "Invalid request body",
                });

                return;
            }


            if (
                name.trim() === "" ||
                description.trim() === ""
            ) {
                res.status(400).json({
                    message: "Fields cannot be empty",
                });

                return;
            }

            if (price <= 0) {
                res.status(400).json({
                    message: "Price must be greater than 0",
                });

                return;
            }

            const product = await prisma.product.create({
                data: {
                    name,
                    description,
                    price,
                },
            });

            res.status(201).json(product);

        } catch (error) {

            console.error(error);

            res.status(500).json({
                message: "Internal server error",
            });

        }
    },

    async deleteProduct(req: Request, res: Response): Promise<void> {

        try {

            const id = Number(req.params.id);

            if (isNaN(id)) {
                res.status(400).json({
                    message: "Invalid product id",
                });

                return;
            }

            const product = await prisma.product.findUnique({
                where: {
                    id,
                },
            });

            if (!product) {
                res.status(404).json({
                    message: "Product not found",
                });

                return;
            }

            await prisma.product.delete({
                where: {
                    id,
                },
            });

            res.status(200).json({
                message: "Product deleted successfully",
            });

        } catch (error) {

            console.error(error);

            res.status(500).json({
                message: "Internal server error",
            });
        }
    },

    async updateProduct(req: Request, res: Response): Promise<void> {

        try {

            const id = Number(req.params.id);

            if (isNaN(id)) {
                res.status(400).json({
                    message: "Invalid product id",
                });

                return;
            }

            const { name, description, price } = req.body;

            if (
                typeof name !== "string" ||
                typeof description !== "string" ||
                typeof price !== "number"
            ) {
                res.status(400).json({
                    message: "Invalid request body",
                });

                return;
            }

            if (
                name.trim() === "" ||
                description.trim() === ""
            ) {
                res.status(400).json({
                    message: "Fields cannot be empty",
                });

                return;
            }

            if (price <= 0) {
                res.status(400).json({
                    message: "Price must be greater than 0",
                });

                return;
            }

            const existingProduct = await prisma.product.findUnique({
                where: {
                    id,
                },
            });

            if (!existingProduct) {
                res.status(404).json({
                    message: "Product not found",
                });

                return;
            }

            const updatedProduct = await prisma.product.update({
                where: {
                    id,
                },
                data: {
                    name,
                    description,
                    price,
                },
            });

            res.json(updatedProduct);

        } catch (error) {

            console.error(error);

            res.status(500).json({
                message: "Internal server error",
            });
        }
    }

}

