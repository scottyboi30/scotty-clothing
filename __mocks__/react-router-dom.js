module.exports = {
    withRouter: component => {
      component.defaultProps = {
        ...component.defaultProps,
        router: { pathname: 'mocked-path' }
      }
      console.log('hhhhiiiitttt');
      return component;
    }
  };
