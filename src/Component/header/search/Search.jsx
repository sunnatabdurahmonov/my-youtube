import { AudioOutlined } from '@ant-design/icons';
import React, { useContext, useEffect, useState } from 'react';
import { Input, Space } from 'antd';
import { HeaderContext } from '../../Context/Context';
import axios from 'axios';
const { Search } = Input;
const suffix = (
  <AudioOutlined
    style={{
      fontSize: 16,
      color: '#1677ff',
    }}
  />
);
const onSearch = (value) => console.log(value);

const App = () => {
  const {theme} = useContext(HeaderContext)
  const [value,setValue] = useState('')

  const search =  async() => {
const options = {
  method: 'GET',
  url: 'https://youtube-v31.p.rapidapi.com/search',
  params: {
    q: {value},
    part: 'snippet,id',
    regionCode: 'US',
    maxResults: '50',
    order: 'date'
  },
  headers: {
    'X-RapidAPI-Key': '27a16d6e27msh374d55903e28f5ep1e99afjsne64f3f1d7d9e',
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
  }
};

try {
	const response = await axios.request(options);
	console.log(response.data);
} catch (error) {
	console.error(error);
}
  }
  useEffect(() => {
    search()
  },[])
  
  return (
    <Space className='space' direction="vertical"
    > 
      <Search id={theme === false ? 'search' : 'search2'}
        placeholder='Search'
        onSearch={onSearch}
        onChange={e=> setValue(e.target.value)}
        
        style={{
            maxWidth:600,
        }}
      />
        </Space>
  )
};
export default App;

    