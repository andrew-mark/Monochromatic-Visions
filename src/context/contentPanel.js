import React from "react";

const initialState = {
  open: false, content: 0
}
const ContentPanelContext = React.createContext(initialState, () => {});
export default ContentPanelContext;