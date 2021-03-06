export const mapStateToProps = state => {
    return {
        arr: state.arr,
        selected: state.selected
    };
  };
  
  export const mapDispatchToProps = dispatch => {
    return {
        addArr: (arr) => { 
          dispatch({ type: "NEO_ARR", payload: arr });
      },
        gotSelected: (selected) => { 
          dispatch({ type: "SELECTED", payload: selected });
      },
    };
  };