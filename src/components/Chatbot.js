import React, { useEffect } from "react";

const Chatbot = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://cdn.botpress.cloud/webchat/v1/inject.js";
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      window.botpressWebChat.init({
        botId: "bcd5152c-76c8-47c9-820e-469f9eb9f790",
        hostUrl: "https://cdn.botpress.cloud/webchat/v2.1/inject.js",
        messagingUrl:
          "https://mediafiles.botpress.cloud/bcd5152c-76c8-47c9-820e-469f9eb9f790/webchat/v2.1/config.js",
        clientId: "df3a332b-5a27-47e9-9626-43bc959cdeca",
      });
    };
  }, []);

  return <div id="webchat" />;
};

export default Chatbot;
