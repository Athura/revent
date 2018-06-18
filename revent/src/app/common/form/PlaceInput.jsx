import React, { Component } from 'react'
import { Form, Label } from 'semantic-ui-react';
import Script from 'react-load-script';
import PlacesAutocomplete from 'react-places-autocomplete';

const styles = {
    autocompleteContainer: {
        zIndex: 1000
    }
}

class PlaceInput extends Component {
    state = {
        scriptLoaded: false
    }

    _handleScriptLoaded = () => {
        this.setState({
            scriptLoaded: true
        })
    }

  render() {
      const { input, width, onSelect, placeholder, options, meta: {touched, error}} = this.props;
    return (
      <Form.Field error={touched && !!error} width={width}>
        <Script
          url="https://maps.googleapis.com/maps/api/js?key=AIzaSyCf_nT7V0IL3GS4pQ_71RkFQ9tgLwsZetQ&libraries=places"
          onLoad={this._handleScriptLoaded}
        />
        {this.state.scriptLoaded && <PlacesAutocomplete
            inputProps = {{...input, placeholder}}
            options = {options}
            onSelect = {onSelect}
            styles={styles}
        />}
        {touched && error && <Label basic color="red">{error}</Label>}
      </Form.Field>
    )
  }
}

export default PlaceInput;
