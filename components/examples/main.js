function Button_Functional (props){
    return (
        <button onClick={props.onClick}>
            {props.label}
        </button>
    )
}

////////////////////////////////////////////////////

const inputComponent = (props) => {
    return (
        <div>
            <label>{props.label}</label>
            <input onChange={props.onChange} />
        </div>
    )
}

////////////////////////////////////////////////////


import PropTypes from 'prop-types';

function Banner(props) {
    const { message, openDialog, label } = props;
  
    return (
      <div>
        <div>{message}</div>
        <button onClick={props.openDialog}>{props.label}</button>
      </div>
    );
}

Banner.defaultProps = {
    message: 'Problem'
};

Banner.propTypes = {
    /**
     *
     */
    label: PropTypes.string.isRequired,
    /**
     */
    openDialog: PropTypes.func,
    /**
     */
    message: PropTypes.string.isRequired,
}