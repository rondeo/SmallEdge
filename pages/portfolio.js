import React from 'react';
import BaseLayout from '../components/layouts/BaseLayout';
import { withRouter } from 'next/router';
import axios from 'axios';


class Portfolios extends React.Component {

    static async getInitialProps({query}) {
        
        const portfolioId = query.id;
        let portfolio = {};

        try {
            const response = await axios.get('https://jsonplaceholder.typicode.com/posts/' + portfolioId);
            portfolio = response.data;
            console.log(response);
        } catch (error) {
            console.error(error);
        }

        return {portfolio};
    }

    render() {

        const { portfolio } = this.props;

        return (
            <BaseLayout>
                <h1>{ portfolio.title }</h1>
                <p>{ portfolio.body }</p>
                <p>{ portfolio.id }</p>
            </BaseLayout>
        )
    }
    
}

export default withRouter(Portfolios);