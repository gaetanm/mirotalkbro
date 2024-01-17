'use strict';

const broadcastSettings = {
    buttons: {
        copyRoom: false,
        shareRoom: false,
        screenShareStart: false,
        video: true,
        recordingStart: false,
        messagesOpenForm: false,
        viewersOpenForm: false,
        fullScreenOn: true,
        pictureInPicture: true,
        close: false,
    },
    options: {
        settings: true,
        start_full_screen: false,
        zoom_video: true,
        show_chat_on_msg: false,
        speech_msg: false,
    },
};

const viewerSettings = {
    buttons: {
        audio: true,
        snapshot: false,
        recordingStart: false,
        fullScreenOn: true,
        message: false,
        pictureInPicture: true,
        close: false,
    },
    options: {
        start_full_screen: false,
        zoom_video: true,
        redirect_url: '/',
    },
};
