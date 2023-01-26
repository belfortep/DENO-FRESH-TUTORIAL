import { PageProps } from "$fresh/server.ts";
import Hello from "../../islands/Hello.tsx";

export default function productName(props: PageProps) {
  return (//se llama productName el parametro ya que es el nombre de mi archivo que tiene los []
  //la ruta esta en /products/"nombre_producto" ya que esta en la carpeta products este archivo
    <div>El nombre del producto es: {props.params.productName}
      <Hello/>
    </div>
  )
}
