import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchAllPresidents } from "../../utils/allPresidentsCall";
import { grabAllPresidents, loading, errored } from "../../actions/index";
import PresCard from "../../Components/PresCard/PresCard";

class PresContainer extends Component {
  componentDidMount = async () => {
    let allPresidents = null;
    try {
      allPresidents = await fetchAllPresidents();
    } catch {
      this.props.errored(true);
    }
    if (allPresidents && allPresidents.length > 0) {
      this.props.loading(false);
    }
    this.props.grabAllPresidents(allPresidents);
  };

  presidentsToRender = () => {
    let render;
    if (!this.props.isLoading) {
      render = this.props.allPresidents.map(president => {
        return <PresCard presidentInfo={president} key={president.number} />;
      });
    } else if (this.props.hasErrored) {
      render = <h1>sorry error fetching data christie did it</h1>;
    } else {
      render = <h1>...loading please wait</h1>;
    }
    return render;
  };

  render() {
    return <div>{this.presidentsToRender()}</div>;
  }
}

export const mapStateToProps = state => ({
  allPresidents: state.allPresidents,
  isLoading: state.isLoading,
  hasErrored: state.hasErrored
});

export const mapDispatchToProps = dispatch => ({
  grabAllPresidents: presidents => dispatch(grabAllPresidents(presidents)),
  loading: bool => dispatch(loading(bool)),
  errored: bool => dispatch(errored(bool))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PresContainer);
