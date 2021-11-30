export type Sound = {
    _id: string;
    name: string;
    icon: string;
    playbacks: string;
    price: string;
}

export type Sounds  = {
    sounds: Array<Sound>;
} 

export type SoundsResponse = Sound[]