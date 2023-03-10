import { Tab, Tabs, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import FileList from "../../components/FileList/FileList";
import LeafletMap from "../../components/Map/LeafletMap";
import OMap from "../../components/Map/ObjectMap";
import AddOutLetter from "../Outgoing/AddLetter/AddOutLetter";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

const Viewer = () => {
  const [page, setPage] = React.useState(0);

  const changePage = (event: React.SyntheticEvent, newValue: number) => {
    setPage(newValue);
  };

  return (
    <Box sx={{ width: "100%", bgcolor: "background.paper" }}>
      <Tabs value={page} onChange={changePage} centered>
        <Tab label="Характеристики ОЭСХ" />
        <Tab label="Документы" />
        {/* <Tab label="Карта OpenLayers" /> */}
        <Tab label="Карта" />
      </Tabs>
      <TabPanel value={page} index={0}>
        <AddOutLetter />
      </TabPanel>
      <TabPanel value={page} index={1}>
        <FileList />
      </TabPanel>
      {/* <TabPanel value={page} index={2}>
        <OMap />
      </TabPanel> */}
      <TabPanel value={page} index={2}>
        <LeafletMap />
      </TabPanel>
    </Box>
  );
};

export default Viewer;
