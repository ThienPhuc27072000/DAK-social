import React, { Component } from 'react';
import Editor, { createEditorStateWithText } from '@draft-js-plugins/editor';
import createHashtagPlugin from '@draft-js-plugins/hashtag';
import editorStyles from './InputContentPost.module.css';
import hashtagStyles from './hashtagStyles.module.css';

const hashtagPlugin = createHashtagPlugin({ theme: hashtagStyles });
const plugins = [hashtagPlugin];
const text = `#TIL: This editor can have all sorts of #hashtags. Pretty #cool :)
Try it yourself by starting a word with a # (hash character) …
`;

export default class InputContentPost extends Component {
  constructor(props) {
    super(props)
    this.state = {
      editorState: createEditorStateWithText(text),
    };

    this.onChangeEditor = (editorState) => {
      this.setState({
        editorState
      });
      console.log('test editor')
    };

    focus = () => {
      this.editor.focus();
    };
  }

  render() {
    return (
      <div className={editorStyles.editor} onClick={this.focus}>
        <Editor
          editorState={this.state.editorState} // cant read props getCurrentContent
          onChange={this.onChangeEditor}
          plugins={plugins}
          ref={(element) => {
            this.editor = element;
          }}
        />
      </div>
    );
  }
}