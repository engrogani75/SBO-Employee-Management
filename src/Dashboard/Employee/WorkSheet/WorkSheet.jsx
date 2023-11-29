import { useState } from "react";
import Form from "./Form";
import Table from "./Table";

const WorkSheet = () => {
    const [workList, setWorkList] = useState([]);
    const addWork = (newWork) => {
        // Add the new work entry to the start of the list
        setWorkList([newWork, ...workList]);
      };
    return (
        <div>
            <Form addWork={addWork}></Form>
            <Table workList={workList}></Table>
        </div>
    );
};

export default WorkSheet;