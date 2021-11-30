export type Sound = {
    _id: string;
    name: string;
    icon: string;
    playbacks: number;
    price: number;
}

export type Sounds  = {
    sounds: Array<Sound>;
} 

export type SoundsResponse = Sound[]