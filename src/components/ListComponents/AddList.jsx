import Title from "../Title";
import FormComponent from "./Form/FormCreateList";

function AddList({ listas, setListas}) {
    
    return (
        <div className="containerAddTasks">
            <Title sectionName="Criar uma nova lista" nameClass="subTitles" />
            <FormComponent listas={listas} setListas={setListas} />  
        </div>
    );
}

export default AddList;
