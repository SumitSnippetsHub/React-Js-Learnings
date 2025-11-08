import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

// import Counter from "./State-Learnings/01_UseState/components/Counter.jsx";
// import LikeBtn from './State-Learnings/01_UseState/components/LikeBtnActivity.jsx';
import PostComponent from './State-Learnings/More-about-State/PostComponent.jsx';
import './App.css'

function App() {

  const [CurrPost, setCurrPost] = useState([]);

  const postComponents = CurrPost.map(post => <PostComponent
    image={post.image}
    name={post.name}
    followerCount={post.followerCount}
    time={post.time}
    description={post.description} />
  )

  function addPost() {
    setCurrPost([...CurrPost, {
      image: "https://www.shutterstock.com/image-vector/vector-cute-baby-panda-cartoon-600nw-2427356853.jpg",
      name: "Sumit Mishra",
      followerCount: "688",
      time: "5m ago",
      description: "I'm a passionate web developer currently pursuing MCA and building real-world projects."
    }])
  }

  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', flexWrap: 'wrap', alignContent: 'center' }}>
        {/* <h1 style={{textAlign:'center'}}>State in React</h1> */}
        <button style={{ marginLeft: 85, marginBottom: 15, width: 100, borderRadius: 5, cursor: 'pointer' }}
          onClick={addPost}>Add Post</button>
        {/* <Counter />
      <LikeBtn /> */}
        {postComponents}
      </div>
    </>

  )
}

export default App
