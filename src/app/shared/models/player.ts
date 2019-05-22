import { Posiciones as EnumPosiciones } from "../enums/posiciones.enum";

export class Player {
    edad: number;
    foto: string;
    idUsuario: string;
    partidosEmpatados: number;
    partidosGanados: number;
    partidosJugados: number;
    partidosPerdidos: number;
    posicion: EnumPosiciones
}