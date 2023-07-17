import Source from './components/Source';
import Target from './components/Target';

function App() {
    return (
        <div className="flex flex-wrap justify-evenly mx-2">
            <div className="w-full max-w-lg">
                <Source />
            </div>
            <div className="w-full max-w-lg">
                <Target />
            </div>
        </div>
    );
}

export default App;
