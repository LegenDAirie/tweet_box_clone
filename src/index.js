import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.scss';

// import {Link, Button, Colors} from 'react-foundation';

// var App = () => (
//   <div className="button-basics-example">
//     <Link>Learn More</Link>
//     <Link>View All Features</Link>
//     <Button color={Colors.SUCCESS}>Save</Button>
//     <Button color={Colors.ALERT}>Delete</Button>
//   </div>
// );

ReactDOM.render(
  <App />,
    document.getElementById('root')
);
