import React from 'react'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'
import './Loading.scss'
library.add(faSpinner)

const Loading = () => {
  return(
    <FontAwesomeIcon className="fa-spin fa-5x" icon="spinner" />
  );
}

export default Loading;