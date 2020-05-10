import lo from "lodash";
import * as actionTypes from "../actions/actionTypes";
import {
  updateProjectDetails,
  deleteProject
} from "./reducersHelpers/projectsHelpers";

const initialState = {
  allProjects: [
    {
      id: 1,
      name: "Shaver",
      description: "A model of the Phillips One shaver.",
      createdAt: new Date(2019, 6, 15, 12, 35, 40, 10),
      updatedAt: new Date(2020, 5, 7, 12, 35, 40, 10),
      model_path: "something",
      screenshots: [
        {
          label: "screenshot-1-1",
          path: "/assets/screenshot-1-1.jpg"
        },
        {
          label: "screenshot-1-2",
          path: "/assets/screenshot-1-2.jpg"
        },
        {
          label: "screenshot-2-1",
          path: "/assets/screenshot-2-1.jpg"
        },
        {
          label: "screenshot-1-3",
          path: "/assets/screenshot-1-3.jpg"
        }
      ]
    },
    {
      id: 2,
      name: "Another Shaver",
      description:
        "A model of the Phillips One shaver. A model of the Phillips One shaver. A model of the Phillips One shaver. A model of the Phillips One shaver. A model of the Phillips One shaver. A model of the Phillips One shaver.",
      createdAt: new Date(2019, 6, 15, 12, 35, 40, 10),
      updatedAt: new Date(2020, 5, 7, 12, 35, 40, 10),
      model_path: "something",
      screenshots: [
        {
          label: "screenshot-1-1",
          path: "/assets/screenshot-1-1.jpg"
        }
        // {
        //   label: "screenshot-1-2",
        //   path: "/assets/screenshot-1-2.jpg"
        // },
        // {
        //   label: "screenshot-2-1",
        //   path: "/assets/screenshot-2-1.jpg"
        // },
        // {
        //   label: "screenshot-1-3",
        //   path: "/assets/screenshot-1-3.jpg"
        // }
      ]
    }
  ]
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
    default:
      return state;
  }
};

export default reducer;
