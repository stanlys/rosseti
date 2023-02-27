import { Box, Divider, List, Typography } from "@mui/material";
import React, { useEffect, useState, useRef } from "react";
import DocViewer, { DocViewerRenderers } from "@cyntler/react-doc-viewer";
import { IDocument } from "../../interfaces/letter";
import { useAppDispatch } from "../../store/hooks";
import { API_ENDPOINTS } from "../../api/URL";
import { useLocation } from "react-router";
import WebViewer from "@pdftron/webviewer";
import pdf1 from "./../../assets/1.pdf";
import pdf2 from "./../../assets/2.pdf";
import pdf3 from "./../../assets/3.pdf";

const INITIAL_STATE: IDocument = {
  _id: "",
  dateTime: new Date(),
  fileName: "",
  path: "",
  size: 0,
};

const FileList = () => {
  const [docs, setDocs] = useState<IDocument>(INITIAL_STATE);
  const viewer = useRef<HTMLDivElement>(null);

  const { state } = useLocation();
  console.log(state.objectId);

  const dispatch = useAppDispatch();

  useEffect(() => {
    //dispatch(getLetter)
  }, []);
  const MOCK_DOCS = [
    { uri: pdf1 },
    { uri: `${API_ENDPOINTS.BASE}/2023/2023-02-13-164547.pdf` },
    { uri: `${API_ENDPOINTS.BASE}/2023/2023-02-13-164222.doc` },
    { uri: `${API_ENDPOINTS.BASE}/2023/2023-02-13-164554.xlsx` },
  ];

  const DOCS = [pdf1, pdf2, pdf3];

  useEffect(() => {
    WebViewer(
      {
        path: "/lib",
        initialDoc: DOCS,
      },
      viewer.current as HTMLDivElement
    ).then((instance) => {
      const { documentViewer } = instance.Core;
      // you can now call WebViewer APIs here...
    });
  }, []);

  return (
    <Box>
      <List></List>
      <div className="MyComponent">
        <div className="header">Просмотр документов</div>
        <div
          className="webviewer"
          ref={viewer}
          style={{ height: "80vh" }}
        ></div>
      </div>
      <Divider />

    </Box>
  );
};

export default FileList;
