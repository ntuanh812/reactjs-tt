import React from 'react';
import { AudioOutlined } from '@ant-design/icons';
import { Input, Space } from 'antd';

const { Search } = Input;

const onSearch = (value, _e, info) => console.log(info?.source, value);
const SearchForm = () => (
    <Space direction="vertical">
    <Search
      placeholder="Tìm kiếm..."
      allowClear
      enterButton
      size="large"
      onSearch={onSearch}
    />
  </Space>
);
export default SearchForm;