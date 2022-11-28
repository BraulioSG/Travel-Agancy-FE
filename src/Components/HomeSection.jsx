import './HomeSection.scss';

function HomeSection(props) {
    return (
        <div className="home-section">
            <div className="home-section-content">{props.children}</div>
        </div>
    );
}

export default HomeSection;
