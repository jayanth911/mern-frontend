import { useParams } from "react-router-dom";

function ProductScreen() {
const param = useParams();
const { slug } = param;
return(
    <div>
        <h1>you r on {slug}</h1>
    </div>
);
    
}
export default ProductScreen;