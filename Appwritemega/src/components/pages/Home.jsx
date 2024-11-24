import React, {useState, useEffect} from "react";
import appWriteService from '../../appwrite/configration'
import {Container, PostCard} from "../index";
const Home = () => {
    const [posts, setPosts ] = useState([])
    useEffect(() => {

        appWriteService.GetPosts().then((posts) => {
            if (posts) {
                setPosts(posts.documents)
            } 
    
        })
    }, [])

    if (posts === 0) {
        return (
            <> 
            <div className="w-full">
                <Container>
                <h1> Please login to see the post</h1>
                </Container>
            </div>
            </>
        )
        
    } else {
        return (
            <div className="w-full py-8">
                <Container>
                    <div className="flex flex-wrap">
            {posts.map((post)=> (
                <div key={post.$id} className="p-2 w-1/4">
                    <PostCard post={post}/>
                </div>
            ))}
                    </div>
                </Container>
            </div>
        )
    }
    
    return (
        <>
            <h1> Home </h1>
        </>
    )
}
export default Home