import { Link } from "react-router-dom";
import "./post.css";

export default function Post({ img }) {
    return (
        <div className='post'>
            <img
                className='postImg'
                src={img}
                alt=""
            />
            <div className="postInfo">
                <div className="postCategories">
                    <span className="postCategory">
                        <Link className="link" to="/posts?cat=Music">
                            Divers
                        </Link>
                    </span>

                    <span className="postCategory">
                        <Link className="link" to="/posts?cat=Bon plan">
                            Bons plans
                        </Link>
                    </span>
                </div>

                <span className="postTitle">
                    <Link to="/post/abc" className="linkPost">
                        Lorem ipsum dolor sit amet
                    </Link>
                </span>


                <span className="postDate">Il y a une heure</span>
            </div>
            <p className='postDescription'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, odio qui similique quasi cupiditate hic
                repudiandae rem nemo consequuntur quos magnam. Expedita ducimus corporis laboriosam at mollitia sequi maxime atque.

                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, odio qui similique quasi cupiditate hic
                repudiandae rem nemo consequuntur quos magnam. Expedita ducimus corporis laboriosam at mollitia sequi maxime atque.

                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, odio qui similique quasi cupiditate hic
                repudiandae rem nemo consequuntur quos magnam. Expedita ducimus corporis laboriosam at mollitia sequi maxime atque.
            </p>
        </div>
    )
}