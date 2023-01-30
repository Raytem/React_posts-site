
import {React, useMemo} from 'react';
import { getPagesArray } from '../../../utils/pages';

function Pagination({totalPages, page, changePage}) {
    let pagesArray = useMemo(() => {
        return getPagesArray(totalPages);
    }, [totalPages]);

    return ( 
        <div className="bullets__wrapper">
            {pagesArray.map(pageNum =>
                <div 
                    onClick={() => changePage(pageNum)} 
                    key={pageNum} 
                    className={pageNum === page ? "bullets__bullet bullet-active" : "bullets__bullet"}
                >
                    {pageNum}
                </div>
            )}
        </div>
    );
}

export default Pagination;