import React from 'react';
import BaseLayout from '../components/layouts/BaseLayout';
import axios from 'axios';

import {Link} from '../routes'

class portfolio extends React.Component {

    static async getInitialProps() {

        let posts = {};
        
        try {
            const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
            posts = response.data;
            console.log(response);
        } catch (error) {
            console.error(error);
        }

        return {posts: posts.splice(0, 10)};
    }

    renderPosts(posts) {
        return posts.map((post, index) => {
            return (
                <li key={index}>
                    <Link route={"/portfolio/" + post.id}  >
                        <a style={{'fontSize': '20px'}}>{ post.title }</a>
                    </Link>
                </li>
            )
        });
    }

    render() {
        const { posts } = this.props;
        return (
            <BaseLayout>
                <h1>I am Portfolios page</h1>
                <ul>
                    { this.renderPosts(posts) }
                </ul>
            </BaseLayout>
        )
    }
    
}

export default portfolio