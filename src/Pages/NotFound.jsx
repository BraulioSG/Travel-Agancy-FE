import './NotFound.scss';

import { Link } from 'wouter';

function NotFound() {
    return (
        <>
            <div className="not-found">
                <img className="not-found-curves-br" src="/assets/curves.svg" />
                <img className="not-found-curves-tl" src="/assets/curves.svg" />
                <div className="not-found-content">
                    <h1 className="not-found-content-title">
                        404
                        <br />
                        Page Not Found :(
                    </h1>
                    <Link href="/" className="not-found-content-button">
                        Go Home
                    </Link>
                </div>
            </div>
        </>
    );
}

export default NotFound;
