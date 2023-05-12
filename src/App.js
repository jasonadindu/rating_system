
import { useState } from 'react';
import Dialog from './components/Dialog';
import StarRating from './components/StarRating';
import './style/base.css';

function App() {

  const [showDialog, setShowDialog] = useState(false);
  return (
    <div className="App">
        <StarRating />
        <Dialog open={showDialog} setShowDialog={setShowDialog}/>
        <button className="open-dialog" onClick={() => {
          console.log("working")
          setShowDialog(true);
        }}>Open dialog box</button>
    </div>
  );
}

export default App;
