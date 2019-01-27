import React from 'react';
import {find, map} from 'lodash';
import uuidv1 from 'uuid/v1';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Comment from '../components/Comment';
import Collapse from '@material-ui/core/Collapse';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import TextField from '@material-ui/core/TextField';
import Fab from '@material-ui/core/Fab';
import Divider from '@material-ui/core/Divider';
import AddIcon from '@material-ui/icons/Add';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import {updateLSData, getLSData} from '../utils';
import './Item.css';

export default class Item extends React.Component {
    state = {
        open: false,
        newComment: ''
    };

    handleClick = () => {
        this.setState(state => ({open: !state.open, newComment: ''}));
    };

    handleChangeNewComment = event => {
        const {
            target: {value}
        } = event;
        this.setState({newComment: value});
    };

    handleAddNewComment = event => {
        const {newComment} = this.state;
        const {refreshState} = this.props;
        const {
            currentTarget: {
                dataset: {itemId}
            }
        } = event;
        if (newComment) {
            const data = [...getLSData()];
            const targetObj = find(data, item => item.id === itemId);
            targetObj.comments.push(newComment);
            updateLSData(data);
            this.setState({newComment: '', commentId: null}, () =>
                refreshState()
            );
        }
    };

    render() {
        const {open, newComment} = this.state;
        const {item, onDeleteItem} = this.props;
        return (
            <Paper className="item-container">
                <Typography
                    className="title-container"
                    align="center"
                    variant="h5"
                    component="h3"
                >
                    {item.title}
                </Typography>
                <IconButton
                    style={{position: 'absolute', top: 0, right: 0}}
                    data-item-id={item.id}
                    onClick={onDeleteItem}
                    aria-label="Delete"
                    color="secondary"
                >
                    <DeleteIcon />
                </IconButton>
                <List>
                    <ListItem button onClick={this.handleClick}>
                        <ListItemText primary="Comments" />
                        {open ? <ExpandLess /> : <ExpandMore />}
                    </ListItem>
                    <Collapse in={open} timeout="auto" unmountOnExit>
                        <List>
                            {map(item.comments, comment => (
                                <div
                                    key={uuidv1()}
                                    className="comments-container"
                                >
                                    <Comment comment={comment} />
                                    <Divider />
                                </div>
                            ))}
                            <ListItem>
                                <TextField
                                    autoFocus
                                    value={newComment}
                                    onChange={this.handleChangeNewComment}
                                    label="New comment title..."
                                />
                                <Fab
                                    color="primary"
                                    title="Add new comment"
                                    size="small"
                                    aria-label="Add"
                                >
                                    <AddIcon
                                        data-item-id={item.id}
                                        onClick={this.handleAddNewComment}
                                    />
                                </Fab>
                            </ListItem>
                        </List>
                    </Collapse>
                </List>
            </Paper>
        );
    }
}
