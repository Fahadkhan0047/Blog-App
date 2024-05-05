import React,{useState,useEffect} from 'react'
import { Container,PostCard } from '../components'
import appwriteService from '../appwrite/config'
function AllPosts() {
    const [posts, setPosts] = useState([])
    useEffect(() => {}, [])
    appwriteService.getPost([]).then((posts)=>{
        if(posts){
            setPosts(posts.documents)
        }
    })
  return (
    <div className='w-full py-8'>
        <Container>
            <div className='flex-wrap flex'>
            {posts.map((post)=>(
                <div className='p-2 w-1/4' key={post.$id}>
                    <PostCard post={post}/>
                </div>
            ))}
            </div>
        </Container>
    </div>
  )
}

export default AllPosts