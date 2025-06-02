import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

interface PaginationProps {
    currentPage: number; // 0-based
    totalPages: number; // 1-based (API 응답의 totalPages)
    onPageChange: (page: number) => void;
}

const Pagination = ({ currentPage, totalPages, onPageChange }: PaginationProps) =>{
    // 1-based로 변환
    const currentPage1Based = currentPage + 1;

    // 페이지 그룹 계산
    const pageGroupSize = 10;
    const currentGroup = Math.floor((currentPage1Based - 1) / pageGroupSize);
    const startPage = currentGroup * pageGroupSize + 1;
    const endPage = Math.min(startPage + pageGroupSize - 1, totalPages);

    // 페이지 번호 배열 생성
    const pages = Array.from({ length: endPage - startPage + 1 }, (_, i) => startPage + i);

    // 이전/다음 그룹 이동
    const handlePrevGroup = () => onPageChange((currentGroup - 1) * pageGroupSize);
    const handleNextGroup = () => onPageChange(currentGroup * pageGroupSize + pageGroupSize);

    // 개별 페이지 이동
    const handlePageClick = (page: number) => onPageChange(page - 1);

    return (
        <div className="flex items-center justify-center gap-2 my-8">
            {/* 이전 그룹 버튼 */}
            <button
                onClick={handlePrevGroup}
                disabled={currentGroup === 0}
                className="p-2 disabled:opacity-30"
            >
                <FaChevronLeft />
            </button>

            {/* 페이지 번호들 */}
            {pages.map(page => (
                <button
                    key={page}
                    onClick={() => handlePageClick(page)}
                    className={`w-10 h-10 rounded-full ${
                        page === currentPage1Based
                            ? 'bg-[#2BC09D] text-white'
                            : 'hover:bg-gray-100'
                    }`}
                >
                    {page}
                </button>
            ))}

            {/* 다음 그룹 버튼 */}
            <button
                onClick={handleNextGroup}
                disabled={currentGroup === Math.floor((totalPages - 1) / pageGroupSize)}
                className="p-2 disabled:opacity-30"
            >
                <FaChevronRight />
            </button>
        </div>
    )
};

export default Pagination;