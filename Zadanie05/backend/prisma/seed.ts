import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function seedProducts() {
  await prisma.product.createMany({
    data: [
        {
            name: "Laptop",
            description: "Gaming laptop",
            price: 4999,
        },
        {
            name: "Mouse",
            description: "Wireless mouse",
            price: 199,
        },
        {
            name: "Keyboard",
            description: "Mechanical keyboard",
            price: 399,
        },
        {
            name: "headphone",
            description: "Wireless headphone",
            price: 499,
        },
    ],
  });
}

seedProducts()
    .then(async () => {
        await prisma.$disconnect();
    })
    .catch(async (e) => {
        console.error(e);
        await prisma.$disconnect();
        process.exit(1);
    });