// BotpressChat.js
import React, { useEffect } from "react";

const BotpressChat = () => {
  useEffect(() => {
    // Load the Botpress webchat script
    const script = document.createElement("script");
    script.src = "https://cdn.botpress.cloud/webchat/v2.1/inject.js";
    script.async = true;

    // Append the script to the document body
    document.body.appendChild(script);

    // Load the config script
    const configScript = document.createElement("script");
    configScript.src =
      "https://mediafiles.botpress.cloud/bcd5152c-76c8-47c9-820e-469f9eb9f790/webchat/v2.1/config.js";
    configScript.async = true;

    // Append the config script to the document body
    document.body.appendChild(configScript);

    // Clean up the scripts when the component unmounts
    return () => {
      document.body.removeChild(script);
      document.body.removeChild(configScript);
    };
  }, []);

  return null; // This component does not render anything itself
};

export default BotpressChat;
