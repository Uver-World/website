export class Product {
    id: number;
    title: string;
    description: string;
    uploadDate: string;
    price: string;
    coverImage: string;
    images: string[];
    comments: string[];
    upvoteUserIds: number[];
    downvoteUserIds: number[];
    favoriteUserIds: number[];

    constructor(id: number, title: string, description: string, uploadDate: string, price: string, coverImage: string, images: string[], comments: string[], upvoteUserIds: number[], downvoteUserIds: number[], favoriteUserIds: number[]) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.uploadDate = uploadDate;
        this.price = price;
        this.coverImage = coverImage;
        this.images = images;
        this.comments = comments
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

    handleUpvote(userId: number): Product {
        const isUpvoted = this.upvoteUserIds.includes(userId);
        const isDownvoted = this.downvoteUserIds.includes(userId);

        if (isUpvoted) {
            this.upvoteUserIds = this.upvoteUserIds.filter(id => id !== userId);
        } else {
            this.upvoteUserIds.push(userId);
            if (isDownvoted) {
                this.downvoteUserIds = this.downvoteUserIds.filter(id => id !== userId);
            }
        }
        return this;
    }

    handleDownvote(userId: number): Product {
        const isUpvoted = this.upvoteUserIds.includes(userId);
        const isDownvoted = this.downvoteUserIds.includes(userId);

        if (isDownvoted) {
            this.downvoteUserIds = this.downvoteUserIds.filter(id => id !== userId);
        } else {
            this.downvoteUserIds.push(userId);
            if (isUpvoted) {
                this.upvoteUserIds = this.upvoteUserIds.filter(id => id !== userId);
            }
        }
        return this;
    }

    handleFavorite(userId: number): Product {
        const isFavorited = this.favoriteUserIds.includes(userId);
        if (isFavorited) {
            this.favoriteUserIds = this.favoriteUserIds.filter(id => id !== userId);
        } else {
            this.favoriteUserIds.push(userId);
        }
        return this;
    }
}
