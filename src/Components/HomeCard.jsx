import './HomeCard.scss';
function HomeCard(props) {
    const { icon, title, children } = props;
    return (
        <>
            <div className="home-card">
                <div className="home-card-icon">
                    <span className="material-symbols-outlined">{icon}</span>
                </div>
                <div className="home-card-title">
                    <h2>{title}</h2>
                </div>
                <div className="home-card-content">{children}</div>
            </div>
        </>
    );
}

export default HomeCard;
