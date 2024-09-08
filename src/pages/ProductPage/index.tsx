import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Card, Button } from 'react-bootstrap';
import { FaHeart, FaThumbsUp, FaThumbsDown } from 'react-icons/fa';
import styles from "./styles/index.module.css";
import { Product } from '../../models/products';

const userId = 1;

const ProductPage = () => {
  const id = useParams<{ id: string }>();
  const productId = parseInt(id.id!, 10);
  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    const fakeProducts = [
        new Product(1, "Product 1", "Description for product 1aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa", "2023-01-01", "https://mrwallpaper.com/images/hd/1920x1080-hd-nature-old-mountain-o3g4tz5qe34ij38f.jpg", ["https://mrwallpaper.com/images/hd/1920x1080-hd-nature-old-mountain-o3g4tz5qe34ij38f.jpg"], [1], [], [1, 2]),
        new Product(2, "Product 2", "Description for product 2", "2023-02-01", "https://images.unsplash.com/photo-1553649033-3fbc8d0fa3cb?ixlib=rb-4.0.3", ["https://mrwallpaper.com/images/hd/1920x1080-hd-nature-old-mountain-o3g4tz5qe34ij38f.jpg"], [], [1], []),
        new Product(3, "Product 3", "Description for product 3", "2023-03-01", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2Zbe8o5b5VNlccCXRpyKb9FyS4A13GqtfPw&s", ["https://mrwallpaper.com/images/hd/1920x1080-hd-nature-old-mountain-o3g4tz5qe34ij38f.jpg"], [1], [], [1]),
        new Product(4, "Product 4", "Description for product 4", "2023-04-01", "https://mrwallpaper.com/images/hd/1920x1080-hd-nature-old-mountain-o3g4tz5qe34ij38f.jpg", ["https://mrwallpaper.com/images/hd/1920x1080-hd-nature-old-mountain-o3g4tz5qe34ij38f.jpg"], [], [], [2]),
        new Product(5, "Product 5", "Description for product 5", "2023-01-01", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIusCIAKC75-uv7vX-Ln3zhEb2C2ntmdvJ9w&s", ["https://mrwallpaper.com/images/hd/1920x1080-hd-nature-old-mountain-o3g4tz5qe34ij38f.jpg"], [], [], [1]),
        new Product(6, "Product 6", "Description for product 6", "2023-02-01", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4cQYXiWrFtxfmofW9VpTXrCVB_KS2aOFehg&s", ["https://mrwallpaper.com/images/hd/1920x1080-hd-nature-old-mountain-o3g4tz5qe34ij38f.jpg"], [], [], []),
        new Product(7, "Product 7", "Description for product 7", "2023-03-01", "https://mrwallpaper.com/images/hd/1920x1080-hd-nature-old-mountain-o3g4tz5qe34ij38f.jpg", ["https://mrwallpaper.com/images/hd/1920x1080-hd-nature-old-mountain-o3g4tz5qe34ij38f.jpg"], [], [], [1]),
        new Product(8, "Product 8", "Description for product 8", "2023-04-01", "https://mrwallpaper.com/images/hd/1920x1080-hd-nature-old-mountain-o3g4tz5qe34ij38f.jpg", ["https://mrwallpaper.com/images/hd/1920x1080-hd-nature-old-mountain-o3g4tz5qe34ij38f.jpg"], [], [], [])
    ];
    const selectedProduct = fakeProducts.find(p => p.id === productId);
    if (selectedProduct) {
      setProduct(selectedProduct);
    }
  }, [productId]);

  if (!product) {
    return <div>Loading...</div>;
  }

  const handleUpvoteToggle = () => {
    // Handle upvote logic
  };

  const handleDownvoteToggle = () => {
    // Handle downvote logic
  };

  const handleFavoriteToggle = () => {
    // Handle favorite logic
  };

  return (
    <div className={styles.container}>
      <div className={styles.productWrapper}>
        <Card className={styles.productCard}>
          <Card.Img variant="top" src={product.coverImage} className={styles.productImage} />
          <Card.Body className={styles.productCardBody}>
            <Card.Title className={styles.productTitle}>{product.title}</Card.Title>
            <Card.Text className={styles.productDescription}>{product.description}</Card.Text>
            <div className={styles.buttonContainer}>
              <Button
                variant="light"
                onClick={handleUpvoteToggle}
                className={styles.voteButton}
              >
                <FaThumbsUp color={product.upvoteUserIds.includes(userId) ? 'blue' : 'grey'} />
              </Button>
              <span>{product.upvoteUserIds.length}</span>
              <Button
                variant="light"
                onClick={handleDownvoteToggle}
                className={styles.voteButton}
              >
                <FaThumbsDown color={product.downvoteUserIds.includes(userId) ? 'red' : 'grey'} />
              </Button>
              <span>{product.downvoteUserIds.length}</span>
              <Button
                variant="light"
                onClick={handleFavoriteToggle}
                className={styles.favoriteButton}
              >
                <FaHeart color={product.favoriteUserIds.includes(userId) ? 'red' : 'grey'} />
              </Button>
              <span>{product.favoriteUserIds.length}</span>
            </div>
            <div className={styles.uploadDate}>{product.getUploadTimeAgo()}</div>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default ProductPage;
