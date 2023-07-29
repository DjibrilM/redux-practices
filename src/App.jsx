import logo from './logo.svg';
import './App.css';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { userSelector } from './redux/users/user.slice'
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchUser } from './redux/users/user.slice';
import User from './components/user';

function App() {
  const state = useSelector(userSelector);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUser());
  }, [])



  return (
    <>
      <div className="w-full flex bg-white items-center justify-center sticky top-0 border-b ">
        <button onClick={() => dispatch(fetchUser())} className=' bg-slate-700 text-slate-100 rounded-md py-3 px-10 my-3 '>Reload</button>
      </div >

      <main className=" w-full min-h-screen bg-slate-100">
        {state.loading && <p className=' text-center '>...loading</p>}

        <ul className=' flex flex-col gap-4 pt-4 list-none'>
          {state.users.map((user, index) => {
            return <User
              key={index}
              name={user.name.first + " / " + user.name.last}
              country={user.location.country}
              city={user.location.city}
              email={user.email}
              gender={user.gender}
              cover={user.picture.large}
            />
          })}
        </ul>


      </main>
    </>
  );
}

export default App;
