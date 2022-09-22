import blogData from "../data/blog"
export default function Header(props){
    return(
      <header>
        <h1>
          {blogData.name}
        </h1>
      </header>
    )
  }