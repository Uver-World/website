import React, { useEffect, useState } from 'react';
import { Card, Button } from 'react-bootstrap';
import { FaHeart, FaThumbsUp, FaThumbsDown } from 'react-icons/fa';
import styles from "./styles/index.module.css";
import SolarSystem from '../../components/SolarSystem';

class Product {
    id: number;
    title: string;
    description: string;
    uploadDate: string;
    image: string;
    upvoteUserIds: number[];
    downvoteUserIds: number[];
    favoriteUserIds: number[];

    constructor(id: number, title: string, description: string, uploadDate: string, image: string, upvoteUserIds: number[], downvoteUserIds: number[], favoriteUserIds: number[]) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.uploadDate = uploadDate;
        this.image = image;
        this.upvoteUserIds = upvoteUserIds;
        this.downvoteUserIds = downvoteUserIds;
        this.favoriteUserIds = favoriteUserIds;
    }

    getUploadTimeAgo(): string {
        const uploadDate = new Date(this.uploadDate);
        const now = new Date();
        const diffMs = now.getTime() - uploadDate.getTime();
        const diffSeconds = Math.floor(diffMs / 1000);

        if (diffSeconds < 60) {
            return `${diffSeconds} seconds ago`;
        } else if (diffSeconds < 3600) {
            const diffMinutes = Math.floor(diffSeconds / 60);
            return `${diffMinutes} minutes ago`;
        } else if (diffSeconds < 86400) {
            const diffHours = Math.floor(diffSeconds / 3600);
            return `${diffHours} hours ago`;
        } else {
            const diffDays = Math.floor(diffSeconds / 86400);
            return `${diffDays} days ago`;
        }
    }
}

const userId = 1;

const Marketplace = () => {
    const [products, setProducts] = useState<Product[]>([]);
    const [query, setQuery] = useState<string>("");

    useEffect(() => {
        const fakeProducts = [
            new Product(1, "Product 1", "Description for product 1", "2023-01-01", "https://mrwallpaper.com/images/hd/1920x1080-hd-nature-old-mountain-o3g4tz5qe34ij38f.jpg", [1], [], [1, 2]),
            new Product(2, "Product 2", "Description for product 2", "2023-02-01", "https://images.unsplash.com/photo-1553649033-3fbc8d0fa3cb?ixlib=rb-4.0.3", [], [1], []),
            new Product(3, "Product 3", "Description for product 3", "2023-03-01", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2Zbe8o5b5VNlccCXRpyKb9FyS4A13GqtfPw&s", [1], [], [1]),
            new Product(4, "Product 4", "Description for product 4", "2023-04-01", "https://mrwallpaper.com/images/hd/1920x1080-hd-nature-old-mountain-o3g4tz5qe34ij38f.jpg", [], [], [2]),
            new Product(5, "Product 5", "Description for product 5", "2023-01-01", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIusCIAKC75-uv7vX-Ln3zhEb2C2ntmdvJ9w&s", [], [], [1]),
            new Product(6, "Product 6", "Description for product 6", "2023-02-01", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4cQYXiWrFtxfmofW9VpTXrCVB_KS2aOFehg&s", [], [], []),
            new Product(7, "Product 7", "Description for product 7", "2023-03-01", "https://mrwallpaper.com/images/hd/1920x1080-hd-nature-old-mountain-o3g4tz5qe34ij38f.jpg", [], [], [1]),
            new Product(8, "Product 8", "Description for product 8", "2023-04-01", "https://mrwallpaper.com/images/hd/1920x1080-hd-nature-old-mountain-o3g4tz5qe34ij38f.jpg", [], [], [])
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

    const handleFavoriteToggle = (productId: number) => {
        setProducts(products.map(product => {
            if (product.id === productId) {
                const isFavorited = product.favoriteUserIds.includes(userId);
                return new Product(
                    product.id,
                    product.title,
                    product.description,
                    product.uploadDate,
                    product.image,
                    product.upvoteUserIds,
                    product.downvoteUserIds,
                    isFavorited
                        ? product.favoriteUserIds.filter(id => id !== userId)
                        : [...product.favoriteUserIds, userId]
                );
            }
            return product;
        }));
    }

    const handleUpvoteToggle = (productId: number) => {
        setProducts(products.map(product => {
            if (product.id === productId) {
                const isUpvoted = product.upvoteUserIds.includes(userId);
                const isDownvoted = product.downvoteUserIds.includes(userId);
                if (isUpvoted) {
                    return new Product(
                        product.id,
                        product.title,
                        product.description,
                        product.uploadDate,
                        product.image,
                        product.upvoteUserIds.filter(id => id !== userId),
                        product.downvoteUserIds,
                        product.favoriteUserIds
                    );
                } else {
                    return new Product(
                        product.id,
                        product.title,
                        product.description,
                        product.uploadDate,
                        product.image,
                        [...product.upvoteUserIds, userId],
                        isDownvoted ? product.downvoteUserIds.filter(id => id !== userId) : product.downvoteUserIds,
                        product.favoriteUserIds
                    );
                }
            }
            return product;
        }));
    };

    const handleDownvoteToggle = (productId: number) => {
        setProducts(products.map(product => {
            if (product.id === productId) {
                const isUpvoted = product.upvoteUserIds.includes(userId);
                const isDownvoted = product.downvoteUserIds.includes(userId);
                if (isDownvoted) {
                    return new Product(
                        product.id,
                        product.title,
                        product.description,
                        product.uploadDate,
                        product.image,
                        product.upvoteUserIds,
                        product.downvoteUserIds.filter(id => id !== userId),
                        product.favoriteUserIds
                    );
                } else {
                    return new Product(
                        product.id,
                        product.title,
                        product.description,
                        product.uploadDate,
                        product.image,
                        isUpvoted ? product.upvoteUserIds.filter(id => id !== userId) : product.upvoteUserIds,
                        [...product.downvoteUserIds, userId],
                        product.favoriteUserIds
                    );
                }
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
                                <Card.Img variant="top" src={product.image} className={styles.productImage} />
                                <Card.Body className={styles.productCardBody}>
                                    <div className={styles.titleAndButtons}>
                                        <div className={styles.titleContainer}>
                                            <Card.Title className={styles.productTitle}>{product.title}</Card.Title>
                                            <Card.Text className={styles.productDescription}>{product.description}</Card.Text>
                                        </div>
                                        <div className={styles.buttonContainer}>
                                            <Button
                                                variant="light"
                                                onClick={() => handleUpvoteToggle(product.id)}
                                                className={styles.voteButton}
                                            >
                                                <FaThumbsUp color={product.upvoteUserIds.includes(userId) ? 'blue' : 'grey'} />
                                            </Button>
                                            <span>{product.upvoteUserIds.length}</span>
                                            <Button
                                                variant="light"
                                                onClick={() => handleDownvoteToggle(product.id)}
                                                className={styles.voteButton}
                                            >
                                                <FaThumbsDown color={product.downvoteUserIds.includes(userId) ? 'red' : 'grey'} />
                                            </Button>
                                            <span>{product.downvoteUserIds.length}</span>
                                            <Button
                                                variant="light"
                                                onClick={() => handleFavoriteToggle(product.id)}
                                                className={styles.favoriteButton}
                                            >
                                                <FaHeart color={product.favoriteUserIds.includes(userId) ? 'red' : 'grey'} />
                                            </Button>
                                            <span>{product.favoriteUserIds.length}</span>
                                        </div>
                                    </div>
                                    <div className={styles.uploadDate}>{product.getUploadTimeAgo()}</div>
                                </Card.Body>
                            </Card>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default Marketplace;
