import React, { useState, useEffect } from "react";

function AddItem() {
  const [image, setImage] = useState(null);
  const [productName, setProductName] = useState("");
  const [productDescription, setProductDescription] = useState("");
  const [price, setPrice] = useState("");
  const [tags, setTags] = useState("");
  const [isFormValid, setIsFormValid] = useState(false);

  useEffect(() => {
    if (image && productName && productDescription && price) {
      setIsFormValid(true);
    } else {
      setIsFormValid(false);
    }
  }, [image, productName, productDescription, price]);

  const handleImageChange = (event) => {
    setImage(event.target.files[0]);
  };

  return (
    <>
      <form>
        <div className="m-auto sm:min-w-[320px] md:min-w-[500px] xl:min-w-[600px] max-w-[1200px] flex justify-between">
          <span className="text-[28px] font-[700]">상품 등록 하기</span>
          <button
            className={`text-[16px] font-[600] ${
              isFormValid ? "text-black" : "text-gray-400"
            }`}
            disabled={!isFormValid}
          >
            등록
          </button>
        </div>
        <div className="m-auto sm:min-w-[320px] md:min-w-[500px] xl:min-w-[600px] max-w-[1200px]">
          <div className="text-[18px] font-[700]">삽입 이미지</div>
          <input
            type="file"
            placeholder="이미지 등록"
            onChange={handleImageChange}
          />
        </div>
        <div className="m-auto sm:min-w-[320px] md:min-w-[500px] xl:min-w-[600px] max-w-[1200px]">
          <div className="text-[18px] font-[700]">상품명</div>
          <input
            className="sm:min-w-[320px] md:min-w-[500px] xl:min-w-[600px] max-w-[1200px] h-[42px] p-[10px] bg-[var(--gray100)] rounded-md m-auto"
            placeholder="상품명을 입력해주세요"
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
          />
        </div>
        <div className="m-auto sm:min-w-[320px] md:min-w-[500px] xl:min-w-[600px] max-w-[1200px]">
          <div className="text-[18px] font-[700]">상품 소개</div>
          <textarea
            className="sm:min-w-[320px] md:min-w-[500px] xl:min-w-[600px] max-w-[1200px] h-[200px] p-[10px] bg-[var(--gray100)] rounded-md outline-none whitespace-normal resize-none"
            placeholder="상품 소개를 입력해주세요"
            value={productDescription}
            onChange={(e) => setProductDescription(e.target.value)}
          />
        </div>
        <div className="m-auto sm:min-w-[320px] md:min-w-[500px] xl:min-w-[600px] max-w-[1200px]">
          <div className="text-[18px] font-[700]">판매가격</div>
          <input
            className="sm:min-w-[320px] md:min-w-[500px] xl:min-w-[600px] max-w-[1200px] h-[42px] p-[10px] bg-[var(--gray100)] rounded-md"
            type="number"
            placeholder="판매 가격을 입력해주세요"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>
        <div className="m-auto sm:min-w-[320px] md:min-w-[500px] xl:min-w-[600px] max-w-[1200px]">
          <div className="text-[18px] font-[700]">태그</div>
          <input
            className="sm:min-w-[320px] md:min-w-[500px] xl:min-w-[600px] max-w-[1200px] h-[42px] p-[10px] bg-[var(--gray100)] rounded-md"
            placeholder="태그를 입력해주세요"
            value={tags}
            onChange={(e) => setTags(e.target.value)}
          />
        </div>
      </form>
    </>
  );
}

export default AddItem;
