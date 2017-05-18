import React from 'react';
import store from './store';

export default class LyricsContainer extends React.Component{
    constructor(){
        super();
        this.state = store.getState();
        this.unsubscribe;
    }

    componentDidMount(){
        this.unsubscribe= store.subscribe(function(){
            store.getState();
        })
    }

}