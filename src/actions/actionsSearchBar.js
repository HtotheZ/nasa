export const mapStateToProps = state => {
  return {
    startDate: state.startDate,
    endDate: state.endDate,
  };
};

export const mapDispatchToProps = dispatch => {
  return {
    setStartDate: (startDate) => {
      dispatch({type: "START_DATE", payload: startDate});
    },
    setEndDate: (endDate) => {
      dispatch({type: "END_DATE", payload: endDate});
    },
  }
};
