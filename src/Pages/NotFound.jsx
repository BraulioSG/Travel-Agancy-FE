//tools
import { Link } from 'wouter';

//styles
import './NotFound.scss';

function NotFound() {
    return (
        <>
            <div className="not-found">
                <div className="not-found-curves-tl">
                    <svg
                        width="897"
                        height="720"
                        viewBox="0 0 897 720"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            className="light"
                            d="M287.5 531.5C174.5 597.5 0.5 648 0.5 778H981V-16.5C842.5 -16.5 727.726 -40.5 555.5 199.5C447.5 350 493.399 411.24 287.5 531.5Z"
                            fill="#D1D1E9"
                            fillOpacity="0.5"
                        />
                        <path
                            className="dark"
                            d="M306 634.5C127 678.5 161 729 161 779.5H986L976 150.5C924.167 149.333 853.3 132.2 734.5 213C586 314 538.07 577.455 306 634.5Z"
                            fill="#D1D1E9"
                        />
                    </svg>
                </div>
                <div className="not-found-curves-br">
                    <svg
                        width="897"
                        height="720"
                        viewBox="0 0 897 720"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            className="light"
                            d="M287.5 531.5C174.5 597.5 0.5 648 0.5 778H981V-16.5C842.5 -16.5 727.726 -40.5 555.5 199.5C447.5 350 493.399 411.24 287.5 531.5Z"
                            fill="#D1D1E9"
                            fillOpacity="0.5"
                        />
                        <path
                            className="dark"
                            d="M306 634.5C127 678.5 161 729 161 779.5H986L976 150.5C924.167 149.333 853.3 132.2 734.5 213C586 314 538.07 577.455 306 634.5Z"
                            fill="#D1D1E9"
                        />
                    </svg>
                </div>
                <div className="not-found-content" data-aos={'fade-up'}>
                    <h1 className="not-found-content-title">
                        404
                        <br />
                        Page Not Found :(
                    </h1>
                    <Link href="/" className="not-found-content-button">
                        Go home
                    </Link>
                </div>
            </div>
        </>
    );
}

export default NotFound;
