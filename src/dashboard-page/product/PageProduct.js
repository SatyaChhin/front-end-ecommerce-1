import { Table } from 'antd';
import axios from 'axios';
import React, { useState, useEffect } from 'react';
const columns = [
  {
    title: 'Id',
    dataIndex: 'product_id',
    key: 'id',
  },
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Barcode',
    dataIndex: 'barcode',
    key: 'barcode',
  },
  {
    title: 'Quantity',
    dataIndex: 'quantity',
    key: 'quantity',
  },
  {
    title: 'Price',
    dataIndex: 'price',
    key: 'price',
  },
  {
    title: 'Product_type',
    dataIndex: 'product_type',
    key: 'product_type',
  },
  {
    title: 'Create_at',
    dataIndex: 'create_at',
    key: 'create_at',
  },
  {
    title: 'Action',
    dataIndex: '',
    key: 'x',
    render: () => <a>Delete</a>,
  },
];

const PageProduct = () => {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:8000/product')
          .then(response => {
            setPosts(response.data.list);
          })
          .catch(error => {
            console.error(error);
          });
      }, []);
    return(
        <Table
            columns={columns}
            expandable={{
            expandedRowRender: (record) => (
                <p
                style={{
                    margin: 0,
                }}
                >
                {record.description}
                </p>
            ),
            rowExpandable: (record) => record.name !== 'Not Expandable',
            }}
            dataSource = {posts} 
        />
    )
}
export default PageProduct;