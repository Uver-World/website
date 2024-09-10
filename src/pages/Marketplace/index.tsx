import React, { useEffect, useState } from 'react';
import { Card, Button } from 'react-bootstrap';
import { FaHeart, FaThumbsUp, FaThumbsDown } from 'react-icons/fa';
import styles from "./styles/index.module.css";
import SolarSystem from '../../components/SolarSystem';
import { Link } from 'react-router-dom';
import { Product } from '../../models/products';

const userId = 1;

const Marketplace = () => {
    const [products, setProducts] = useState<Product[]>([]);
    const [query, setQuery] = useState<string>("");

    useEffect(() => {
        const fakeProducts = [
            new Product(1, "Product 1", "Description for product 1aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa", "2023-01-01", "10€", "https://mrwallpaper.com/images/hd/1920x1080-hd-nature-old-mountain-o3g4tz5qe34ij38f.jpg", ["https://mrwallpaper.com/images/hd/1920x1080-hd-nature-old-mountain-o3g4tz5qe34ij38f.jpg"], ["terrible", "awfull"], [1], [], [1, 2]),
            new Product(2, "Product 2", "Description for product 2", "2023-02-01", "10€", "https://images.unsplash.com/photo-1553649033-3fbc8d0fa3cb?ixlib=rb-4.0.3", ["https://mrwallpaper.com/images/hd/1920x1080-hd-nature-old-mountain-o3g4tz5qe34ij38f.jpg"], ["terrible", "awfull"], [], [1], []),
            new Product(3, "Product 3", "Description for product 3", "2023-03-01", "10€","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2Zbe8o5b5VNlccCXRpyKb9FyS4A13GqtfPw&s", ["https://mrwallpaper.com/images/hd/1920x1080-hd-nature-old-mountain-o3g4tz5qe34ij38f.jpg"], ["terrible", "awfull"], [1], [], [1]),
            new Product(4, "Product 4", "Description for product 4", "2023-04-01", "10€", "https://mrwallpaper.com/images/hd/1920x1080-hd-nature-old-mountain-o3g4tz5qe34ij38f.jpg", ["https://mrwallpaper.com/images/hd/1920x1080-hd-nature-old-mountain-o3g4tz5qe34ij38f.jpg"], ["terrible", "awfull"], [], [], [2]),
            new Product(5, "Product 5", "Description for product 5", "2023-01-01", "10€", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIusCIAKC75-uv7vX-Ln3zhEb2C2ntmdvJ9w&s", ["https://mrwallpaper.com/images/hd/1920x1080-hd-nature-old-mountain-o3g4tz5qe34ij38f.jpg"], ["terrible", "awfull"], [], [], [1]),
            new Product(6, "Product 6", "Description for product 6", "2023-02-01", "10€", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4cQYXiWrFtxfmofW9VpTXrCVB_KS2aOFehg&s", ["https://mrwallpaper.com/images/hd/1920x1080-hd-nature-old-mountain-o3g4tz5qe34ij38f.jpg"], ["terrible", "awfull"], [], [], []),
            new Product(7, "Product 7", "Description for product 7", "2023-03-01", "10€", "https://mrwallpaper.com/images/hd/1920x1080-hd-nature-old-mountain-o3g4tz5qe34ij38f.jpg", ["https://mrwallpaper.com/images/hd/1920x1080-hd-nature-old-mountain-o3g4tz5qe34ij38f.jpg"], ["terrible", "awfull"], [], [], [1]),
            new Product(8, "Product 8", "Description for product 8", "2023-04-01", "10€", "https://mrwallpaper.com/images/hd/1920x1080-hd-nature-old-mountain-o3g4tz5qe34ij38f.jpg", ["https://mrwallpaper.com/images/hd/1920x1080-hd-nature-old-mountain-o3g4tz5qe34ij38f.jpg"], ["terrible", "awfull"], [], [], [])
        ];
        setProducts(fakeProducts);
    }, []);

    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        setQuery(e.target.value);
    }

    const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            filterProducts();
        }
    }

    const filterProducts = () => {
        return products.filter(product =>
            product.title.toLowerCase().includes(query.toLowerCase())
        );
    };

    const handleFavoriteToggle = (productId: number, e: React.MouseEvent) => {
        e.preventDefault();
        setProducts(products.map(product => {
            if (product.id === productId) {
                return product.handleFavorite(userId);
            }
            return product;
        }));
    };

    const handleUpvoteToggle = (productId: number, e: React.MouseEvent) => {
        e.preventDefault();
        setProducts(products.map(product => {
            if (product.id === productId) {
                return product.handleUpvote(userId);
            }
            return product;
        }));
    };

    const handleDownvoteToggle = (productId: number, e: React.MouseEvent) => {
        e.preventDefault();
        setProducts(products.map(product => {
            if (product.id === productId) {
                return product.handleDownvote(userId);
            }
            return product;
        }));
    };

    const filteredProducts = filterProducts();

    return (
        <>
            <div className={styles.hero}>
                <h1 className={styles.title}>Marketplace</h1>
                <div id={styles.sider}>
                    <input
                        className="col-lg-6"
                        type="text"
                        placeholder="Search..."
                        name="search"
                        value={query}
                        onChange={handleSearch}
                        onKeyPress={handleKeyPress}
                    />
                </div>
                <SolarSystem />
            </div>
            <div className={styles.container}>
                <div className={styles.productGrid}>
                    {filteredProducts.map(product => (
                        <div key={product.id} className={styles.productWrapper}>
                            <Card className={styles.productCard}>
                                <Link to={`/product/${product.id}`}>
                                    <Card.Img variant="top" src={product.coverImage} className={styles.productImage} />
                                    <Card.Body className={styles.productCardBody}>
                                        <div className={styles.titleAndButtons}>
                                            <div className={styles.titleContainer}>
                                                <Card.Title className={styles.productTitle}>{product.title}</Card.Title>
                                                <Card.Text className={styles.productDescription}>{product.description}</Card.Text>
                                            </div>
                                            <div className={styles.buttonContainer}>
                                                <Button
                                                    variant="light"
                                                    onClick={(e) => handleUpvoteToggle(product.id, e)}
                                                    className={styles.voteButton}
                                                >
                                                    <FaThumbsUp color={product.upvoteUserIds.includes(userId) ? 'blue' : 'grey'} />
                                                </Button>
                                                <span>{product.upvoteUserIds.length}</span>
                                                <Button
                                                    variant="light"
                                                    onClick={(e) => handleDownvoteToggle(product.id, e)}
                                                    className={styles.voteButton}
                                                >
                                                    <FaThumbsDown color={product.downvoteUserIds.includes(userId) ? 'red' : 'grey'} />
                                                </Button>
                                                <span>{product.downvoteUserIds.length}</span>
                                                <Button
                                                    variant="light"
                                                    onClick={(e) => handleFavoriteToggle(product.id, e)}
                                                    className={styles.favoriteButton}
                                                >
                                                    <FaHeart color={product.favoriteUserIds.includes(userId) ? 'red' : 'grey'} />
                                                </Button>
                                                <span>{product.favoriteUserIds.length}</span>
                                            </div>
                                        </div>
                                        <div className={styles.uploadDate}>{product.getUploadTimeAgo()}</div>
                                    </Card.Body>
                                </Link>
                            </Card>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default Marketplace;
