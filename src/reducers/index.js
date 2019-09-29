import { combineReducers } from "redux";

const songsReducer = () => {
  return [
    {
      title: "pussyjan",
      duration: "4:05"
    },
    {
      title: "let it be",
      duration: "3:05"
    },
    {
      title: "iii",
      duration: "2:45"
    },
    {
      title: "yohukashi no uta",
      duration: "3:45"
    }
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (songsReducer.type === "SONG_SELECTED") {
    return action.payload;
  }

  return selectedSong;
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer
});
