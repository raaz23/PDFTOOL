
import PropTypes from 'prop-types';
const Button = ({ label,link }) => {
    return (
        <a className="btn" href={link}>{label}</a>
    );
};

Button.propTypes = {
    label: PropTypes.string.isRequired,
    link:PropTypes.string,
};

Button.defaultProps = {
    type: 'button',
    link:"#"
};

export default Button;
