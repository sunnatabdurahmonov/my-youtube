import { AudioOutlined } from '@ant-design/icons';
import React, { useContext } from 'react';
import { Input, Space } from 'antd';
import { HeaderContext } from '../../Context/Context';
const { Search } = Input;
// const suffix = (
  <AudioOutlined
    style={{
      fontSize: 16,
      color: '#1677ff',
    }}
  />
// );

const App = () => {
  const {setValue} = useContext(HeaderContext)
  
  const onSearch = (value) => setValue(value)
  const {theme} = useContext(HeaderContext)


  
  return (
    <Space className='space' direction="vertical"
    > 
      <Search id={theme === false ? 'search' : 'search2'}
        placeholder='Search'
        onSearch={onSearch}
        onChange={e => setValue(e.target.value)}
        style={{
            maxWidth:600,
        }}
      />
        </Space>
  )
};
export default App;

    