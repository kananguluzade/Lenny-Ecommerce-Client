import React, { useState } from 'react'
import { Pagination as AntPagination } from 'antd';
import 'src/components/Pagination/Pagination.scss'

const Pagination = () => {
    const [current, setCurrent] = useState(1);
    const onChange = (page) => {
        setCurrent(page);
    };
    return <div className='pagination'><AntPagination current={current} onChange={onChange} total={50} /></div>;
}

export default Pagination