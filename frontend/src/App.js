import './App.css';
import Header from "./components/Header";
import ExamListData from "./components/ExamListData";
import ProgressListData from "./components/ProgressListData";
import GrateTable from "./components/GrateTable";

function App() {
    const adminUrl = 'http://localhost:8000/admin/'
    return (
        <>
            <Header adminUrl={adminUrl}/>
            <ExamListData/>
            <div className="container-fluid p-4 ">
                <div className="row g-4">
                    <div className="col block-main me-2">
                        <ProgressListData/>
                    </div>
                    <div className="col block-main">
                        <GrateTable/>
                    </div>
                </div>
            </div>
        </>
    );
}

export default App;
