// base libs
import React from 'react';
import PropTypes from 'prop-types';

export default class ClusterMarker extends React.PureComponent {
  onPress = () => {
    this.props.onPress(this.props);
  };

  render() {
    const pointCount = this.props.properties.point_count; // eslint-disable-line camelcase
    const latitude = this.props.geometry.coordinates[1];
    const longitude = this.props.geometry.coordinates[0];

    if (this.props.renderCluster) {
      const cluster = {
        pointCount,
        coordinate: {latitude, longitude},
        clusterId: this.props.properties.cluster_id,
      };
      return this.props.renderCluster(cluster, this.onPress);
    }

    throw 'Implement renderCluster method prop to render correctly cluster marker!';
  }
}

ClusterMarker.propTypes = {
  renderCluster: PropTypes.func,
  onPress: PropTypes.func.isRequired,
  geometry: PropTypes.object.isRequired,
  properties: PropTypes.object.isRequired,
};
