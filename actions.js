import uuid from uuid;

export const ADD_COMMENT = 'ADD_COMMENT';
export const REMOVE_COMMENT = 'REMOVE_COMMENT';
export const EDIT_COMMENT = 'EDIT_COMMENT';
export const THUMB_UP_COMMENT = 'THUMB_UP_COMMENT';
export const THUMB_DOWN_COMMENT = 'THUMB_DOWN_COMMENT';

// 1. Add comment

function addComment(text) {
    return {
      type: ADD_COMMENT,
      text,
      id: uuid.v4()
    }
};

const boundAddComment = text => dispatch(addComment(text));


// 2. Remove comment

function removeComment(id) {
    return {
        type: REMOVE_COMMENT,
        id 
    }
};

const boundRemoveComment = id => dispatch(removeComment(id));
  

  // 3. Edit comment

function editComment(id) {
    return {
        type: EDIT_COMMENT,
        id,
        text 
    }
};

const boundEditComment = (id, text) => dispatch(editComment(id, text));


// 4. Thumb up comment
 
function thumbUpComment(value, id) {
    return {
        type: THUMB_UP_COMMENT,
        id,
        value: + 1
    }
};

const boundThumbUpComment = (value, id) => dispatch(thumbUpComment(value, id));


// 5. Thumb down comment

function thumbDownComment(value, id) {
    return {
        type: THUMB_DOWN_COMMENT,
        id,
        value: - 1
    }
};

const boundThumbDownComment = (value, id) => disptach(thumbDownComment(value, id));
