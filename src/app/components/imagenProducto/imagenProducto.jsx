import useFetch from "@/app/hook/useFetch/useFetch";
import Boton from "@/app/components/boton/boton";
function ImagenProducto({ idProducto, classProps }) {
  const { producto, loading, error } = useFetch(idProducto);
  console.log(typeof producto);

  return (
    <>
      {producto ? (
        <div
          className={`min-w-44 flex flex-col justify-center items-center text-[#fff] ${classProps}`}
        >
          <div className="w-full ">
            <img
              className="w-full cover "
              src={producto.message[0].url}
              alt="Error a cargar la imagen"
            />
          </div>
          <h3>{producto.message[0].nombre}</h3>
          <p>{producto.message[0].formato}</p>
          <Boton
            type="button"
            handler={() => {}}
            label="Añadir al carrito"
            classParams="bg-blue-900 text-white px-4 py-2 rounded-3xl mt-4"
          ></Boton>
        </div>
      ) : (
        <div>"No se encontró el producto"</div>
      )}
    </>
  );
}

export default ImagenProducto;
/*{message: Array(1)}
message
: 
Array(1)
0
: 
descripcion
: 
"Quick Detail con aroma a cereza, formulado para otorgar un brillo único. \nPuede ser utilizado en superficies húmedas y secas. También sirve para remover polvillo y marcas\n de pintura.Protección y brillo para la carrocería"
formato
: 
"600ml + Gatillo"
id_categoria
: 
1
id_imagen
: 
1
id_producto
: 
1
id_uso
: 
1
nombre
: 
"CHERRY QUICK"
precio
: 
"7000.00"
stock
: 
50
url
: 
"imgproductosceraliquidaCherryQuick.png"*/
