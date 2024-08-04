import React from "react"
import Article from "./Article"

function Articlelist({posts}){
    const postItems=posts.map((post)=>{
    return(<Article 
        key={post.id} 
        title={post.title} 
        date={post.date} 
        preview={post.preview}
        minutes={post.minutes}
        />)
  })
  return(
    <main>
        {postItems}
    </main>
  )
}
export default Articlelist;
