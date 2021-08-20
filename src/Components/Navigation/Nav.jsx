import React from 'react'
import { NavLink } from 'react-router-dom'
import s from './Nav.module.css'
import WorkOutlineOutlinedIcon from '@material-ui/icons/WorkOutlineOutlined'
import BubbleChartOutlinedIcon from '@material-ui/icons/BubbleChartOutlined'
import EmojiPeopleOutlinedIcon from '@material-ui/icons/EmojiPeopleOutlined';

export const Nav = (props) => {
    


    return (
        <div className={s.nav}>
            <div className={s.navLink}><WorkOutlineOutlinedIcon style={{fontSize: 15}} className={s.icon}/><NavLink activeClassName={s.active} to='/work'>Go to work chat</NavLink></div>
            
            <div className={s.navLink}><BubbleChartOutlinedIcon style={{fontSize: 17}} className={s.icon}/><NavLink activeClassName={s.active} to='/flood'>Go to flood chat</NavLink></div>
      
     </div>
    )
   
}
