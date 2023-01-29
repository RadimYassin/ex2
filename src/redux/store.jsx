import { createStore } from "redux";
import AppReduce from "./AppReducer";

export const store=createStore(AppReduce)