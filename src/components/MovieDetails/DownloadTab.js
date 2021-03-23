import React, { useState, useEffect } from "react";

const DownloadTab = ({ torrents }) => {
  const [selected, setSelected] = useState([]);

  useEffect(() => {
    if (torrents) {
      setSelected(torrents[0]);
    }
  }, [torrents]);

  if (!torrents) {
    return (
      <div className="spinner-border m-5" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    );
  }
  return torrents.map((items) => {
    const active = items === selected ? "btn-success" : "";
    const showActive = items === selected ? "show active" : "";
    return (
      <div className="d-flex align-items-start" key={items.hash}>
        <div className="nav flex-column nav-pills me-3">
          <button
            className={`btn btn-sm nav-link mt-2 ${active}`}
            onClick={() => setSelected(items)}
          >
            {items.quality} {items.type}
          </button>
        </div>
        <div className="tab-content mr-2">
          <div className={`tab-pane fade ${showActive}`}>
            <div
              className="card text-dark bg-light mt-1 flex-column"
              style={{ maxWidth: "10rem" }}
            >
              <div className="card-header">
                {selected.quality} {selected.type}
              </div>
              <div className="card-body">
                <h6 className="card-title">
                  Seeds: {selected.seeds} <span className="ml-auto" /> Peers:{" "}
                  {selected.peers}
                </h6>
                <p className="card-text">{selected.size}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  });
};

export default DownloadTab;
