import React from 'react';
import {START_PLAYING, STOP_PLAYING, SET_CURRENT_SONG, SET_LIST} from '../constants';
import axios from 'axios';
import audio from '../audio';

const startPlaying = () =>{
    return {
        type: START_PLAYING,
    }
}

const stopPlaying = () =>{
    return {
        type: STOP_PLAYING
    }
}

const setCurrentSong = (song) =>{
    return {
        type: SET_CURRENT_SONG,
        currentSong: song
    }
}

const setList = (list) =>{
    return {
        type: SET_LIST,
        currentSongList: list
    }
}


// export const setLyrics = (text) =>{
//     return{
//         type: SET_LYRICS,
//         lyric: text
//     }
// }
//
// export const fetchLyrics = function (artist, song) {
//     return function (dispatch, getState) {
//         axios.get(`/api/lyrics/${artist}/${song}`)
//             .then(res => {
//                 dispatch(setLyrics(res.data.lyric));
//             });
//     };
// };




const playSong = (song) => {
    return dispatch => {
        dispatch(setCurrentSong(song));
    }
}

const doSeveralThings = (stuffId, thingsId) => {
    return dispatch => {
        // we can also use async action creators to compose several actions into one!
        dispatch(doStuff(stuffId));
        dispatch(doThing(thingId));
    }
}