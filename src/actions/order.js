
export const orderUpdateRequest = (partnerIndex, envIndex, siteIndex, childSiteIndex, data) => {
  return (dispatch) => {
    dispatch({
      type: 'ORDER_UPDATE_REQUEST'
    })
    dispatch(
      orderUpdated(data)
    );
  }
}


export const orderUpdated = (data) => { 
  localStorage.setItem('data', JSON.stringify(data));
  return {
    type: 'ORDER_UPDATED',
    data: data
  }
}

export const dataRequested = () => {
  return (dispatch) => {
    dispatch({
      type: 'DATA_REQUESTED'
    })
    dispatch(dataRequestSuccess(data, message));
  }
}

//Sync action
export const dataRequestSuccess = (data, message) => {
  console.log(data);
  return {
    type: 'DATA_RECEIVED',
    data: data,
    message: message,
    receivedAt: Date.now
  }
}