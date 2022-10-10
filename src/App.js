import './App.css';
import WorksheetOne from './features/worksheets/worksheet1';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
    return (
        <div className="App">
            <Header/>
            <WorksheetOne/>
            <Footer/>
        </div>
    );
}

export default App;
