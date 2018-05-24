export const mapStateToProps = state => {
    return {
        selected: state.selected,
        arr: state.arr,
        radius: state.radius
    };
  };
  
  export const mapDispatchToProps = dispatch => {
    return {
        gotSelected: (selected) => { 
          dispatch({ type: "SELECTED", payload: selected });
      },
    };
  };