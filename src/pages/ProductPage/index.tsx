import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Card, Button, Modal } from 'react-bootstrap';
import { FaHeart, FaThumbsUp, FaThumbsDown, FaArrowLeft, FaArrowRight, FaTimes } from 'react-icons/fa';
import styles from "./styles/index.module.css";
import { Product } from '../../models/products';
import { Divider, StepSeparator } from '@chakra-ui/react';

const userId = 1;

const ProductPage = () => {
    const { id } = useParams<{ id: string }>();
    const productId = parseInt(id!, 10);
    const [product, setProduct] = useState<Product>();
    const [showModal, setShowModal] = useState(false);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const fakeProducts = [
            new Product(1, "Product 1", "Description for product 1", "2023-01-01", "10€", "https://mrwallpaper.com/images/hd/1920x1080-hd-nature-old-mountain-o3g4tz5qe34ij38f.jpg", ["https://mrwallpaper.com/images/hd/1920x1080-hd-nature-old-mountain-o3g4tz5qe34ij38f.jpg"], ["terrible", "awfull"], [1], [], [1, 2]),
            new Product(2, "AMANSON Boîtier PC pré-installé 9 Ventilateurs ARGB, boîtier de Jeu ATX Tour Moyenne avec Double Verre trempé Full View boîtiers d'ordinateur Noir H06", "AMANSON Boîtier PC pré-installé 9 Ventilateurs ARGB, boîtier de Jeu ATX Tour Moyenne avec Double Verre trempé Full View boîtiers d'ordinateur Noir H06", "2023-02-01", "10€", "https://images.unsplash.com/photo-1553649033-3fbc8d0fa3cb?ixlib=rb-4.0.3", ["https://images.unsplash.com/photo-1553649033-3fbc8d0fa3cb?ixlib=rb-4.0.3", "https://mrwallpaper.com/images/hd/1920x1080-hd-nature-old-mountain-o3g4tz5qe34ij38f.jpg"], ["terrible", "awfull"], [], [1], []),
            // Add other products...
        ];
        const selectedProduct = fakeProducts.find(p => p.id === productId);
        if (selectedProduct) {
            setProduct(selectedProduct);
        }
    }, [productId]);

    if (!product) {
        return <div>Loading...</div>;
    }

    const handleFavoriteToggle = () => {
        const updatedProductData = product.handleFavorite(userId);
        const updatedProduct = new Product(
            updatedProductData.id,
            updatedProductData.title,
            updatedProductData.description,
            updatedProductData.uploadDate,
            updatedProductData.price,
            updatedProductData.coverImage,
            updatedProductData.images,
            updatedProductData.comments,
            updatedProductData.upvoteUserIds,
            updatedProductData.downvoteUserIds,
            updatedProductData.favoriteUserIds
        );
        setProduct(updatedProduct);
    };

    const handleUpvoteToggle = () => {
        const updatedProductData = product.handleUpvote(userId);
        const updatedProduct = new Product(
            updatedProductData.id,
            updatedProductData.title,
            updatedProductData.description,
            updatedProductData.uploadDate,
            updatedProductData.price,
            updatedProductData.coverImage,
            updatedProductData.images,
            updatedProductData.comments,
            updatedProductData.upvoteUserIds,
            updatedProductData.downvoteUserIds,
            updatedProductData.favoriteUserIds
        );
        setProduct(updatedProduct);
    };

    const handleDownvoteToggle = () => {
        const updatedProductData = product.handleDownvote(userId);
        const updatedProduct = new Product(
            updatedProductData.id,
            updatedProductData.title,
            updatedProductData.description,
            updatedProductData.uploadDate,
            updatedProductData.price,
            updatedProductData.coverImage,
            updatedProductData.images,
            updatedProductData.comments,
            updatedProductData.upvoteUserIds,
            updatedProductData.downvoteUserIds,
            updatedProductData.favoriteUserIds
        );
        setProduct(updatedProduct);
    };

    const openModal = (index: number) => {
        setCurrentImageIndex(index);
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
    };

    const handlePreviousImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? product.images.length - 1 : prevIndex - 1));
    };

    const handleNextImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex === product.images.length - 1 ? 0 : prevIndex + 1));
    };

    return (
        <div className={styles.container}>
            <div className={styles.productGrid}>
                <div className={styles.productImageWrapper}>
                    <img src={product.coverImage} alt={product.title} className={styles.productImage} />
                    <div className={styles.additionalImages}>
                        {product.images.map((img, index) => (
                            <img
                                key={index}
                                src={img}
                                alt={`Product image ${index}`}
                                className={styles.smallImage}
                                onClick={() => openModal(index)}
                            />
                        ))}
                    </div>
                </div>

                <div className={styles.productDetailsWrapper}>
                    <h1 className={styles.productTitle}>{product.title}</h1>
                    <div className={styles.buttonContainer}>
                        <Button variant="light" onClick={handleUpvoteToggle} className={styles.voteButton}>
                            <FaThumbsUp color={product.upvoteUserIds.includes(userId) ? 'blue' : 'grey'} />
                        </Button>
                        <span>{product.upvoteUserIds.length}</span>

                        <Button variant="light" onClick={handleDownvoteToggle} className={styles.voteButton}>
                            <FaThumbsDown color={product.downvoteUserIds.includes(userId) ? 'red' : 'grey'} />
                        </Button>
                        <span>{product.downvoteUserIds.length}</span>

                        <Button variant="light" onClick={handleFavoriteToggle} className={styles.favoriteButton}>
                            <FaHeart color={product.favoriteUserIds.includes(userId) ? 'red' : 'grey'} />
                        </Button>
                        <span>{product.favoriteUserIds.length}</span>
                    </div>
                    <Divider className={styles.customDivider}></Divider>
                    <div className={styles.productPrice}>{product.price}</div>
                    <p className={styles.productDescription}>{product.description}</p>



                    <div className={styles.uploadDate}>Uploaded {product.getUploadTimeAgo()}</div>
                </div>
            </div>

            <Modal show={showModal} onHide={closeModal} centered className={styles.modalOverlay}>
                <Modal.Body className={styles.modalBody}>
                    <div className={styles.modalImageWrapper}>
                        <Button variant="light" className={styles.modalArrowLeft} onClick={handlePreviousImage}>
                            <FaArrowLeft />
                        </Button>
                        <img
                            src={product.images[currentImageIndex]}
                            alt={`Product image ${currentImageIndex}`}
                            className={styles.modalImage}
                        />
                        <Button variant="light" className={styles.modalArrowRight} onClick={handleNextImage}>
                            <FaArrowRight />
                        </Button>
                    </div>
                </Modal.Body>
            </Modal>
        </div>
    );
};

export default ProductPage;
