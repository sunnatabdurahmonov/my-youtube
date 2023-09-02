import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { SidebarLink } from '../SidebarLink';
import {RxStopwatch} from 'react-icons/rx'
import { AiOutlineHeart, AiOutlineStar} from 'react-icons/ai'
import { HeaderContext } from '../../Context/Context';
import { useContext } from 'react';

export default function BasicAccordion() {
  const {state} = useContext(HeaderContext)
  return (
    <div>
      <Accordion className={state === false ? 'none' : 'accordion-menu'}>
        <AccordionSummary className='accordion-list'
          expandIcon={<ExpandMoreIcon/>}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className='title'>Show more</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          <SidebarLink 
        icons={<RxStopwatch id='icons'/>}
        title='Watch later'
        link='/watch'
        />
            <SidebarLink 
        icons={<AiOutlineStar id='icons'/>}
        title='Favourites'
        link='/favourites'
        />
            <SidebarLink 
        icons={<AiOutlineHeart id='icons'/>}
        title='Liked videos'
        link='/liked'
        />
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}