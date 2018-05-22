export const mapStateToProps = state => {
  return {
    number: state.number,
    startDate: state.startDate,
    endDate: state.endDate,
    arr: state.arr,
    apiKey: "yXMnUlwzXYhXQ90Md4xJDJIFotpFujfugMZQiDzn"
  };
};

export const mapDispatchToProps = dispatch => {
  return {
    addArr: (arr) => { 
      dispatch({ type: "ARR", payload: arr });
    },
  };
};
