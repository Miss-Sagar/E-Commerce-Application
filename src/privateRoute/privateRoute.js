// import React from 'react';
// import { Outlet, Navigate } from 'react-router-dom';
// import { connect } from 'react-redux';

// const privateRoute = (props) => {
//   return (
//      <div>hello
//      {/* {
//        props.userAuthentication ? <div>hello</div> : <div>bhumika g</div>
//     //    <Outlet /> :
//     //    Navigate('/login')
//      } */}
//      </div>
//   )
// }

// const mapStateToProps = (state) => ({
//     userAuthentication: state.AuthenticationInfo.userAuthentication
// })

// const mapDispatchToProps = (dispatch) => ({
   
// })

// export default connect(mapStateToProps, mapDispatchToProps)(privateRoute)


import React from 'react';
import { Outlet, Navigate } from 'react-router-dom';
import { connect } from 'react-redux';

const PrivateRoute = (props) => {
  return (
    <div>
      {props.userAuthentication ? (
        <div>hello</div>
      ) : (
        <Navigate to="/login" />
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  userAuthentication: state.AuthenticationInfo.userAuthentication,
});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(PrivateRoute);
