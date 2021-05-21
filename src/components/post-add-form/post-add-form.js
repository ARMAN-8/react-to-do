import React from 'react';

const PostAddForm = () => {
    return(
        <form action="" className="bottom-panel flex">
            <input
                type="text"
            placeholder="О чем вы думаете?"
            className="border border-gray-400 rounded-lg new-post-label"/>
            <button type="submit"
                    className="px-6 py-1 rounded-lg border border-black text-black bg-white hover:bg-gray-100 shadow-lg">
                Добавить
            </button>
        </form>
    )
};
export default PostAddForm;
