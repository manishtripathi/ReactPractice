import React, { useEffect, useState } from "react";
import {Container, PostCard} from "../index";
import appWriteService from '../../appwrite/configration'


const AllPost = () => {
    const [posts, setPosts] = useState([])
    useEffect(() => {

    }, [])
    appWriteService.GetPosts([]).then((posts) =>{
        if (posts) {
            setPosts(posts.documents)
        }

    })
    return (
        <div className="w-full py-8">

           <Container>
            <div className="flex flex-wrap">
                {posts.map((post) => (
                    <div key={post.$id} className="p-2 w-1/4">
                        <PostCard post={post}/>
                    </div>
                ))}
            </div>
                
           </Container>
        </div>
    )
}
export default AllPost