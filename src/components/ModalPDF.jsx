import React from 'react';
import Modal from 'react-modal';
import "../css/pdf.css";

Modal.setAppElement('#root'); // Elige el elemento en el que se montará el componente Modal

const ModalPDF = ({ isOpen, onClose, pdfUrl }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      className="modal"
      contentLabel="PDF Modal"
    >

      <div className="modal-content">
        <span className="close-button" onClick={onClose}>
          &times;
        </span>
        <div className="pdf-container">
          <iframe src={pdfUrl} width="100%" height="100%" title="PDF Viewer" />
        </div>
      </div>
      
    </Modal>
  );
};

export default ModalPDF;
