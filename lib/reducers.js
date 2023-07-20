export const initialState = { message: "" };
export default function reducer(state, action) {
  switch (action.type) {
    case "show":
      console.log("reducer", action.text);
      return { ...state, message: "some" };

      break;

    case "hide":
      return { message: "" };
    default:
      throw new Error();
  }
}
