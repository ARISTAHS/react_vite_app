import styled from "styled-components";
import MoreButton from "./Link";

const ProductContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 40px;

  .inner {
    flex: 1;
    max-width: 405px;
    height: 610px;
    border-radius: 6.25rem 0 6.25rem 0;
    box-shadow: 8px 8px 20px 0px rgba(0, 0, 0, 0.15);
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    transition: all 0.2s ease-in-out; 

    .img_box {
      height: 300px;
      img {
        width: 100%;
        height: 100%;
        object-fit: contain;
        object-position: center;
      }
    }

    .txt_box {
      text-align: center;
      padding: 2rem;
      h3 {
        font-size: 1.5rem;
        margin-bottom: 0.5rem;
      }

      p {
        color: #666;
        margin-bottom: 1rem;
      }
    }
    &:hover{
    border: 0.25rem solid #41b79b;
    }
  }
 
`;

const productData = [
  {
    id: 1,
    image : "/assets/foil_1.jpg",
    title : "플러레 마라징 블레이드",
    desc : "플러레 마라징 블레이드",
    link : '/pages/product.jsx'
  },
  {
    id: 2,
    image : "/assets/foil_2.jpg",
    title : "플러레 마라징 블레이드",
    desc : "플러레 마라징 블레이드",
    link : '/pages/product.jsx'
  },
  
];

export default function ProductList(){
  return(
    <ProductContainer className="product_container">
      {productData.map((product) => (
        <div className="inner" key={product.id}>
          <div className="img_box">
            <img src={product.image} alt={product.title} />
          </div>
          <div className="txt_box">
            <h3>{product.title}</h3>
            <p>{product.desc}</p>
            <MoreButton to={product.link} />
          </div>
        </div>
      ))}
    </ProductContainer>
  );
}