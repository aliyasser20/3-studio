import lo from "lodash";
import * as actionTypes from "../actions/actionTypes";
import {
  updateProjectDetails,
  deleteProject,
  findProject
} from "./reducersHelpers/projectsHelpers";

const initialState = {
  allProjects: [],
  currentProject: null
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.UPDATE_PROJECT_DETAILS:
      return {
        ...state,
        allProjects: updateProjectDetails(
          lo.cloneDeep(state.allProjects),
          action.id,
          action.name,
          action.description
        )
      };
    case actionTypes.DELETE_PROJECT:
      return {
        ...state,
        allProjects: deleteProject(lo.cloneDeep(state.allProjects), action.id)
      };
    case actionTypes.NEW_PROJECT:
      return {
        ...state,
        allProjects: [action.data, ...state.allProjects]
      };
    case actionTypes.POPULATE_PROJECTS:
      return {
        ...state,
        allProjects: action.projects
      };
    case actionTypes.SET_CURRENT_PROJECT:
      return {
        ...state,
        currentProject: { ...findProject(state.allProjects, action.projectId) }
      };
    default:
      return state;
  }
};

export default reducer;
