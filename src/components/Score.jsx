import PropTypes from "prop-types";

export default function Score({ highScore, clicked }) {
    return (
        <div className="score">
            <h2>High Score: {highScore}</h2>
            <h2>Score: {clicked.length}</h2>
        </div>
    )
}

Score.propTypes = {
    highScore: PropTypes.number.isRequired,
    clicked: PropTypes.array.isRequired,
};