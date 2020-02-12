/**
 * ************************************
 *
 * @module  Message.jsx
 * @author Timothy Mai
 * @date 2/11/20
 * @description message component
 *
 * ************************************
 */

import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';

function Message({ username, message }) {
  return (
    <div>
      <Typography variant="body1" color="primary" display="inline">
        {username}
        {': '}
      </Typography>
      <Typography variant="body1" display="inline">
        {message}
      </Typography>
    </div>
  );
}

Message.propTypes = {
  username: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
};

export default Message;
