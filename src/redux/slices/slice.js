import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 0,
  cost: 1,
  obertka: 0,
  chocolateCounter: 0,
  pudgeAddObertki: 0
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    conechnay: (state) => {
        let x = state.value;
        state.chocolateCounter=0;
        state.obertka = 0 + state.pudgeAddObertki;
        console.log(state.cost)
        while (state.value >= state.cost) {
            state.value = state.value - state.cost; 
            state.chocolateCounter+=1;
            state.obertka ++;
            while(state.obertka >= 3) {
                state.obertka -= 3; 
                // state.value += state.cost;
                state.chocolateCounter+=1
                state.obertka++;
            }
        }
        state.value = x;
    },
    changeValue: (state, action) => {
        if (action.payload==0) {
            state.value=0;
        } else { 
            state.value = action.payload;
        }
    },
    changeCost: (state, action) => {
        if (action.payload<=0) {
            state.cost = 1;
        } else {
            state.cost = action.payload;
        }
    },
    addObertki: (state, action) => {
        state.pudgeAddObertki = action.payload;
    }
  },
})

export const { conechnay, changeValue, changeCost, addObertki } = counterSlice.actions

export default counterSlice.reducer