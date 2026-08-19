import React, { useEffect, useState } from 'react';
function App(){
  const [polls, setPolls] = useState('');
  const submit = (e)=>{
    console.log(e);
  }
  return(
    <>
      <from>
        <input name="is" value={polls} onChange={(e)=>setPolls(e.target.value)} />
        <button onClick={submit}>Gönder</button>
      </from>
    </>
  );
}

export default App;
