import React, { useState, useEffect } from "react";

function AddItem() {
  const [image, setImage] = useState(null);
  const [productName, setProductName] = useState("");
  const [productDescription, setProductDescription] = useState("");
  const [price, setPrice] = useState("");
  const [tags, setTags] = useState("");
  const [isFormValid, setIsFormValid] = useState(false);
  const [preview, setPreview] = useState(null);

  useEffect(() => {
    if (image && productName && productDescription && price) {
      setIsFormValid(true);
    } else {
      setIsFormValid(false);
    }
  }, [image, productName, productDescription, price]);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setImage(file);

      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handlePriceChange = (e) => {
    const value = e.target.value;
    if (/^\d*$/.test(value)) {
      setPrice(value);
    }
  };

  return (
    <>
      <form>
        <div className="m-auto my-[24px] sm:min-w-[320px] md:min-w-[500px] xl:min-w-[800px] max-w-[800px] flex justify-between">
          <span className="text-[28px] font-[700]">상품 등록 하기</span>
          <button
            className={`w-[88px] h-[42px] text-[16px] font-[600] p-[12px 23px] gap-[10px] rounded-md  ${
              isFormValid
                ? "bg-[var(--blue50)] text-[#fff]"
                : "bg-[var(--gray500)] text-[#fff]"
            }`}
            disabled={!isFormValid}
          >
            등록
          </button>
        </div>
        <div className="m-auto mb-[24px] sm:min-w-[320px] md:min-w-[500px] xl:min-w-[800px] max-w-[800px]">
          <span className="text-[18px] font-[700]">삽입 이미지</span>
          <div className="flex gap-[24px]">
            <input
              className="block w-[282px] h-[282px] bg-[var(--gray200)] rounded-md"
              type="file"
              placeholder="이미지 등록"
              onChange={handleImageChange}
            />
            {preview && (
              <div className="block">
                <img
                  src={preview}
                  alt="미리보기"
                  className="w-[282px] h-[282px] bg-[var(--gray200)] rounded-md object-cover"
                />
              </div>
            )}
          </div>
        </div>
        <div className="m-auto mb-[24px] sm:min-w-[320px] md:min-w-[500px] xl:min-w-[800px] max-w-[800px]">
          <span className="text-[18px] font-[700]">상품명</span>
          <input
            className="flex items-center justify-center m-auto sm:min-w-[320px] md:min-w-[500px] xl:min-w-[800px] max-w-[800px] h-[42px] p-[10px] my-[10px] bg-[var(--gray100)] rounded-md"
            placeholder="상품명을 입력해주세요"
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
          />
        </div>
        <div className="m-auto mb-[24px] sm:min-w-[320px] md:min-w-[500px] xl:min-w-[800px] max-w-[800px]">
          <span className="text-[18px] font-[700]">상품 소개</span>
          <textarea
            className="flex items-center justify-center m-auto sm:min-w-[320px] md:min-w-[500px] xl:min-w-[800px] max-w-[800px] h-[200px] p-[10px] my-[10px] bg-[var(--gray100)] rounded-md outline-none whitespace-normal resize-none"
            placeholder="상품 소개를 입력해주세요"
            value={productDescription}
            onChange={(e) => setProductDescription(e.target.value)}
          />
        </div>
        <div className="m-auto mb-[24px] sm:min-w-[320px] md:min-w-[500px] xl:min-w-[800px] max-w-[800px]">
          <span className="text-[18px] font-[700]">판매가격</span>
          <input
            className="flex items-center justify-center m-auto sm:min-w-[320px] md:min-w-[500px] xl:min-w-[800px] max-w-[800px] h-[42px] p-[10px] my-[10px] bg-[var(--gray100)] rounded-md"
            type="number"
            placeholder="판매 가격을 입력해주세요"
            value={price}
            onChange={handlePriceChange}
          />
        </div>
        <div className="m-auto sm:min-w-[320px] md:min-w-[500px] xl:min-w-[800px] max-w-[800px]">
          <span className="text-[18px] font-[700]">태그</span>
          <input
            className="flex items-center justify-center m-auto sm:min-w-[320px] md:min-w-[500px] xl:min-w-[800px] max-w-[800px] h-[42px] p-[10px] my-[10px] bg-[var(--gray100)] rounded-md"
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
