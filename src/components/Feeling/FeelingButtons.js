import React, { Component } from 'react';
import {withStyles} from '@material-ui/core/styles'
import Radio from '@material-ui/core/Radio'
import FormControlLabel from '@material-ui/core/FormControlLabel'

const styles = ({
    root: {
      color: '#4BA79E',
      '&$checked': {
        color: '#4BA79E',
      },
    },
    checked: {},
    size: {
      width: 40,
      height: 40,
    },
    sizeIcon: {
      fontSize: 20,
    },
  });

class FeelingButtons extends Component {
    state = {
        selectedValue: '3',
      };
      handleChange = event => {
        this.setState({ selectedValue: event.target.value });
      };
    
      render() {
    
        return (
          <div>
            <FormControlLabel
                control = {
                    <Radio
                        checked={this.state.selectedValue === '1'}
                        onChange={this.handleChange}
                        value="1"
                        color='primary'
                        name="feedback-button"
                        aria-label="1"
                    />
                }
                label = "1"
            />
            <FormControlLabel
                control = {
                <Radio
                    checked={this.state.selectedValue === '2'}
                    onChange={this.handleChange}
                    value="2"
                    color='primary'
                    name="feedback-button"
                    aria-label="2"
                />
            }
            label = "2"
            />
            <FormControlLabel
                control = {
                <Radio
                checked={this.state.selectedValue === '3'}
                onChange={this.handleChange}
                value="3"
                color='primary'
                name="feedback-button"
                aria-label="3"
            />
        }
        label = "3"
        />
            <FormControlLabel
            control = {
            <Radio
              checked={this.state.selectedValue === '4'}
              onChange={this.handleChange}
              value="4"
              color='primary'
              name="feedback-button"
              aria-label="4"
            />
        }
        label = "4"
        />
            <FormControlLabel
            control = {
            <Radio
              checked={this.state.selectedValue === '5'}
              onChange={this.handleChange}
              value="5"
              color='primary'
              name="feedback-button"
              aria-label="5"
            />
        }
        label = "5"
        />
          </div>
        );
      }
    }
 
export default withStyles(styles)(FeelingButtons);