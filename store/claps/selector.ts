import { RootState } from "../reducers";
import { clapsEntity } from "./slice";

const adapterSelector = clapsEntity.getSelectors((state: RootState) => state.claps);

export const clapsSelector = adapterSelector.selectAll;
export const clapSelector = (slug: string) => (state: RootState) => adapterSelector.selectById(state, slug);