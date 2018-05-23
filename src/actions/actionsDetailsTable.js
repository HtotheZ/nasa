export const mapStateToProps = state => {
    return {
        selected: state.selected,
        data: state.data
    };
  };
  
  export const mapDispatchToProps = dispatch => {
    return {
        addData: (data) => {
            dispatch({ type: "DATA", payload: data});
          }
    };
  };