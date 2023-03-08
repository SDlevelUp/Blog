import "./singlepost.css";

export default function SinglePost() {
    return (
        <div className="singlePost">
            <div className="singlePostWrapper">
                <img
                    className="singlePostImg"
                    src="./singlepost-1.png"
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
                    <span className="singlePostAuthor">
                        Auteur: <b>Sarah</b>
                    </span>

                    <span className="singlePostDate">
                        Il y a 45 minutes
                    </span>
                </div>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Accusamus, esse veniam, magnam dolor excepturi obcaecati quae praesentium ducimus vel mollitia officiis laudantium, sit perspiciatis recusandae!
                    Alias officiis explicabo vero ullam.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Accusamus, esse veniam, magnam dolor excepturi obcaecati quae praesentium ducimus vel mollitia officiis laudantium, sit perspiciatis recusandae!
                    Alias officiis explicabo vero ullam.
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
