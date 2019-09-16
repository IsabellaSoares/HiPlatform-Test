import React, { Component, Fragment } from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import RecursiveList from '../recursive_list/recursive.js';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import './item.css';

class Item extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: this.props.data.name,
            id: this.props.data.id,
            children: this.props.data.children,
            countChildren: this.props.data.children.length,
            level: this.props.data.level,            
            countChecked: 0,
            isChecked: false,
            open: false
        };
        
        this.handleClick = this.handleClick.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleClick() {
        this.setState(() => { 
            return {open: !this.state.open};
        });
    }

    handleChange(e) {
        e.stopPropagation();
        this.setState({isChecked: !this.state.isChecked});
    }

    render () {        
        return (
            <List>
                <ListItem button onClick={this.handleClick}
                style={{
                    padding: '0px 10px',
                    paddingLeft: `${this.state.level * 50}px`
                }}>
                    <ListItemIcon>
                        <Checkbox
                            color="secondary"
                            onClick={this.handleChange}
                            checked={this.state.isChecked}
                            />
                    </ListItemIcon>

                    <ListItemText primary={this.state.name} />

                    {this.state.children.length > 0 && (
                        <Fragment>
                            {this.state.open ? <ExpandLess className='expand-less'/> : <ExpandMore className='expand-more'/>}
                        </Fragment>
                    )}                        
                </ListItem>

                {this.state.children.length > 0 && (
                    <Collapse in={this.state.open} timeout="auto" unmountOnExit>
                        <RecursiveList data={this.state.children} />
                    </Collapse>
                )}                
            </List>
        );
    }
}

export default Item;
