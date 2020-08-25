import React from 'react';
import PropTypes from 'prop-types';
import RepoItem from './RepoItem.js';


const Repos = ({ repos }) => {
    return repos.map(repos => <RepoItem repo={repos} key={repos.id} />)
}

Repos.propTypes = {
    repos: PropTypes.array.isRequired
}

export default Repos