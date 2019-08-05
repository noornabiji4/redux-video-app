import React from 'react';
import {connect} from 'react-redux'
import { bindActionCreators } from 'redux';
import {toggleMessage} from './action'
//functional component
const Toggle =({toggleMessageShow,toggleMessage})=>(
  <div>
      {toggleMessageShow &&   <p>Video Library  </p> }
  
    <button onClick={toggleMessage}>Toggle </button>
    </div>
)

const mapStateToProps = state =>({
    toggleMessageShow : state.toggle.toggleMessageShow
})

const mapDispatchToProps = dispatch=> bindActionCreators({
    toggleMessage
},dispatch)

export default connect(mapStateToProps,mapDispatchToProps)(Toggle)