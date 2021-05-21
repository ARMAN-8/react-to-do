import React from 'react';

const PostListItem = () => {
    return(
        <li className="app-list-item flex justify-between">
          <span className="app-list-item-label">
              Hello world!
          </span>
            <div className="flex justify-center items-center">
                <button type="button" className="btn-star btn-sm">
                    <i className="fas fa-star"/>
                </button>
                <button type="button" className="btn-trash btn-sm">
                    <i className="fas fa-trash"/>
                </button>
                <i className="fas fa-heart"/>
            </div>
        </li>
    )
};
export default PostListItem;
