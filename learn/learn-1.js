
/*
React is a declarative, efficient, and flexible JavaScript library for building 
user interfaces. It lets you compose complex UIs from small and isolated pieces of 
code called “components”.
*/

class ShoppingList extends React.Component {
  render() {
    return (
      <div className="shopping-list">
        <h1>Shopping List for {this.props.name}</h1>
        <ul>
          <li>Instagram</li>
          <li>WhatsApp</li>
          <li>Oculus</li>
        </ul>
      </div>
    );
  }
}


/*
Here, ShoppingList is a React component class, or React component type. 
A component takes in parameters, called props (short for “properties”), and
 returns a hierarchy of views to display via the render method.
*/

/*The <div /> syntax is transformed at build time to*/ React.createElement('div')

//  The example above is equivalent to: //
return React.createElement('div', {className: 'shopping-list'},
  React.createElement('h1', /* ... h1 children ... */),
  React.createElement('ul', /* ... ul children ... */)
);


