import React from 'react'
import ReactPaginate from 'react-paginate';
export default function PaginationComponent({getPage, pageCount}) {
    const handlePageClick = data => {
        getPage(++data.selected)
    }
    return (
        <ReactPaginate
        breakLabel="..."
        nextLabel="التالي"
        onPageChange={handlePageClick}
        marginPagesDisplayed={2}
        pageRangeDisplayed={2}
        pageCount={pageCount}
        previousLabel="السابق"
        containerClassName={"pagination justify-content-center p-3"}
        pageClassName={"page-item"}
        pageLinkClassName={"page-link"}
        nextClassName={"page-item"}
        nextLinkClassName={"page-link"}
        previousClassName={"page-item"}
        previousLinkClassName={"page-link"}
        breakClassName={"page-item"}
        breakLinkClassName={"page-link"}
        activeClassName={"active"}
        />
    )
}
