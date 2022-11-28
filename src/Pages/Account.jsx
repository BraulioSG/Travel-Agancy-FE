//tools
import { useEffect, useState } from 'react';
import { Link, Redirect } from 'wouter';
//styles
import './Account.scss';

function Account() {
    const [loading, setLoading] = useState(false);
    const [logged, setLogged] = useState(false);

    useEffect(() => {}, []);

    if (loading) return <h1>Loading...</h1>;
    if (!logged) return <Redirect to="/login" />;
    return (
        <>
            <h1>Accoutn</h1>
        </>
    );
}

export default Account;
