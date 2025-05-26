import Chatbot from "@/components/ui/chat-box";
import React from "react";

const HomePage = () => {
  return (
    <main>
      <div className="h-full  bg-background">
        <div className="max-w-4xl mx-auto h-full">
          <Chatbot />
        </div>
      </div>
    </main>
  );
};

export default HomePage;
