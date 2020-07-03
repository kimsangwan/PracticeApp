import React, { Component } from "react"
import Editor from "tui-editor"

import "tui-color-picker/dist/tui-color-picker.min"
import "tui-editor/dist/tui-editor-extColorSyntax"
import "codemirror/lib/codemirror.css"
import "tui-editor/dist/tui-editor.css"
import "tui-editor/dist/tui-editor-contents.css"
import "highlight.js/styles/github.css"
import "tui-color-picker/dist/tui-color-picker.min.css"
import "./ToastEditor.css"

let toastEditor
class ToastEditor extends Component {
  constructor() {
    super()
    this.state = {
      content: "",
    }

    this.saveArticle = this.saveArticle.bind(this)
  }

  componentDidMount() {
    toastEditor = new Editor({
      el: document.querySelector("#editSection"),
      initialEditType: "wysiwyg", // 'markdown'
      previewStyle: "vertical",
      height: "300px",
      exts: ["colorSyntax"],
    })
  }

  saveArticle() {
    const content = toastEditor.getHtml()
    console.log(content)

    this.setState({
      content,
    })
  }

  render() {
    return (
      <div id="toastEditor">
        <h1>Toast UI Editor Example</h1>
        <div id="editSection"></div>
        <button onClick={this.saveArticle} className="btn_save">
          Save
        </button>
      </div>
    )
  }
}

export default ToastEditor
