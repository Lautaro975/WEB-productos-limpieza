import CardProducto from "@/app/components/cardProducto/cardProducto";
import Galeria from "@/app/components/galeria/galeria";
import axiosInstance from "@/config/axios"


const getData = async (id) => {
    try {
        const response = await axiosInstance.get(`/producto/${id}`);
        const responseSgd = await axiosInstance.get(`/producto?categoria=${response.data?.productos?.categoria}&uso=${response.data?.productos?.uso}&limit=5`);
        return {response: response.data, responseSgd: responseSgd.data};
        
    } catch (error) {
        return {response: null, error: error};
    }
}


const Product = async ({params}) => {

    const {id} = params;
    
    const { response: data, error } = await getData(id)

  const galeriaref = useRef(null);
  const { fullX, recorrer } = useGalleryScroll(galeriaref);
    
    return (
        <>
            <section className="flex flex-col gap-4">
                <h7>Producto</h7>
                <div>
                    <CardProducto data={data}/>
                </div>
            </section>
            <aside>  
                {dataSgd && 
                <div>
                    <Galeria  ref={galeriaref} fullX={fullX} recorrer={recorrer} data={dataSgd}/>                    
                </div>}
            </aside>
        </>
    )
}

export default Product