
export interface Product {
    id: number;
    title: string;
    price: string;
    category: string;
    description: string;
    image: string;
}

export interface Cart {
    cart: Product[];
    total: number;
}