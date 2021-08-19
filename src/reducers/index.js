import { combineReducers } from "redux";

const songsReducer = () => {
    return [
        { title: 'Macarena', duration: '1:45' },
        { title: 'No Scrubs', duration: '2:17' },
        { title: 'All Star', duration: '3:33' },
        { title: 'I want it That way', duration: '4:47' }
    ];
};

const selectedSongReducer = (selectedSong=null, action) => {
    if (action.type === 'SONG_SELECTED') {
        return action.payload;
    }

    return selectedSong;
}

export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer
});