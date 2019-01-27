import React, {Component} from 'react';
import {filter, map} from 'lodash';
import uuidv1 from 'uuid/v1';
import Item from './Item';
import {updateLSData, getLSData} from '../utils';
import TextField from '@material-ui/core/TextField';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import './App.css';

class App extends Component {
    state = {
        data: [],
        itemTitle: ''
    };

    componentDidMount() {
        this.refreshState();
    }

    handleChangeItemTitle = event => {
        const {
            target: {value}
        } = event;
        this.setState({itemTitle: value});
    };

    handleAddItem = () => {
        const {data, itemTitle} = this.state;
        if (itemTitle) {
            const updatedData = [
                ...data,
                {id: uuidv1(), title: itemTitle, comments: []}
            ];
            this.setState({data: updatedData, itemTitle: ''}, () =>
                updateLSData(updatedData)
            );
        }
    };

    handleDeleteItem = event => {
        const {data} = this.state;
        const {
            currentTarget: {
                dataset: {itemId}
            }
        } = event;
        const updatedData = filter(data, item => item.id !== itemId);
        this.setState({data: updatedData}, () => updateLSData(updatedData));
    };

    refreshState = () => this.setState({data: getLSData() ? getLSData() : []});

    render() {
        const {data, itemTitle} = this.state;
        return (
            <div>
                <div className="new-item-container">
                    <TextField
                        autoFocus
                        value={itemTitle}
                        onChange={this.handleChangeItemTitle}
                        label="New item title..."
                    />
                    <Fab
                        color="primary"
                        title="Add new item"
                        size="small"
                        aria-label="Add"
                    >
                        <AddIcon onClick={this.handleAddItem} />
                    </Fab>
                </div>
                <section className="container-items">
                    {map(data, item => (
                        <Item
                            refreshState={this.refreshState}
                            key={item.id}
                            item={item}
                            onDeleteItem={this.handleDeleteItem}
                        />
                    ))}
                </section>
            </div>
        );
    }
}

export default App;
