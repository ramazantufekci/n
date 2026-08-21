import React, { useEffect, useState } from 'react';
function App(){
  const [polls, setPolls] = useState('');
  const submit = (e)=>{
    e.preventDefault();
    console.log(polls);
    setPolls('');
  }

  useEffect(()=>{
    const response = fetch("https://jsonplaceholder.typicode.com/todos");
    if(!response.ok) throw new Error('Veri Alınamadı');
    const data = response.json();
    data.map((mal,index)=>{
      console.log(mal,'-',index);
    });
  });
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
