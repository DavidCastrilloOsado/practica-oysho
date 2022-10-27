export interface Products {
    id?: number;
    name: string;
    nameEn?: string;
    color: Color[];
    longDescription?: string;
    reference?: string;
    imagepath: string;
    idMedia?: string;
    image?: Image;
    set?: number;
    size?: string;
    sizes?: Size[];
    urlImg?: string;
    price: number;
    productColor: string;
    class: string;

}

export interface Color {
    id: string;
    name: string;
    image: string;
    url?: string;
    sizes: Size[];
}

export interface Image {
    timestamp?: string;
    url?: string;
    aux?: string[];
    type?: string[];
    style?: string[];
    availableEstilismo?: boolean;
}

export interface Size {
    price: string;
    name: string;
    visibilityValue?: string;
}
