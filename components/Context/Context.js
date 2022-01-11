import React, { useState } from "react";
export const Context = React.createContext();
export const ContextProvider = ({ children }) => {
  const dummy = [
    { id: 1, name: "Paul" },
    { id: 2, name: "Clémence" },
    { id: 3, name: "PROMO 2023" },
  ];
  const [channels, setChannels] = useState(dummy);
  const [channel, setChannel] = useState(dummy);

  return (
    <Context.Provider
      value={{
        channels: channels,
        setChannels: setChannels,
        channel: channel,
        setChannel: setChannel,
      }}
    >
      {children}
    </Context.Provider>
  );
};
