import { DetallePalabraClave } from "./detallePalabraClave";
export interface CursoEdit {
    id: number;
    nombre: string;
    descripcion: string;
    logo: Buffer;
    estado: boolean;
    recurso: string;
    detallePalabrasClave?: DetallePalabraClave[];
}
