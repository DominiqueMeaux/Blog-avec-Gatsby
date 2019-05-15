import React from 'react'
import { Link } from 'gatsby'

import { List, Avatar, } from 'antd';

const Bio = () => (
    
    <List.Item>
        <List.Item.Meta
            avatar={
                <Avatar
                    size={64}
                    src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
            }
            title={<Link to="/about">Dominique Meaux</Link>}
            
    description="Dév Web Junior | Motivé et déterminé | A la recherche d'un contrat de 
    professionnalisation pour devenir concepteur developpeur d'application
     en alternance avec l'Epsi d'Arras."
        
    />
    </List.Item>
)

export default Bio