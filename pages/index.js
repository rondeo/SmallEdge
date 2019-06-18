import React from 'react';
import BaseLayout from '../components/layouts/BaseLayout';
import axios from 'axios';

class index extends React.Component {

    static async getInitialProps() {

        let userData = {};
        
        try {
            const response = await axios.get('https://jsonplaceholder.typicode.com/todos/1');
            userData = response.data;
            console.log(response);
        } catch (error) {
            console.error(error);
        }

        return {initialData: [1,2,3,4,5], userData};
    }

    constructor(props) {
        super(props);

        this.state = {
            title: 'I am Index Page'
        }
    }

    render() {

        const { title } = this.state;
        const { userData, initialData } = this.props;


        return (
            <BaseLayout>
                <h1>{ title }</h1>
                <h2>{ userData.title }</h2>
            </BaseLayout>
        )
    }
    
}

export default index