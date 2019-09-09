export interface Product {
    name: string; // Acuvue Oasys
    brief: string; // Acuvue Oasys is the #1 prescribed brand for people new to reusable contact lenses.
    fullPrice: number; // 32.50
    dealPrice: number; // 24.20
    bc: string[]; // 8.4/14.0
    type: string[]; // weekly, color
    packaging: string;
    content: string;
    brand: string;
    manufacturer: string;
    description: string[];
    img: string[];
}

export interface OrderInfo {
    name: string;
    rBC: string;
    rQTY: number;
    rPWR: string;
    lBC: string;
    lQTY: number;
    lPWR: string;
    price: number;
    img: string;
}

export interface Order {
    name: string;
    bc: string;
    qty: number;
    pwr: string;
    price: number;
    img: string;
}

export interface OrderList {
    email: string;
    date: number;
    price: number;
    orders: Order[];
}

export interface UserInfo {
    email: string;
    password: string;
    firstName: string;
    lastName: string;
    country: string;
    address: string;
    city: string;
    state: string;
    zip: string;
    phone: number;
    bod: number;
    gender: string;
    receive: boolean;
}

export interface State {
    name: string;
    abbreviation: string;
}
