import "./posts.css";
import Post from '../post/Post';

export default function Posts() {
    return (
        <div className="posts">
            <Post img="https://img.freepik.com/free-photo/close-up-hand-writing-notebook-top-view_23-2148888824.jpg?w=1380&t=st=1678496351~exp=1678496951~hmac=6fa9f2fd9f5a68cff2185e940af704e3d6f2c1771770edb2f6c69f2c34bf5800" />
            <Post img=" https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&w=1600" />
            <Post img="https://images.pexels.com/photos/11035471/pexels-photo-11035471.jpeg?auto=compress&cs=tinysrgb&w=1600" />
            <Post img="https://images.pexels.com/photos/12899149/pexels-photo-12899149.jpeg?auto=compress&cs=tinysrgb&w=1600" />
            <Post img=" https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&w=1600" />
            <Post img="https://images.pexels.com/photos/8849287/pexels-photo-8849287.jpeg?auto=compress&cs=tinysrgb&w=1600" />
        </div>
    )
}
