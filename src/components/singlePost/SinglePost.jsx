import "./singlepost.css";
import { Link } from "react-router-dom";

export default function SinglePost() {
    return (
        <div className="singlePost">
            <div className="singlePostWrapper">
                <img
                    className="singlePostImg"
                    src="./singlepost-1.jpg"
                    alt=""
                />
                <h1 className="singlePostTitle">
                    Lorem ipsum dolor sit amet consectetur
                    <div className="singlePostEdit">
                        <i className="singlePostIcon far fa-edit"></i>
                        <i className="singlePostIcon fa-solid fa-trash"></i>
                    </div>
                </h1>
                <div className="singlePostInfo">
                    <span>
                        Auteur:
                        <b className="singlePostAuthor">
                            <Link className="link" to="/posts?username=Sarah">
                                Sarah
                            </Link>
                        </b>
                    </span>
                    <span>Il y a 3 heures</span>
                </div>
                <p className="singlePostDescription">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Accusamus, esse veniam, magnam dolor excepturi obcaecati quae praesentium ducimus vel mollitia officiis laudantium, sit perspiciatis recusandae!
                    Alias officiis explicabo vero ullam.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Accusamus, esse veniam, magnam dolor excepturi obcaecati quae praesentium ducimus vel mollitia officiis laudantium, sit perspiciatis recusandae!
                    Alias officiis explicabo vero ullam.
                    <br />
                    <br />
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Accusamus, esse veniam, magnam dolor excepturi obcaecati quae praesentium ducimus vel mollitia officiis laudantium, sit perspiciatis recusandae!
                    Alias officiis explicabo vero ullam.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Accusamus, esse veniam, magnam dolor excepturi obcaecati quae praesentium ducimus vel mollitia officiis laudantium, sit perspiciatis recusandae!
                    Alias officiis explicabo vero ullam.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Accusamus, esse veniam, magnam dolor excepturi obcaecati quae praesentium ducimus vel mollitia officiis laudantium, sit perspiciatis recusandae!
                    Alias officiis explicabo vero ullam.
                </p>
            </div>
        </div>
    )
}
