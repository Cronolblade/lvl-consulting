export type TipoCategoria = "Imágenes" | "Documento" | "Videos";

export interface DatoPaginaWeb {
  id: string;
  numero: number;
  imagenUrl: string;
  categoriaPrincipal: string;
  categoriaSub: string;
  descripcionPrincipal: string;
  descripcionSub: string;
  fecha: string;
  tipo: TipoCategoria;
}
