export interface Tarjeta {
    id:string;
    img:string;
    alt:string;
    titulo:string;
    descripcion:string;
    anualPublicacion:number;
}

export interface TarjetaDetalle extends Tarjeta {
    autor:string;
    editorial:string;
    isbn:string;
    paginas:number;
    idioma:string;
    formato:string;
    dimensiones:string;
}
export interface TarjetaCreacion {
    img:string;
    alt:string;
    titulo:string;
    descripcion:string;
    anualPublicacion:number;
}
export interface TarjetaActualizacion {
    id:string;
    img:string;
    alt:string;
    titulo:string;
    descripcion:string;
    anualPublicacion:number;
}