import React, { useEffect } from "react";
import { useCollection } from "../../hooks/useCollection";
import Avatar from "../avatar/Avatar";
import { useRef } from "react";
import formatDistanceToNow from "date-fns/formatDistanceToNow";
import "./ChatWindow.scss";


function ChatWindow() {
  const { documents } = useCollection("messages");
  const messagesEndRef = useRef(null);

    
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  useEffect(() => {
    scrollToBottom();
  }, [documents]); 
  return (
    <>
    
    
      <div className="conatiner">
        <div className="messages">
          {documents &&
            documents.map((doc) => {
              return (
                <div className="single" key={doc.id} ref={messagesEndRef}>
                  <p className="created-at">
                    {" "}
                    {doc.createdAt &&
                      formatDistanceToNow(doc.createdAt.toDate(), {
                        addSuffix: true,
                      })}
                  </p>
                 <Avatar src={doc.photo} />
                  <span className="name underline">{doc.name}:</span>
                  <span className="message">{doc.message}</span>
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
}

ChatWindow.propTypes = {};

export default ChatWindow;
