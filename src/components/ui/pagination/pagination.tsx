import {useState} from 'react';
import s from './pagination.module.scss'
import ArrowBack from "@/icons/ArrowBack";
import ArrowForward from "@/icons/ArrowForward";

type Props = {
    totalCount?: number
    pageSize?: number
}

const Pagination = (props: Props) => {
    const {totalCount = 1000, pageSize = 10} = props
    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = Math.ceil(totalCount / pageSize);

    const handlePageChange = (pageNumber: number) => {
        setCurrentPage(pageNumber);
    };

    const renderPageNumbers = () => {
        const pageNumbers = [];
        let startPage = 1;
        let endPage = totalPages;


        if (totalPages > 5) {
            if (currentPage <= 4) {
                endPage = 5;
            }
            else if (currentPage >= totalPages - 3) {
                startPage = totalPages - 4;
            } else {
                startPage = currentPage - 1;
                endPage = currentPage + 1;
            }
        }

        for (let i = startPage; i <= endPage; i++) {
            pageNumbers.push(
                <li
                    key={i}
                    className={i === currentPage ? s.active : ''}
                    onClick={() => handlePageChange(i)}
                >
                    {i}
                </li>
            );
        }

        if (startPage > 1) {
            pageNumbers.unshift(
                <li key="1" onClick={() => handlePageChange(1)}>
                    1
                </li>
            );
        }

        if (endPage < totalPages) {
            pageNumbers.push(
                <li key={totalPages} onClick={() => handlePageChange(totalPages)}>
                    {totalPages}
                </li>
            );
        }

        if (startPage > 1) {
            pageNumbers.splice(1, 0, (
                <li key={'collapse1'}>
                    ...
                </li>
            ));
        }

        if (endPage < totalPages) {
            pageNumbers.splice(pageNumbers.length - 1, 0, (
                <li key={'collapse2'}>
                    ...
                </li>
            ));
        }

        return pageNumbers;
    };

    return (
        <div>
            <ul>
                <li
                    onClick={() => handlePageChange(currentPage - 1)}
                >
                    <ArrowBack fill={`${currentPage === 1 ? 'var(--color-dark-100)' : 'white'}`}/>
                </li>
                {renderPageNumbers()}
                <li
                    onClick={() => handlePageChange(currentPage + 1)}
                >
                    <ArrowForward fill={`${currentPage === totalPages ? 'var(--color-dark-100)' : 'white'}`}/>
                </li>
            </ul>
        </div>
    );
};

export default Pagination;