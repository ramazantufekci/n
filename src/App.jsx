import React, { useEffect, useState } from 'react';
function App(){
  const [polls, setPolls] = useState('');
  const submit = (e)=>{
    e.preventDefault();
    console.log(polls);
  }
  return(
    <>
      <form onSubmit={submit}>
        <input name="is" value={polls} onChange={(e)=>setPolls(e.target.value)} />
        <button type="submit">Gönder</button>
      </form>
    </>
  );
}

export default App;
