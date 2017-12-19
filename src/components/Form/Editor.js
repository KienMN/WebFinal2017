import React, {Component, PropTypes} from 'react';
import RichTextEditor from 'react-rte';
import './Editor.css'

/**
 * Wrapper Class to use RTE
 * See how to reset input field after submit: ContentBoard.js + Editor.js 
 */
export class Editor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: RichTextEditor.createEmptyValue()
    }
  }
  
  onChange = (value) => {
    this.setState({value});
    if (this.props.onChange) {
      // Send the changes up to the parent component as an HTML string.
      // This is here to demonstrate using `.toString()` but in a real app it
      // would be better to avoid generating a string on each change.
      this.props.onChange(
        value.toString('markdown')
      );
    }
  };
 
  render () {
    return (     
    (this.props.change ==='') ? 
    <RichTextEditor
      value={RichTextEditor.createEmptyValue()}
      placeholder={this.props.placeholder}
      onChange={this.onChange}   
    />  : 
    <RichTextEditor
      value={this.state.value}
      placeholder={this.props.placeholder}
      onChange={this.onChange}   
    />  
    );

  }
}