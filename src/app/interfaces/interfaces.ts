export interface page{
    name: string;
    icon: string;
    url: string;
}

export interface Marker {
    position: {
      lat: number,
      lng: number,
    };
    title: string;
}

export interface product {
    product: string;
    imgURL: string;
    sound: string;
    description: string;
}

export interface compania {
    section: string;
    icon: string;
    image: string;
    description: string;
}