import Image from './Image';
import catStaring from './catStaring.jpg';

function App() {
  return (
    <div>
      <Image source={ catStaring } alternativeText="Cute cat staring" />
    </div>
  );
}

export default App;
