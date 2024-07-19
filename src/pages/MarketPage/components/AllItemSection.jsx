import { useEffect, useState } from "react";
import { getProduct } from "../../../api/api";
import ItemCard from "./ItemCard";
import { Link } from "react-router-dom";
import DropdownList from "../../../components/DropdownList";
import Pagination from "../../../components/Pagination";

const getPageSize = () => {
  const width = window.innerWidth;
  if (width < 800) {
    return 4;
  } else if (width < 1280) {
    return 6;
  } else {
    return 12;
  }
};

function AllItemSection() {
  const [orderBy, setOrderBy] = useState("recent");
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(getPageSize());
  const [item, setItem] = useState([]);
  const [totalPages, setTotalPages] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const fetchData = async ({ orderBy, page, pageSize }) => {
    const products = await getProduct({ orderBy, page, pageSize });
    setItem(products.list);
    setTotalPages(Math.ceil(products.totalCount / 10));
  };

  const handleSelection = (option) => {
    setOrderBy(option);
  };

  useEffect(() => {
    sessionStorage.setItem("page", page);

    const handleResize = () => {
      setPageSize(getPageSize());
    };

    window.addEventListener("resize", handleResize);
    fetchData({ orderBy, page, pageSize });

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [orderBy, page, pageSize]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const onPageChange = (newPage) => {
    setPage(newPage);
  };

  return (
    <div className="m-auto sm:min-w-[320px] md:min-w-[344px] lg:min-w-[500px] xl:min-w-[600px] max-w-[1200px]">
      <div className="flex gap-[12px] items-center justify-center">
        <h1 className="flex-1 text-[20px] font-[700] mb-[16px] mt-[24px]">
          판매 중인 상품
        </h1>
        <input
          className="flex-none w-[325px] h-[42px] p-[10px] bg-[var(--gray100)] rounded-md"
          type="text"
          placeholder="검색할 상품을 입력해주세요"
          id="name"
        />
        <button className="flex-none w-[133px] h-[42px] p-[12px 23px] gap-[10px] rounded-md bg-[var(--blue50)] text-[16px] font-[600] text-[#fff] hover:bg-[var(--blue70)]">
          <Link to="/additem">상품 등록하기</Link>
        </button>
        <div
          className="flex relative items-center justify-center w-[133px] h-[42px] text-[16px] font-[600] text-[var(--blue50)] hover:bg-[var(--blue70)]"
          onClick={toggleMenu}
        >
          드롭버튼
          {isMenuOpen && (
            <DropdownList
              onHandleSelection={handleSelection}
              toggleMenu={toggleMenu}
            />
          )}
        </div>
      </div>
      <div className="grid gap-[24px] grid-cols-2 md:grid-cols-3 xl:grid-cols-5">
        {item?.map((item) => (
          <ItemCard item={item} key={`best-item-${item.id}`} />
        ))}
      </div>
      <Pagination
        totalPages={totalPages}
        currentPage={page}
        onPageChange={onPageChange}
      />
    </div>
  );
}

export default AllItemSection;
