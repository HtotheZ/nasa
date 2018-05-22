export const mapStateToProps = state => {
    return {
        arr: state.arr,
    };
  };
  
  export const mapDispatchToProps = dispatch => {
    return {
        addArr: (arr) => { 
            dispatch({ type: "NEO_ARR", payload: arr });
      },
    };
  };