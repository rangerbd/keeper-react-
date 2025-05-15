import logo from './logo.svg';
import './App.css';
import Header from './components/header';
import Firstbox from './components/firstbox';
import Footer from './components/footer';
import notes from './components/note';


function createNotes(notes){
  return <Firstbox
  key = {notes.key}
  title = {notes.title}
  content = {notes.content}

  />
}

function App() {
  return (
    <div>
    <Header />
  
    {notes.map(createNotes)}
    <Footer />
    </div>
  ) 
}

export default App;
