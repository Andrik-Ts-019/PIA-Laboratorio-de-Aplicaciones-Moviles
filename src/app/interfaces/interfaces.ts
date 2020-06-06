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