import { useEffect, useState } from "react";
import { getProductDetail } from "../../api/api";
import { useParams } from "react-router-dom";

function ItemPage() {
  const [product, setProduct] = useState(null);
  const [error, setError] = useState(null);
  const { productId } = useParams();

  useEffect(() => {
    async function fetchProduct() {
      if (!productId) {
        setError("상품 아이디가 제공되지 않았습니다.");
        return;
      }
      try {
        const date = await getProductDetail(productId);
        if (!date) {
          throw new Error("해당 상품의 데이터를 찾을 수 없습니다.");
        }
      } catch (error) {
        setError(error.message);
      }
    }
  }, [productId]);
  return <div>아이템 페이지 사진/이름 가격/ 상품소개 상품 태그 / 문의하기</div>;
}

export default ItemPage;
