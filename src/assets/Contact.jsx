import Proptypes from 'prop-types';

export default function Contact(props) {
    return (
        <div>
            <h2>
                {props.email} {props.phone}
            </h2>
            <p> Send me a message!</p>
        </div>
    );
}

Contact.propTypes = {
    email: Proptypes.string.isRequired,
    phone: Proptypes.string.isRequired,
};
