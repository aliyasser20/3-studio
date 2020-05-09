import * as actionTypes from "../actions/actionTypes";

const initialState = {
  allProjects: [
    {
      id: 1,
      name: "Shaver",
      description: "A model of the Phillips One shaver.",
      createdAt: new Date(2019, 6, 15, 12, 35, 40, 10),
      updatedAt: new Date(2020, 5, 7, 12, 35, 40, 10),
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
    default:
      return state;
  }
};

export default reducer;
