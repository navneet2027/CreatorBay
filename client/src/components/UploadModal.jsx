import React, { useState, useRef } from "react";
import axios from "axios";

export default function UploadModal({ onClose }) {
  const [file, setFile] = useState(null);
  const [progress, setProgress] = useState(0);
  const [uploading, setUploading] = useState(false);

  const cancelTokenSource = useRef(null);

  const handleUpload = async () => {
    if (!file) return alert("Choose a file!");
    setUploading(true);

    const formData = new FormData();
    formData.append("media", file);

    // axios cancel token
    cancelTokenSource.current = axios.CancelToken.source();

// "http://localhost:5000/api/upload"
    try {
      const res = await axios.post(
        "https://creatorbay.onrender.com/api/upload",
        formData,
        {
          cancelToken: cancelTokenSource.current.token,
          onUploadProgress: (p) => {
            setProgress(Math.round((p.loaded * 100) / p.total));
          },
        }
      );

      alert("Upload Completed");
      setProgress(0);
      setUploading(false);
      onClose();

    } catch (err) {
      if (axios.isCancel(err)) {
        alert("Upload Cancelled");
      } else {
        alert("Upload Failed");
      }
      setUploading(false);
      setProgress(0);
    }
  };

  const handleClosePress = () => {
    if (uploading) {
      const confirmClose = window.confirm(
        "Upload is in progress. Cancel upload?"
      );
      if (confirmClose) {
        cancelTokenSource.current?.cancel("User cancelled upload");
        onClose();
      }
    } else {
      onClose();
    }
  };

  return (
    <div style={styles.modal}>
      <div style={styles.box}>
        <button style={styles.close} onClick={handleClosePress}>X</button>

        <h3>Upload Media</h3>

        <input 
          type="file"
          onChange={(e) => setFile(e.target.files[0])}
          disabled={uploading}
        />

        {uploading && (
          <div style={styles.progressContainer}>
            <div style={{ ...styles.progressBar, width: `${progress}%` }} />
          </div>
        )}

        <button 
          onClick={handleUpload}
          disabled={!file || uploading}
        >
          {uploading ? "Uploading..." : "Upload"}
        </button>
      </div>
    </div>
  );
}

const styles = {
  modal: {
    position: "fixed",
    inset: 0,
    background: "rgba(0,0,0,0.5)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  box: {
    width: 300,
    padding: 20,
    background: "#fff",
    borderRadius: 10,
    position: "relative",
  },
  close: {
    position: "absolute",
    right: 10,
    top: 10,
  },
  progressContainer: {
    width: "100%",
    background: "#ddd",
    borderRadius: 5,
    height: 6,
    marginTop: 10,
  },
  progressBar: {
    height: 6,
    background: "green",
    borderRadius: 5,
  },
};
