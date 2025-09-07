
import Card from '@/components/Card';
import MyButton from '@/components/MyButton';
import React from 'react'

const Home = () => {
  return (
    <div>
      <h1 className='text-center text-5xl font-bold mt-4'>Home Page</h1>
      <p style={{ fontSize: 40, color: 'red', textAlign: 'center' }}>
        Using Inline CSS in JSX
      </p>
      <input type="text" />
      <br />
      <hr />

      <img src="/next.svg" alt="" />

      <button className='global-btn'>Global Button</button>

      <div className='grid grid-cols-3 gap-4 mt-4'>
        <Card title='God of War' genre={'Action'}
          imgLink={'https://theologygaming.com/wp-content/uploads/2013/11/Free-God-of-War-1-HD-Now-Available-for-PS-Plus-Subscribers-in-PAL-Regions-1.jpg'}
        />
        <Card title='God of War' genre={'Action'}
          imgLink={'https://theologygaming.com/wp-content/uploads/2013/11/Free-God-of-War-1-HD-Now-Available-for-PS-Plus-Subscribers-in-PAL-Regions-1.jpg'}
        />
        <Card title='God of War' genre={'Action'}
          imgLink={'https://theologygaming.com/wp-content/uploads/2013/11/Free-God-of-War-1-HD-Now-Available-for-PS-Plus-Subscribers-in-PAL-Regions-1.jpg'}
        />
      </div>

      <MyButton>khgjkdhfjkhfdjk</MyButton>
      <MyButton>submit</MyButton>
      <MyButton>click me</MyButton>
      <MyButton>jo bhi likhna ho</MyButton>

    </div>
  )
}

export default Home;

// fontSize - camelCase
// font-size - kebab-case
// font_size - snake_case
// FontSize - PascalCase