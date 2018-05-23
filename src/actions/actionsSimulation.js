export const mapStateToProps = state => {
    return {
        selected: state.selected
    };
  };
  
  export const mapDispatchToProps = dispatch => {
    return {
        gotSelected: (selected) => { 
          dispatch({ type: "SELECTED", payload: selected });
      },
    };
  };