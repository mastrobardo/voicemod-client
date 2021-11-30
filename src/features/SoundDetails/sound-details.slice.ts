import { createSlice } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
import { RootState } from "../../app/store";

type soundDetailsState = {
    modalId: boolean | string;
}
export const initialState = {
        modalId: false
}
  
export const soundDetailsSlice = createSlice({
    name: 'soundDetails',
    initialState,
    reducers: {
      setModalId: (state, { payload: { id } }) => {
          console.log('PAYLOAD', id)
        state.modalId = id;
      },
      unsetModalId: (state) => {
        state.modalId = false;
      },
    }
  });

  export const {
    setModalId,
    unsetModalId
  } = soundDetailsSlice.actions;

//   export const selectModalId = (state: soundDetailsState) => state.modalId;

// export const selectModalId = useSelector(
//     (state: RootState) => state.soundsDetails.modalId
// );

  export default soundDetailsSlice.reducer;