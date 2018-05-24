export const mapStateToProps = state => {
  return {
    number: state.number,
    startDate: state.startDate,
    endDate: state.endDate,
    arr: state.arr,
    selected: state.selected,
    apiKey: "yXMnUlwzXYhXQ90Md4xJDJIFotpFujfugMZQiDzn",
    data: state.data,
    radius: state.radius
  };
};

export const mapDispatchToProps = dispatch => {
  return {
    addArr: (arr) => { 
      dispatch({ type: "ARR", payload: arr });
    },
    gotSelected: (selected) => { 
      dispatch({ type: "SELECTED", payload: selected });
    },
    addData: (data) => {
      dispatch({ type: "DATA", payload: data});
    },
    getRadius: (radius) => {
      dispatch({ type: "RADIUS", payload: radius})
    }
  };
};
