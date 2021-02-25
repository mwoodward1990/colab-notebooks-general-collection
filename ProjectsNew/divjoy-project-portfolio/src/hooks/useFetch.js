import { useEffect, useState } from 'react';

export default function useFetch(props) {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        async function loadPosts(props) {
            const response = await fetch(props);
            if(!response.ok) {
                // oups! something went wrong
                return;
            }
            const posts = await response.json();
            setPosts(posts);
        }

        loadPosts(props);
    }, [props]);
    return posts;
}