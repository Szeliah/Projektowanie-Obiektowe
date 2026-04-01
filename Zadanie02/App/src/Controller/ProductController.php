<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

use App\Entity\Product;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;

#[Route('/api/products')]
class ProductController extends AbstractController
{
    // GET all
    #[Route('', name: 'all_products', methods: ['GET'])]
    public function index(EntityManagerInterface $em): JsonResponse
    {
        $products = $em->getRepository(Product::class)->findAll();
        return $this->json(array_map(fn($p) => [
            'id' => $p->getId(),
            'name' => $p->getName(),
            'price' => $p->getPrice()
        ], $products));
    }

    // GET by id
    #[Route('/{id}', name: 'product_by_id', methods: ['GET'])]
    public function showById(int $id, EntityManagerInterface $em): JsonResponse
    {
        $product = $em->getRepository(Product::class)->find($id);

        if (!$product) {
            return $this->json(['error' => "Product with id: {$id} doesn't exist"], 404);
        }

        return $this->json([
            'id' => $product->getId(),
            'name' => $product->getName(),
            'price' => $product->getPrice()
        ]);
    }

    // POST
    #[Route('', name: 'create_product', methods: ['POST'])]
    public function create(Request $req, EntityManagerInterface $em): JsonResponse
    {
        $data = json_decode($req->getContent(), true);
        $product = new Product();
        $product->setName($data['name'] ?? '');
        $product->setPrice($data['price'] ?? 0.00);
        
        $em->persist($product);
        $em->flush();

        return new JsonResponse(['id' => $product->getId()], 201);
    }

    // PUT
    #[Route('/{id}', name: 'update_product', methods: ['PUT'])]
    public function update(int $id, Request $req, EntityManagerInterface $em): JsonResponse
    {

        $product = $em->getRepository(Product::class)->find($id);

        if (!$product) return new JsonResponse(['error' => "Product with id: {$id} doesn't exist"], 404);

        $data = json_decode($req->getContent(), true);

        $product->setName($data['name'] ?? $product->getName());
        $product->setPrice($data['price'] ?? $product->getPrice());

        $em->flush();

        return new JsonResponse(['status' => 'updated']);
    }

    // DELETE 
    #[Route('/{id}', name: 'delete_product', methods: ['DELETE'])]
    public function delete(int $id, EntityManagerInterface $em): JsonResponse
    {

        $product = $em->getRepository(Product::class)->find($id);

        if ($product) {
            $em->remove($product);
            $em->flush();
        }

        return new JsonResponse(['status' => 'deleted']);
    }


}
