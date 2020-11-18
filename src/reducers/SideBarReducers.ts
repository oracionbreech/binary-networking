const initialState = {
  visible: false,
  animation: 'slide along'
}

export default function Sidebar(state = initialState, {type, animation}:any) {
    switch (type) {
      case "CHANGE_ANIMATION":
        return { ...state, animation: animation, visible: !state.visible };
      default:
        return state;
    }
  }