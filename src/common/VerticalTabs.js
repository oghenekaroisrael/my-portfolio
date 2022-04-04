import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
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

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

export default function VerticalTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{ flexGrow: 1, bgcolor: 'transparent', display: 'flex' }}
    >
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        sx={{ borderRight: 1, borderColor: 'divider' }}
      >
        <Tab label="Greenhouse Multimedia" {...a11yProps(0)} />
        <Tab label="QuCoon Limited" {...a11yProps(1)} />
        <Tab label="Lanepact" {...a11yProps(2)} />
        <Tab label="IntellimedMedia" {...a11yProps(3)} />
      </Tabs>
      <TabPanel value={value} index={0}>
      <Typography variant='h4' className='tab-heading'>Software Developer <span>@Greenhouse Multimedia</span></Typography>
      <Typography variant='h6' className='tab-sub-heading'>April 2018 – August 2020</Typography>
      <ul class="skills-list">
          <li>I developed 2 working softwares for the company while upgrading 2 others.</li>
          <li>I trained 100+ users by clarifying role responsibilities and giving other key information to them.</li>
          <li>I spearheaded the process of information gathering from users.</li>
          <li>I oversaw the management of Softwares and databases.</li>
          <li>I gave advice of network and hardware purchases to aid Software and other facility activities.</li>
      </ul>
      </TabPanel>
      <TabPanel value={value} index={1}>
      <Typography variant='h4' className='tab-heading'>Intern (Frontend And Backend) <span>@QuCoon Limited</span></Typography>
      <Typography variant='h6' className='tab-sub-heading'>January 2021 – June 2021</Typography>
      <ul class="skills-list">
          <li>I Learnt how to use Kotlin to develop RESTful APIs.</li>
          <li>I  Designed and developed multiple dynamic and responsive web pages using HTML, CSS, and JavaScript.</li>
          <li>I consumed APIs using axis and fetch API.</li>
          <li>I was made a sub-team leader Due to my initiative, learning speed and adaptability to the workspace.</li>
          <li>I Worked closely with teammates including a supervisor to determine problems, testing strategies, and best practices.</li>
          <li>I Aided my teammates to complete their projects by determining problems, solving the problem</li>
      </ul>
      </TabPanel>
      <TabPanel value={value} index={2}>
      <Typography variant='h4' className='tab-heading'>Backend Developer Intern <span>@Lanepact</span></Typography>
      <Typography variant='h6' className='tab-sub-heading'>January 2021 – June 2021</Typography>
      <ul class="skills-list">
          <li>I Learnt how to use NodeJs to develop RESTful APIs.</li>
      </ul>
      </TabPanel>
      <TabPanel value={value} index={3}>
      <Typography variant='h4' className='tab-heading'>Intern (FullStack Developer) <span>@IntellimedMedia</span></Typography>
      <Typography variant='h6' className='tab-sub-heading'>July 2021 – Present</Typography>
      <ul class="skills-list">
          <li>I developed one Backend API with NodeJs and one Backend API with Django.</li>
          <li>I developed two frontend panels with React Js and One mobile app with React Native.</li>
      </ul>
      </TabPanel>
    </Box>
  );
}
