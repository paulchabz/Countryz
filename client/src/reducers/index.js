/*
  ===========================
   REDUCERS TO BE COMBINED HERE 
  ============================
*/

import { combineReducers } from "redux";
import countries from "./countriesReducer";
import africanCountries from "./africanReducer";
import europeanCountries from "./europeanReducer";

export default combineReducers({
  countries: countries,
  africanCountries: africanCountries,
  europeanCountries: europeanCountries
});
