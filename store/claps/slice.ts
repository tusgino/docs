import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { PageClap } from "../../types/database";

export const clapsEntity = createEntityAdapter({
  selectId: (clap: PageClap) => clap.slug,
  sortComparer: (a, b) => b.created_at.localeCompare(a.created_at),
});

const clapsSlice = createSlice({
  name: 'claps',
  initialState: clapsEntity.getInitialState(),
  reducers: {
    getClaps: (state, action) => {
      // This is a reducer, so we can't use async/await here
    },
    incrementClap: (state, action) => {
      clapsEntity.updateOne(state, {
        id: action.payload,
        changes: {
          clap_count: state.entities[action.payload]?.clap_count + 1,
        }
      })
    },
    incrementClapSuccess: (state, action) => {
      // clapsEntity.updateOne(state, {
      //   id: action.payload.slug,
      //   changes: {
      //     clap_count: state.entities[action.payload.slug]?.clap_count + 1,
      //   }
      // })
    },
    incrementClapFailure: (state, action) => {
      clapsEntity.updateOne(state, {
        id: action.payload.slug,
        changes: {
          clap_count: state.entities[action.payload.slug]?.clap_count - 1,
        }
      })
    },
    addClap: clapsEntity.addOne,
    addClaps: clapsEntity.addMany,
    removeClap: clapsEntity.removeOne,
    updateClap: clapsEntity.updateOne,
  }
})

export const { getClaps, incrementClap, incrementClapSuccess, incrementClapFailure, addClap, addClaps, removeClap, updateClap } = clapsSlice.actions
export default clapsSlice.reducer