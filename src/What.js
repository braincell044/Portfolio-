import React from "react";
import { Button } from "react-bootstrap";
import { FaWhatsapp } from "react-icons/fa"; // Install react-icons if not already installed

const WhatsAppButton = () => {


  const whatsappLink = `https://wa.me/message/S6ORC4TXEYDTH1 `;

  return (
    <div className="text-center w-25 what  my-3">
      <Button
        variant="success"
        className="d-flex  gap-2"
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        style={{ background: "green", color: "white", padding: "10px", borderRadius: "5px", border: "none" }}
      >
        <FaWhatsapp size={20} />  WhatsApp
      </Button>
      
    </div>
  );
};

export default WhatsAppButton;
