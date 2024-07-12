const defaultArray = {
  messages: [],
};

export const MESSAGE__TYPE = {
  send: "send",
  borResponse: "borResponse",
};

export default function historyReducer(state = defaultArray, action) {
  switch (action.type) {
    case MESSAGE__TYPE.send: {
      return {
        ...state,
        messages: [
          ...state.messages,
          {
            user: {
              name: "Razvalnuy",
              avatar: "./public/avatar/default-avatar.svg",
              bgColor: "#1C64F2",
              align: "rigth",
            },
            text: action.text,
            id: Math.random(),
          },
        ],
      };
    }
    case MESSAGE__TYPE.borResponse: {
      return {
        ...state,
        messages: [
          ...state.messages,
          {
            user: {
              name: "bot",
              avatar: "./public/avatar/gemini.svg",
              bgColor: "#313E62",
              align: "left",
            },
            text: action.text,
            id: Math.random(),
          },
        ],
      };
    }
    default:
      return state;
  }
}
