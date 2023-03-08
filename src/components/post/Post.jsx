import React from 'react'
import "./post.css";

export default function Post() {
    return (
        <div className='post'>
            <img
                className='postImg'
                src="./bpformation-1.jpg"
                alt=""
            />
            <div className="postInfo">
                <div className="postCategories">
                    <span className="postCategory">Diver</span>
                    <span className="postCategory">Bon plan</span>
                </div>
                <span className="postTitle">
                    Lorem ipsum
                </span>
                <hr />
                <span className="postDate">Il y a une heure</span>
            </div>
            <p className='postDescription'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, odio qui similique quasi cupiditate hic
                repudiandae rem nemo consequuntur quos magnam. Expedita ducimus corporis laboriosam at mollitia sequi maxime atque.

                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, odio qui similique quasi cupiditate hic
                repudiandae rem nemo consequuntur quos magnam. Expedita ducimus corporis laboriosam at mollitia sequi maxime atque.

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