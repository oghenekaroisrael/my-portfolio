import React from 'react'
import folder from '../assets/icons/folder.png'
import link from '../assets/icons/link.png'
import github from '../assets/icons/github.png'
import confidential from '../assets/icons/private.png'
import { Tooltip, Typography } from '@material-ui/core'
import '../styles/Card.css'
const ProjectCard = (props) => {
  return (
    <>
        <div className='card'>
            <div className='card-header'>
                <div className='left'>
                    <img alt='' src={folder} height={'50'} width={'50'}/>
                </div>
                <div className='right'>
                    {props.link !== undefined && <a href={`http://${props.link}`}><img alt='' src={link}  height={'50'} width={'50'}/></a>}
                    {props.github !== undefined && <a href={`http://${props.github}`}><img alt='' src={github}  height={'50'} width={'50'}/></a>}
                    {(props.link === undefined && props.github === undefined) && <Tooltip title="Confidential Project"><img alt='' src={confidential} height={'50'} width={50} /></Tooltip>}
                </div>
            </div>
            <div className='card-body'>
                <h4 className='card-title'>{props.caption}</h4>
                <Typography className='card-description'>{props.description}</Typography>
            </div>
            <div className='card-footer'>
                {props.stack !== undefined && props.stack.map((item) => {
                    return (
                        <span className='stack-item'>{item}</span>
                    );
                })}
            </div>
        </div>
    </>
  )
}

export default ProjectCard;