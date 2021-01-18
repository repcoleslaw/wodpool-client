import React from 'react'
import { Table } from 'antd';


function TableBoard() {


const columns = [
  //handle handle
  {
    title: 'Handle',
    dataIndex: 'handle',
    filters: [
      {
        text: 'Joe',
        value: 'Joe',
      },
      {
        text: 'Jim',
        value: 'Jim',
      },
      {
        text: 'Submenu',
        value: 'Submenu',
        children: [
          {
            text: 'Green',
            value: 'Green',
          },
          {
            text: 'Black',
            value: 'Black',
          },
        ],
      },
    ],
    // specify the condition of filtering result
    // here is that finding the handle started with `value`
    onFilter: (value, record) => record.handle.indexOf(value) === 0,
    sorter: (a, b) => a.handle.length - b.handle.length,
    sortDirections: ['descend'],
  },
  {
    title: 'Score',
    dataIndex: 'currentScore',
    defaultSortOrder: 'descend',
    sorter: (a, b) => a.currentScore - b.currentScore,
  },
  {
    title: 'Last Week',
    dataIndex: 'previousScore',
    defaultSortOrder: 'descend',
    sorter: (a, b) => a.currentScore - b.currentScore,
  },
  {
    title: 'Address',
    dataIndex: 'address',
    filters: [
      {
        text: 'London',
        value: 'London',
      },
      {
        text: 'New York',
        value: 'New York',
      },
    ],
    filterMultiple: false,
    onFilter: (value, record) => record.address.indexOf(value) === 0,
    sorter: (a, b) => a.address.length - b.address.length,
    sortDirections: ['descend', 'ascend'],
  },
];

const data = [
  {
    key: '1',
    handle: 'John Brown',
    currentScore: 32,
    previousScore: 18,
    address: 'New York No. 1 Lake Park',
  },
  {
    key: '2',
    handle: 'Jim Green',
    currentScore: 42,
    previousScore: 18,
    address: 'London No. 1 Lake Park',
  },
  {
    key: '3',
    handle: 'Joe Black',
    currentScore: 32,
    previousScore: 18,
    address: 'Sidney No. 1 Lake Park',
  },
  {
    key: '4',
    handle: 'Jim Red',
    currentScore: 32,
    previousScore: 18,
    address: 'London No. 2 Lake Park',
  },
];

function onChange(pagination, filters, sorter, extra) {
  console.log('params', pagination, filters, sorter, extra);
}
  return (
    <div>
      <Table 
      columns={columns} 
      dataSource={data} 
      onChange={onChange}
      bordered
      title={()=>'The Pool'}
      footer={()=>'The Pool ends on Date'} />
    </div>
  )
}

export default TableBoard
