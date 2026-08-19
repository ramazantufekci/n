import React, { useEffect, useState } from 'react';
function App(){
  const [polls, setPolls] = useState([]);
  const submit = (e)=>{
    console.log(e);
  }
  return(
    <>
      <from>
        <input name="is" />
        <button onChange={submit}>Gönder</button>button>
      </from>
    </>
  );
}

export default App;
